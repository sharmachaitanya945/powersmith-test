// ---------------------------------------------------------------------------
// ALL site copy lives here — sourced from the live powersmithsolar.com pages
// (home, about, residential, commercial, plans-and-services, ITC benefits,
// the-powerwall, enphase, NEM 3.0, FAQ). Items marked TODO still need client
// confirmation. Edit text here — no component changes needed.
// ---------------------------------------------------------------------------

// --- Real images downloaded from powersmithsolar.com (src/assets) ---
import logo from '../assets/logo.png'
import usaMap from '../assets/usa-map.png'
import imgSolarHome from '../assets/solar-home.jpg'
import imgSolarField from '../assets/solar-field.jpg'
import imgSolarCity from '../assets/solar-city.jpg'
import imgSolarInstall from '../assets/solar-install.webp'
import imgSolarUpgrades from '../assets/solar-upgrades.webp'
import imgFlatRoof from '../assets/flat-roof-system.webp'
import imgEvCharging from '../assets/ev-charging.jpg'
import imgBattery from '../assets/battery-storage.webp'
import imgHomeEnergy from '../assets/home-energy-system.png'
import imgMegapack from '../assets/tesla-megapack.webp'
import imgBmwCarport from '../assets/project-bmw-carport.webp'
import imgRockChurch from '../assets/project-rock-church.jpg'
import imgPortfolio8 from '../assets/portfolio-8.jpg'
import imgPortfolio9 from '../assets/portfolio-9.webp'
import imgSolarCell from '../assets/solar-cell-basics.jpg'
import photoAnthony from '../assets/testimonial-anthony.jpg'
import photoMike from '../assets/testimonial-mike.jpg'
import photoSteve from '../assets/testimonial-steve.jpg'
import photoRay from '../assets/testimonial-raijy.jpg'

export { logo, usaMap, imgHomeEnergy, imgMegapack, imgSolarCell }

// Images served from /public.
// The `dji-*` files are PowerSmith's OWN drone photos of real California
// installs (compressed from the DJI originals) — always prefer these over stock.
export const pub = {
  heroHome: '/dji/dji-hero.webp', // black panels, CA home, sunny aerial
  blackPanelHome: '/dji/dji-residential.webp', // tile roof + black panels
  golfCourse: '/dji/dji-golf-course.webp', // hillside home by the golf course
  neighborhood: '/dji/dji-neighborhood.webp', // CA neighbourhood aerial
  poolHome: '/dji/dji-pool-home.webp', // top-down, panels + pool
  estate: '/dji/dji-estate.webp', // large tile-roof home, palms
  aerial1: '/dji/dji-aerial-1.webp', // top-down aerial
  aerial2: '/dji/dji-aerial-2.webp', // top-down aerial, pools
  // Equipment / product shots
  teslaBattery: '/Tesla-Solar-Battery-1024x1024-1.webp', // real Tesla Powerwalls
  teslaCharging: '/tesla_100622512_h-1024x587.webp', // Tesla EV charging
  // Royalty-free stock (Pexels, free for commercial use) for the non-solar
  // service cards where drone shots don't fit the subject.
  backupGenerator: '/stock/backup-generator.jpg', // standby generator + inverters
  electricPanel: '/stock/electric-panel.jpg', // tech working a modern breaker panel
  systemUpgrade: '/stock/system-upgrade.jpg', // installer fitting a roof panel
}
export const solarInsureBadge = '/2023-Solar-Insure-Certified-Installer-Badge-1-1-1024x1024.png'
export const authorizedDealerBadge = '/Banner-Posts-1024x371-1.webp' // white "Authorized Dealer" graphic

export const company = {
  name: 'PowerSmith Energy',
  legalName: 'PowerSmith Solar',
  tagline: 'Power Your Home. Own Your Energy.',
  subline:
    'Premier solutions in solar electricity, batteries, EV chargers and electric panel upgrades — through top manufacturers, financiers and installers. Veteran-owned and operated.',
  vision:
    'To lead nationally in delivering clean, affordable, state-of-the-art renewable energy solutions to numerous homeowners and businesses.',
  mission:
    'Teach homeowners and businesses about renewable energy benefits, lowering costs, and achieving energy independence.',
  veteranOwned: true,
  address: '1111 6th Avenue Suite 300, San Diego, CA 92101',
  phone: '619-581-1121',
  phoneHref: 'tel:+16195811121',
  email: 'servicedesk@powersmithsolar.com',
}

