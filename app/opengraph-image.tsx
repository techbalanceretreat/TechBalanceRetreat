// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0F14",
          color: "#F6F4EF",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          TechBalance Retreat
        </div>
        <div style={{ marginTop: 18, fontSize: 30, opacity: 0.9, maxWidth: 900 }}>
          Quiet luxury for high-output minds.
        </div>
        <div style={{ marginTop: 26, fontSize: 20, opacity: 0.75 }}>
          techbalanceretreat.com
        </div>
      </div>
    ),
    size
  );
}
