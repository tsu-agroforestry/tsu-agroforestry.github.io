export interface TeamMember {
  id: string
  name: string
  credentials?: string
  role: string
  category: 'pi' | 'graduate' | 'undergraduate' | 'alumni'
  photo: string
  photoAlt: string
  photoPosition?: string
  bio: string
  researchInterests: string[]
  email?: string
  phone?: string
  scholarUrl?: string
  linkedinUrl?: string
  orcidUrl?: string
  orcidId?: string
  affiliation?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'huseyin-tecimen',
    name: 'Huseyin B. Tecimen',
    credentials: 'Ph.D.',
    role: 'Principal Investigator · Forestry Extension Specialist',
    category: 'pi',
    photo: 'images/person-tecimen.jpg',
    photoAlt: 'Portrait of Dr. Huseyin B. Tecimen, Principal Investigator',
    photoPosition: 'object-top',
    affiliation: 'Department of Environmental Sciences · Tennessee State University',
    email: 'htecimen@tnstate.edu',
    phone: '615-963-5547',
    scholarUrl: 'https://scholar.google.com/citations?user=_5QkOpkAAAAJ&hl=en',
    bio: 'Dr. Tecimen is a Forestry Extension Specialist at Tennessee State University with an international background in forest ecology, soil biogeochemistry, and greenhouse gas dynamics. Having held research positions across Turkey, Germany, and the U.S. (including UVM, UF, and OSU), he has extensively studied soil-plant relationships, post-fire recovery, and climate mitigation. At TSU, Dr. Tecimen focuses on developing agroforestry applications and soil treatment strategies to help small and medium landowners build highly productive, climate-resilient forests while enhancing carbon sequestration and soil health.',
    researchInterests: [
      'Forest Ecology',
      'Soil Biogeochemistry',
      'Carbon Sequestration',
      'Agroforestry Systems',
      'Post-Fire Recovery',
      'Greenhouse Gas Dynamics',
    ],
  },
  {
    id: 'himani-singh',
    name: 'Himani G. Singh',
    role: 'Graduate Research Assistant',
    category: 'graduate',
    photo: 'images/person-singh.jpg',
    photoAlt: 'Portrait of Himani G. Singh, Graduate Research Assistant',
    photoPosition: 'object-top',
    affiliation: 'Environmental Sciences · Tennessee State University',
    email: 'hsingh3@my.tnstate.edu',
    phone: '615-496-3260',
    bio: 'Himani is an Environmental Sciences graduate student at Tennessee State University, specializing in soil microbiology, plant-microbe interactions, and sustainable agriculture. Her current research investigates how microbial inoculants affect soil nutrients and secondary metabolite production in medicinal plants like Black Cohosh and Goldenseal. Previously, she led agricultural development and climate-resilient farming workshops in Nepal. Outside the lab, Himani serves as the Secretary of the Environmental Science Club and aspires to a research career dedicated to soil health and sustainable farming solutions.',
    researchInterests: [
      'Soil Microbiology',
      'Plant-Microbe Interactions',
      'Medicinal Forest Plants',
      'Black Cohosh & Goldenseal',
      'Sustainable Agriculture',
    ],
  },
  {
    id: 'huseyin-dogan',
    name: 'Huseyin Dogan',
    credentials: 'Ph.D.',
    role: 'Graduate Researcher · Geospatial & Forest Engineer',
    category: 'graduate',
    photo: 'images/person-dogan.jpg',
    photoAlt: 'Portrait of Huseyin Dogan, Ph.D., Graduate Researcher',
    photoPosition: 'object-center',
    affiliation: 'Environmental Science (Natural Resources) · Tennessee State University',
    email: 'hdogan@my.tnstate.edu',
    phone: '615-484-9878',
    linkedinUrl: 'https://www.linkedin.com/in/ozgurhsyndgn',
    orcidUrl: 'https://orcid.org/0000-0002-3645-0586',
    orcidId: '0000-0002-3645-0586',
    bio: 'Dr. Dogan is a forest ecologist and geospatial scientist pursuing an M.S. in Environmental Science (Natural Resources) at Tennessee State University, holding a Ph.D. in Forest Engineering from Istanbul University-Cerrahpaşa and an M.Sc. in Geodesy and Photogrammetry. With 7+ years of experience in species distribution modeling, remote sensing, and climate impact assessments across Türkiye and Austria, he specializes in R, QGIS, Google Earth Engine, and LiDAR. At TSU, he investigates agroforestry canopy structure, leaf area index (LAI) dynamics, portable LiDAR forest measurements, and soil–plant nutrient interactions.',
    researchInterests: [
      'Species Distribution Modeling',
      'Remote Sensing & LiDAR',
      'Canopy Structure & LAI',
      'Google Earth Engine & GIS',
      'Climate-Forest Adaptation',
      'Soil–Plant Nutrient Dynamics',
    ],
  },
]