export const hero = {
  image: pub.heroHome, // black panels on a California home (also the video poster)
  // Muted, looping background clip (1080p, web-optimized). Falls back to the
  // image above as the poster while it loads.
  video: '/hero-video.mp4',
}

// Tesla-style 3-icon benefit row ("Save on Electricity Bills")
export const highlights = {
  heading: 'Save on your electricity bills',
  intro:
    'Generate your own clean energy from the California sun and add battery storage to use it anytime. Flexible financing, $0-down options and tax incentives help you get the best price on your system — and cut your reliance on the utility.',
  items: [
    {
      title: 'Monthly Bill Savings',
      text: 'Lower or eliminate your electric bill and protect yourself from rising utility rates. Explore $0-down leasing for the most affordable way to go solar.',
    },
    {
      title: 'Tax Incentives',
      text: 'Qualify for the 30% federal ITC plus stacking state and local bonuses. We guide you through claiming every credit you are owed.',
    },
    {
      title: 'Sustainable Energy',
      text: 'Power your home with clean, emissions-free renewable energy directly from the sun — backed by a 30-year warranty.',
    },
  ],
}

// Real stats from the live powersmithsolar.com homepage
export const stats = [
  { value: 1000, suffix: '+', label: 'Satisfied Homeowners & Commercial Clients' },
  { value: 50, suffix: '+', label: 'Years In Combined Experience' },
  { value: 16, suffix: '', label: 'States All Over The US' },
  { value: 8, suffix: '', label: 'Partners & Associates' },
]

export const services = [
  {
    title: 'Residential Solar',
    blurb:
      'High-performance panels custom-designed for your roof — among the fastest installs in the industry at under 30 days on average.',
    image: pub.blackPanelHome,
    to: '/residential',
  },
  {
    title: 'Commercial Solar',
    blurb:
      'A Southern California leader in commercial-scale solar, EV charging stations and energy storage for businesses.',
    image: imgBmwCarport,
    to: '/commercial',
  },
  {
    title: 'Battery Storage',
    blurb:
      'Enphase, Tesla Powerwall 2, Franklin, SolArc and SolarEdge batteries — store the sun and beat Time-of-Use rates.',
    image: pub.teslaBattery,
    to: '/batteries',
  },
  {
    title: 'EV Charging',
    blurb: 'Charge at home on your own solar power — faster, cleaner and cheaper than the pump.',
    image: pub.teslaCharging,
    to: '/contact',
  },
  {
    title: 'Backup Generators',
    blurb: 'Whole-home backup for total peace of mind, seamlessly integrated with your solar system.',
    image: pub.backupGenerator,
    to: '/contact',
  },
  {
    title: 'System Upgrades',
    blurb:
      'Already have solar? Add panels without losing NEM 1.0/2.0 status, expand storage, or upgrade your electric panel.',
    image: pub.systemUpgrade,
    to: '/contact',
  },
]

// Residential-only offering (no commercial card) — used on /residential
export const residentialServices = [
  {
    title: 'Solar Panels',
    blurb:
      'All-black, high-performance panels custom-designed for your roof — most homes installed in a single day, contract to power-on in under 30 days on average.',
    image: pub.heroHome,
    to: '/contact',
  },
  {
    title: 'Battery Storage',
    blurb:
      'Tesla Powerwall 2, Enphase, Franklin, SolArc and SolarEdge. Store your own sunshine, beat Time-of-Use rates and keep the lights on in an outage.',
    image: pub.teslaBattery,
    to: '/batteries',
  },
  {
    title: 'EV Charging',
    blurb:
      'Charge at home on the power your roof made — cheaper and cleaner than the pump, and ready for your next EV.',
    image: pub.teslaCharging,
    to: '/contact',
  },
  {
    title: 'Backup Generators',
    blurb:
      'Whole-home backup for total peace of mind through wildfire-season outages, seamlessly integrated with your solar system.',
    image: pub.backupGenerator,
    to: '/contact',
  },
  {
    title: 'System Upgrades',
    blurb:
      'Already have solar? Add panels without losing your NEM 1.0 or 2.0 status, expand storage, or modernise ageing equipment.',
    image: pub.systemUpgrade,
    to: '/contact',
  },
  {
    title: 'Electric Panel Upgrades',
    blurb:
      'Older main panel? We upgrade your service so it can safely carry solar, a battery and an EV charger for years to come.',
    image: pub.electricPanel,
    to: '/contact',
  },
]

