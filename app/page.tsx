// app/page.tsx

export default function Page() {
  const mailtoHref =
    "mailto:info@techbalanceretreat.com" +
    "?subject=" +
    encodeURIComponent("TechBalance Details") +
    "&body=" +
    encodeURIComponent(
      "Hi TechBalance team,\n\nMy name is ____ and I am simply a human working as a (job title) ____ who needs a well-deserved break to recharge.\n\nLooking forward to getting more information on the retreat.\n\nThank you,\n____"
    );

  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#F6F4EF] selection:bg-[#F6F4EF] selection:text-[#0B0F14]">
      {/* Subtle grid + top glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* soft glow */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[rgba(246,244,239,0.08)] blur-3xl" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(246,244,239,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,244,239,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* subtle horizontal lines */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(246,244,239,0.10) 1px, transparent 1px)",
            backgroundSize: "100% 160px",
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-[rgba(246,244,239,0.10)] bg-[#0B0F14]/75 backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/techbalance-logo-white.png"
              alt="TechBalance"
              className="h-12 md:h-16 lg:h-18 w-auto opacity-100"
              style={{
                filter: "brightness(1.35) contrast(1.1)",
              }}
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#D9D6CF] md:flex">
            <a className="hover:text-[#F6F4EF] transition" href="#about">
              About
            </a>
            <a className="hover:text-[#F6F4EF] transition" href="#experience">
              Experience
            </a>
            <a className="hover:text-[#F6F4EF] transition" href="#faq">
              FAQ
            </a>
            <a className="hover:text-[#F6F4EF] transition" href="#contact">
              Contact
            </a>
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
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
            TechBalance Retreat
          </p>
          <span className="hidden md:block h-px w-32 bg-[rgba(246,244,239,0.16)]" />
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Quiet luxury for high-output minds.
        </h1>

        <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          Space for the modern-day technology professional to pause, reset, and
          restore balance.
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

        <div className="mt-14 h-px w-full bg-[rgba(246,244,239,0.10)]" />
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
            About
          </p>
          <span className="hidden md:block h-px w-20 bg-[rgba(246,244,239,0.16)]" />
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          A retreat designed for balance.
        </h2>

        <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          TechBalance is a premium retreat experience for professionals who want
          to slow down, reconnect, and return with a clear mind without losing
          momentum.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "Quiet luxury",
              "A premium environment that supports focus, ease, and true rest.",
            ],
            [
              "Curated community",
              "Attendees of this retreat are all in the same boat. Whether you are a social butterfly or not, you should be able to find someone to talk to or watch the sunset with.",
            ],
            [
              "A better pace",
              "Clear flow across the day with space to connect, reset, and return refreshed.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.04)] p-6 shadow-[0_0_0_1px_rgba(246,244,239,0.03)]"
            >
              <h3 className="text-base font-semibold">{t}</h3>
              <div className="mt-3 h-px w-10 bg-[rgba(246,244,239,0.18)]" />
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-[rgba(246,244,239,0.10)]" />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
            Experience
          </p>
          <span className="hidden md:block h-px w-24 bg-[rgba(246,244,239,0.16)]" />
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Well-deserved downtime.
        </h2>

        <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          This retreat is time off, done right. Imagine waking up well rested to
          breakfast, taking your time, lounging, enjoying lunch, joining in on
          activities throughout the day, and ending the night with dinner and
          good conversation.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "All-inclusive",
              "Lodging, meals, and essentials so you can fully settle in.",
            ],
            [
              "Communal",
              "Breakfasts, roundtable meals, and shared moments that build real relationships.",
            ],
            [
              "Intentional flow",
              "A clear daily rhythm, enough structure to feel nurtured, enough space to breathe.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.03)] p-6"
            >
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-[rgba(246,244,239,0.10)]" />
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">FAQ</p>
          <span className="hidden md:block h-px w-16 bg-[rgba(246,244,239,0.16)]" />
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Quick answers.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            [
              "Is pricing all-inclusive?",
              "The price includes stay for the duration of the retreat, meals each day, a goodie bag, and an experience crafted for the modern-day tech professional.",
            ],
            [
              "Can I bring a plus one?",
              "Yes. Discounted tickets will be available for plus ones who share a room or bed with an attendee. Separate rooms require an full priced attendee ticket.",
            ],
            [
              "When is the upcoming retreat and where will it be?",
              "October 9–12. The location and venue will be shared with the email list first once attendee count is confirmed and the best-fit venue is secured.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-[rgba(246,244,239,0.14)] p-6 bg-[rgba(246,244,239,0.02)]"
            >
              <h3 className="text-sm font-semibold">{q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-[rgba(246,244,239,0.10)]" />
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
            Contact
          </p>
          <span className="hidden md:block h-px w-24 bg-[rgba(246,244,239,0.16)]" />
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Request an invite.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-1">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.04)] p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Interested in attending TechBalance?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">
              Email us to receive updates and retreat details.
            </p>

            <div className="mt-6">
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90"
              >
                Request Invite
              </a>
            </div>

            <p className="mt-4 text-xs text-[#D9D6CF]">
              Tip: The email has been prefilled for your convenience. Edit the email before sending.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(246,244,239,0.10)]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D9D6CF]">
            TechBalance Retreat
          </p>
          <a
            className="text-sm text-[#D9D6CF] hover:text-[#F6F4EF] transition"
            href="mailto:info@techbalanceretreat.com"
          >
            info@techbalanceretreat.com
          </a>
        </div>
      </footer>
    </main>
  );
}
