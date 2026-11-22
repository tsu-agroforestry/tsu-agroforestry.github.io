import { ExternalLink } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { resourcePartners } from '../data/resources'
import { assetUrl } from '../data/site'

export function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Tennessee Forestry Network"
        title="Resources"
        subtitle="Trusted Extension portals, state forestry contacts, and landowner organizations supporting sustainable woodlands across Tennessee."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2">
          {resourcePartners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#16382C]/12 bg-white shadow-xs transition hover:border-[#16382C]/35 hover:shadow-md"
            >
              <div className="flex h-44 items-center justify-center border-b border-[#16382C]/8 bg-white p-6">
                <img
                  src={assetUrl(partner.logo)}
                  alt={partner.logoAlt}
                  className="max-h-32 max-w-full object-contain transition duration-300 group-hover:scale-103"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between bg-[#F8F9F6]/60 p-7">
                <div>
                  <span className="inline-flex rounded-full bg-[#E6F0EB] px-3 py-1 text-xs font-semibold text-[#16382C]">
                    {partner.category}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-[#16382C] group-hover:text-[#1E4D3B]">
                    {partner.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382C] group-hover:text-[#A9721B]">
                  Visit Resource
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
