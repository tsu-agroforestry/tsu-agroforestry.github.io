export interface ExtensionPhoto {
  src: string
  alt: string
  caption: string
}

export interface ExtensionPublication {
  id: string
  title: string
  authors: string
  publisher: string
  url: string
  summary: string
}

export const featuredOpportunity = {
  badge: 'New Funding & Producer Opportunity',
  title: 'Expanding Agroforestry Markets and Production',
  partner: 'Led by The Nature Conservancy & Partners (USDA-NRCS)',
  description:
    'Led by The Nature Conservancy in collaboration with a diverse network of partners, this initiative aims to accelerate private investment in agroforestry while helping farmers and landowners improve long-term profitability.',
  links: [
    {
      label: "Producers' Application — The Nature Conservancy",
      url: 'https://www.nature.org/en-us/what-we-do/our-priorities/provide-food-and-water-sustainably/expanding-agroforestry-production/?vu=expandingagroforestry',
      primary: true,
    },
    {
      label: 'USDA-NRCS Call for Proposals & FAQ (PDF)',
      url: 'https://www.nrcs.usda.gov/sites/default/files/2025-11/amp-partner-call-082825-faq-v092925.pdf',
      primary: false,
    },
  ],
}

export const inServiceTraining = {
  title: 'Eastern Tennessee Region In-Service Training',
  subtitle: 'Hands-on Agroforestry, Woodland Medicinals & Hardwood Log Cultivation',
  overview:
    'Conducted for Extension agents in the Eastern Tennessee Region, this hands-on training explored practical applications of agroforestry for integrating high-value specialty crops into forest and farm landscapes.',
  sessions: [
    {
      speaker: 'Dr. Huseyin B. Tecimen',
      institution: 'Tennessee State University',
      topic: 'Practical Applications of Agroforestry',
      detail:
        'Integrating crops into forest and farm landscapes to strengthen soil health, land suitability, and woodland resilience.',
    },
    {
      speaker: 'Dr. Ying Gao',
      institution: 'Middle Tennessee State University (MTSU)',
      topic: 'American Ginseng Cultivation & Marketing',
      detail:
        'Cultivation, forest-grown management, and market potential of American ginseng, a high-value medicinal crop native to Tennessee woodlands.',
    },
    {
      speaker: 'Dr. Sougata Bardhan',
      institution: 'Tennessee State University',
      topic: 'Hardwood Log Cultivation',
      detail:
        'Cultivation techniques on hardwood logs—a forest-farming practice offering rapid returns with minimal land disturbance.',
    },
  ],
  photos: [
    {
      src: 'images/ext-training-1.jpg',
      alt: 'Dr. Tecimen demonstrating hardwood log preparation during in-service training',
      caption: 'Hands-on hardwood log demonstration during the Eastern Tennessee training.',
    },
    {
      src: 'images/ext-training-4.jpg',
      alt: 'Extension specialist presenting agroforestry practices at lectern',
      caption: 'Presentation on integrating agroforestry practices into regional landscapes.',
    },
    {
      src: 'images/ext-training-5.jpg',
      alt: 'Dr. Ying Gao of MTSU presenting on American ginseng cultivation',
      caption: 'Dr. Ying Gao (MTSU) discussing American ginseng management and markets.',
    },
    {
      src: 'images/ext-training-2.jpg',
      alt: 'Group photo of Eastern Tennessee Extension training participants',
      caption: 'Eastern Tennessee Extension agents and facilitators following the workshop.',
    },
    {
      src: 'images/ext-training-3.jpg',
      alt: 'Workshop attendees gathered around the hardwood log demonstration table',
      caption: 'Participants reviewing forest farming materials and hardwood log samples.',
    },
  ] as ExtensionPhoto[],
}

export const smallFarmExpo = {
  title: 'Small Farm Expo — 2025',
  description:
    'Connecting directly with Tennessee small-scale farmers, woodland owners, and community growers to share agroforestry fact sheets, soil health recommendations, and woodland crop opportunities.',
  photo: {
    src: 'images/ext-expo-2025.jpg',
    alt: 'TSU Extension booth engaging growers at the 2025 Small Farm Expo',
    caption: 'Sharing agroforestry resources and speaking with growers at Small Farm Expo 2025.',
  },
}

export const extensionPublications: ExtensionPublication[] = [
  {
    id: 'land-suitability-agroforestry',
    title: 'Assessing Land Suitability for Agroforestry',
    authors: 'Huseyin B. Tecimen',
    publisher: 'TSU Cooperative Extension · Digital Scholarship',
    url: 'https://digitalscholarship.tnstate.edu/extension/202',
    summary:
      'A practical guide for evaluating site conditions, soil characteristics, and landscape factors when planning agroforestry installations.',
  },
  {
    id: 'growing-american-ginseng',
    title: 'Growing American Ginseng (Panax quinquefolius L.) in Your Backyard Woods',
    authors: 'TSU Cooperative Extension',
    publisher: 'Tennessee State University Extension Publication (PDF)',
    url: 'https://www.tnstate.edu/extension/documents/Ginseng.pdf',
    summary:
      'Step-by-step extension guide covering woodland site selection, shade canopy requirements, planting, and sustainable stewardship for American ginseng.',
  },
]
