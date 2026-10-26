import { COMPANY, FOOTER_LINKS } from "@/lib/content";
import { Logo } from "@/components/Navbar";

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-slate-400">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 text-sm max-w-sm">
            {COMPANY.name} builds {COMPANY.product}, a multilingual AI assistant for Indian businesses. Based in{" "}
            {COMPANY.city}, India.
          </p>
          <a href={`mailto:${COMPANY.email}`} className="mt-4 inline-block text-sm text-white hover:text-brand-400">
            {COMPANY.email}
          </a>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <nav key={heading} aria-label={heading}>
            <h3 className="text-sm font-semibold text-white">{heading}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-wrap justify-between gap-2 text-xs">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Made with ❤️ in {COMPANY.city}</p>
        </div>
      </div>
    </footer>
  );
}