// Why homeowners pick PowerSmith — /residential
export const residentialWhy = [
  {
    title: 'Veteran-Owned & Local',
    text: 'A San Diego team that knows SDG&E interconnection, local permitting and California code inside out.',
  },
  {
    title: '30-Year Monitoring Warranty',
    text: 'The longest, broadest insurance-backed coverage available — panels, inverters, optimizers and racking.',
  },
  {
    title: '10-Year Roof Warranty',
    text: 'Every roof penetration is covered for a full decade after installation, including any damage to your home.',
  },
  {
    title: '60-Day Install Guarantee',
    text: 'For qualifying projects we commit to installing within 60 days of final design approval.',
  },
  {
    title: '$0-Down Options',
    text: 'Lease, loan or purchase — we match you with the right financing from trusted national partners.',
  },
  {
    title: 'We Handle the Paperwork',
    text: 'Permits, utility forms, HOA approvals and your 30% federal tax credit guidance — all done for you.',
  },
]

export const savings = {
  headline: 'Save up to $50,000 on electricity over 25 years.',
  points: [
    '30-Year Monitoring Warranty — the longest, broadest insurance-backed coverage for panels, inverters, optimizers and racking (Solar Insure)',
    'Full 10-year roof penetration warranty after installation',
    'Free electricity promotions — 12, 24 or 36 months through select installers',
    '60-day installation timeline guarantee for qualifying projects',
    'Federal ITC of 30% — with bonuses, sample projects have reached 50% total credit',
  ],
  disclaimer:
    'Estimate only. Actual savings depend on system size, utility rates, usage and location. A PowerSmith consultant will provide an exact figure for your home.',
}

// Real 4-step process from the residential page, expanded with install steps
export const steps = [
  { title: 'Round Up Your Electricity Bill', text: 'We analyze your bill to determine how many kilowatt-hours your home uses and size your ideal system.' },
  { title: 'Check Your Proposal', text: 'Review a custom design built around your roof, shading, usage and budget — most designs ready in 24–72 hours.' },
  { title: 'Pick the Best Deal', text: 'Purchase, loan or lease — we match you with the best financing from trusted national partners.' },
  { title: 'Site Survey & Permits', text: 'A technician photographs your roof, meter and panel; we handle every permit and utility form for you.' },
  { title: 'Installation', text: 'Certified crews install most home systems in a single day — backed by a 60-day timeline guarantee.' },
  { title: 'Permission to Operate', text: 'Your utility authorizes the connection, your system turns ON — under 30 days on average, contract to PTO.' },
]

export const comparison = {
  columns: ['', 'With PowerSmith', 'Utility Only'],
  rows: [
    ['Upfront cost', '$0-down options available', 'N/A'],
    ['Monthly electric bill', 'Reduced or eliminated', 'Rising ~3–5% every year'],
    ['Outage protection', 'Battery backup keeps you on', 'You go dark'],
    ['Warranty', '30-yr monitoring + 10-yr roof', 'None'],
    ['Home value', 'Increases with owned solar', 'No change'],
    ['Environmental impact', 'Clean renewable energy', 'Grid mix / fossil fuels'],
  ],
}

export const partners = [
  'Tesla',
  'Enphase',
  'Q Cells',
  'Generac',
  'Goodleap',
  'Sunlight',
  'LightReach',
  'One Ethos',
]

