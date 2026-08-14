import React, { useState, useEffect } from 'react';
import '../../styles/components/jobs.css';
import { 
  Job, 
  JobStatus, 
  JobsSettings, 
  getJobsSettings, 
  saveJobsSettings, 
  getSavedJobs, 
  saveJob, 
  updateJobStatus,
  clearAllJobs,
  exportJobsCSV,
  exportJobsJSON,
  importJobsJSON
} from '../../utils/jobsStore';
import { fetchJobs, SearchParams, buildGoogleSearchUrl, buildQuery, ATS_DOMAINS, AtsType } from '../../utils/jobsSearch';
import CustomIcon from '../CustomIcon';
import arrowLeftSvg from '../../assets/icons/arrow-left.svg?raw';

const ALL_ATS_LIST: AtsType[] = [
  'Greenhouse', 'Lever', 'Ashby', 'PeopleForce', 'Workable', 'SmartRecruiters', 'Recruitee', 'Personio', 'BambooHR'
];

const GOOGLE_EXTRACT_SNIPPET = `const res=[];document.querySelectorAll('a').forEach(a=>{let u=a.href;if(u.includes('/url?q=')){u=decodeURIComponent(u.split('/url?q=')[1].split('&')[0]);}if(!u.includes('google.com')&&/greenhouse\\.io|lever\\.co|ashbyhq\\.com|peopleforce\\.io|workable\\.com|smartrecruiters\\.com|recruitee\\.com|personio|bamboohr\\.com/.test(u)){const t=a.querySelector('h3')?.innerText||a.innerText.trim();if(t&&!res.some(i=>i.url===u)){res.push({url:u,title:t});}}});copy(JSON.stringify(res));alert(\`Copied \${res.length} clean jobs with titles!\`);`;

