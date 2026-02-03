// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://techbalanceretreat.com"),
  title: {
    default: "TechBalance Retreat",
    template: "%s | TechBalance Retreat",
  },
  description:
    "TechBalance Retreat is an invite-only retreat for technology professionals to pause, reset, and return with clarity. Quiet luxury for high-output minds.",
  alternates: {
    canonical: "https://techbalanceretreat.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
