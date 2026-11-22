export interface ResearchProject {
  id: string
  title: string
  status: 'Ongoing' | 'Completed'
  focusArea: string
  ecosystem: string
  summary: string
  image: string
  imageAlt: string
  objectives: string[]
  tags: string[]
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'soil-quality-small-woodlands',
    title: 'Increasing Soil Quality in Small Woodlands Through Soil Management and Treatments',
    status: 'Ongoing',
    focusArea: 'Forest Soil Management & Carbon Sequestration',
    ecosystem: 'Oak-Hickory Forest Stands · Tennessee',
    summary:
      'Evaluating targeted soil management strategies and amendments in Tennessee oak-hickory woodlands to strengthen nutrient availability, tree growth, and below-ground carbon storage.',
    image: 'images/research-woodland.png',
    imageAlt: 'Sun-dappled deciduous oak-hickory woodland stand in Tennessee',
    objectives: [
      'Demonstrate the impacts of soil treatment management strategies, assess their benefits in enhancing the productivity of small woodlands, and measure their impact on carbon sequestration.',
      'Identify the methods that most benefit the forest ecosystem in terms of soil quality, tree growth, and carbon sequestration.',
      'Test the growth performance of soil treatments applied in oak-hickory forest stands to assess their suitability for small woodlands in Tennessee and define their essential nutrient-providing potential and interrelation to carbon sequestration.',
    ],
    tags: ['Oak-Hickory Stands', 'Soil Amendments', 'Nutrient Cycling', 'Carbon Sequestration'],
  },
  {
    id: 'private-woodlands-urban-forests',
    title:
      "Enhancing Soil Quality Practices in Tennessee's Privately Owned Woodlands and Urban Forests",
    status: 'Ongoing',
    focusArea: 'Stakeholder Outreach & Climate-Smart Practices',
    ecosystem: 'Private Woodlands & Urban Forests · Tennessee',
    summary:
      'Bridging soil carbon research and landowner action by identifying carbon sequestration needs and equipping private woodland owners and urban forest stakeholders with practical soil health techniques.',
    image: 'images/research-alleycropping.png',
    imageAlt: 'Agroforestry alley-cropping field plot with young planted trees and green crops',
    objectives: [
      "Better understand carbon sequestration needs in Tennessee's privately owned woodlands and urban forests.",
      'Increase adoption of carbon sequestration practices across Tennessee through targeted awareness efforts and hands-on stakeholder education.',
    ],
    tags: ['Private Woodlands', 'Urban Forestry', 'Stakeholder Education', 'Carbon Practices'],
  },
]
