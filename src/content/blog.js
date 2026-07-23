// ---------------------------------------------------------------------------
// Blog content. Each post is a data object rendered by BlogPost.jsx — no
// markdown dependency, consistent with how the rest of the site (site.js)
// keeps copy in structured content instead of prose files.
//
// `body` is an ordered list of simple blocks: {h: '...'} heading,
// {p: '...'} paragraph, {ul: ['...']} bullet list. Keep new posts in this
// same shape so BlogPost.jsx doesn't need changes.
//
// Topics are pulled from the May 2026 SEO audit's 90-day content calendar —
// the audit's #1 critical finding was "only 3 blog posts, extremely thin for
// a competitive market." This launches the library the audit called for.
// ---------------------------------------------------------------------------

export const blogPosts = [
  {
    slug: 'solar-cost-san-diego-2026',
    title: 'How Much Does Solar Cost in San Diego in 2026?',
    description:
      'A real-world breakdown of what solar costs in San Diego in 2026 — system pricing, the 30% federal credit, financing options, and what actually drives your number.',
    category: 'Education',
    date: '2026-07-23',
    readMins: 6,
    excerpt:
      'System size, financing choice and your SDG&E rate all move the number more than any "average price per watt" you\'ll find online. Here\'s how to think about your real cost.',
    body: [
      { p: 'Search "how much does solar cost in San Diego" and you\'ll get a wall of national averages that don\'t mean much for your roof. Your actual number depends on three things: how much electricity you use, how you finance the system, and what incentives apply to your project. Here\'s how each one moves the needle.' },
      { h: '1. Your usage sets the system size' },
      { p: 'Solar is sized to your electricity use, not your roof. We start with your utility bill — how many kilowatt-hours you use per month — and size a system to offset most or all of it. A bigger bill means a bigger system and a bigger upfront number, but also bigger savings over time. This is why two neighbors with identical homes can get very different quotes.' },
      { h: '2. SDG&E rates make the payback faster here than almost anywhere' },
      { p: 'San Diego Gas & Electric charges some of the highest residential electricity rates in the country, and they have climbed steadily for years. That is bad news for your monthly bill and good news for your solar payback period — the more expensive grid power is, the faster solar pays for itself. It is a big part of why San Diego is one of the strongest solar markets in California.' },
      { h: '3. Financing changes the "cost" question entirely' },
      { p: 'There is no single price of solar — there is a price per financing path.' },
      { ul: [
        'Cash purchase: highest upfront cost, lowest lifetime cost, full ownership and full access to incentives.',
        'Loan: little or no money down, you still own the system and claim the tax credit, fixed monthly payment.',
        'Lease or PPA (power purchase agreement): $0 down, predictable payment, but you do not own the system and do not claim the federal credit yourself.',
      ] },
      { p: 'None of these is universally "cheaper" — it depends on your cash position, your credit, and how long you plan to stay in the home.' },
      { h: '4. The 30% federal tax credit still applies to purchased and financed systems' },
      { p: 'If you buy your system outright or finance it with a loan (not a lease/PPA), the federal Investment Tax Credit currently covers 30% of the system cost. See our full breakdown on the Tax Credits page for how that plays out on a real project.' },
      { h: 'The real answer' },
      { p: 'Rather than quote a per-watt average that may not apply to your home, we build a proposal from your actual bill, your roof, and the financing path you want to explore — so the number you see is the number that matters. Use the calculator above or talk to a PowerSmith energy advisor for a free, no-pressure estimate.' },
    ],
  },
  {
    slug: 'nem-3-california-what-new-solar-customers-need-to-know',
    title: 'NEM 3.0 in California: What New Solar Customers Need to Know',
    description:
      'NEM 3.0 changed how California pays homeowners for solar. Here\'s what it means for a new system in 2026, and why battery storage matters more than it used to.',
    category: 'Local',
    date: '2026-07-16',
    readMins: 5,
    excerpt:
      'Net Energy Metering 3.0 rewards using your own power more than selling it back. That single shift changes how a solar system should be designed.',
    body: [
      { p: 'If you are shopping for solar in California in 2026, you will hear "NEM 3.0" a lot — and it genuinely changes how a system should be designed. Here is the short version.' },
      { h: 'What changed' },
      { p: 'The previous rules (NEM 2.0) paid solar homeowners close to the retail rate for excess power sent back to the grid. NEM 3.0 pays a lower, time-varying rate for exported power instead — closer to the utility\'s wholesale cost. The practical effect: selling power back to the grid is worth a lot less than it used to be.' },
      { h: 'Why that makes batteries the smart move now' },
      { p: 'Under NEM 3.0, the highest-value thing you can do with the extra solar your panels produce during the day is store it and use it yourself in the evening — when rates are highest and the sun isn\'t producing. That is a fundamentally different design goal than the old "export everything" approach, and it is why we pair almost every new NEM 3.0 system with battery storage.' },
      { ul: [
        'Systems with a battery can offset a significantly larger share of your bill than solar-only systems built for NEM 3.0.',
        'A battery also gives you backup power during an outage — solar panels alone shut off automatically when the grid goes down, for safety.',
        'Payback periods stay competitive even under NEM 3.0 once a battery is sized correctly, especially against SDG&E\'s rising rates.',
      ] },
      { h: 'What if you already have solar on NEM 1.0 or NEM 2.0?' },
      { p: 'Good news: expanding an existing system does not force you onto NEM 3.0 rules in most cases. You can typically add panels or a battery to a system that already has NEM 1.0 or 2.0 status without losing that grandfathered rate — one of the reasons it can pay to expand sooner rather than later.' },
      { h: 'The takeaway' },
      { p: 'NEM 3.0 didn\'t make solar a bad idea in California — it made system design matter more. A proposal built around your actual usage pattern and paired with the right battery still produces strong, predictable savings. See our full battery lineup on the Batteries page, including how Enphase and Generac PWRcell systems are built for exactly this.' },
    ],
  },
  {
    slug: 'federal-solar-tax-credit-2026',
    title: 'Is the 30% Federal Solar Tax Credit Still Available in 2026?',
    description:
      'A plain-English look at the federal solar Investment Tax Credit (ITC) in 2026 — who qualifies, what it covers, and how it stacks with other incentives.',
    category: 'Education',
    date: '2026-07-09',
    readMins: 4,
    excerpt:
      'Yes — the federal ITC is active for both residential and commercial solar in 2026. Here\'s what it actually covers and who can claim it.',
    body: [
      { p: 'Short answer: yes, the federal solar Investment Tax Credit (ITC) is active in 2026. Here is what it actually means for your project.' },
      { h: 'What it covers' },
      { p: 'The ITC lets you claim a percentage of your solar system\'s cost as a credit against your federal taxes — not a deduction, a dollar-for-dollar credit. It applies to the full cost of the system: panels, inverters, batteries paired with solar, and installation labor. See the exact residential and commercial breakdowns, including a worked example, on our Tax Credits page.' },
      { h: 'Who can claim it' },
      { p: 'The credit goes to whoever owns the solar system. If you purchase your system outright or finance it with a loan, you own it and you claim the credit. If you go with a lease or a power-purchase agreement (PPA), the leasing company owns the system and claims the credit instead — which is one of the biggest financial differences between those options, beyond the monthly payment.' },
      { h: 'Commercial incentives stack further' },
      { p: 'Businesses can pair the ITC with accelerated depreciation, letting a large share of a commercial system\'s cost be recovered in year one. Combined with utility and state-level incentives, commercial projects have in some cases seen total incentive coverage well above the base ITC percentage — see our Commercial page for what that looks like on a real project.' },
      { h: 'Nothing here is tax advice' },
      { p: 'Every situation is different, and tax credits depend on your specific liability and filing details. We\'ll walk you through how the credit applies to your proposal, but always confirm the specifics with a tax professional before you file.' },
    ],
  },
  {
    slug: 'battery-backup-wildfire-season',
    title: 'Battery Backup for California Wildfire Season: What to Look For',
    description:
      'PSPS outages and wildfire season make battery backup a real necessity in California. Here\'s what actually matters when choosing one.',
    category: 'Comparison',
    date: '2026-06-25',
    readMins: 5,
    excerpt:
      'Not all "backup power" is equal. Here\'s the difference between a battery that keeps your lights on and one that keeps your whole home running.',
    body: [
      { p: 'Public Safety Power Shutoffs (PSPS) during high fire-risk conditions are now a normal part of living in California — and they can last hours or days. A battery is the difference between riding that out comfortably and not. Here is what actually matters when you\'re comparing options.' },
      { h: 'Solar alone does not keep the lights on in an outage' },
      { p: 'This surprises a lot of homeowners: grid-tied solar panels are required by code to shut off automatically during a power outage, for the safety of utility crews working on the lines. Without a battery, your panels go dark exactly when you need them most. A battery — paired correctly with your inverter — is what allows your system to "island" itself from the grid and keep running.' },
      { h: 'What to actually compare' },
      { ul: [
        'Usable capacity (kWh): how much energy is actually stored, not just the headline number — this determines how long backup lasts.',
        'Continuous vs. peak power (kW): can it start a well pump or an AC compressor, or only run small loads?',
        'Whole-home vs. partial backup: do you want everything running, or just the essentials — fridge, water heater, some outlets?',
        'Expandability: can you add another battery module later if your needs grow?',
      ] },
      { h: 'The options we install' },
      { p: 'PowerSmith works with Generac PWRcell, Tesla Powerwall, Enphase, Franklin and SolarEdge battery systems — each with different strengths depending on your home\'s panel setup and backup priorities. A Generac PWRcell system, for example, scales from 9kWh to 18kWh in a single cabinet by adding battery modules, which makes it easy to size exactly to your home. See the full lineup on our Batteries page.' },
      { h: 'Backup vs. whole-home generator' },
      { p: 'A gas or propane whole-home generator can also carry a house through an outage, but it runs on fuel you have to store and maintain, and it does nothing for your monthly bill the other 364 days a year. A solar-charged battery does double duty — it saves you money daily through time-of-use shifting, and stands by ready for the next outage. Many homeowners in wildfire-prone areas pair both for maximum redundancy; see our Backup Generators offering for the Generac side of that combination.' },
      { h: 'The bottom line' },
      { p: 'If backup power is your top priority, size the conversation around usable kWh and what you actually want to keep running — not just the sticker price of the battery. A PowerSmith energy advisor will walk through your panel and your must-keep-on list before recommending a size.' },
    ],
  },
  {
    slug: 'why-veteran-owned-matters',
    title: 'Why Veteran-Owned Matters: The PowerSmith Story',
    description:
      'PowerSmith is a veteran-owned San Diego solar company built on the same discipline and accountability that guides military service.',
    category: 'Trust',
    date: '2026-06-11',
    readMins: 4,
    excerpt:
      'Veteran-owned isn\'t a badge on a website — it\'s the standard the whole company is held to. Here\'s what that actually means for the way we work.',
    body: [
      { p: 'PowerSmith Energy is a veteran-owned company based in San Diego — and that is not a marketing line we bolted on later. It shapes how the company is actually run.' },
      { h: 'What veteran-owned actually means here' },
      { p: 'It means a leadership team that was trained to plan carefully, communicate clearly, and follow through on commitments — because in the military, those things are not optional. That same discipline shows up in how we run a solar project: a clear process from your first bill review to permission-to-operate, honest answers about financing and incentives, and a team that treats "we said we would" as a promise, not a suggestion.' },
      { h: 'A transparent advisor model, not a sales script' },
      { p: 'A lot of solar companies are built around closing the deal in one visit. PowerSmith is built around getting the numbers right — your usage, your roof, your financing options — before anything is signed. We would rather you understand exactly what you\'re buying and why it makes sense for your specific home than rush a decision.' },
      { h: 'Backed by real coverage, not just a sales pitch' },
      { p: 'Every PowerSmith system is backed by a 30-year insurance-backed warranty through Solar Insure — protection that holds up even if an individual manufacturer or installer changes hands down the road. See our full breakdown of what that warranty actually covers on the Residential page.' },
      { h: 'Serving San Diego and beyond' },
      { p: 'From our office at 1111 6th Avenue in downtown San Diego, we work with homeowners and businesses across Southern California — including Chula Vista, Escondido, El Cajon, Carlsbad, Oceanside, Temecula and La Mesa — plus commercial projects for warehouses, multi-family housing and more. If you want to work with a team that treats your project the way we\'d want ours treated, get in touch.' },
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}

// Article JSON-LD — closes the audit's "no schema markup" finding for blog content.
export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'PowerSmith Energy' },
    publisher: { '@type': 'Organization', name: 'PowerSmith Energy' },
  }
}
