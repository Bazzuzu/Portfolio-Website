import { Job, getJobsSettings, getCache, setCache, getSavedJobs } from './jobsStore';

export type AtsType = 
  | 'Ashby' 
  | 'Greenhouse' 
  | 'Lever' 
  | 'PeopleForce' 
  | 'Workable' 
  | 'SmartRecruiters' 
  | 'Recruitee' 
  | 'Personio' 
  | 'BambooHR';

export interface SearchParams {
  roles: string[]; // Multi-role array (e.g. ["Product Designer", "Lead UX"])
  locations: string[]; // Multi-location array (e.g. ["Spain", "Remote"])
  ats: AtsType[]; // Multi-select array of selected ATS platforms
  period: 'd1' | 'w1' | 'm1' | 'all';
}

export const ATS_DOMAINS: Record<AtsType, string> = {
  Ashby: 'jobs.ashbyhq.com',
  Greenhouse: 'boards.greenhouse.io',
  Lever: 'jobs.lever.co',
  PeopleForce: 'jobs.peopleforce.io',
  Workable: 'jobs.workable.com',
  SmartRecruiters: 'jobs.smartrecruiters.com',
  Recruitee: 'recruitee.com',
  Personio: 'personio.jobs',
  BambooHR: 'bamboohr.com/careers',
};

export const buildQuery = (params: SearchParams, specificAts?: AtsType): string => {
  const { roles, locations, ats } = params;

  // 1. Sites
  let siteQuery = '';
  if (specificAts) {
    siteQuery = `site:${ATS_DOMAINS[specificAts]}`;
  } else if (ats.length > 0) {
    const selectedDomains = ats.map(a => `site:${ATS_DOMAINS[a]}`).join(' OR ');
    siteQuery = ats.length > 1 ? `(${selectedDomains})` : selectedDomains;
  } else {
    const allDomains = Object.values(ATS_DOMAINS).map(d => `site:${d}`).join(' OR ');
    siteQuery = `(${allDomains})`;
  }

  // 2. Roles (Multi-role support via OR)
  let roleQuery = '';
  const cleanRoles = roles.map(r => r.trim()).filter(r => r.length > 0);
  if (cleanRoles.length > 1) {
    roleQuery = `(${cleanRoles.map(r => `"${r}"`).join(' OR ')})`;
  } else if (cleanRoles.length === 1) {
    roleQuery = `"${cleanRoles[0]}"`;
  }

  // 3. Locations (Multi-location support via OR)
  let locQuery = '';
  const cleanLocs = locations.map(l => l.trim()).filter(l => l.length > 0);
  if (cleanLocs.length > 1) {
    locQuery = `(${cleanLocs.map(l => `"${l}"`).join(' OR ')})`;
  } else if (cleanLocs.length === 1) {
    locQuery = `"${cleanLocs[0]}"`;
  }

  return `${siteQuery} ${roleQuery} ${locQuery}`.trim();
};

export const buildGoogleSearchUrl = (params: SearchParams, specificAts?: AtsType): string => {
  const q = buildQuery(params, specificAts);
  const url = new URL('https://www.google.com/search');
  url.searchParams.append('q', q);

  if (params.period === 'd1') url.searchParams.append('tbs', 'qdr:d');
  else if (params.period === 'w1') url.searchParams.append('tbs', 'qdr:w');
  else if (params.period === 'm1') url.searchParams.append('tbs', 'qdr:m');

  return url.toString();
};

const parseTitle = (rawTitle: string, url: string): { title: string; company: string; ats: string } => {
  let title = rawTitle;
  let company = 'Unknown Company';
  let ats = 'Custom';

  if (url.includes('ashbyhq.com')) ats = 'Ashby';
  else if (url.includes('greenhouse.io')) ats = 'Greenhouse';
  else if (url.includes('lever.co')) ats = 'Lever';
  else if (url.includes('peopleforce.io')) ats = 'PeopleForce';
  else if (url.includes('workable.com')) ats = 'Workable';
  else if (url.includes('smartrecruiters.com')) ats = 'SmartRecruiters';
  else if (url.includes('recruitee.com')) ats = 'Recruitee';
  else if (url.includes('personio.')) ats = 'Personio';
  else if (url.includes('bamboohr.com')) ats = 'BambooHR';

  if (ats === 'Greenhouse' && rawTitle.includes(' at ')) {
    const parts = rawTitle.split(' at ');
    title = parts[0].trim();
    company = parts[1].trim();
  } else if (rawTitle.includes(' - ')) {
    const parts = rawTitle.split(' - ');
    if (parts.length >= 2) {
      if (ats === 'Lever' || ats === 'PeopleForce') {
        company = parts[0].trim();
        title = parts.slice(1).join(' - ').trim();
      } else {
        title = parts[0].trim();
        company = parts.slice(1).join(' - ').trim();
      }
    }
  }

  title = title.replace(/ \| .*$/, '');
  company = company.replace(/ \| .*$/, '');

  return { title, company, ats };
};

export const fetchJobs = async (params: SearchParams): Promise<Job[]> => {
  const settings = getJobsSettings();
  if (!settings.apiKey || !settings.searchEngineId) {
    throw new Error('API_MISSING');
  }

  const query = buildQuery(params);
  const queryKey = JSON.stringify(params);
  const cached = getCache(queryKey);
  if (cached) {
    return cached;
  }

  const url = new URL('https://www.googleapis.com/customsearch/v1');
  url.searchParams.append('key', settings.apiKey);
  url.searchParams.append('cx', settings.searchEngineId);
  url.searchParams.append('q', query);
  
  if (params.period !== 'all') {
    url.searchParams.append('dateRestrict', params.period);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Google API Error:', errorData);
    const msg = errorData.error?.message || '';
    if (msg.includes('does not have the access') || response.status === 403) {
      throw new Error('PERMISSION_DENIED');
    }
    throw new Error(msg || 'Failed to fetch jobs from Google API');
  }

  const data = await response.json();
  const items = data.items || [];
  const savedJobs = getSavedJobs();

  const results: Job[] = items.map((item: any) => {
    const parsed = parseTitle(item.title, item.link);
    const existing = savedJobs[item.link];

    let dateStr = 'Recent';
    const snippetMatch = item.snippet?.match(/^(\d+ \w+ ago) \.\.\./);
    if (snippetMatch) {
      dateStr = snippetMatch[1];
    }

    return {
      id: item.link,
      title: parsed.title,
      company: parsed.company,
      location: params.locations.join(', '),
      ats: parsed.ats,
      date: dateStr,
      url: item.link,
      status: existing ? existing.status : 'new',
      addedAt: existing ? existing.addedAt : Date.now(),
    };
  });

  const filteredResults = results.filter(
    (job) => !settings.blacklistedCompanies.some((bc) => job.company.toLowerCase().includes(bc.toLowerCase()))
  );

  setCache(queryKey, filteredResults);
  return filteredResults;
};
