import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  extensionPublications,
  featuredOpportunity,
  inServiceTraining,
  smallFarmExpo,
  type ExtensionPhoto,
} from '../data/extension'
import { assetUrl } from '../data/site'

export function ExtensionPage() {
  const [lightboxPhoto, setLightboxPhoto] = useState<ExtensionPhoto | null>(null)

  useEffect(() => {
    if (!lightboxPhoto) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxPhoto(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxPhoto])

  return (
    <div>
      <PageHeader
        eyebrow="Outreach & Training"
        title="Extension"
        subtitle="Partnering with Tennessee landowners, producers, and Extension agents through funding opportunities, hands-on regional workshops, expos, and practical forestry guides."
        backgroundImage="images/research-alleycropping.png"
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* Featured Agroforestry Opportunity */}
        <section
          aria-labelledby="opportunity-heading"
          className="relative overflow-hidden rounded-2xl border border-[#C48B28]/35 bg-gradient-to-br from-[#FBF4E6] via-white to-[#F2F7F4] p-7 shadow-xs sm:p-10"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C48B28] px-3.5 py-1 text-xs font-bold tracking-wider text-white uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {featuredOpportunity.badge}
            </div>

            <h2
              id="opportunity-heading"
              className="mt-4 font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
            >
              {featuredOpportunity.title}
            </h2>
            <p className="mt-1.5 text-sm font-semibold text-[#8B5B10]">
              {featuredOpportunity.partner}
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#34443D]">
              {featuredOpportunity.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {featuredOpportunity.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    link.primary
                      ? 'bg-[#16382C] text-white hover:bg-[#1E4D3B]'
                      : 'border border-[#16382C]/20 bg-white text-[#16382C] hover:bg-[#E6F0EB]'
                  }`}
                >
                  {link.primary ? (
                    <Award className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span>{link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Eastern Tennessee In-Service Training */}
        <section aria-labelledby="training-heading">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#28624B] uppercase">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              Agent Workshop
            </div>
            <h2
              id="training-heading"
              className="mt-2 font-serif text-3xl font-semibold text-[#16382C]"
            >
              {inServiceTraining.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4E5E57]">
              {inServiceTraining.overview}
            </p>
          </div>

          {/* Speaker Session Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {inServiceTraining.sessions.map((session) => (
              <div
                key={session.speaker}
                className="rounded-2xl border border-[#16382C]/10 bg-white p-6 shadow-xs"
              >
                <div className="text-xs font-semibold tracking-wide text-[#A9721B] uppercase">
                  {session.institution}
                </div>
                <h3 className="mt-1.5 font-serif text-lg font-semibold text-[#16382C]">
                  {session.topic}
                </h3>
                <div className="mt-1 text-xs font-semibold text-[#28624B]">{session.speaker}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">{session.detail}</p>
              </div>
            ))}
          </div>

          {/* Photo Gallery Grid (2 featured + 3 supporting = balanced 5-photo layout) */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-[#4E5E57] uppercase">
                Training Highlights (Click any photo to enlarge)
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {inServiceTraining.photos.slice(0, 2).map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxPhoto(photo)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#16382C]/10 bg-white text-left shadow-xs focus:ring-2 focus:ring-[#16382C] focus:outline-none"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#E6F0EB]">
                    <img
                      src={assetUrl(photo.src)}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                    />
                  </div>
                  <div className="flex-1 bg-white p-3.5 text-xs leading-snug text-[#4E5E57]">
                    {photo.caption}
                  </div>
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {inServiceTraining.photos.slice(2).map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxPhoto(photo)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#16382C]/10 bg-white text-left shadow-xs focus:ring-2 focus:ring-[#16382C] focus:outline-none"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#E6F0EB]">
                    <img
                      src={assetUrl(photo.src)}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                    />
                  </div>
                  <div className="flex-1 bg-white p-3.5 text-xs leading-snug text-[#4E5E57]">
                    {photo.caption}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Small Farm Expo 2025 */}
        <section
          aria-labelledby="expo-heading"
          className="overflow-hidden rounded-2xl border border-[#16382C]/12 bg-white shadow-xs"
        >
          <div className="grid lg:grid-cols-12 lg:items-center">
            <div className="p-7 sm:p-10 lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#28624B] uppercase">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                Community Outreach
              </div>
              <h2
                id="expo-heading"
                className="mt-2 font-serif text-3xl font-semibold text-[#16382C]"
              >
                {smallFarmExpo.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4E5E57]">
                {smallFarmExpo.description}
              </p>
            </div>
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setLightboxPhoto(smallFarmExpo.photo)}
                className="group block w-full overflow-hidden focus:outline-none"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#E6F0EB]">
                  <img
                    src={assetUrl(smallFarmExpo.photo.src)}
                    alt={smallFarmExpo.photo.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                  />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Extension Publications */}
        <section aria-labelledby="ext-pubs-heading">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F0EB] text-[#16382C]">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="ext-pubs-heading"
                className="font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
              >
                Extension Publications &amp; Guides
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {extensionPublications.map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-[#16382C]/12 bg-white p-7 shadow-xs transition hover:border-[#16382C]/35 hover:shadow-md"
              >
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#28624B] uppercase">
                    {pub.publisher}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#16382C] group-hover:text-[#1E4D3B]">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#4E5E57]">By {pub.authors}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">{pub.summary}</p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382C] group-hover:text-[#A9721B]">
                  Read Publication
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged workshop photo"
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0E261E] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo viewer"
              className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/85"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={assetUrl(lightboxPhoto.src)}
              alt={lightboxPhoto.alt}
              className="max-h-[76vh] w-full object-contain bg-black"
            />
            <div className="p-4 text-sm text-[#DCE7E1]">{lightboxPhoto.caption}</div>
          </div>
        </div>
      )}
    </div>
  )
}
