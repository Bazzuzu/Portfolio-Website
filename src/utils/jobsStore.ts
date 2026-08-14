export type JobStatus = 'new' | 'viewed' | 'applied' | 'interview' | 'rejected';

export interface Job {
  id: string; // URL of the job post acts as ID
  title: string;
  company: string;
  location: string;
  ats: string;
  date: string;
  url: string;
  status: JobStatus;
  addedAt: number; // timestamp
}

export interface JobsSettings {
  apiKey: string;
  searchEngineId: string;
  blacklistedCompanies: string[];
}

const SETTINGS_KEY = 'jobs_settings';
const JOBS_KEY = 'jobs_saved';

export const getJobsSettings = (): JobsSettings => {
  const data = localStorage.getItem(SETTINGS_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse jobs settings', e);
    }
  }
  return { apiKey: '', searchEngineId: '', blacklistedCompanies: [] };
};

export const saveJobsSettings = (settings: JobsSettings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export const getSavedJobs = (): Record<string, Job> => {
  const data = localStorage.getItem(JOBS_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse saved jobs', e);
    }
  }
  return {};
};

export const saveJob = (job: Job) => {
  const jobs = getSavedJobs();
  jobs[job.id] = job;
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

export const updateJobStatus = (id: string, status: JobStatus) => {
  const jobs = getSavedJobs();
  if (jobs[id]) {
    jobs[id].status = status;
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  }
};

export const clearJob = (id: string) => {
  const jobs = getSavedJobs();
  if (jobs[id]) {
    delete jobs[id];
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  }
};

export const clearAllJobs = () => {
  localStorage.removeItem(JOBS_KEY);
};

// CSV & JSON Export/Import
export const exportJobsCSV = () => {
  const jobs = Object.values(getSavedJobs());
  if (jobs.length === 0) return;

  const headers = ['ID/URL', 'Title', 'Company', 'ATS', 'Location', 'Status', 'Date Added'];
  const rows = jobs.map((j) => [
    `"${j.url.replace(/"/g, '""')}"`,
    `"${j.title.replace(/"/g, '""')}"`,
    `"${j.company.replace(/"/g, '""')}"`,
    `"${j.ats}"`,
    `"${j.location.replace(/"/g, '""')}"`,
    `"${j.status}"`,
    `"${new Date(j.addedAt).toISOString()}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `ats_jobs_tracker_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportJobsJSON = () => {
  const jobs = Object.values(getSavedJobs());
  const blob = new Blob([JSON.stringify(jobs, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `ats_jobs_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const importJobsJSON = (jsonText: string): number => {
  try {
    const imported: Job[] = JSON.parse(jsonText);
    if (!Array.isArray(imported)) return 0;
    const existing = getSavedJobs();
    let addedCount = 0;
    imported.forEach((job) => {
      if (job.url && job.title) {
        existing[job.url] = {
          id: job.url,
          title: job.title,
          company: job.company || 'Unknown',
          location: job.location || 'Remote',
          ats: job.ats || 'Custom',
          date: job.date || 'Recent',
          url: job.url,
          status: job.status || 'new',
          addedAt: job.addedAt || Date.now(),
        };
        addedCount++;
      }
    });
    localStorage.setItem(JOBS_KEY, JSON.stringify(existing));
    return addedCount;
  } catch (e) {
    console.error('Failed to import JSON', e);
    return 0;
  }
};

// Cache management
const CACHE_KEY = 'jobs_cache';
const CACHE_EXPIRY = 12 * 60 * 60 * 1000;

interface CacheEntry {
  timestamp: number;
  data: any[];
}

export const getCache = (queryKey: string): any[] | null => {
  const data = localStorage.getItem(CACHE_KEY);
  if (data) {
    try {
      const cache: Record<string, CacheEntry> = JSON.parse(data);
      const entry = cache[queryKey];
      if (entry && Date.now() - entry.timestamp < CACHE_EXPIRY) {
        return entry.data;
      }
    } catch (e) {}
  }
  return null;
};

export const setCache = (queryKey: string, results: any[]) => {
  const data = localStorage.getItem(CACHE_KEY);
  let cache: Record<string, CacheEntry> = {};
  if (data) {
    try {
      cache = JSON.parse(data);
    } catch (e) {}
  }
  cache[queryKey] = {
    timestamp: Date.now(),
    data: results,
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
};
