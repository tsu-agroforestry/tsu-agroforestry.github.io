import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { assetUrl } from '../data/site'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/people', label: 'People' },
  { to: '/publications', label: 'Publications' },
  { to: '/extension', label: 'Extension' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top Institutional Brand & Partner Banners Row (Soil Intelligence Lab style) */}
      <div className="border-b border-[#16382C]/12 bg-[#FBFBF8] text-[#18241F]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
          {/* Left: Lab Identity + Mobile Menu Trigger */}
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3.5 focus:outline-none">
              <img
                src={assetUrl('images/lab-logo.png')}
                alt="TSU Agroforestry Lab Seal"
                className="h-14 w-14 shrink-0 rounded-full object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-103 sm:h-15 sm:w-15"
              />
              <div className="leading-tight">
                <div className="font-serif text-lg font-semibold tracking-tight text-[#16382C] sm:text-xl">
                  TSU Agroforestry &amp; Extension Lab
                </div>
                <div className="mt-0.5 text-[11px] font-semibold tracking-[0.12em] text-[#5B6B64] uppercase">
                  Tennessee State University
                </div>
              </div>
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#16382C] transition-colors hover:bg-[#E6F0EB] lg:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Right: Institutional Banners — TSU | TN Agriculture | USDA Forest Service FIA */}
          <div
            aria-label="Institutional & partner affiliations"
            className="flex flex-wrap items-center gap-y-3 border-t border-[#16382C]/10 pt-3 lg:flex-nowrap lg:border-t-0 lg:pt-0"
          >
            {/* 1. Tennessee State University */}
            <a
              href="https://www.tnstate.edu/extension/"
              target="_blank"
              rel="noreferrer"
              title="Tennessee State University Cooperative Extension"
              className="group flex items-center pr-4 transition-opacity hover:opacity-85 sm:pr-5"
            >
              <img
                src={assetUrl('images/res-tsu-extension.png')}
                alt="Tennessee State University"
                className="h-10 w-auto object-contain mix-blend-multiply sm:h-11"
              />
            </a>

            {/* 2. Tennessee Department of Agriculture — Forestry */}
            <a
              href="https://www.tn.gov/agriculture/forests.html"
              target="_blank"
              rel="noreferrer"
              title="Tennessee Department of Agriculture — Division of Forestry"
              className="group flex items-center gap-2.5 border-l border-[#16382C]/14 px-4 transition-opacity hover:opacity-85 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 flex-col overflow-hidden rounded-[3px] shadow-2xs ring-1 ring-black/10"
              >
                <span className="flex flex-1 items-center justify-center bg-[#D9381E] font-serif text-[17px] leading-none font-bold tracking-tight text-white">
                  TN
                </span>
                <span className="h-[2px] bg-white" />
                <span className="h-[5px] bg-[#1D2F5D]" />
              </span>
              <div className="leading-tight">
                <div className="text-[10px] font-medium tracking-tight text-[#4E5E57]">
                  Department of
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-[13px] font-bold tracking-tight text-[#18241F]">
                    Agriculture
                  </span>
                  <span className="text-[10px] font-semibold text-[#28624B]">| Forestry</span>
                </div>
              </div>
            </a>

            {/* 3. USDA Forest Service — Forest Inventory and Analysis (FIA) */}
            <a
              href="https://research.fs.usda.gov/programs/fia"
              target="_blank"
              rel="noreferrer"
              title="USDA Forest Service — Forest Inventory and Analysis (FIA)"
              className="group flex items-center gap-2.5 border-l border-[#16382C]/14 pl-4 transition-opacity hover:opacity-85 sm:pl-5"
            >
              <img
                src={assetUrl('images/usfs-shield.svg')}
                alt="USDA Forest Service Shield"
                className="h-9 w-auto shrink-0 sm:h-10"
              />
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="font-sans text-sm font-extrabold tracking-wide text-[#00502F]">
                    FIA
                  </span>
                  <span className="rounded bg-[#00502F]/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#00502F] uppercase">
                    USDA FS
                  </span>
                </div>
                <div className="text-[10px] font-semibold tracking-tight text-[#3E4F47]">
                  Forest Inventory &amp; Analysis
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Editorial Navigation Row */}
      <header className="sticky top-0 z-50 border-b border-[#16382C]/12 bg-[#FBFBF8]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden h-13 items-center gap-7 lg:flex"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative inline-flex h-full items-center text-[13px] font-semibold tracking-[0.09em] uppercase transition-colors ${
                    isActive
                      ? 'text-[#16382C] after:absolute after:inset-x-0 after:bottom-0 after:h-[2.5px] after:bg-[#16382C]'
                      : 'text-[#4E5E57] hover:text-[#16382C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <nav
              aria-label="Mobile navigation"
              className="py-3 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `rounded-lg px-3.5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                        isActive
                          ? 'bg-[#16382C] text-white'
                          : 'text-[#25342E] hover:bg-[#E6F0EB] hover:text-[#16382C]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
