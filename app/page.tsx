export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#F6F4EF]">
      <header className="sticky top-0 z-50 border-b border-[rgba(246,244,239,0.10)] bg-[#0B0F14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-[0.18em] uppercase">TechBalance</a>

          <nav className="hidden items-center gap-7 text-sm text-[#D9D6CF] md:flex">
            <a className="hover:text-[#F6F4EF]" href="#about">About</a>
            <a className="hover:text-[#F6F4EF]" href="#experience">Experience</a>
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

      {/* HERO */}
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
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(246,244,239,0.18)] px-5 py-2.5 text-sm font-semibold text-[#F6F4EF] transition hover:bg-[rgba(246,244,239,0.05)]"
          >
            View Details
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">About</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Designed for the people who build systems.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Quiet luxury", "A premium environment that supports focus, ease, and true rest."],
            ["Curated community", "A room full of tech professionals you’ll actually enjoy being around."],
            ["A better pace", "Clear flow across the day—space to connect, reset, and return refreshed."]
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">Experience</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Everything you need, in one place.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ["All-inclusive", "Stay, meals, and essentials—curated as one seamless experience."],
            ["Well-deserved downtime", "Built-in recovery: movement, stillness, and real rest."],
            ["Communal", "Shared meals and moments that make connection feel natural."],
            ["Intentional structure", "A clear flow to the day—so you can fully settle in and enjoy it."]
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Quick answers.</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Is pricing all-inclusive?", "Your ticket includes stay, meals, and retreat essentials. Travel is not included. Taxes/fees may vary by venue."],
            ["Can I bring a plus one?", "Yes. Plus ones share a room/bed with an attendee. Separate rooms require a full attendee ticket."]
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-[rgba(246,244,239,0.14)] p-6">
              <h3 className="text-sm font-semibold">{q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Request an invite.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-1">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6">
            <h3 className="text-lg font-semibold tracking-tight">Attendees</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">
              Email us for the overview, dates, and next steps.
            </p>
            <div className="mt-6">
              <a
                href="mailto:info@techbalanceretreat.com?subject=Request%20Invite"
                className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90"
              >
                Request Invite
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
