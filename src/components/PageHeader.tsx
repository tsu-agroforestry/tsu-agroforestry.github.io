import { assetUrl, siteInfo } from '../data/site'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
  backgroundImage?: string
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  backgroundImage = siteInfo.heroImage,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#16382C] py-14 text-white sm:py-16">
      <img
        src={assetUrl(backgroundImage)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-22 mix-blend-luminosity"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E261E]/80 via-[#16382C]/85 to-[#16382C]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#DCA442] uppercase ring-1 ring-white/15">
            {eyebrow}
          </div>
          <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#D7E3DD] sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
