export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const siteInfo = {
  shortName: 'TSU Agroforestry & Extension',
  fullName: 'TSU Agroforestry & Extension Lab',
  university: 'Tennessee State University',
  college: 'College of Agriculture · Cooperative Extension',
  tagline:
    'Advancing soil health, carbon sequestration, and climate-resilient agroforestry across Tennessee woodlands.',
  welcomeHeading: 'Welcome to Our Research Group',
  welcomeCopy:
    'Welcome to our research group! Our lab is dedicated to understanding the intricate feedbacks between agroforestry practices and soil interactions. Our work investigates how these below-ground interactions fundamentally influence carbon sequestration potential, nutrient cycling, and the overall ability of agroforestry systems and small woodlands to adapt to global climate change. By exploring this unique nexus of soil health and tree physiology, we aim to identify actionable management strategies that enhance ecosystem productivity while combating the modern pressures of invasive species and resource scarcity.',
  heroImage: 'images/hero-forest.png',
  contact: {
    piName: 'Dr. Huseyin B. Tecimen',
    piRole: 'Principal Investigator & Forestry Extension Specialist',
    email: 'htecimen@tnstate.edu',
    phone: '615-963-5547',
    phoneHref: 'tel:+16159635547',
    scholarUrl: 'https://scholar.google.com/citations?user=_5QkOpkAAAAJ&hl=en',
    location: 'Nashville, Tennessee',
    invitation:
      'If you are interested in research collaboration, extension partnerships, or joining our lab, you are very welcome to reach out to Dr. Tecimen.',
  },
  pillars: [
    {
      id: 'soil-carbon',
      title: 'Soil Health & Carbon Sequestration',
      description:
        'Investigating below-ground soil-plant feedbacks, nutrient cycling, soil amendments, and long-term carbon storage in hardwood stands and agroforestry systems.',
    },
    {
      id: 'woodland-resilience',
      title: 'Climate-Resilient Agroforestry',
      description:
        'Developing actionable woodland management strategies that boost ecosystem productivity while addressing invasive species and resource scarcity.',
    },
    {
      id: 'extension-outreach',
      title: 'Landowner & Agent Extension',
      description:
        'Translating ecological research into hands-on training, extension publications, and practical tools for small and medium landowners across Tennessee.',
    },
  ],
}
