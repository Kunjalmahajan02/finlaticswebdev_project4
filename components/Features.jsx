import { FEATURES } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Features</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">Everything your front desk does, on autopilot</h2>
          <p className="mt-4 text-slate-600">
            Built for Indian businesses: local languages, WhatsApp-first, and UPI payments out of the box.
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <li key={f.title} className="rounded-2xl border border-slate-200 p-6 hover:border-brand-400 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-ink">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
