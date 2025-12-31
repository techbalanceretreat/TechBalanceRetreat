export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#F6F4EF] relative overflow-hidden">
      {/* subtle light accents + grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        {/* soft top glow */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#F6F4EF] blur-[140px]" />
        {/* soft left glow */}
        <div className="absolute top-[25%] -left-40 h-[420px] w-[420px] rounded-full bg-[#F6F4EF] blur-[140px]" />
        {/* grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(246,244,239,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,244,239,0.12) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-[rgba(246,244,239,0.10)] bg-[#0B0F14]/75 backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo/techbalance-logo.png"
              alt="TechBalance"
              className="h-6 w-auto"
              loading="eager"
            />
          </a>

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
      <section className="mx-auto max-w-[1120px] px-6 pb-16 pt-14 md:pb-24 md:pt-20 relative">
        {/* thin divider line */}
        <div className="absolute left-6 right-6 top-0 h-px bg-[rgba(246,244,239,0.10)]" />

        <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
          TechBalance Retreat
        </p>

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
            className="inline-flex items-center justify-center rounded-full border border-[rgba(246,244,239,0.20)] px-5 py-2.5 text-sm font-semibold text-[#F6F4EF] transition hover:bg-[rgba(246,244,239,0.06)]"
          >
            View Details
          </a>
        </div>

        {/* bottom divider line */}
        <div className="mt-14 h-px bg-[rgba(246,244,239,0.10)]" />
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
            <div
              key={t}
              className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.035)] p-6"
            >
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
            ["Intentional flow", "A clear rhythm to the day—so you can settle in and fully enjoy it."]
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.035)] p-6"
            >
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
            [
              "Is pricing all-inclusive?",
              "Your ticket includes stay, meals, and retreat essentials. Travel is not included. Taxes/fees may vary by venue."
            ],
            [
              "Can I bring a plus one?",
              "Yes. Plus ones share a room/bed with an attendee. Separate rooms require a full attendee ticket."
            ]
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-[rgba(246,244,239,0.14)] p-6 bg-[rgba(246,244,239,0.02)]">
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

        <div className="mt-8">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.035)] p-6">
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
