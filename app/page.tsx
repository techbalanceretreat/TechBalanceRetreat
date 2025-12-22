export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#F6F4EF]">
      <header className="sticky top-0 z-50 border-b border-[rgba(246,244,239,0.10)] bg-[#0B0F14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-[0.18em] uppercase">TechBalance</a>
          <nav className="hidden items-center gap-7 text-sm text-[#D9D6CF] md:flex">
            <a className="hover:text-[#F6F4EF]" href="#about">About</a>
            <a className="hover:text-[#F6F4EF]" href="#experience">Experience</a>
            <a className="hover:text-[#F6F4EF]" href="#venue">Venue</a>
            <a className="hover:text-[#F6F4EF]" href="#faq">FAQ</a>
            <a className="hover:text-[#F6F4EF]" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90"
          >
            Request Invite
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1120px] px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">TechBalance Retreat</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Quiet luxury for high-output minds.
        </h1>
        <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          A curated retreat for technology professionals—designed for clarity, connection, and pace.
          Private accommodations, structured sessions, and real recovery.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90"
          >
            Request Invite
          </a>
          <a
            href="#venue"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(246,244,239,0.18)] px-5 py-2.5 text-sm font-semibold text-[#F6F4EF] transition hover:bg-[rgba(246,244,239,0.05)]"
          >
            Venue Partner Inquiry
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">About</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Designed for the people who build systems.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Curated rooming", "Attendees choose rooms/beds ahead of arrival—clear, calm, organized."],
            ["Structured + spacious", "Sessions with intention. White space by design."],
            ["Luxury, not loud", "High-touch, low-noise. Respectful of venues and neighbors."]
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="venue" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">Venue</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Venue partners we respect.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
            <p className="text-sm text-[#D9D6CF]">Current outreach venue</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Delgado Estate</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">
              We prioritize properties with privacy, strong shared spaces, and clear rules—so the experience is premium and frictionless.
            </p>
          </div>

          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] p-6">
            <h3 className="text-xl font-semibold tracking-tight">Partner with TechBalance</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">
              Small, respectful groups. Clear schedules, rooming lists, and onsite rules.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90">
                Venue inquiry
              </a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-[rgba(246,244,239,0.18)] px-5 py-2.5 text-sm font-semibold text-[#F6F4EF] transition hover:bg-[rgba(246,244,239,0.05)]">
                Read FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Quick answers.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Is this a party retreat?", "No. It’s quiet luxury and structured flow. Respect first."],
            ["How do rooms work?", "Attendees select rooms/beds during onboarding. No confusion onsite."],
            ["Is pricing all-inclusive?", "Stay + food + essentials. Taxes/fees may vary by venue."],
            ["How do venues get selected?", "Privacy, layout, amenities, and rules that support calm."]
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-[rgba(246,244,239,0.14)] p-6">
              <h3 className="text-sm font-semibold">{q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Request invite or partner with us.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
            <h3 className="text-lg font-semibold tracking-tight">Attendees</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">Email us for the overview, dates, and next steps.</p>
            <div className="mt-6">
              <a href="mailto:info@techbalanceretreat.com?subject=Request%20Invite"
                 className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90">
                Request Invite
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
            <h3 className="text-lg font-semibold tracking-tight">Venue Partners</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">Send your property link + availability window.</p>
            <div className="mt-6">
              <a href="mailto:info@techbalanceretreat.com?subject=Venue%20Partner%20Inquiry"
                 className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90">
                Venue Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(246,244,239,0.10)]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">TechBalance Retreat</p>
          <a className="text-sm text-[#D9D6CF] hover:text-[#F6F4EF]" href="mailto:info@techbalanceretreat.com">
            info@techbalanceretreat.com
          </a>
        </div>
      </footer>
    </main>
  );
}
