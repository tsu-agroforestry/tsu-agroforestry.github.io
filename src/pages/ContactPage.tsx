import { Check, Copy, GraduationCap, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { siteInfo } from '../data/site'

export function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteInfo.contact.email)
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Collaborate With Us"
        title="Contact Us"
        subtitle="We welcome inquiries from researchers, Tennessee landowners, Extension partners, and prospective students."
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Primary Contact Card */}
          <div className="rounded-2xl border border-[#16382C]/12 bg-white p-8 shadow-xs lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-[#28624B] uppercase">
              Direct Contact
            </div>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#16382C]">
              {siteInfo.contact.piName}
            </h2>
            <p className="mt-1 text-sm font-medium text-[#4E5E57]">{siteInfo.contact.piRole}</p>

            <p className="mt-5 text-base leading-relaxed text-[#36463F]">
              {siteInfo.contact.invitation}
            </p>

            <div className="mt-8 space-y-4">
              {/* Email Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#16382C]/12 bg-[#F8F9F6] p-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382C] text-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-[#4E5E57] uppercase">
                      Email
                    </div>
                    <a
                      href={`mailto:${siteInfo.contact.email}`}
                      className="text-sm font-semibold text-[#16382C] hover:underline sm:text-base"
                    >
                      {siteInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#16382C]/15 bg-white px-3 py-1.5 text-xs font-semibold text-[#16382C] transition hover:bg-[#E6F0EB]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#28624B]" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#16382C]/12 bg-[#F8F9F6] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6F0EB] text-[#16382C]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#4E5E57] uppercase">
                    Telephone
                  </div>
                  <a
                    href={siteInfo.contact.phoneHref}
                    className="text-sm font-semibold text-[#16382C] hover:underline sm:text-base"
                  >
                    {siteInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* Affiliation Row */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#16382C]/12 bg-[#F8F9F6] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FBF4E6] text-[#8B5B10]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#4E5E57] uppercase">
                    Institution
                  </div>
                  <div className="text-sm font-semibold text-[#16382C]">
                    {siteInfo.university} · {siteInfo.college}
                  </div>
                  <div className="text-xs text-[#4E5E57]">{siteInfo.contact.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteInfo.contact.email}?subject=Inquiry%20%E2%80%94%20TSU%20Agroforestry%20%26%20Extension%20Lab`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#16382C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E4D3B]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send an Email
              </a>
              <a
                href={siteInfo.contact.scholarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#C48B28]/40 bg-[#FBF4E6] px-5 py-3 text-sm font-semibold text-[#7A510E] transition hover:bg-[#F5E7CB]"
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Google Scholar
              </a>
            </div>
          </div>

          {/* Ways to Connect Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#16382C]/12 bg-[#16382C] p-7 text-white">
              <h3 className="font-serif text-xl font-semibold">How We Can Work Together</h3>
              <ul className="mt-5 space-y-4 text-sm text-[#D7E3DD]">
                <li className="border-b border-white/10 pb-3.5">
                  <div className="font-semibold text-white">Research Collaborations</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#C2D2CA]">
                    Joint proposals, woodland field trials, soil biogeochemistry analyses, and
                    climate-smart forestry partnerships.
                  </p>
                </li>
                <li className="border-b border-white/10 pb-3.5">
                  <div className="font-semibold text-white">Landowner &amp; Agent Extension</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#C2D2CA]">
                    In-service trainings, woodland soil management guidance, and agroforestry
                    suitability workshops across Tennessee.
                  </p>
                </li>
                <li>
                  <div className="font-semibold text-white">Prospective Students</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#C2D2CA]">
                    Share a brief note describing your background, CV, and interests in forest
                    ecology, soil health, or agroforestry.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
