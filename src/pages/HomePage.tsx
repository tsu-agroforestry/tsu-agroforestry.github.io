import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FlaskConical,
  Leaf,
  Sprout,
  Trees,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredOpportunity } from '../data/extension'
import { teamMembers } from '../data/people'
import { publications } from '../data/publications'
import { researchProjects } from '../data/research'
import { assetUrl, siteInfo } from '../data/site'

const pillarIcons = [Sprout, Trees, Users]

export function HomePage() {
  const recentPublications = publications
    .filter((p) => p.type === 'journal')
    .slice(0, 4)

  const journalCount = publications.filter((p) => p.type === 'journal').length
  const chapterCount = publications.filter((p) => p.type === 'chapter').length

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#0E261E]">
        <img
          src={assetUrl(siteInfo.heroImage)}
          alt="Evergreen woodland shoreline representing Tennessee agroforestry and forest ecosystems"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-vignette absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#F4D38B] uppercase ring-1 ring-white/20 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              {siteInfo.university} · {siteInfo.college}
            </div>

            <h1 className="mt-6 font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              TSU Agroforestry &amp; Extension Lab
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#E3ECE7] sm:text-xl">
              {siteInfo.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C48B28] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#B07A1F]"
              >
                Explore Our Research
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/people"
                className="inline-flex items-center gap-2 rounded-xl bg-white/12 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/22"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                {journalCount + chapterCount}+
              </div>
              <div className="mt-1 text-xs font-medium text-[#C5D5CD]">
                Peer-Reviewed Works
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                {researchProjects.length}
              </div>
              <div className="mt-1 text-xs font-medium text-[#C5D5CD]">
                Active Woodland Studies
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                Tennessee
              </div>
              <div className="mt-1 text-xs font-medium text-[#C5D5CD]">
                Statewide Extension Focus
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                Soil &amp; Forest
              </div>
              <div className="mt-1 text-xs font-medium text-[#C5D5CD]">
                Carbon &amp; Resilience Science
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Extension Opportunity Banner */}
      <section className="border-b border-[#C48B28]/25 bg-[#FBF4E6]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-[#C48B28] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white uppercase">
              New
            </span>
            <p className="text-sm leading-snug text-[#3D2C0F]">
              <strong className="font-semibold">{featuredOpportunity.title}:</strong>{' '}
              Producer applications &amp; USDA-NRCS Call for Proposals are open with The Nature
              Conservancy and partners.
            </p>
          </div>
          <Link
            to="/extension"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#16382C] transition hover:text-[#28624B]"
          >
            View Opportunity Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Welcome & Mission Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-wider text-[#28624B] uppercase">
              About Our Lab
            </div>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#16382C] sm:text-4xl">
              {siteInfo.welcomeHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#C48B28]" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[#36463F] sm:text-lg">
              {siteInfo.welcomeCopy}
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {siteInfo.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] ?? Leaf
            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-[#16382C]/10 bg-white p-7 shadow-xs transition hover:border-[#16382C]/25 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F0EB] text-[#16382C]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#16382C]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Ongoing Research Preview */}
      <section className="border-y border-[#16382C]/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#28624B] uppercase">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                Active Projects
              </div>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#16382C] sm:text-4xl">
                Ongoing Research
              </h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D3B] transition hover:text-[#16382C]"
            >
              View full research objectives
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {researchProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#16382C]/10 bg-[#F8F9F6] transition hover:border-[#16382C]/25 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#16382C]/10">
                  <img
                    src={assetUrl(project.image)}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#16382C]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="text-xs font-semibold tracking-wide text-[#28624B] uppercase">
                    {project.ecosystem}
                  </div>
                  <h3 className="mt-2 font-serif text-xl leading-snug font-semibold text-[#16382C]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4E5E57]">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#E6F0EB] px-2.5 py-1 text-xs font-medium text-[#16382C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#28624B] uppercase">
              Research &amp; Extension Team
            </div>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#16382C] sm:text-4xl">
              People Behind the Science
            </h2>
          </div>
          <Link
            to="/people"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D3B] transition hover:text-[#16382C]"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((person) => (
            <Link
              key={person.id}
              to="/people"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#16382C]/10 bg-white shadow-xs transition hover:border-[#16382C]/25 hover:shadow-md"
            >
              <div className="flex justify-center border-b border-[#16382C]/8 bg-[#F2F7F4]/70 p-6">
                <div className="aspect-[4/5] w-44 overflow-hidden rounded-xl bg-[#E6F0EB] shadow-xs ring-1 ring-[#16382C]/12">
                  <img
                    src={assetUrl(person.photo)}
                    alt={person.photoAlt}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-103 ${person.photoPosition ?? 'object-top'}`}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold tracking-wide text-[#A9721B] uppercase">
                  {person.category === 'pi' ? 'Principal Investigator' : 'Graduate Researcher'}
                </div>
                <h3 className="mt-1 font-serif text-xl font-semibold text-[#16382C]">
                  {person.name}
                  {person.credentials ? `, ${person.credentials}` : ''}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-[#28624B]">{person.role}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#4E5E57]">
                  {person.bio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Publications Preview */}
      <section className="border-t border-[#16382C]/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#28624B] uppercase">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Recent Scholarship
              </div>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#16382C] sm:text-4xl">
                Selected Publications
              </h2>
            </div>
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D3B] transition hover:text-[#16382C]"
            >
              Browse all {publications.length} publications
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {recentPublications.map((pub) => (
              <div
                key={pub.id}
                className="flex flex-col justify-between rounded-2xl border border-[#16382C]/10 bg-[#F8F9F6] p-6 transition hover:border-[#16382C]/25"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-md bg-[#16382C] px-2.5 py-0.5 text-xs font-semibold text-white">
                      {pub.year}
                    </span>
                    <span className="text-xs font-medium text-[#28624B]">{pub.venue}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg leading-snug font-semibold text-[#16382C]">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4E5E57]">{pub.authors}</p>
                </div>

                {pub.url && (
                  <div className="mt-4 pt-3">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E4D3B] hover:text-[#A9721B]"
                    >
                      Read Article
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Collaboration CTA */}
      <section className="bg-[#16382C] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Interested in Collaborating or Joining Our Lab?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#CDE0D7] sm:text-base">
              We welcome prospective graduate students, woodland landowners, extension agents, and
              research partners interested in soil health and agroforestry.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#C48B28] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B07A1F]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