// Google reviews summary + real reviews from the live powersmithsolar.com site
export const reviews = { rating: 'Excellent', stars: 5, count: 76, source: 'Google' }

export const testimonials = [
  {
    quote: 'Very happy with our service!!',
    name: 'Daniel Sanchez',
    via: 'Verified Google Review',
  },
  {
    quote:
      'Great service done by a great team. Clear, effective communication from start to finish. Thanks Team Powersmith.',
    name: 'Ron Stockwell',
    via: 'Verified Google Review',
  },
  {
    // NOTE: original review was truncated in the screenshot — verify the full text.
    quote:
      'Powersmith Solar representatives are highly responsive, give top-level customer service and the best in solar. Veteran-owned and operated.',
    name: 'Cesar Contreras',
    via: 'Verified Google Review',
  },
]

// Real leadership team from the About page
export const team = [
  { name: 'Anthony Olivarez', role: 'CEO', photo: photoAnthony },
  { name: 'Ray Powers', role: 'Regional Energy Expert', photo: photoRay },
  { name: 'Steve Huddleston', role: 'Regional Energy Expert', photo: photoSteve },
  { name: 'Mike Troy', role: 'Regional Energy Expert', photo: photoMike },
  { name: 'Adolfo Cruz', role: 'Regional Energy Expert', photo: null },
  { name: 'Armando Champagne', role: 'Regional Energy Expert', photo: null },
]

// Real core values from the About page
export const values = [
  { title: 'Can-Do Attitude', text: 'We focus on delivering solutions, not problems.' },
  { title: 'Open, Honest Relationships', text: 'Transparency and trust forge strong customer bonds, fostering delight and success.' },
  { title: 'Systematized Approach', text: 'Efficiency-focused strategies drive our company’s success and client satisfaction.' },
  { title: 'Integrity', text: 'Integrity shines in each solar project, fostering trust and satisfaction.' },
  { title: 'One Team', text: 'Collaborating and shining together for success, fueled by our united efforts.' },
  { title: 'Solutions-Oriented', text: 'Empowering customers with customized solar solutions for sustainability.' },
]

// Real plans from the plans-and-services page
export const plans = [
  {
    name: 'Lease',
    tagline: 'Predictable rates. Zero hassle.',
    down: '$0 to minimal down',
    ownership: 'PowerSmith partner owns & maintains',
    benefits: [
      'Protection against utility rate hikes',
      '25-year warranty',
      '100% service coverage',
      'Clean, affordable, resilient energy',
    ],
    featured: false,
  },
  {
    name: 'Loan',
    tagline: 'Own your system with fixed monthly payments.',
    down: '$0 to minimal down',
    ownership: 'You own & maintain',
    benefits: [
      'Purchase and finance flexibility',
      'OEM warranty on all parts',
      '100% service coverage with Protection Plus',
      'Federal tax credit eligibility',
    ],
    featured: true,
  },
  {
    name: 'Purchase',
    tagline: 'Maximum savings. Full ownership from day one.',
    down: 'Full system cost',
    ownership: 'You own & maintain',
    benefits: [
      'Own your system outright',
      'Protection against rate hikes',
      'OEM warranty on all parts',
      '100% service coverage with Protection Plus',
    ],
    featured: false,
  },
]

