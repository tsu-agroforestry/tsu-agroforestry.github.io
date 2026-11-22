import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { assetUrl, siteInfo } from '../data/site'

const quickLinks = [
  { to: '/research', label: 'Ongoing Research' },
  { to: '/people', label: 'People & Team' },
  { to: '/publications', label: 'Publications' },
  { to: '/extension', label: 'Extension & Outreach' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/resources', label: 'Partner Resources' },
]

const externalLinks = [
  { label: 'TSU Cooperative Extension', url: 'https://www.tnstate.edu/extension/' },
  { label: 'UT-TSU Extension Offices', url: 'https://utextension.tennessee.edu/office-locations-departments-centers/' },
  { label: 'TN Division of Forestry', url: 'https://www.tn.gov/agriculture/forests/staff.html' },
  { label: 'Dr. Tecimen · Google Scholar', url: siteInfo.contact.scholarUrl },
]

export function Footer() {
  return (
    <footer className="border-t border-[#16382C]/15 bg-[#0E261E] text-[#E6ECE9]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3.5">
              <img
                src={assetUrl('images/lab-logo.png')}
                alt="TSU Agroforestry Lab Seal"
                className="h-13 w-13 shrink-0 rounded-full object-contain ring-1 ring-white/20"
              />
              <div>
                <div className="font-serif text-lg font-semibold text-white">
                  {siteInfo.fullName}
                </div>
                <div className="text-xs tracking-wide text-[#A9BEB4] uppercase">
                  {siteInfo.university}
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#C2D2CA]">
              {siteInfo.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium text-[#DCA442] ring-1 ring-white/10">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteInfo.college} · {siteInfo.contact.location}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCA442] uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#C7D6CE] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCA442] uppercase">
              Networks
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C7D6CE] transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCA442] uppercase">
              Contact the Lab
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#C7D6CE]">
              <div>
                <div className="font-medium text-white">{siteInfo.contact.piName}</div>
                <div className="text-xs text-[#9FB4AA]">{siteInfo.contact.piRole}</div>
              </div>
              <a
                href={`mailto:${siteInfo.contact.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#DCA442]" aria-hidden="true" />
                <span>{siteInfo.contact.email}</span>
              </a>
              <a
                href={siteInfo.contact.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#DCA442]" aria-hidden="true" />
                <span>{siteInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#94ACA0] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteInfo.fullName} · {siteInfo.university}. All rights
            reserved.
          </p>
          <p>Research · Forestry Extension · Soil Health &amp; Carbon Stewardship</p>
        </div>
      </div>
    </footer>
  )
}
