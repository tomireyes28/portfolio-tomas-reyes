import { ImageResponse } from "next/og";

export const alt = "Tomás Reyes — Desarrollo Full Stack y automatización. Portfolio con formato de libro.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#0d1522", color: "#f5ebd6", padding: 64, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 570 }}>
        <div style={{ fontSize: 16, letterSpacing: 4, color: "#ccb58f", marginBottom: 34 }}>PORTFOLIO · BUENOS AIRES</div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05 }}>Tomás Reyes</div>
        <div style={{ width: 64, height: 4, background: "#ae595a", marginTop: 28, marginBottom: 28 }} />
        <div style={{ fontSize: 30, lineHeight: 1.4 }}>Desarrollo Full Stack</div>
        <div style={{ fontSize: 30, lineHeight: 1.4 }}>y automatización</div>
        <div style={{ fontSize: 18, color: "#ccb58f", marginTop: 28 }}>Aplicaciones web · APIs · Procesos</div>
      </div>
      <div style={{ display: "flex", width: 440, height: 352, padding: 14, borderRadius: 10, background: "#493021", border: "1px solid #977049", boxShadow: "10px 20px 25px #0006" }}>
        <div style={{ display: "flex", width: "50%", flexDirection: "column", padding: 20, background: "linear-gradient(90deg, #f0e5cf 80%, #c8b797)", color: "#392619", borderBottom: "8px solid #c8b797" }}>
          <div style={{ fontSize: 13, color: "#7b6044" }}>01 / PERFIL</div>
          <div style={{ marginTop: 30, fontSize: 38, fontWeight: 700 }}>TR</div>
          <div style={{ fontSize: 19, marginTop: 20 }}>Ideas claras.</div>
          <div style={{ fontSize: 19, marginTop: 8 }}>Código que</div>
          <div style={{ fontSize: 19, marginTop: 4 }}>resuelve.</div>
          <div style={{ width: 90, height: 2, background: "#9a7d58", marginTop: 28 }} />
        </div>
        <div style={{ display: "flex", width: "50%", flexDirection: "column", padding: 20, background: "linear-gradient(90deg, #c8b797, #f0e5cf 20%)", color: "#392619", borderBottom: "8px solid #c8b797" }}>
          <div style={{ fontSize: 13, color: "#7b6044" }}>02 / PROYECTOS</div>
          {["Plastic Who?", "MN Agency", "Lumi"].map((name) => <div key={name} style={{ display: "flex", flexDirection: "column", marginTop: 20, padding: 10, background: "#fffaf0", border: "1px solid #c8b797" }}>
            <div style={{ height: 16, background: "#ded2bb", marginBottom: 8 }} />
            <div style={{ fontSize: 14 }}>{name}</div>
          </div>)}
        </div>
      </div>
    </div>, size,
  );
}
