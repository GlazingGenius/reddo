import { useState, useEffect, useRef } from "react";

// ── Fonts ─────────────────────────────────────────────────────────────────────
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
`;

// ── Data ──────────────────────────────────────────────────────────────────────
const TABLE = [
  { meals:50,   dW:22.5,  dC:20,  dL:5,   dCh:1,  mW:675,   mC:600,   mL:150,  mCh:30,  aW:8213,   aC:7300,   aL:1825,  aCh:365,  m:"SI50"   },
  { meals:100,  dW:45,    dC:40,  dL:10,  dCh:2,  mW:1350,  mC:1200,  mL:300,  mCh:60,  aW:16425,  aC:14600,  aL:3650,  aCh:730,  m:"SI100"  },
  { meals:250,  dW:112.5, dC:100, dL:25,  dCh:5,  mW:3375,  mC:3000,  mL:750,  mCh:150, aW:41063,  aC:36500,  aL:9125,  aCh:1825, m:"SI250"  },
  { meals:500,  dW:225,   dC:200, dL:50,  dCh:10, mW:6750,  mC:6000,  mL:1500, mCh:300, aW:82125,  aC:73000,  aL:18250, aCh:3650, m:"SI500"  },
  { meals:750,  dW:337.5, dC:300, dL:75,  dCh:15, mW:10125, mC:9000,  mL:2250, mCh:450, aW:123188, aC:109500, aL:27375, aCh:5475, m:"SI750"  },
  { meals:1000, dW:450,   dC:400, dL:100, dCh:20, mW:13500, mC:12000, mL:3000, mCh:600, aW:164250, aC:146000, aL:36500, aCh:7300, m:"SI1000" },
  { meals:1500, dW:675,   dC:600, dL:150, dCh:30, mW:20250, mC:18000, mL:4500, mCh:900, aW:246375, aC:219000, aL:54750, aCh:10950,m:"SI1500" },
  { meals:2000, dW:900,   dC:800, dL:200, dCh:40, mW:27000, mC:24000, mL:6000, mCh:1200,aW:328500, aC:292000, aL:73000, aCh:14600,m:"SI2000" },
];

const R = { dW:22.5/50,dC:20/50,dL:5/50,dCh:1/50,mW:675/50,mC:600/50,mL:150/50,mCh:30/50,aW:8213/50,aC:7300/50,aL:1825/50,aCh:365/50 };

function calc(meals: number) {
  return {
    dW:meals*R.dW, dC:meals*R.dC, dL:meals*R.dL, dCh:meals*R.dCh,
    mW:meals*R.mW, mC:meals*R.mC, mL:meals*R.mL, mCh:meals*R.mCh,
    aW:meals*R.aW, aC:meals*R.aC, aL:meals*R.aL, aCh:meals*R.aCh,
  };
}

function getMachine(n: number) {
  if (n<=50)   return { name:"SI50",      sub:"up to 50 meals/day"    };
  if (n<=100)  return { name:"SI100",     sub:"up to 100 meals/day"   };
  if (n<=250)  return { name:"SI250",     sub:"up to 250 meals/day"   };
  if (n<=500)  return { name:"SI500",     sub:"up to 500 meals/day"   };
  if (n<=750)  return { name:"SI750",     sub:"up to 750 meals/day"   };
  if (n<=1000) return { name:"SI1000",    sub:"up to 1,000 meals/day" };
  if (n<=1500) return { name:"SI1500",    sub:"up to 1,500 meals/day" };
  if (n<=2000) return { name:"SI2000",    sub:"up to 2,000 meals/day" };
  if (n<=4000) return { name:"2× SI2000", sub:"up to 4,000 meals/day" };
  return               { name:"3× SI2000",sub:"up to 6,000 meals/day" };
}

// Always en-US so commas never use Indian grouping
const nf = new Intl.NumberFormat("en-US");
const nf1 = new Intl.NumberFormat("en-US", { minimumFractionDigits:1, maximumFractionDigits:1 });

function fmt(n: number, dec = 0) {
  if (dec > 0) return nf1.format(n);
  return nf.format(Math.round(n));
}

// ── Animated counter ──────────────────────────────────────────────────────────
function useAnim(target: number, ms = 500) {
  const [v, setV] = useState(target);
  const raf = useRef(0);
  const from = useRef(target);
  const t0 = useRef(0);
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const start = from.current;
    const diff = target - start;
    if (!diff) return;
    t0.current = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0.current) / ms, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = start + diff * e;
      from.current = cur;
      setV(cur);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, ms]);
  return v;
}

// ── Tokens ────────────────────────────────────────────────────────────────────
const dark   = "#071f0f";
const forest = "#0b3520";
const mid    = "#0f4a28";
const green  = "#1a9f58";
const greenB = "#22c55e";
const white  = "#ffffff";
const w90    = "rgba(255,255,255,0.90)";
const w70    = "rgba(255,255,255,0.70)";
const w50    = "rgba(255,255,255,0.50)";
const w60    = "rgba(255,255,255,0.60)";
const w30    = "rgba(255,255,255,0.30)";
const w12    = "rgba(255,255,255,0.12)";
const w08    = "rgba(255,255,255,0.08)";
const cardBg = "rgba(255,255,255,0.07)";
const cardBd = "rgba(255,255,255,0.13)";
const ink    = "#0f1a12";
const line   = "#e4e9e5";
const bgPage = "#f5f7f5";

// ── Slider ────────────────────────────────────────────────────────────────────
function Slider({ value, onChange }: { value:number; onChange:(v:number)=>void }) {
  const pct = ((value - 50) / (5000 - 50)) * 100;
  return (
    <>
      <style>{`
        .wc-sl{width:100%;height:5px;border-radius:3px;outline:none;cursor:pointer;
          appearance:none;-webkit-appearance:none;
          background:linear-gradient(to right,${greenB} 0%,${greenB} ${pct}%,rgba(255,255,255,0.18) ${pct}%,rgba(255,255,255,0.18) 100%);}
        .wc-sl::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;
          background:#fff;border:2.5px solid ${greenB};box-shadow:0 2px 14px rgba(34,197,94,0.4);
          cursor:pointer;transition:box-shadow .15s;}
        .wc-sl::-webkit-slider-thumb:hover{box-shadow:0 0 0 10px rgba(34,197,94,0.15);}
        .wc-sl::-moz-range-thumb{width:24px;height:24px;border-radius:50%;background:#fff;border:2.5px solid ${greenB};cursor:pointer;}
      `}</style>
      <input className="wc-sl" type="range" min={50} max={5000} step={50} value={value}
        onChange={e => onChange(+e.target.value)} />
    </>
  );
}

// ── Stat card (on dark green bg) ──────────────────────────────────────────────
function StatCard({ label, value, unit, dec=0, accent, tag }: {
  label:string; value:number; unit:string; dec?:number; accent:string; tag:string;
}) {
  const animated = useAnim(value);
  const numStr = fmt(animated, dec);
  const bigSize = animated >= 100000 ? "1.85rem" : animated >= 10000 ? "2.1rem" : animated >= 1000 ? "2.5rem" : "2.9rem";
  return (
    <div style={{
      background: cardBg,
      border: `1px solid ${cardBd}`,
      borderRadius:"14px",
      padding:"26px 22px",
      display:"flex",
      flexDirection:"column",
      gap:"0",
      position:"relative",
      overflow:"hidden",
      backdropFilter:"blur(8px)",
    }}>
      {/* top accent bar */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:accent, borderRadius:"14px 14px 0 0" }} />
      {/* tag */}
      <div style={{ fontSize:"9px", letterSpacing:"0.16em", textTransform:"uppercase" as const, color:w50, fontWeight:600, fontFamily:"Inter,sans-serif", marginBottom:"14px" }}>{tag}</div>
      {/* label */}
      <div style={{ fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase" as const, color:w70, fontWeight:600, fontFamily:"Inter,sans-serif", marginBottom:"10px" }}>{label}</div>
      {/* number */}
      <div style={{ display:"flex", alignItems:"baseline", gap:"5px" }}>
        <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:bigSize, color:white, lineHeight:1, letterSpacing:"-0.02em", fontVariantNumeric:"tabular-nums" }}>
          {numStr}
        </span>
        <span style={{ fontFamily:"Inter,sans-serif", fontWeight:400, fontSize:"12px", color:w50 }}>{unit}</span>
      </div>
    </div>
  );
}

// ── White stat card (for white bg sections) ───────────────────────────────────
function WhiteCard({ label, value, unit, dec=0, accent, icon }: {
  label:string; value:number; unit:string; dec?:number; accent:string; icon:string;
}) {
  const animated = useAnim(value);
  const numStr = fmt(animated, dec);
  const bigSize = animated >= 100000 ? "1.85rem" : animated >= 10000 ? "2.2rem" : animated >= 1000 ? "2.6rem" : "3rem";
  return (
    <div style={{
      background:"#fff",
      border:`1px solid ${line}`,
      borderRadius:"16px",
      padding:"28px 24px",
      borderTop:`3px solid ${accent}`,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"18px" }}>
        <span style={{ fontSize:"18px" }}>{icon}</span>
        <span style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", letterSpacing:"0.13em", textTransform:"uppercase" as const, fontWeight:600, color:"#64748b" }}>{label}</span>
      </div>
      <div style={{ display:"flex", alignItems:"baseline", gap:"5px" }}>
        <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:bigSize, color:ink, lineHeight:1, letterSpacing:"-0.02em", fontVariantNumeric:"tabular-nums" }}>
          {numStr}
        </span>
        <span style={{ fontFamily:"Inter,sans-serif", fontSize:"12px", color:"#94a3b8", fontWeight:400 }}>{unit}</span>
      </div>
    </div>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────
function Tag({ text, onDark=false }: { text:string; onDark?:boolean }) {
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", gap:"8px",
      background: onDark ? "rgba(34,197,94,0.15)" : "rgba(26,159,88,0.1)",
      border: `1px solid ${onDark ? "rgba(34,197,94,0.35)" : "rgba(26,159,88,0.25)"}`,
      borderRadius:"100px",
      padding:"5px 14px",
      marginBottom:"24px",
    }}>
      <div style={{ width:"6px", height:"6px", borderRadius:"50%", background: onDark ? greenB : green }} />
      <span style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase" as const, fontWeight:600, color: onDark ? greenB : green }}>
        {text}
      </span>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function WasteCalculator() {
  const [meals, setMeals] = useState(100);
  const v = calc(meals);
  const mac = getMachine(meals);
  const dispMeals = useAnim(meals, 300);

  return (
    <div style={{ fontFamily:"Inter,sans-serif", minHeight:"100vh", background:bgPage }}>
      <style>{FONTS}</style>
      <style>{`*{box-sizing:border-box;margin:0;padding:0;}`}</style>

      {/* ─────────────────────────────────────────────────────────────────────
          HERO — dark green, big counter, slider
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{
        background:`linear-gradient(160deg,${dark} 0%,${forest} 50%,${mid} 100%)`,
        padding:"72px 24px 64px",
        position:"relative",
        overflow:"hidden",
      }}>
        {/* subtle rings */}
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"450px", height:"450px", borderRadius:"50%", border:`1px solid ${w08}`, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"-50px", right:"-50px", width:"280px", height:"280px", borderRadius:"50%", border:`1px solid ${w12}`, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-80px", left:"8%", width:"320px", height:"320px", borderRadius:"50%", border:`1px solid ${w08}`, pointerEvents:"none" }} />

        <div style={{ maxWidth:"720px", margin:"0 auto", position:"relative", zIndex:1 }}>

          {/* Eyebrow */}
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"12px", marginBottom:"24px" }}>
            <div style={{ height:"1px", width:"36px", background:w30 }} />
            <span style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase" as const, color:w50 }}>
              Environmental Impact Calculator
            </span>
            <div style={{ height:"1px", width:"36px", background:w30 }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily:"Space Grotesk,sans-serif",
            fontWeight:300,
            fontSize:"clamp(1.9rem,4.5vw,3rem)",
            color:w90,
            textAlign:"center",
            lineHeight:1.25,
            marginBottom:"10px",
            letterSpacing:"-0.01em",
          }}>
            Discover the true impact of<br />
            <span style={{ fontWeight:700, color:white }}>your daily operations.</span>
          </h1>
          <p style={{ fontFamily:"Inter,sans-serif", fontSize:"0.9rem", color:w50, textAlign:"center", marginBottom:"48px", lineHeight:1.75, fontWeight:400 }}>
            Drag the slider to match your daily meal count and watch your real environmental footprint calculate in real time.
          </p>

          {/* ── Slider card ── */}
          <div style={{
            background:"rgba(0,0,0,0.25)",
            border:`1px solid ${w12}`,
            borderRadius:"20px",
            padding:"40px 36px 32px",
            backdropFilter:"blur(16px)",
          }}>
            {/* label */}
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase" as const, color:w70, fontWeight:600, textAlign:"center", marginBottom:"10px" }}>
              Meals Served Per Day
            </p>

            {/* big number */}
            <div style={{ textAlign:"center", marginBottom:"8px" }}>
              <span style={{
                fontFamily:"Space Grotesk,sans-serif",
                fontWeight:700,
                fontSize:"clamp(4rem,13vw,7.5rem)",
                color:white,
                lineHeight:1,
                letterSpacing:"-0.03em",
                fontVariantNumeric:"tabular-nums",
                display:"block",
              }}>
                {Math.round(dispMeals).toLocaleString("en-US")}
              </span>
            </div>

            {/* meals / day — MUST be visible */}
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:"14px", fontWeight:500, color:w70, textAlign:"center", letterSpacing:"0.06em", marginBottom:"32px" }}>
              meals / day
            </p>

            <Slider value={meals} onChange={setMeals} />

            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"10px", marginBottom:"24px" }}>
              <span style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", color:w50 }}>50 meals</span>
              <span style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", color:w50 }}>5,000 meals</span>
            </div>

            {/* machine badge */}
            <div style={{ display:"flex", justifyContent:"center" }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"12px",
                background:"rgba(34,197,94,0.12)",
                border:"1px solid rgba(34,197,94,0.3)",
                borderRadius:"100px",
                padding:"10px 22px",
              }}>
                <span style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", letterSpacing:"0.16em", textTransform:"uppercase" as const, color:w50, fontWeight:600 }}>
                  Recommended Machine
                </span>
                <div style={{ width:"1px", height:"14px", background:w30 }} />
                <span style={{ fontFamily:"Space Grotesk,sans-serif", fontSize:"15px", fontWeight:700, color:greenB, letterSpacing:"0.03em" }}>
                  {mac.name}
                </span>
                <span style={{ fontFamily:"Inter,sans-serif", fontSize:"12px", color:w50 }}>
                  — {mac.sub}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          DAILY — dark green cards on dark background
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{
        background:`linear-gradient(180deg,${forest} 0%,#0c3d1e 100%)`,
        padding:"60px 24px",
      }}>
        <div style={{ maxWidth:"1060px", margin:"0 auto" }}>
          <Tag text="Daily Waste Generated" onDark />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"14px" }}>
            <StatCard label="Organic Waste"      value={v.dW}  unit="kg"  dec={v.dW<10?1:0}   accent="#22c55e" tag="Daily" />
            <StatCard label="CO₂ Avoided"        value={v.dC}  unit="kg"  accent="#06b6d4" tag="Daily" />
            <StatCard label="Land Regenerated"   value={v.dL}  unit="m²"  accent="#84cc16" tag="Daily" />
            <StatCard label="Chemicals Replaced" value={v.dCh} unit="kg"  dec={v.dCh<5?1:0}   accent="#f59e0b" tag="Daily" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          MONTHLY — white background section
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{ background:"#fff", padding:"64px 24px" }}>
        <div style={{ maxWidth:"1060px", margin:"0 auto" }}>
          <Tag text="Monthly Impact" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"16px" }}>
            <WhiteCard label="Organic Waste"      value={v.mW}  unit="kg"  accent="#22c55e" icon="🌿" />
            <WhiteCard label="CO₂ Avoided"        value={v.mC}  unit="kg"  accent="#06b6d4" icon="☁️" />
            <WhiteCard label="Land Regenerated"   value={v.mL}  unit="m²"  accent="#84cc16" icon="🗺️" />
            <WhiteCard label="Chemicals Replaced" value={v.mCh} unit="kg"  accent="#f59e0b" icon="⚗️" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          ANNUAL — dark with transparent cards, separated stats
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{
        background:`linear-gradient(145deg,${dark} 0%,${mid} 60%,#113d22 100%)`,
        padding:"72px 24px",
        position:"relative",
        overflow:"hidden",
      }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`radial-gradient(ellipse at 15% 60%,rgba(34,197,94,0.08) 0%,transparent 55%),radial-gradient(ellipse at 85% 20%,rgba(6,182,212,0.06) 0%,transparent 50%)`, pointerEvents:"none" }} />
        <div style={{ maxWidth:"1060px", margin:"0 auto", position:"relative", zIndex:1 }}>

          <div style={{ textAlign:"center", marginBottom:"52px" }}>
            <Tag text="Full Year Projection" onDark />
            <h2 style={{ fontFamily:"Space Grotesk,sans-serif", fontSize:"clamp(1.5rem,3.5vw,2.2rem)", fontWeight:300, color:w90, lineHeight:1.3 }}>
              Your annual environmental footprint,{" "}
              <span style={{ fontWeight:700, color:greenB, fontStyle:"italic" }}>transformed.</span>
            </h2>
          </div>

          {/* 4 big annual stats — each in own card */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"14px" }}>
            {[
              { label:"Organic Waste",       value:v.aW,  unit:"kg",  accent:"#22c55e", icon:"🌿" },
              { label:"CO₂ Avoided",         value:v.aC,  unit:"kg",  accent:"#06b6d4", icon:"☁️" },
              { label:"Land Regenerated",    value:v.aL,  unit:"m²",  accent:"#84cc16", icon:"🗺️" },
              { label:"Chemicals Replaced",  value:v.aCh, unit:"kg",  accent:"#f59e0b", icon:"⚗️" },
            ].map((s,i) => {
              const animated = useAnim(s.value);
              const numStr = fmt(animated);
              const bigSize = animated >= 100000 ? "1.75rem" : animated >= 10000 ? "2.1rem" : animated >= 1000 ? "2.4rem" : "2.8rem";
              return (
                <div key={i} style={{
                  background: cardBg,
                  border: `1px solid ${cardBd}`,
                  borderRadius:"16px",
                  padding:"32px 24px",
                  borderTop:`3px solid ${s.accent}`,
                  backdropFilter:"blur(8px)",
                }}>
                  <div style={{ fontSize:"24px", marginBottom:"16px" }}>{s.icon}</div>
                  <div style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", letterSpacing:"0.13em", textTransform:"uppercase" as const, color:w60, fontWeight:600, marginBottom:"10px" }}>{s.label}</div>
                  <div style={{ display:"flex", alignItems:"baseline", gap:"6px" }}>
                    <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:bigSize, color:white, lineHeight:1, letterSpacing:"-0.02em", fontVariantNumeric:"tabular-nums" }}>
                      {numStr}
                    </span>
                    <span style={{ fontFamily:"Inter,sans-serif", fontSize:"12px", color:w50, fontWeight:400 }}>{s.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p style={{ textAlign:"center", fontFamily:"Inter,sans-serif", fontSize:"12px", color:w30, marginTop:"36px", lineHeight:1.8 }}>
            Values scale linearly with meals served · Projections based on verified operational data across all SI machine models
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          MACHINE TABLE
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{ background:"#fff", padding:"64px 24px" }}>
        <div style={{ maxWidth:"1060px", margin:"0 auto" }}>
          <Tag text="Machine Reference" />
          <div style={{ overflowX:"auto", border:`1px solid ${line}`, borderRadius:"16px" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontFamily:"Inter,sans-serif", fontSize:"13px" }}>
              <thead>
                <tr style={{ background:bgPage, borderBottom:`1px solid ${line}` }}>
                  {["Model","Meals/Day","Waste/Day","CO₂/Day","Land/Day","Chem/Day","Monthly","Annual"].map(h=>(
                    <th key={h} style={{ padding:"14px 18px", textAlign:"left", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase" as const, color:"#94a3b8", fontWeight:600, whiteSpace:"nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row,i)=>{
                  const active = getMachine(meals).name === row.m;
                  return (
                    <tr key={i} style={{ background:active?"#f0fdf4":"transparent", borderBottom:`1px solid ${line}` }}>
                      <td style={{ padding:"15px 18px", fontFamily:"Space Grotesk,sans-serif", fontWeight:600, fontSize:"13px", color:active?"#166534":ink }}>
                        {active && <span style={{ display:"inline-block",width:"7px",height:"7px",borderRadius:"50%",background:green,marginRight:"8px",verticalAlign:"middle" }} />}
                        {row.m}
                      </td>
                      <td style={{ padding:"15px 18px", color:"#475569" }}>{nf.format(row.meals)}</td>
                      <td style={{ padding:"15px 18px", color:"#166534", fontWeight:500 }}>{row.dW} kg</td>
                      <td style={{ padding:"15px 18px", color:"#0e7490", fontWeight:500 }}>{row.dC} kg</td>
                      <td style={{ padding:"15px 18px", color:"#4d7c0f" }}>{row.dL} m²</td>
                      <td style={{ padding:"15px 18px", color:"#92400e" }}>{row.dCh} kg</td>
                      <td style={{ padding:"15px 18px", color:"#475569" }}>{nf.format(row.mW)} kg</td>
                      <td style={{ padding:"15px 18px", color:"#475569" }}>{nf.format(row.aW)} kg</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          CTA
      ───────────────────────────────────────────────────────────────────────── */}
      <section style={{ background:bgPage, padding:"0 24px 72px" }}>
        <div style={{ maxWidth:"1060px", margin:"0 auto" }}>
          <div style={{
            background:`linear-gradient(135deg,${green} 0%,#0c5c2e 100%)`,
            borderRadius:"20px",
            padding:"52px 48px",
            display:"grid",
            gridTemplateColumns:"1fr auto",
            gap:"32px",
            alignItems:"center",
            position:"relative",
            overflow:"hidden",
          }}>
            <div style={{ position:"absolute",top:"-60px",right:"-60px",width:"240px",height:"240px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none" }} />
            <div style={{ position:"relative",zIndex:1 }}>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:"rgba(255,255,255,0.5)", fontWeight:600, marginBottom:"10px" }}>
                Waste ends here
              </p>
              <h2 style={{ fontFamily:"Space Grotesk,sans-serif", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:700, color:white, lineHeight:1.2, marginBottom:"10px" }}>
                Break the waste cycle.<br />Pioneer a waste-free future.
              </h2>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:"0.875rem", color:"rgba(255,255,255,0.65)", lineHeight:1.7, maxWidth:"400px" }}>
                Join operations worldwide transforming organic waste into measurable environmental impact with our SI machines.
              </p>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:"10px",flexShrink:0,position:"relative",zIndex:1 }}>
              <button style={{ background:white,color:forest,border:"none",borderRadius:"10px",padding:"13px 30px",fontFamily:"Inter,sans-serif",fontWeight:700,fontSize:"14px",cursor:"pointer",whiteSpace:"nowrap" as const }}>
                Get a Quote
              </button>
              <button style={{ background:"rgba(255,255,255,0.1)",color:white,border:"1px solid rgba(255,255,255,0.25)",borderRadius:"10px",padding:"13px 30px",fontFamily:"Inter,sans-serif",fontWeight:500,fontSize:"14px",cursor:"pointer",whiteSpace:"nowrap" as const }}>
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