// Real commercial content
export const commercial = {
  intro:
    'Recognized as a leader in Southern California for innovative renewable energy solutions — commercial-scale solar systems, EV charging stations and energy storage.',
  // TODO: swap for a PowerSmith drone photo of a commercial site once available.
  heroImage: imgBmwCarport,
  // Why businesses go solar with us
  benefits: [
    {
      title: 'Cut Operating Costs',
      text: 'Turn one of your largest fixed expenses into a predictable, controlled cost — or eliminate it entirely.',
    },
    {
      title: 'ITC + Depreciation',
      text: 'Stack the 30% federal Investment Tax Credit with 100% year-1 bonus depreciation. Sample projects have seen incentives cover over 90% of cost.',
    },
    {
      title: 'Energy Resilience',
      text: 'Commercial storage keeps critical operations running through outages and shaves expensive demand charges.',
    },
    {
      title: 'Sustainability Goals',
      text: 'Meet ESG targets and show customers a real commitment to clean energy — backed by measurable production data.',
    },
  ],
  financing: [
    'Nothing upfront — start saving from day 1',
    '$0 down financing options',
    '100% federal year-1 depreciation',
    'Custom financing built around your business',
  ],
  competencies: [
    'Technical Expertise',
    'Customer Service',
    'Industry Experience',
    'Financial Expertise',
    'Product Knowledge',
    'Project Management',
  ],
  industries: [
    { name: 'Warehouses', key: 'warehouse' },
    { name: 'Multi-Family Homes', key: 'multifamily' },
    { name: 'Storage Facilities', key: 'storage' },
    { name: 'Auto Dealerships', key: 'auto' },
    { name: 'Manufacturing Plants', key: 'factory' },
    { name: 'Mobile Home Parks', key: 'caravan' },
    { name: 'Churches', key: 'church' },
  ],
  projects: [
    { name: 'Pacific BMW Solar Carport', detail: 'Solar carport installation', image: imgBmwCarport },
    { name: 'Rock Church, San Bernardino', detail: '25 kW rooftop system', image: imgRockChurch },
    { name: 'Ground Mount System', detail: '382 kW ground-mount array', image: imgSolarField },
    { name: 'Ballast Rooftop', detail: '30 kW flat-roof ballast system', image: imgFlatRoof },
    { name: 'Lynam — Jasmine St', detail: '76 kW commercial system', image: imgPortfolio8 },
    { name: 'Lynam — Santa Ana Ave', detail: 'Commercial installation', image: imgPortfolio9 },
  ],
}

// Real ITC content from residential/commercial ITC benefit pages
export const itc = {
  residential: {
    credits: [
      { pct: '30%', label: 'Standard Federal ITC' },
      { pct: '+10%', label: 'Made-in-USA Products Bonus' },
      { pct: '+10%', label: 'Energy Community Bonus' },
    ],
    example: {
      title: 'Sample Residential Project',
      rows: [
        ['Project Total Cost', '$48,000'],
        ['ITC Credit Percentage', '50%'],
        ['Total ITC Tax Credit', '$24,000'],
        ['Out-of-Pocket Cost', '$6,936'],
        ['Tax Incentives Covered', '85.55% of project costs'],
      ],
    },
  },
  commercial: {
    credits: [
      { pct: '30%', label: 'Federal Renewable Energy Credit' },
      { pct: '+10%', label: 'State Solar Incentive' },
      { pct: '+10%', label: 'Local Renewable Energy Program' },
    ],
    example: {
      title: 'Sample Commercial Project',
      rows: [
        ['Project Total Cost', '$2,697,550'],
        ['Total Renewable Energy Credit', '$1,348,775'],
        ['Incentives Covering', '90.5% of project costs'],
        ['Out-of-Pocket Cost', '$256,267'],
      ],
    },
  },
  process: [
    { title: 'Pre-Consultation', text: 'A RETE-accredited CPA guides you to gather essential documents.' },
    { title: 'Tax Form Preparation', text: 'Documentation tailored to your individual tax circumstances.' },
    { title: 'Tax Review Consultation', text: 'A personal tax professional ensures meticulous attention to detail.' },
    { title: 'Audit Defense', text: 'Ongoing audit support, offering peace of mind.' },
  ],
  partner:
    'We partnered with RETE to ensure you receive top-tier deals and expert advice directly from specialists.',
  disclaimer:
    'Individual tax circumstances determine actual eligibility. PowerSmith recommends consulting a tax professional.',
}

