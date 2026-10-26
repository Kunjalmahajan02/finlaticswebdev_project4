import { useState } from "react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/content";

export function Logo({ light = false }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold text-lg ${light ? "text-white" : "text-ink"}`}>
      <span className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center">K</span>
      {COMPANY.name}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between" aria-label="Main">
        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:text-brand-600">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#get-started"
          className="hidden md:inline-block bg-ink text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800"
        >
          Get early access
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-2xl leading-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-slate-200 bg-white px-5 py-3 space-y-1">
          {[...NAV_LINKS, ["#get-started", "Get early access"]].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-2 font-medium text-slate-700">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
