// ---------------------------------------------------------------------------
// Local SEO landing pages — one per San Diego-area city named in the SEO audit
// (Section 4.3). Each targets "[city] solar company/panels" search intent with
// SDG&E utility context, local incentives and a quote form. Copy is templated
// but city-specific — review/expand with real local stats before launch.
// ---------------------------------------------------------------------------

export const cities = [
  {
    slug: 'san-diego',
    name: 'San Diego',
    keyword: 'San Diego Solar Company',
    utility: 'SDG&E',
    intro:
      'As a downtown San Diego-based, veteran-owned company, we know SDG&E rates and local permitting better than anyone. Homeowners across the county are switching to solar to escape some of the highest electricity rates in the nation.',
    highlights: [
      'Local team headquartered at 1111 6th Avenue, downtown San Diego',
      'Deep experience with SDG&E interconnection and city permitting',
      'Battery storage sized for California NEM 3.0 and wildfire outages',
    ],
    rate: 'SDG&E residential rates are among the highest in the U.S., making solar payback in San Diego especially fast.',
  },
  {
    slug: 'chula-vista',
    name: 'Chula Vista',
    keyword: 'Chula Vista Solar Panels',
    utility: 'SDG&E',
    intro:
      'Chula Vista homeowners face the same rising SDG&E rates as the rest of San Diego County — and plenty of sunshine to offset them. We design and install solar, battery and EV-charging systems built for South Bay homes.',
    highlights: [
      'Solar + battery systems designed for South Bay rooftops',
      'Guidance on Chula Vista permitting and HOA approvals',
      'NEM 3.0-optimized designs that maximize self-consumption',
    ],
    rate: 'With SDG&E as the local utility, Chula Vista homes see strong solar savings, especially when paired with battery storage.',
  },
  {
    slug: 'escondido',
    name: 'Escondido',
    keyword: 'Escondido Solar Installation',
    utility: 'SDG&E',
    intro:
      'Escondido’s inland heat means high summer AC bills — and excellent solar production. Our team helps North County homeowners cut SDG&E costs and stay powered through outages.',
    highlights: [
      'High-output designs for hot inland North County summers',
      'Whole-home battery backup for wildfire-season outages',
      'EV charging that runs on your own solar power',
    ],
    rate: 'Inland cooling loads make Escondido an ideal candidate for solar-plus-storage under SDG&E’s time-of-use rates.',
  },
  {
    slug: 'el-cajon',
    name: 'El Cajon',
    keyword: 'El Cajon Solar Savings',
    utility: 'SDG&E',
    intro:
      'El Cajon’s sunny, warm climate is perfect for solar. We help East County homeowners lock in predictable energy costs and add battery backup for peace of mind.',
    highlights: [
      'Solar designs tuned for East County sun exposure',
      'Fixed, predictable energy costs vs. rising SDG&E rates',
      'Battery + generator backup options for outages',
    ],
    rate: 'El Cajon’s abundant sunshine and high SDG&E rates translate into some of the fastest solar payback in the county.',
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    keyword: 'Carlsbad Solar Energy',
    utility: 'SDG&E',
    intro:
      'Coastal Carlsbad homeowners choose solar for clean energy and long-term savings. We deliver premium, low-profile systems that complement North County Coastal homes.',
    highlights: [
      'Sleek, low-profile panels for coastal homes',
      'Premium equipment with a 30-year monitoring warranty',
      'Battery storage for evening use and outage protection',
    ],
    rate: 'Even with coastal marine layer, Carlsbad’s solar production comfortably offsets SDG&E’s premium rates.',
  },
  {
    slug: 'oceanside',
    name: 'Oceanside',
    keyword: 'Oceanside Solar Panels',
    utility: 'SDG&E',
    intro:
      'Oceanside blends coastal living with strong solar potential. Our veteran-owned team — a natural fit for this military-connected community — designs systems that save homeowners money for decades.',
    highlights: [
      'Veteran-owned — proud to serve the Camp Pendleton community',
      'Solar + battery systems built for North County Coastal homes',
      '$0-down financing and 60-day install timeline guarantee',
    ],
    rate: 'Oceanside homeowners offset high SDG&E bills quickly, and battery storage keeps essentials running during outages.',
  },
  {
    slug: 'temecula',
    name: 'Temecula',
    keyword: 'Temecula Solar Company',
    utility: 'SCE',
    intro:
      'Temecula’s hot Riverside County summers drive big cooling bills — and big solar savings. We design high-output solar-plus-storage systems for Temecula Valley homes.',
    highlights: [
      'High-production designs for hot inland summers',
      'Whole-home battery backup for wildfire-season reliability',
      'EV charging powered by your own rooftop solar',
    ],
    rate: 'With high summer AC demand, Temecula homes see excellent returns from solar paired with battery storage.',
  },
  {
    slug: 'la-mesa',
    name: 'La Mesa',
    keyword: 'La Mesa Solar Savings',
    utility: 'SDG&E',
    intro:
      'La Mesa homeowners are going solar to take control of rising SDG&E costs. Our local team handles design, permitting and installation end to end.',
    highlights: [
      'Local, veteran-owned team handling permits end to end',
      'NEM 3.0-optimized solar-plus-battery designs',
      'Predictable energy costs and increased home value',
    ],
    rate: 'La Mesa’s mild climate and high SDG&E rates make solar a smart, fast-payback investment.',
  },
]

export function getCity(slug) {
  return cities.find((c) => c.slug === slug)
}
