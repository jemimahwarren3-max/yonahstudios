import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1512",
        }}
      >
        <svg width="120" height="108" viewBox="0 0 120 108" fill="none" stroke="#f3ead9" strokeWidth={4}>
          <path d="M17 64c10-20 33-30 55-27 6 1 10-2 15-8 1 4 0 8-3 12 6 2 12 2 18-1-4 7-11 12-19 13-4 11-16 18-29 18-14 0-28-2-37-7Z" />
          <path d="M38 58c10-9 25-10 36-5" />
          <path d="M54 64v13M64 64v13" />
          <path d="M26 84h68M30 92h60" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
