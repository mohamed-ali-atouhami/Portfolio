import { ImageResponse } from "next/og"
import { content } from "@/lib/content"

export const alt = `${content.name}, ${content.role} in ${content.location}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f4f0e7",
          color: "#1a1814",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28 }}>
          {content.role} · {content.location}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 76,
            lineHeight: 1.05,
          }}
        >
          {content.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 860,
            fontSize: 32,
            lineHeight: 1.35,
          }}
        >
          {content.summary}
        </div>
      </div>
    ),
    { ...size }
  )
}
