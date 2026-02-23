// ---------- Data ----------
const jobs = [
  {
    id: 1,
    company: 'Mobile First Corp',
    role: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description: 'Build cross-platform mobile applications using React Native.',
    status: 'not_applied',
  },
  {
    id: 2,
    company: 'WebFlow Agency',
    role: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80,000 - $120,000',
    description:
      'Create stunning modern web experiences with React and Tailwind.',
    status: 'not_applied',
  },
  {
    id: 3,
    company: 'DataViz Solutions',
    role: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description:
      'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
    status: 'not_applied',
  },
  {
    id: 4,
    company: 'CloudScale Inc',
    role: 'Senior Frontend Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$140,000 - $190,000',
    description:
      'Lead frontend architecture for a fast-growing SaaS platform. Proficiency in TypeScript and React required.',
    status: 'not_applied',
  },
  {
    id: 5,
    company: 'Fintech Nexus',
    role: 'UI/UX Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description:
      'Shape the future of financial interfaces. Experience with design systems and accessibility is a must.',
    status: 'not_applied',
  },
  {
    id: 6,
    company: 'DevOps Studio',
    role: 'DevOps Engineer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$135,000 - $180,000',
    description:
      'Manage CI/CD pipelines, cloud infrastructure, and deployment automation using AWS and Docker.',
    status: 'not_applied',
  },
  {
    id: 7,
    company: 'AI Research Lab',
    role: 'Machine Learning Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$160,000 - $210,000',
    description:
      'Develop and train ML models for real-world applications using Python, PyTorch, and TensorFlow.',
    status: 'not_applied',
  },
  {
    id: 8,
    company: 'GreenTech Solutions',
    role: 'Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110,000 - $155,000',
    description:
      'Build scalable web applications for sustainable energy management using Node.js and React.',
    status: 'not_applied',
  },
];

// ---------- State ----------
let currentTab = 'all';

// ---------- Helpers ----------

function getStatusBadgeClass(status) {
  if (status === 'interview') return 'badge-interview';
  if (status === 'rejected') return 'badge-rejected';
  return 'badge-not-applied';
}

function getStatusLabel(status) {
  if (status === 'interview') return 'INTERVIEW';
  if (status === 'rejected') return 'REJECTED';
  return 'NOT APPLIED';
}

// ---------- Render ----------

function renderCards() {
  const container = document.getElementById('cards-container');
  const emptyState = document.getElementById('empty-state');

  // Filter jobs based on current tab

  const filtered = jobs.filter(job => {
    if (currentTab === 'all') return true;
    return job.status === currentTab;
  });

  // Update "X jobs" label

  const total = jobs.length;
  const count = jobs.filter(j => j.status !== 'not_applied').length;

  const displayCount = currentTab === 'all' ? count : filtered.length;

  document.getElementById('jobs-count-label').textContent =
    `${displayCount} of ${total} jobs`;

  // Show empty state if no cards
  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  container.innerHTML = filtered
    .map(job => {
      const interviewSelected = job.status === 'interview' ? 'selected' : '';
      const rejectedSelected = job.status === 'rejected' ? 'selected' : '';

      return `
      <div class="job-card bg-white p-5 rounded shadow border border-gray-200" id="card-${job.id}">
        <div class="flex justify-between">
          <div>
            <h3 class="font-semibold text-gray-800">${job.company}</h3>
            <p class="text-sm text-gray-600">${job.role}</p>
            <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
          </div>
          <button
            class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
            title="Delete"
            onclick="deleteJob(${job.id})">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <div class="mt-3">
          <span class="status-badge ${getStatusBadgeClass(job.status)}">${getStatusLabel(job.status)}</span>
          <p class="text-sm text-gray-600 mt-2">${job.description}</p>
        </div>
        <div class="mt-4 flex gap-3">
          <button
            class="btn-interview ${interviewSelected} border border-green-500 text-green-600 px-3 py-1 rounded hover:bg-green-50"
            onclick="setStatus(${job.id}, 'interview')">
            INTERVIEW
          </button>
          <button
            class="btn-rejected ${rejectedSelected} border border-red-500 text-red-600 px-3 py-1 rounded hover:bg-red-50"
            onclick="setStatus(${job.id}, 'rejected')">
            REJECTED
          </button>
        </div>
      </div>`;
    })
    .join('');
}

function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter(j => j.status === 'interview').length;
  const rejected = jobs.filter(j => j.status === 'rejected').length;

  document.getElementById('count-total').textContent = total;
  document.getElementById('count-interview').textContent = interview;
  document.getElementById('count-rejected').textContent = rejected;
}

function updateTabStyles() {
  ['all', 'interview', 'rejected'].forEach(tab => {
    const btn = document.getElementById(`tab-${tab}`);
    if (tab === currentTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
