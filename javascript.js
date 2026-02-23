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
