import { ArrowRight, ExternalLink, GraduationCap, Mail, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { teamMembers, type TeamMember } from '../data/people'
import { assetUrl } from '../data/site'

function MemberCard({ person, featured = false }: { person: TeamMember; featured?: boolean }) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white shadow-xs transition hover:shadow-md ${
        featured ? 'border-[#16382C]/20' : 'border-[#16382C]/10'
      }`}
    >
      <div className="grid gap-0 md:grid-cols-12">
        {/* Standardized Portrait Container (fixed 4:5 aspect ratio so portraits never over-zoom) */}
        <div className="flex items-start justify-center border-b border-[#16382C]/8 bg-[#F2F7F4]/70 p-6 sm:p-8 md:col-span-4 md:border-r md:border-b-0 lg:col-span-3">
          <div className="aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-xl bg-[#E6F0EB] shadow-sm ring-1 ring-[#16382C]/12">
            <img
              src={assetUrl(person.photo)}
              alt={person.photoAlt}
              className={`h-full w-full object-cover ${person.photoPosition ?? 'object-top'}`}
            />
          </div>
        </div>

        {/* Bio & Actionable Details */}
        <div className="flex flex-col justify-between p-7 sm:p-8 md:col-span-8 lg:col-span-9">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-[#E6F0EB] px-3 py-1 text-xs font-semibold text-[#16382C]">
                {person.role}
              </span>
              {person.affiliation && (
                <span className="text-xs font-medium text-[#4E5E57]">{person.affiliation}</span>
              )}
            </div>

            <h3 className="mt-3 font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl">
              {person.name}
              {person.credentials ? `, ${person.credentials}` : ''}
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#34443D]">{person.bio}</p>

            {/* Research Focus Tags */}
            <div className="mt-6">
              <div className="text-xs font-semibold tracking-wider text-[#4E5E57] uppercase">
                Research Focus
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {person.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-[#16382C]/12 bg-[#F8F9F6] px-3 py-1 text-xs font-medium text-[#1E4D3B]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Academic Profile Links */}
          {(person.email ||
            person.phone ||
            person.scholarUrl ||
            person.linkedinUrl ||
            person.orcidUrl) && (
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#16382C]/10 pt-5">
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#16382C] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1E4D3B]"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {person.email}
                </a>
              )}
              {person.phone && (
                <a
                  href={`tel:+1${person.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#16382C]/20 bg-white px-4 py-2 text-xs font-semibold text-[#16382C] transition hover:bg-[#E6F0EB]"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {person.phone}
                </a>
              )}
              {person.scholarUrl && (
                <a
                  href={person.scholarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#C48B28]/40 bg-[#FBF4E6] px-4 py-2 text-xs font-semibold text-[#7A510E] transition hover:bg-[#F5E7CB]"
                >
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  Google Scholar
                </a>
              )}
              {person.orcidUrl && (
                <a
                  href={person.orcidUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#28624B]/30 bg-[#E6F0EB] px-4 py-2 text-xs font-semibold text-[#16382C] transition hover:bg-[#D5E6DD]"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  ORCID{person.orcidId ? `: ${person.orcidId}` : ''}
                </a>
              )}
              {person.linkedinUrl && (
                <a
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#16382C]/20 bg-white px-4 py-2 text-xs font-semibold text-[#16382C] transition hover:bg-[#E6F0EB]"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function PeoplePage() {
  const pis = teamMembers.filter((m) => m.category === 'pi')
  const graduates = teamMembers.filter((m) => m.category === 'graduate')

  return (
    <div>
      <PageHeader
        eyebrow="Our Team"
        title="People"
        subtitle="Meet the researchers and extension specialists advancing agroforestry, soil biogeochemistry, and sustainable woodland stewardship at Tennessee State University."
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* Principal Investigator */}
        <section aria-labelledby="pi-heading">
          <div className="mb-6 flex items-center gap-3">
            <h2
              id="pi-heading"
              className="font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
            >
              Principal Investigator
            </h2>
            <div className="h-px flex-1 bg-[#16382C]/12" />
          </div>
          <div className="space-y-8">
            {pis.map((person) => (
              <MemberCard key={person.id} person={person} featured />
            ))}
          </div>
        </section>

        {/* Graduate Researchers */}
        <section aria-labelledby="grad-heading">
          <div className="mb-6 flex items-center gap-3">
            <h2
              id="grad-heading"
              className="font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
            >
              Graduate Researchers
            </h2>
            <div className="h-px flex-1 bg-[#16382C]/12" />
          </div>
          <div className="space-y-8">
            {graduates.map((person) => (
              <MemberCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        {/* Join the Lab Callout */}
        <section className="rounded-2xl border border-[#16382C]/15 bg-[#E6F0EB]/60 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#1E4D3B] uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Join Our Research Group
              </div>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-[#16382C]">
                Prospective Students &amp; Visiting Researchers
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#36463F]">
                Passionate about forest ecology, soil microbiology, carbon sequestration, or
                extension outreach? Reach out to Dr. Tecimen with your CV and research interests to
                discuss graduate assistantships, student projects, or collaborations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#16382C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1E4D3B]"
            >
              Contact Dr. Tecimen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
