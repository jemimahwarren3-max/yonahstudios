import { ImageResponse } from "next/og";

export const alt = "Yonah Studios: Brand, Web & Social Design Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf5ea",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, #f3cfa8 0%, transparent 45%), radial-gradient(circle at 85% 85%, #e6c3c9 0%, transparent 45%)",
          fontFamily: "serif",
        }}
      >
        {/* dove mark */}
        <svg width="84" height="76" viewBox="0 0 120 108" fill="none" stroke="#2a2420" strokeWidth={4}>
          <path d="M17 64c10-20 33-30 55-27 6 1 10-2 15-8 1 4 0 8-3 12 6 2 12 2 18-1-4 7-11 12-19 13-4 11-16 18-29 18-14 0-28-2-37-7Z" />
          <path d="M38 58c10-9 25-10 36-5" />
          <path d="M54 64v13M64 64v13" />
          <path d="M26 84h68M30 92h60" />
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 72,
            fontWeight: 600,
            color: "#2a2420",
            letterSpacing: "-0.02em",
          }}
        >
          Yonah Studios
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 30,
            color: "#8a7d6f",
            fontFamily: "sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Brand · Web · Social
        </div>
      </div>
    ),
    { ...size },
  );
}
