export interface CourseItem {
  id: string
  title: string
  level: 'Undergraduate' | 'Graduate'
  credits: string
  terms: string[]
  description: string
  topics: string[]
}

export const courses: CourseItem[] = [
  {
    id: 'natural-resource-management',
    title: 'Natural Resource Management',
    level: 'Undergraduate',
    credits: '3+0 Credits',
    terms: ['Spring 2025', 'Spring 2026'],
    description:
      'Foundational principles of sustainable stewardship across forest, soil, water, and agroforestry landscapes, connecting ecological science with real-world landowner and conservation decision-making.',
    topics: [
      'Ecosystem Stewardship',
      'Soil & Water Conservation',
      'Agroforestry Principles',
      'Sustainable Land Use',
    ],
  },
  {
    id: 'forest-ecology-management',
    title: 'Forest Ecology and Management',
    level: 'Graduate',
    credits: '3+0 Credits',
    terms: ['Fall 2026'],
    description:
      'Advanced examination of forest stand dynamics, soil-plant biogeochemical feedbacks, disturbance and post-fire ecology, and silvicultural strategies for climate-resilient woodland management.',
    topics: [
      'Stand Dynamics',
      'Soil Biogeochemistry',
      'Carbon & Nutrient Cycling',
      'Climate-Adaptive Silviculture',
    ],
  },
]
