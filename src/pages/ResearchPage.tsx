import { CheckCircle2, Compass, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { researchProjects } from '../data/research'
import { assetUrl } from '../data/site'

export function ResearchPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Scientific Inquiry"
        title="Ongoing Research"
        subtitle="Investigating soil-plant feedbacks, nutrient cycling, and practical woodland treatments that strengthen forest productivity and carbon storage across Tennessee."
        backgroundImage="images/research-woodland.png"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {researchProjects.map((project, index) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[#16382C]/12 bg-white shadow-xs"
            >
              <div className="grid lg:grid-cols-12">
                <div
                  className={`relative min-h-[280px] bg-[#E6F0EB] lg:col-span-5 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={assetUrl(project.image)}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#16382C]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.status} Project
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-10 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#28624B]">
                    <span className="inline-flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.focusArea}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#4E5E57]">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.ecosystem}
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-2xl leading-snug font-semibold text-[#16382C] sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#4E5E57] sm:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-7">
                    <h3 className="font-sans text-xs font-semibold tracking-wider text-[#16382C] uppercase">
                      Project Objectives
                    </h3>
                    <ul className="mt-4 space-y-3.5">
                      {project.objectives.map((objective) => (
                        <li key={objective} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#28624B]"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-[#2F3F38]">
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-[#16382C]/10 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#E6F0EB] px-3 py-1 text-xs font-medium text-[#16382C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
