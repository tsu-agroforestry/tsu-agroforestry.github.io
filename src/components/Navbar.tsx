import { Menu, Trees, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent text-white'
          : 'border-b border-[#16382C]/10 bg-white/95 text-[#18241F] shadow-xs backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3 focus:outline-none">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              transparent
                ? 'bg-white/15 text-white ring-1 ring-white/25 group-hover:bg-white/25'
                : 'bg-[#16382C] text-[#F4EFE6] group-hover:bg-[#1E4D3B]'
            }`}
          >
            <Trees className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold tracking-tight sm:text-lg">
              TSU Agroforestry Lab
            </div>
            <div
              className={`text-[11px] font-medium tracking-wide uppercase ${
                transparent ? 'text-white/80' : 'text-[#4E5E57]'
              }`}
            >
              Tennessee State University
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? transparent
                      ? 'bg-white/20 text-white'
                      : 'bg-[#16382C] text-white'
                    : transparent
                      ? 'text-white/90 hover:bg-white/12 hover:text-white'
                      : 'text-[#2F3F38] hover:bg-[#E6F0EB] hover:text-[#16382C]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
            transparent
              ? 'text-white hover:bg-white/15'
              : 'text-[#16382C] hover:bg-[#E6F0EB]'
          }`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#16382C]/10 bg-white px-4 pt-2 pb-5 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
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
    </header>
  )
}