export default function JobsApp({ onBack }: { onBack: () => void }) {
  const [settings, setSettings] = useState<JobsSettings>(getJobsSettings());
  const [showSettings, setShowSettings] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [savedJobsMap, setSavedJobsMap] = useState<Record<string, Job>>(getSavedJobs());
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Manual & Bulk Job Addition
  const [showAddJob, setShowAddJob] = useState(false);
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const [bulkText, setBulkText] = useState('');
  
  const [newJobUrl, setNewJobUrl] = useState('');
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobCompany, setNewJobCompany] = useState('');

  const [rolesInput, setRolesInput] = useState('Product Designer, Lead UX');
  const [locationsInput, setLocationsInput] = useState('Spain, Remote');

  const [params, setParams] = useState<SearchParams>({
    roles: ['Product Designer', 'Lead UX'],
    locations: ['Spain', 'Remote'],
    ats: [...ALL_ATS_LIST],
    period: 'd1',
  });

  useEffect(() => {
    const saved = Object.values(savedJobsMap);
    setJobs(saved);
  }, []);

  const toggleAts = (atsName: AtsType) => {
    if (params.ats.includes(atsName)) {
      setParams({ ...params, ats: params.ats.filter(a => a !== atsName) });
    } else {
      setParams({ ...params, ats: [...params.ats, atsName] });
    }
  };

  const handleSelectAllAts = () => {
    if (params.ats.length === ALL_ATS_LIST.length) {
      setParams({ ...params, ats: [] });
    } else {
      setParams({ ...params, ats: [...ALL_ATS_LIST] });
    }
  };

  const getCurrentParams = (): SearchParams => {
    const parsedRoles = rolesInput.split(',').map(r => r.trim()).filter(r => r.length > 0);
    const parsedLocs = locationsInput.split(',').map(l => l.trim()).filter(l => l.length > 0);
    return { ...params, roles: parsedRoles, locations: parsedLocs };
  };

  const handleSearch = async () => {
    const searchParams = getCurrentParams();
    setParams(searchParams);

    if (!settings.apiKey || !settings.searchEngineId) {
      setErrorMessage('Google API key not configured. Use 1-click Direct Dork launches below.');
      return;
    }
    
    setLoading(true);
    setErrorMessage(null);

    try {
      const results = await fetchJobs(searchParams);
      setJobs(results);
      setSavedJobsMap(getSavedJobs());
    } catch (err: any) {
      if (err.message === 'PERMISSION_DENIED') {
        setErrorMessage('Google Cloud restricted API access for new projects. Use the 1-click Direct Dork Launchers below!');
      } else {
        setErrorMessage(err.message || 'Failed to search');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (job: Job, status: JobStatus) => {
    updateJobStatus(job.id, status);
    const updatedJob = { ...job, status };
    saveJob(updatedJob);
    const updatedMap = getSavedJobs();
    setSavedJobsMap(updatedMap);
    setJobs(Object.values(updatedMap));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all tracked job listings? This action cannot be undone.')) {
      clearAllJobs();
      setSavedJobsMap({});
      setJobs([]);
    }
  };

  const parseAtsAndCompanyFromUrl = (url: string): { ats: string; company: string } => {
    let ats = 'Custom';
    let company = 'Company';

    if (url.includes('greenhouse.io')) ats = 'Greenhouse';
    else if (url.includes('lever.co')) ats = 'Lever';
    else if (url.includes('ashbyhq.com')) ats = 'Ashby';
    else if (url.includes('peopleforce.io')) ats = 'PeopleForce';
    else if (url.includes('workable.com')) ats = 'Workable';
    else if (url.includes('smartrecruiters.com')) ats = 'SmartRecruiters';
    else if (url.includes('recruitee.com')) ats = 'Recruitee';
    else if (url.includes('personio.')) ats = 'Personio';
    else if (url.includes('bamboohr.com')) ats = 'BambooHR';

    try {
      const parsedUrl = new URL(url);
      const parts = parsedUrl.pathname.split('/').filter(Boolean);
      if (ats === 'Greenhouse' || ats === 'Lever' || ats === 'Ashby') {
        company = parts[0] || 'Company';
      } else {
        const hostParts = parsedUrl.hostname.split('.');
        if (hostParts.length > 2) {
          company = hostParts[0];
        } else {
          company = parts[0] || 'Company';
        }
      }
      company = company.charAt(0).toUpperCase() + company.slice(1);
    } catch (e) {}

    return { ats, company };
  };

  const handleAddManualJob = () => {
    if (!newJobUrl || !newJobTitle) return;
    const { ats, company } = parseAtsAndCompanyFromUrl(newJobUrl);

    const job: Job = {
      id: newJobUrl,
      title: newJobTitle,
      company: newJobCompany || company,
      location: params.locations.join(', '),
      ats,
      date: 'Today',
      url: newJobUrl,
      status: 'new',
      addedAt: Date.now(),
    };

    saveJob(job);
    const updated = getSavedJobs();
    setSavedJobsMap(updated);
    setJobs(Object.values(updated));
    
    setNewJobUrl('');
    setNewJobTitle('');
    setNewJobCompany('');
    setShowAddJob(false);
  };

  const handleBulkAdd = () => {
    if (!bulkText) return;

    try {
      const parsedJson = JSON.parse(bulkText);
      if (Array.isArray(parsedJson)) {
        parsedJson.forEach((item: any) => {
          if (item.url) {
            let cleanUrl = item.url;
            if (cleanUrl.includes('/url?q=')) {
              cleanUrl = decodeURIComponent(cleanUrl.split('/url?q=')[1].split('&')[0]);
            }
            if (!cleanUrl.includes('google.com')) {
              const { ats, company } = parseAtsAndCompanyFromUrl(cleanUrl);
              const job: Job = {
                id: cleanUrl,
                title: item.title || `${company} ${ats} Position`,
                company,
                location: params.locations.join(', '),
                ats,
                date: 'Today',
                url: cleanUrl,
                status: 'new',
                addedAt: Date.now(),
              };
              saveJob(job);
            }
          }
        });
        const updated = getSavedJobs();
        setSavedJobsMap(updated);
        setJobs(Object.values(updated));
        setBulkText('');
        setShowBulkAdd(false);
        return;
      }
    } catch (e) {}

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const rawMatches = bulkText.match(urlRegex) || [];
    
    rawMatches.forEach(rawUrl => {
      let cleanUrl = rawUrl.replace(/[;,\)\.]*$/, '');
      if (cleanUrl.includes('/url?q=')) {
        cleanUrl = decodeURIComponent(cleanUrl.split('/url?q=')[1].split('&')[0]);
      }

      if (cleanUrl.includes('google.com') || cleanUrl.includes('search?') || cleanUrl.includes('tbs=')) {
        return;
      }

      const { ats, company } = parseAtsAndCompanyFromUrl(cleanUrl);

      const pathParts = cleanUrl.split('/').filter(Boolean);
      const lastPart = pathParts[pathParts.length - 1] || 'Position';
      const cleanTitle = lastPart.replace(/[-_]/g, ' ').replace(/\d+/g, '').trim();

      const job: Job = {
        id: cleanUrl,
        title: cleanTitle.length > 3 ? cleanTitle : `${company} ${ats} Position`,
        company,
        location: params.locations.join(', '),
        ats,
        date: 'Today',
        url: cleanUrl,
        status: 'new',
        addedAt: Date.now(),
      };
      saveJob(job);
    });

    const updated = getSavedJobs();
    setSavedJobsMap(updated);
    setJobs(Object.values(updated));
    setBulkText('');
    setShowBulkAdd(false);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const count = importJobsJSON(content);
        const updated = getSavedJobs();
        setSavedJobsMap(updated);
        setJobs(Object.values(updated));
        alert(`Successfully imported ${count} jobs!`);
      }
    };
    reader.readAsText(file);
  };

  const currentParams = getCurrentParams();
  const dorkQueryString = buildQuery(currentParams);
  const directSearchUrl = buildGoogleSearchUrl(currentParams);

  // Analytics & Stats Calculation
  const savedList = Object.values(savedJobsMap);
  const totalTracked = savedList.length;
  const newCount = savedList.filter(j => j.status === 'new').length;
  const viewedCount = savedList.filter(j => j.status === 'viewed').length;
  const appliedTotal = savedList.filter(j => j.status === 'applied').length;
  const interviewCount = savedList.filter(j => j.status === 'interview').length;
  const rejectedCount = savedList.filter(j => j.status === 'rejected').length;

  // ATS breakdown counts
  const atsCounts: Record<string, number> = {};
  savedList.forEach(j => {
    atsCounts[j.ats] = (atsCounts[j.ats] || 0) + 1;
  });

  // Conversion rates
  const applicationRate = totalTracked > 0 ? Math.round((appliedTotal / totalTracked) * 100) : 0;
  const interviewRate = appliedTotal > 0 ? Math.round((interviewCount / appliedTotal) * 100) : 0;

  return (
    <div className="jobs-page">
      <header className="jobs-header">
        <div>
          <button className="floating-nav floating-nav--left jobs-back-btn" onClick={onBack}>
            <CustomIcon src={arrowLeftSvg} size={16} />
            <span className="floating-nav__link">Back to Portfolio</span>
          </button>
          <h1 className="jobs-header__title">ATS Google Dorking Engine</h1>
        </div>
        <div className="jobs-header__actions">
          <button className="jobs-btn" onClick={() => setShowAddJob(true)}>
            + Log Job
          </button>
          <button className="jobs-btn" onClick={() => setShowBulkAdd(true)}>
            📋 Bulk Paste
          </button>
          <button className="jobs-btn" onClick={exportJobsCSV}>
            📥 Export CSV
          </button>
          <button className="jobs-btn" onClick={() => setShowSettings(true)}>
            ⚙️ Settings
          </button>
        </div>
      </header>

      {/* Manual Add Job Modal */}
      {showAddJob && (
        <div className="jobs-modal-overlay">
          <div className="jobs-modal">
            <div className="jobs-modal__header">
              <h2 className="jobs-modal__title">Track New Job Post</h2>
              <button className="jobs-modal__close" onClick={() => setShowAddJob(false)}>✕</button>
            </div>
            
            <div className="jobs-input-group">
              <label className="jobs-label">Job Title *</label>
              <input 
                className="jobs-input" 
                value={newJobTitle} 
                onChange={(e) => setNewJobTitle(e.target.value)}
                placeholder="Senior Product Designer" 
              />
            </div>

            <div className="jobs-input-group">
              <label className="jobs-label">Company Name</label>
              <input 
                className="jobs-input" 
                value={newJobCompany} 
                onChange={(e) => setNewJobCompany(e.target.value)}
                placeholder="Stripe" 
              />
            </div>

            <div className="jobs-input-group">
              <label className="jobs-label">Job URL *</label>
              <input 
                className="jobs-input" 
                value={newJobUrl} 
                onChange={(e) => setNewJobUrl(e.target.value)}
                placeholder="https://jobs.peopleforce.io/careers/123" 
              />
            </div>

            <button className="jobs-btn jobs-btn--primary" onClick={handleAddManualJob}>
              Save Job to Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Bulk Add Links Modal with Smart Google Extractor */}
      {showBulkAdd && (
        <div className="jobs-modal-overlay">
          <div className="jobs-modal">
            <div className="jobs-modal__header">
              <h2 className="jobs-modal__title">Bulk Import Job Links</h2>
              <button className="jobs-modal__close" onClick={() => setShowBulkAdd(false)}>✕</button>
            </div>

            <div className="jobs-tip-box">
              💡 <strong>Smart Google Extractor (Extracts Titles + Clean ATS URLs):</strong>
              <br /> On Google Search, open F12 ➔ Console, and paste this script:
              <div className="jobs-tip-row">
                <code className="jobs-tip-code">{GOOGLE_EXTRACT_SNIPPET}</code>
                <button 
                  type="button" 
                  className="jobs-btn jobs-tip-btn"
                  onClick={() => navigator.clipboard.writeText(GOOGLE_EXTRACT_SNIPPET)}
                >
                  Copy Script
                </button>
              </div>
            </div>
            
            <div className="jobs-input-group">
              <label className="jobs-label">Paste text, URLs, or Extractor JSON</label>
              <textarea 
                className="jobs-textarea"
                value={bulkText} 
                onChange={(e) => setBulkText(e.target.value)}
                placeholder="Paste extracted JSON or raw ATS URLs..." 
              />
            </div>

            <button className="jobs-btn jobs-btn--primary" onClick={handleBulkAdd}>
              Import Clean Job Postings
            </button>
          </div>
        </div>
      )}

      {/* Settings & Import/Export Modal */}
      {showSettings && (
        <div className="jobs-modal-overlay">
          <div className="jobs-modal">
            <div className="jobs-modal__header">
              <h2 className="jobs-modal__title">Settings & Backup</h2>
              <button className="jobs-modal__close" onClick={() => setShowSettings(false)}>✕</button>
            </div>

            <div className="jobs-input-group">
              <label className="jobs-label">Blacklisted Companies (comma separated)</label>
              <input 
                className="jobs-input" 
                type="text" 
                value={settings.blacklistedCompanies.join(', ')} 
                onChange={(e) => setSettings({...settings, blacklistedCompanies: e.target.value.split(',').map(s=>s.trim())})}
                placeholder="Turing, Canonical" 
              />
            </div>

            <div className="jobs-modal-actions">
              <button className="jobs-btn" onClick={exportJobsJSON}>
                Export Backup (JSON)
              </button>
              <label className="jobs-btn jobs-file-btn">
                Import Backup (JSON)
                <input type="file" accept=".json" onChange={handleFileImport} className="jobs-file-input" />
              </label>
            </div>

            <button className="jobs-btn jobs-btn--primary" onClick={() => {
              saveJobsSettings(settings);
              setShowSettings(false);
              setErrorMessage(null);
            }}>
              Save Settings
            </button>
          </div>
        </div>
      )}

      {/* Primary KPI Stats */}
      <section className="jobs-dashboard">
        <div className="jobs-stat-card">
          <span className="jobs-stat-card__label">Total Logged</span>
          <span className="jobs-stat-card__value">{totalTracked}</span>
        </div>
        <div className="jobs-stat-card">
          <span className="jobs-stat-card__label">Unviewed / New</span>
          <span className="jobs-stat-card__value">{newCount}</span>
        </div>
        <div className="jobs-stat-card">
          <span className="jobs-stat-card__label">Applied</span>
          <span className="jobs-stat-card__value">{appliedTotal}</span>
        </div>
        <div className="jobs-stat-card">
          <span className="jobs-stat-card__label">Interviewing</span>
          <span className="jobs-stat-card__value">{interviewCount}</span>
        </div>
      </section>

      {/* Analytics & Market Trends Breakdown */}
      {totalTracked > 0 && (
        <section className="jobs-analytics">
          <h2 className="jobs-analytics__title">📊 Market & Pipeline Trends</h2>
          <div className="jobs-analytics__grid">
            
            {/* Conversion Funnel */}
            <div className="jobs-analytics__card">
              <span className="jobs-analytics__subtitle">Application Funnel</span>
              <div className="jobs-bar-group">
                <div className="jobs-bar-item">
                  <div className="jobs-bar-item__header">
                    <span>Applied / Total Logged</span>
                    <span>{applicationRate}%</span>
                  </div>
                  <div className="jobs-bar-track">
                    <div className="jobs-bar-fill" style={{ width: `${applicationRate}%` }} />
                  </div>
                </div>

                <div className="jobs-bar-item">
                  <div className="jobs-bar-item__header">
                    <span>Interview / Applied</span>
                    <span>{interviewRate}%</span>
                  </div>
                  <div className="jobs-bar-track">
                    <div className="jobs-bar-fill jobs-bar-fill--brand" style={{ width: `${interviewRate}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* ATS Share Breakdown */}
            <div className="jobs-analytics__card">
              <span className="jobs-analytics__subtitle">ATS System Share</span>
              <div className="jobs-bar-group">
                {ALL_ATS_LIST.map(atsName => {
                  const count = atsCounts[atsName] || 0;
                  const pct = totalTracked > 0 ? Math.round((count / totalTracked) * 100) : 0;
                  if (count === 0) return null;
                  return (
                    <div key={atsName} className="jobs-bar-item">
                      <div className="jobs-bar-item__header">
                        <span>{atsName}</span>
                        <span>{count} ({pct}%)</span>
                      </div>
                      <div className="jobs-bar-track">
                        <div className="jobs-bar-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pipeline Status Overview */}
            <div className="jobs-analytics__card">
              <span className="jobs-analytics__subtitle">Status Distribution</span>
              <div className="jobs-bar-group">
                <div className="jobs-bar-item">
                  <div className="jobs-bar-item__header">
                    <span>Pending / Viewed</span>
                    <span>{viewedCount}</span>
                  </div>
                </div>
                <div className="jobs-bar-item">
                  <div className="jobs-bar-item__header">
                    <span>Rejected</span>
                    <span>{rejectedCount}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Search Form */}
      <section className="jobs-search-form">
        <div className="jobs-search-form__row">
          <div className="jobs-input-group">
            <label className="jobs-label">Roles (comma separated)</label>
            <input 
              className="jobs-input"
              value={rolesInput}
              onChange={(e) => setRolesInput(e.target.value)}
              placeholder="Product Designer, Lead UX, UX Researcher"
            />
          </div>
          <div className="jobs-input-group">
            <label className="jobs-label">Locations (comma separated)</label>
            <input 
              className="jobs-input"
              value={locationsInput}
              onChange={(e) => setLocationsInput(e.target.value)}
              placeholder="Spain, Remote, Madrid"
            />
          </div>
        </div>

        {/* ATS Multi-select Pills */}
        <div className="jobs-input-group">
          <div className="jobs-ats-header">
            <label className="jobs-label">ATS Platforms (Multi-select)</label>
            <button 
              type="button" 
              className="jobs-select-all-btn"
              onClick={handleSelectAllAts}
            >
              {params.ats.length === ALL_ATS_LIST.length ? 'Clear All' : 'Select All'}
            </button>
          </div>
          <div className="jobs-pill-group">
            {ALL_ATS_LIST.map(atsName => {
              const isActive = params.ats.includes(atsName);
              return (
                <button
                  key={atsName}
                  type="button"
                  className={`jobs-pill-option ${isActive ? 'jobs-pill-option--active' : ''}`}
                  onClick={() => toggleAts(atsName)}
                >
                  {isActive && '✓ '}
                  {atsName}
                </button>
              );
            })}
          </div>
        </div>

        <div className="jobs-search-form__row">
          <div className="jobs-input-group">
            <label className="jobs-label">Date Posted</label>
            <select 
              className="jobs-select"
              value={params.period}
              onChange={(e) => setParams({...params, period: e.target.value as any})}
            >
              <option value="all">Any time</option>
              <option value="d1">Past 24 hours</option>
              <option value="w1">Past week</option>
              <option value="m1">Past month</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="jobs-form-actions">
          <a 
            href={directSearchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="jobs-btn jobs-btn--primary"
          >
            🚀 Launch Google Dork in New Tab
          </a>

          <button 
            className="jobs-btn" 
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Fetching API...' : 'Fetch via API'}
          </button>
        </div>

        {/* Formatted Dork String Display */}
        <div className="jobs-dork-box">
          <code>{dorkQueryString}</code>
          <button 
            className="jobs-btn jobs-dork-copy-btn"
            onClick={() => navigator.clipboard.writeText(dorkQueryString)}
          >
            Copy Dork
          </button>
        </div>

        {/* Per-ATS Quick Launchers */}
        <div className="jobs-quick-launch">
          <span className="jobs-quick-launch__label">Quick Launch by ATS:</span>
          {ALL_ATS_LIST.map(atsName => (
            <a 
              key={atsName}
              href={buildGoogleSearchUrl(currentParams, atsName)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="jobs-btn jobs-quick-launch__btn"
            >
              Search {atsName}
            </a>
          ))}
        </div>

        {errorMessage && (
          <div className="jobs-error-banner">
            {errorMessage}
          </div>
        )}
      </section>

      {/* Results & Tracker List */}
      <section className="jobs-list">
        <div className="jobs-list-header">
          <h2 className="jobs-list-title">
            {jobs.length > 0 ? `Tracked & Found Job Listings (${jobs.length})` : 'No jobs logged yet'}
          </h2>
          {jobs.length > 0 && (
            <button 
              className="jobs-btn jobs-clear-btn"
              onClick={handleClearAll}
            >
              🗑️ Clear All Listings
            </button>
          )}
        </div>

        {jobs.map((job) => {
          const status = savedJobsMap[job.id]?.status || job.status;
          return (
            <article key={job.id} className="job-card">
              <div className="job-card__content">
                <h3 className="job-card__title">
                  <a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
                </h3>
                <div className="job-card__url-row">
                  <a 
                    href={job.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="job-card__url"
                  >
                    🔗 {job.url}
                  </a>
                </div>
                <div className="job-card__meta">
                  <span className="job-card__tag">{job.company}</span>
                  <span className="job-card__tag">{job.ats}</span>
                  <span className="job-card__tag">{job.location}</span>
                  <span className="job-card__tag">{new Date(job.addedAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="job-card__actions">
                <select 
                  className={`jobs-select job-status-badge job-status-badge--${status}`}
                  value={status}
                  onChange={(e) => handleStatusChange(job, e.target.value as JobStatus)}
                >
                  <option value="new">New</option>
                  <option value="viewed">Viewed</option>
                  <option value="applied">Applied</option>
                  <option value="interview">Interviewing</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
