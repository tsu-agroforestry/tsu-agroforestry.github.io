import { ArrowRight, BookMarked, Calendar, Clock, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { courses } from '../data/teaching'

export function TeachingPage() {
  const undergrad = courses.filter((c) => c.level === 'Undergraduate')
  const grad = courses.filter((c) => c.level === 'Graduate')

  return (
    <div>
      <PageHeader
        eyebrow="Academic Instruction"
        title="Teaching"
        subtitle="Preparing the next generation of natural resource scientists, foresters, and land stewards at Tennessee State University through undergraduate and graduate coursework."
      />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
        {/* Undergraduate Courses */}
        <section aria-labelledby="undergrad-heading">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F0EB] text-[#16382C]">
              <BookMarked className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2
              id="undergrad-heading"
              className="font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
            >
              Undergraduate Classes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {undergrad.map((course) => (
              <article
                key={course.id}
                className="flex flex-col justify-between rounded-2xl border border-[#16382C]/12 bg-white p-7 shadow-xs"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#E6F0EB] px-3 py-1 text-xs font-semibold text-[#16382C]">
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F8F9F6] px-3 py-1 text-xs font-medium text-[#4E5E57] ring-1 ring-[#16382C]/10">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {course.credits}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#16382C]">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg bg-[#F2F7F4] px-2.5 py-1 text-xs font-medium text-[#1E4D3B]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#16382C]/10 pt-4 text-xs font-semibold text-[#28624B]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Terms Offered:</span>
                  {course.terms.map((term) => (
                    <span
                      key={term}
                      className="rounded-md bg-[#FBF4E6] px-2.5 py-0.5 text-[#8B5B10]"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Graduate Courses */}
        <section aria-labelledby="grad-courses-heading">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF4E6] text-[#8B5B10]">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2
              id="grad-courses-heading"
              className="font-serif text-2xl font-semibold text-[#16382C] sm:text-3xl"
            >
              Graduate Classes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {grad.map((course) => (
              <article
                key={course.id}
                className="flex flex-col justify-between rounded-2xl border border-[#16382C]/12 bg-white p-7 shadow-xs"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#16382C] px-3 py-1 text-xs font-semibold text-white">
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F8F9F6] px-3 py-1 text-xs font-medium text-[#4E5E57] ring-1 ring-[#16382C]/10">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {course.credits}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#16382C]">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4E5E57]">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg bg-[#F2F7F4] px-2.5 py-1 text-xs font-medium text-[#1E4D3B]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#16382C]/10 pt-4 text-xs font-semibold text-[#28624B]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Terms Offered:</span>
                  {course.terms.map((term) => (
                    <span
                      key={term}
                      className="rounded-md bg-[#FBF4E6] px-2.5 py-0.5 text-[#8B5B10]"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Student Advising Note */}
        <section className="rounded-2xl border border-[#16382C]/15 bg-[#E6F0EB]/60 p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="font-serif text-xl font-semibold text-[#16382C]">
                Course Syllabi &amp; Student Research Mentoring
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#36463F]">
                TSU students interested in enrolling in upcoming classes, independent study
                credits, or thesis research in agroforestry and soil ecology are encouraged to
                contact Dr. Tecimen.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#16382C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E4D3B]"
            >
              Inquire About Courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