// Real battery / Powerwall / Enphase / NEM 3.0 content
export const batteries = {
  intro:
    'PowerSmith offers industry-leading battery storage: Enphase, Tesla Powerwall 2, Franklin, SolArc and SolarEdge — store and sell power back to the grid when energy credits are most valuable.',
  brands: ['Enphase', 'Tesla Powerwall 2', 'Franklin', 'SolArc', 'SolarEdge'],
  powerwall: {
    title: 'The Powerwall',
    text: 'A rechargeable battery that stores electricity from your solar panels — or from the grid when utility rates are lowest — then powers your home during peak-rate hours or in the evening. Sleek, compact, easy to install and completely automated: it requires no maintenance.',
    image: pub.teslaBattery,
  },
  enphase: {
    title: 'Enphase Gold-Certified Installer',
    text: 'PowerSmith is an Enphase Battery Gold-Certified Installer. Enphase puts a microinverter under each solar panel for maximum performance, with reliable backup power and full control of your system from an app — or fully on autopilot. Beat Time-of-Use rates by storing excess energy for later.',
    image: imgBattery,
  },
  nem3: {
    title: 'NEM 3.0 in California',
    points: [
      'Unlike NEM 2.0, which rewarded selling excess solar to the grid, NEM 3.0 incentivizes homeowners to use their own energy.',
      'Time-varying rates reward storing excess solar and consuming it during peak demand — or exporting it during high-compensation windows.',
      'Systems with IQ Batteries can achieve a utility-bill offset of up to 90% and a payback period as short as five years.',
      'Have an older system? Add more capacity without losing your NEM 1.0 or 2.0 status.',
    ],
  },
  backup: {
    title: 'What can a battery back up?',
    text: 'Any electrical appliance in your home. We recommend backing up the essentials first — refrigerator, stove, water heater, heating and air conditioning. Choose no-backup (maximize savings), partial backup, or whole-home backup.',
  },
}

// Real FAQ from powersmithsolar.com/faq
export const faqs = [
  {
    q: 'How long does it take to install a solar system?',
    a: 'Installation itself can happen within a day. From signing your contract to finalizing your permission-to-operate paperwork, PowerSmith installations are some of the fastest in the industry — less than 30 days on average.',
  },
  {
    q: 'How many solar panels would I need?',
    a: 'It depends on your energy usage. PowerSmith analyzes your electric bill to see how many kilowatt-hours your home uses and determines your ideal system size.',
  },
  {
    q: 'What is Permission to Operate (PTO)?',
    a: 'Permission to Operate is written authorization from your utility company to connect your solar system to the grid and turn it ON.',
  },
  {
    q: 'How long does a solar system last?',
    a: 'Solar panels generally last 25–35 years. They are extremely durable, withstand snow, rain, wind and hail, and require little maintenance.',
  },
  {
    q: 'Is there a roof warranty?',
    a: 'Yes — a full 10-year roof warranty follows the installation of the system, and any damage to your roof or home is completely covered.',
  },
  {
    q: 'Is there an installation timeline guarantee?',
    a: 'PowerSmith install partners pledge a 60-day installation timeline guarantee for qualifying projects — committed within 60 days from final design approval.',
  },
  {
    q: 'What battery options are available?',
    a: 'A wide range of industry-leading brands: Enphase, Tesla Powerwall 2, Franklin, SolArc and SolarEdge — letting you store and sell power back to the grid when energy credits are most valuable.',
  },
  {
    q: 'Will I get tax credits and other incentives?',
    a: 'With an ownership option you can be eligible for up to 30% of the system value as a federal tax credit. Individual tax circumstances vary — we recommend consulting a tax professional.',
  },
  {
    q: 'What does a Power Optimizer do?',
    a: 'A power optimizer lets every panel operate independently — if one panel stops working, the rest of your system keeps producing just fine.',
  },
  {
    q: 'What happens at the site survey?',
    a: 'A technician photographs your roof, utility meters and main electrical panel. Most designs are completed within 24–72 hours after the survey.',
  },
]

