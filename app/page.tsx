// app/page.tsx

export default function Page() {
  const mailtoHref =
    "mailto:info@techbalanceretreat.com" +
    "?subject=" +
    encodeURIComponent("Invitation Inquiry - TechBalance") +
    "&body=" +
    encodeURIComponent(
      "Hi TechBalance team,\n\nMy name is ____ and I work as a ____ (job title).\n\nLinkedIn Profile: ____\n\nI'm interested in TechBalance because:\n____\n\nLooking forward to hearing from you.\n\nThank you,\n____"
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
              className="h-10 md:h-16 lg:h-16 w-auto opacity-100"
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
  className="
    inline-flex items-center justify-center rounded-full
    bg-[#F6F4EF] text-[#0B0F14] font-semibold
    px-4 py-2 text-sm
    md:px-5 md:py-2.5
    transition hover:opacity-90
  "
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
          A retreat for technology professionals to pause, reset, and return with clarity.
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

        <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          An intentional retreat for professionals carrying high cognitive load who need space to truly unplug and restore.
        </p>

        <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          The retreat is about honoring both your ambition and your need for rest—showing up as your best self, without pressure to perform.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "Quiet luxury",
              "A premium environment that supports focus, ease, and true rest.",
            ],
            [
              "Curated community",
              "Every attendee shares similar experiences—whether naturally social or not, you'll find peers to connect with authentically.",
            ],
            [
              "Intentional rhythm",
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
          Imagine time off, done right. Wake up well rested to
          breakfast, take your time throughout the day, lounge, enjoy lunch, join in on
          activities throughout the day, and end the night with dinner and
          good conversation.
        </p>

        <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-[#D9D6CF] md:text-base">
          The experience includes one to two thoughtfully structured activities each day,
          designed to help you unwind and support wellbeing both during the retreat and
          long after it ends. The rest of your time is intentionally open, allowing you
          to move at your own pace.
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
              "Intentional rhythm",
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
            [
              "How much will the retreat cost?",
              "Pricing is expected to fall between $1,800 and $2,000 for attendees and for plus ones around $850, depending on final venue and accommodations.",
            ],
            [
              "How do I receive an invitation?",
              "TechBalance operates on an invite-only basis to ensure community alignment and maintain the intimate nature of the experience. To receive an invitation, reach out to our team.",
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
          Inquire About Invitations
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-1">
          <div className="rounded-2xl border border-[rgba(246,244,239,0.14)] bg-[rgba(246,244,239,0.04)] p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Interested in attending TechBalance?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D9D6CF]">
              To maintain the intimacy of the experience, TechBalance is invite-only. Space is intentionally limited. To be considered for an invitation, select the invitation inquiry button. If you have questions, reach out to info@techbalanceretreat.com.
            </p>

            <div className="mt-6">
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center rounded-full bg-[#F6F4EF] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition hover:opacity-90"
              >
                Invitation Inquiry
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
