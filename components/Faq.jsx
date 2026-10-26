import { FAQS } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">Questions, answered</h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group rounded-xl bg-white border border-slate-200 px-5 py-4">
              <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-ink list-none">
                {q}
                <span className="text-brand-500 text-xl transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
