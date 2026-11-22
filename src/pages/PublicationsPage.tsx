import {
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Search,
  SlidersHorizontal,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  formatCitation,
  publications,
  type Publication,
  type PublicationType,
} from '../data/publications'
import { siteInfo } from '../data/site'

type FilterTab = 'all' | PublicationType

function highlightLabAuthor(authors: string) {
  const parts = authors.split(/(Tecimen,\s*H\.?\s*B\.?)/gi)
  return parts.map((part, idx) =>
    /^Tecimen,\s*H\.?\s*B\.?$/i.test(part) ? (
      <strong key={idx} className="font-semibold text-[#16382C]">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    ),
  )
}

const typeLabels: Record<PublicationType, string> = {
  journal: 'Journal Article',
  chapter: 'Book Chapter',
  extension: 'Extension Guide',
}

export function PublicationsPage() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState<FilterTab>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  )

  const counts = useMemo(
    () => ({
      all: publications.length,
      journal: publications.filter((p) => p.type === 'journal').length,
      chapter: publications.filter((p) => p.type === 'chapter').length,
      extension: publications.filter((p) => p.type === 'extension').length,
    }),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return publications
      .filter((pub) => {
        if (activeTab !== 'all' && pub.type !== activeTab) return false
        if (selectedYear !== 'all' && pub.year !== Number(selectedYear)) return false
        if (!q) return true
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q) ||
          String(pub.year).includes(q)
        )
      })
      .sort((a, b) => b.year - a.year)
  }, [query, activeTab, selectedYear])

  const handleCopy = async (pub: Publication) => {
    try {
      await navigator.clipboard.writeText(formatCitation(pub))
      setCopiedId(pub.id)
      window.setTimeout(() => setCopiedId((curr) => (curr === pub.id ? null : curr)), 2000)
    } catch {
      // Clipboard API may be restricted in non-HTTPS contexts
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Scholarship & Output"
        title="Publications"
        subtitle="Peer-reviewed journal articles, book chapters, and Cooperative Extension guides spanning forest soil biogeochemistry, nitrogen cycling, carbon sequestration, and sustainable agroforestry."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Filter & Search Toolbar */}
        <div className="rounded-2xl border border-[#16382C]/12 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 lg:max-w-md">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#4E5E57]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author, journal, or year..."
                aria-label="Search publications"
                className="w-full rounded-xl border border-[#16382C]/18 bg-[#F8F9F6] py-2.5 pr-4 pl-10 text-sm text-[#18241F] placeholder:text-[#6B7B74] focus:border-[#16382C] focus:bg-white focus:outline-none"
              />
            </div>

            {/* Year Select + Google Scholar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#16382C]/18 bg-[#F8F9F6] px-3 py-2">
                <SlidersHorizontal className="h-4 w-4 text-[#4E5E57]" aria-hidden="true" />
                <label htmlFor="year-filter" className="sr-only">
                  Filter by year
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[#18241F] focus:outline-none"
                >
                  <option value="all">All Years</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <a
                href={siteInfo.contact.scholarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#C48B28]/40 bg-[#FBF4E6] px-4 py-2.5 text-xs font-semibold text-[#7A510E] transition hover:bg-[#F5E7CB]"
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Google Scholar Profile
              </a>
            </div>
          </div>

          {/* Type Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2 border-t border-[#16382C]/8 pt-4">
            {(
              [
                ['all', `All Works (${counts.all})`],
                ['journal', `Journal Articles (${counts.journal})`],
                ['chapter', `Book Chapters (${counts.chapter})`],
                ['extension', `Extension Guides (${counts.extension})`],
              ] as [FilterTab, string][]
            ).map(([tab, label]) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  activeTab === tab
                    ? 'bg-[#16382C] text-white'
                    : 'bg-[#F2F7F4] text-[#284539] hover:bg-[#E6F0EB]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-6 flex items-center justify-between text-sm text-[#4E5E57]">
          <span>
            Showing <strong className="text-[#16382C]">{filtered.length}</strong>{' '}
            {filtered.length === 1 ? 'publication' : 'publications'}
          </span>
          {(query || activeTab !== 'all' || selectedYear !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveTab('all')
                setSelectedYear('all')
              }}
              className="text-xs font-semibold text-[#1E4D3B] underline-offset-2 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Publications List */}
        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-[#16382C]/20 bg-white p-12 text-center">
            <p className="font-serif text-lg text-[#16382C]">No matching publications found.</p>
            <p className="mt-1 text-sm text-[#4E5E57]">
              Try clearing your search term or selecting a different year or category.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {filtered.map((pub) => (
              <article
                key={pub.id}
                className="rounded-2xl border border-[#16382C]/10 bg-white p-6 shadow-xs transition hover:border-[#16382C]/25"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#16382C] px-2.5 py-0.5 text-xs font-semibold text-white">
                    {pub.year}
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                      pub.type === 'chapter'
                        ? 'bg-[#FBF4E6] text-[#8B5B10]'
                        : pub.type === 'extension'
                          ? 'bg-[#E6F0EB] text-[#1E4D3B]'
                          : 'bg-[#F2F5F3] text-[#3B4E46]'
                    }`}
                  >
                    {typeLabels[pub.type]}
                  </span>
                </div>

                <h2 className="mt-3 font-serif text-lg leading-snug font-semibold text-[#16382C] sm:text-xl">
                  {pub.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-[#4E5E57]">
                  {highlightLabAuthor(pub.authors)}
                </p>

                <div className="mt-3 flex flex-col justify-between gap-3 border-t border-[#16382C]/8 pt-3.5 sm:flex-row sm:items-center">
                  <p className="text-sm text-[#2F3F38]">
                    <em className="font-medium">{pub.venue}</em>
                    {pub.details ? <span className="text-[#4E5E57]">, {pub.details}</span> : null}
                  </p>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(pub)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#16382C]/15 bg-[#F8F9F6] px-3 py-1.5 text-xs font-semibold text-[#16382C] transition hover:bg-[#E6F0EB]"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#28624B]" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          Cite
                        </>
                      )}
                    </button>

                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#16382C] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1E4D3B]"
                      >
                        View
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