export const nav = [
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Plans', to: '/plans' },
  { label: 'Batteries', to: '/batteries' },
  { label: 'Tax Credits', to: '/itc-benefits' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

// --- SEO: keyword-rich per-page title tags (≤60 chars) & meta descriptions
// (≤155 chars) with location + buyer intent. Addresses the audit's title/meta
// findings and buries-the-veteran-differentiator weakness. ---
export const seo = {
  home: {
    title: 'Veteran-Owned Solar Company in San Diego | PowerSmith Energy',
    description:
      'Veteran-owned San Diego solar, battery & EV charging. Save up to $50,000 over 25 years with a 30-year warranty. Get a free quote today.',
  },
  about: {
    title: 'Veteran-Owned Solar Energy Experts in San Diego, CA',
    description:
      'Meet PowerSmith Energy — a veteran-owned San Diego solar company. Our vision, mission, core values and the team behind your clean-energy transition.',
  },
  residential: {
    title: 'Residential Solar Panels in San Diego | PowerSmith Energy',
    description:
      'Home solar, batteries & EV charging in San Diego with $0-down options, a 30-year warranty and installs under 30 days. Get a free quote.',
  },
  commercial: {
    title: 'Commercial Solar in San Diego & SoCal | PowerSmith Energy',
    description:
      'Commercial-scale solar, storage & EV charging for San Diego businesses. $0 down, 100% year-1 depreciation. Warehouses, dealerships, churches & more.',
  },
  plans: {
    title: 'Solar Plans: Lease, Loan or Purchase | PowerSmith Energy',
    description:
      'Compare solar lease, loan and purchase options in San Diego. $0-to-minimal down, OEM warranty and 100% service coverage with Protection Plus.',
  },
  batteries: {
    title: 'Solar Batteries: Tesla Powerwall & Enphase | San Diego',
    description:
      'Enphase Gold-Certified installer. Tesla Powerwall, Enphase & Franklin batteries for San Diego. Beat NEM 3.0 and TOU rates — up to 90% bill offset.',
  },
  itc: {
    title: 'Solar Tax Credits & ITC Benefits in California | PowerSmith',
    description:
      'Federal 30% ITC plus stacking bonuses. See real residential & commercial examples where incentives covered 85–90% of project cost. RETE CPA guidance.',
  },
  faq: {
    title: 'Solar FAQ — Cost, Warranty, Batteries & More | PowerSmith',
    description:
      'Answers to common San Diego solar questions: cost, install time, 30-year warranty, batteries, tax credits, permission to operate and more.',
  },
  contact: {
    title: 'Contact PowerSmith Energy | San Diego Solar Quote',
    description:
      'Get a free, no-obligation San Diego solar quote. Call 619-581-1121 or request a callback. Veteran-owned, headquartered downtown at 1111 6th Ave.',
  },
}

// LocalBusiness structured data — sitewide (rendered in App).
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SolarPowerStation',
  name: 'PowerSmith Energy',
  alternateName: 'PowerSmith Solar',
  image: 'https://powersmithsolar.com/wp-content/uploads/2025/08/Vector-logo-04-1-scaled.png',
  '@id': 'https://powersmithsolar.com',
  url: 'https://powersmithsolar.com',
  telephone: '+1-619-581-1121',
  email: 'servicedesk@powersmithsolar.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1111 6th Avenue Suite 300',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    postalCode: '92101',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 32.7157, longitude: -117.1611 },
  areaServed: [
    'San Diego',
    'Chula Vista',
    'Escondido',
    'El Cajon',
    'Carlsbad',
    'Oceanside',
    'Temecula',
    'La Mesa',
  ],
  slogan: 'Power Your Home. Own Your Energy.',
  founder: { '@type': 'Person', name: 'Anthony Olivarez' },
  knowsAbout: ['Solar panels', 'Battery storage', 'EV charging', 'Commercial solar'],
}

// FAQPage structured data built from the real FAQ list — enables Google's
// accordion rich results (audit Issue 2).
export function faqSchema(list) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Plans & Services', to: '/plans' },
  { label: 'Batteries', to: '/batteries' },
  { label: 'ITC Benefits', to: '/itc-benefits' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Solar Calculator', to: '/solar-calculator' },
  { label: 'Blog', href: 'https://powersmithsolar.com/blog/' },
  { label: 'Affiliate Signup', href: 'https://powersmithsolar.com/affiliate-signup/' },
  { label: 'Privacy Policy', href: 'https://powersmithsolar.com/privacy-policy/' },
  { label: 'Terms of Use', href: 'https://powersmithsolar.com/terms-of-use/' },
]
