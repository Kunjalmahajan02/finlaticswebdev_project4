import { STEPS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">How it works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">Live in three steps</h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-3 gap-6">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="rounded-2xl bg-white border border-slate-200 p-6">
              <span className="w-10 h-10 rounded-full bg-ink text-white font-bold flex items-center justify-center">{i + 1}</span>
              <h3 className="mt-4 font-semibold text-lg text-ink">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
