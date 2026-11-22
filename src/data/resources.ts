export interface ResourcePartner {
  id: string
  name: string
  category: string
  description: string
  url: string
  logo: string
  logoAlt: string
}

export const resourcePartners: ResourcePartner[] = [
  {
    id: 'tsu-extension',
    name: 'TSU Extension',
    category: 'University Extension',
    description:
      'Tennessee State University Cooperative Extension programs delivering research-based education in agriculture, forestry, natural resources, and community development.',
    url: 'https://www.tnstate.edu/extension/',
    logo: 'images/res-tsu-extension.png',
    logoAlt: 'Tennessee State University logo',
  },
  {
    id: 'area-forester',
    name: 'Find Your Area Forester',
    category: 'State Forestry Support',
    description:
      'Connect with Tennessee Department of Agriculture Division of Forestry staff for woodland management plans, forest health advice, and landowner assistance across Tennessee.',
    url: 'https://www.tn.gov/agriculture/forests/staff.html',
    logo: 'images/res-tn-forestry-dept.png',
    logoAlt: 'Tennessee Department of Agriculture Forestry Division banner',
  },
  {
    id: 'tn-forestry-association',
    name: 'Tennessee Forestry Association',
    category: 'Forestry Advocacy & Network',
    description:
      "Supporting sustainable forestry, landowner education, and conservation stewardship throughout Tennessee's private and public forestlands.",
    url: 'https://www.tnforestry.com/',
    logo: 'images/res-tn-forestry-assoc.png',
    logoAlt: 'Tennessee Forestry Association logo',
  },
  {
    id: 'ut-tsu-extension',
    name: 'UT-TSU Cooperative Extension',
    category: 'County Offices & Centers',
    description:
      'Locate local county Extension offices, departments, and research centers operated jointly by the University of Tennessee and Tennessee State University.',
    url: 'https://utextension.tennessee.edu/office-locations-departments-centers/',
    logo: 'images/res-ut-tsu-extension.png',
    logoAlt: 'UT Extension and TSU Cooperative Extension joint logo',
  },
]
