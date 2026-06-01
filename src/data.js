/* ------------------------------------------------------------------
   Central content for the Harkan Robotics landing page.
   Edit copy, specs, products and contact details here in one place.
------------------------------------------------------------------ */

export const COMPANY = {
  name: 'Harkan Robotics',
  tagline: 'A Studio for Thinking Machines',
  phone: '+91 90376 47872',
  phoneHref: 'tel:+919037647872',
  email: 'Official@harkanrobotics.com',
  emailHref: 'mailto:Official@harkanrobotics.com',
  location: 'Kochi, Kerala, India',
  founders: ['Rinshad', 'Nahid', 'Hilal'],
}

// '/#section' links navigate home and scroll to that section (handled by
// ScrollManager); plain '/path' links go to a dedicated page.
export const NAV_LINKS = [
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// --- Contact form delivery -------------------------------------------------
// The form posts to Web3Forms (free, no backend — works on static hosting).
// 1. Go to https://web3forms.com, enter your email, copy the access key.
// 2. Paste it below. Until then the form runs in demo mode (no email sent).
export const CONTACT_CONFIG = {
  web3formsKey: 'YOUR_ACCESS_KEY_HERE',
}

export const STATS = [
  { value: '2,500', unit: 'm²/hr', label: 'Peak cleaning coverage' },
  { value: '4–6', unit: 'hrs', label: 'Autonomous runtime' },
  { value: '100', unit: '%', label: 'Self-navigating' },
  { value: 'Kochi', unit: '', label: 'Designed & built in India' },
]

export const SECTORS = [
  'Airports',
  'Shopping Malls',
  'Hospitals',
  'Warehouses',
  'Factories',
  'Offices',
  'Transit Hubs',
  'Retail',
]

export const PRODUCTS = [
  {
    id: 'icer-alpha',
    name: 'ICER Alpha',
    category: 'Industrial Autonomous Scrubber',
    status: 'available',
    image: '/img/products/icer-alpha.webp',
    blurb:
      'High-capacity autonomous scrubber engineered for large, high-traffic facilities and continuous, around-the-clock operation.',
    highlights: [
      { icon: 'route', label: 'Coverage', value: '1,800–2,500 m²/hr' },
      { icon: 'water', label: 'Tanks', value: '60–70 L each' },
      { icon: 'clock', label: 'Runtime', value: '4–6 hours' },
      { icon: 'weight', label: 'Cleaning width', value: '500–550 mm' },
    ],
    for: 'Malls · Airports · Warehouses · Industrial',
    overview:
      'ICER Alpha is our flagship industrial scrubber, built for the largest and busiest floors. It maps its environment, navigates autonomously around people and obstacles, and delivers a consistently spotless finish shift after shift — with high-capacity tanks and long runtime that keep it working while your team does everything else.',
    features: [
      'Autonomous LiDAR-based mapping and route planning',
      'Real-time obstacle detection and safe avoidance',
      'High-capacity 60–70 L solution and recovery tanks',
      'Long-life LiFePO4 battery with multi-hour runtime',
      'Built for continuous, around-the-clock operation',
      'Remote monitoring and cleaning reports',
    ],
    applications: ['Airports', 'Shopping Malls', 'Warehouses', 'Industrial Facilities'],
    specGroups: [
      {
        group: 'Dimensions',
        rows: [
          ['Length', '≈ 1150 mm'],
          ['Width', '≈ 850 mm'],
          ['Height', '≈ 1050 mm'],
          ['Turning radius', '700–800 mm'],
          ['Loaded weight', '230–260 kg'],
        ],
      },
      {
        group: 'Cleaning',
        rows: [
          ['Cleaning width', '500–550 mm'],
          ['Solution tank', '60–70 L'],
          ['Recovery tank', '60–70 L'],
          ['Vacuum power', '600–800 W'],
          ['Suction force', '10,000–13,000 Pa'],
          ['Coverage', '1,800–2,500 m²/hr'],
        ],
      },
      {
        group: 'Power',
        rows: [
          ['System voltage', '36–48 V'],
          ['Battery', 'Li-ion (LiFePO4 preferred)'],
          ['Usable energy', '3.0–4.0 kWh'],
          ['Runtime', '4–6 hours per charge'],
        ],
      },
    ],
  },
  {
    id: 'icer-beta',
    name: 'ICER Beta',
    category: 'Compact Autonomous Scrubber',
    status: 'available',
    image: '/img/products/icer-beta.webp',
    blurb:
      'Agile, compact scrubber built for tight corridors and smaller public spaces — nimble navigation with efficient cleaning.',
    highlights: [
      { icon: 'route', label: 'Coverage', value: '900–1,800 m²/hr' },
      { icon: 'water', label: 'Tanks', value: '20–25 L' },
      { icon: 'clock', label: 'Runtime', value: '3–5 hours' },
      { icon: 'weight', label: 'Cleaning width', value: '520–550 mm' },
    ],
    for: 'Offices · Clinics · Retail · Schools',
    overview:
      'ICER Beta brings autonomous cleaning to spaces where size and agility matter. With a tight turning radius and compact footprint, it slips through corridors, around furniture and into smaller public areas — cleaning intelligently and quietly alongside the people who use them.',
    features: [
      'Compact footprint with a tight ~550 mm turning radius',
      'Autonomous navigation with obstacle avoidance',
      'Quiet operation suited to occupied spaces',
      'Efficient LiFePO4 power for multi-hour shifts',
      'Simple, friendly controls for any team',
      'Remote monitoring and cleaning reports',
    ],
    applications: ['Offices', 'Clinics', 'Retail', 'Schools', 'Small Malls'],
    specGroups: [
      {
        group: 'Dimensions',
        rows: [
          ['Length', '1050 mm'],
          ['Width', '650 mm'],
          ['Height', '1050 mm'],
          ['Turning radius', '≈ 550 mm'],
          ['Loaded weight', '140–190 kg'],
        ],
      },
      {
        group: 'Cleaning',
        rows: [
          ['Cleaning width', '520–550 mm'],
          ['Solution tank', '20–25 L'],
          ['Recovery tank', '20–23 L'],
          ['Vacuum power', '500–700 W'],
          ['Suction force', '9,000–12,000 Pa'],
          ['Coverage', '900–1,800 m²/hr'],
        ],
      },
      {
        group: 'Power',
        rows: [
          ['System voltage', '24 V'],
          ['Battery', 'Li-ion (LiFePO4 preferred)'],
          ['Usable energy', '1.8–2.5 kWh'],
          ['Runtime', '3–5 hours per charge'],
        ],
      },
    ],
  },
  {
    id: 'zwooper',
    name: 'ZWOOPER',
    category: 'Next-generation autonomous platform',
    status: 'coming',
    image: '/img/products/zwooper.webp',
    blurb: 'A new class of thinking machine. Currently in development at our Kochi studio.',
    highlights: [],
    for: '',
  },
  {
    id: 'warehouse-robot',
    name: 'Warehouse Robot',
    category: 'Autonomous material handling',
    status: 'coming',
    image: '/img/products/warehouse-robot.webp',
    blurb: 'Intelligent logistics for modern warehouses. Coming soon.',
    highlights: [],
    for: '',
  },
]

export const WHY = [
  {
    icon: 'cpu',
    title: 'Adaptive Autonomy',
    body: 'Robots that sense, learn and adjust to real environments — not scripted demos. They map their space and clean it intelligently.',
  },
  {
    icon: 'scan',
    title: 'Smart Navigation',
    body: 'Sensor-driven mapping and obstacle avoidance let our machines work safely alongside people in busy, unpredictable spaces.',
  },
  {
    icon: 'hand',
    title: 'Human-First Design',
    body: 'Every machine is built to assist without friction — quiet, approachable, and effortless for your team to operate.',
  },
  {
    icon: 'battery',
    title: 'Built for Continuous Duty',
    body: 'Long-life LiFePO4 power and multi-hour runtimes keep facilities spotless across full shifts with minimal supervision.',
  },
  {
    icon: 'factory',
    title: 'Engineered & Made in Kochi',
    body: 'Designed, manufactured and assembled in-house with modular, scalable hardware — proudly built in Kerala, India.',
  },
  {
    icon: 'shield',
    title: 'Industrial-Grade Reliability',
    body: 'Rugged builds tested for malls, hospitals, airports and factories — dependable performance where hygiene cannot slip.',
  },
]

export const INDUSTRIES = [
  { name: 'Airports & Transit', desc: 'Spotless concourses and platforms, even at peak passenger flow.' },
  { name: 'Shopping Malls', desc: 'Continuous floor care across vast retail floors without disruption.' },
  { name: 'Hospitals & Clinics', desc: 'Consistent hygiene where cleanliness is mission-critical.' },
  { name: 'Warehouses & Factories', desc: 'Durable automation for demanding industrial environments.' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Ideation',
    body: 'We turn real civic and operational problems into clear machine concepts worth building.',
  },
  {
    step: '02',
    title: 'Research & Development',
    body: 'Modern tools, rapid prototyping and rigorous testing shape each system from idea to working robot.',
  },
  {
    step: '03',
    title: 'Manufacturing',
    body: 'Modular, scalable designs produced locally in Kochi for quality control and fast iteration.',
  },
  {
    step: '04',
    title: 'Assembly & Testing',
    body: 'Careful integration and real-world validation before any machine reaches your facility.',
  },
]

// --- Services --------------------------------------------------------------
export const SERVICES = [
  {
    icon: 'water',
    title: 'Autonomous Floor Cleaning',
    body: 'Deploy our ICER scrubbers for continuous, hands-free floor care across large and small facilities alike.',
  },
  {
    icon: 'cpu',
    title: 'Custom Robotics Solutions',
    body: 'Bespoke robotic systems designed around your specific operational needs, space and workflow.',
  },
  {
    icon: 'shield',
    title: 'Deployment & Support',
    body: 'On-site onboarding, remote monitoring, maintenance and dedicated local support from our Kochi team.',
  },
  {
    icon: 'scan',
    title: 'Smart Stock & Warehouse Management',
    body: 'Real-time inventory tracking and customizable, ERP-style systems that adapt to your business workflow.',
  },
  {
    icon: 'hand',
    title: 'Robotic Stock Handling',
    body: 'Autonomous handling robots that place and retrieve items from storage with minimal manual effort.',
  },
  {
    icon: 'factory',
    title: 'Industrial Automation',
    body: 'Software systems and robotic hardware that automate repetitive and complex operational tasks.',
  },
]

// --- About -----------------------------------------------------------------
export const STORY = {
  intro:
    'Harkan Robotics began with three engineers in Kochi — Rinshad, Nahid and Hilal — united by one question: if thinking machines are the future, why do they still feel like theory?',
  body:
    'That question became our mission. We design and manufacture autonomous cleaning systems for real-world facilities, working at the intersection of robotics, human interaction and everyday environments. Our machines are built to operate seamlessly alongside people — sensing, learning and assisting without friction.',
}

export const VALUES = [
  {
    icon: 'scan',
    title: 'Adaptive by design',
    body: 'Robotics engineered to adapt in actual environments — not just controlled demos.',
  },
  {
    icon: 'hand',
    title: 'Built to assist',
    body: 'Machines that learn, sense and help without friction, alongside the people who use them.',
  },
  {
    icon: 'cpu',
    title: 'Robotics meets the everyday',
    body: 'Development rooted firmly at the intersection of robotics and real human contexts.',
  },
  {
    icon: 'factory',
    title: 'Proudly made in Kochi',
    body: 'Designed, manufactured and assembled in-house in Kerala, India.',
  },
]
