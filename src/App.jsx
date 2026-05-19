import { useState, useEffect } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const DARK = {
  bg:        "#0a0a0a",
  bgCard:    "#111111",
  bgCardAlt: "#161616",
  border:    "#222222",
  text:      "#f0f0f0",
  textMuted: "#888",
  textDim:   "#444",
  accent:    "#00ff88",
  accentBg:  "rgba(0,255,136,0.08)",
  tag:       "#1a1a1a",
  tagBorder: "#2a2a2a",
  tagText:   "#aaa",
};
const LIGHT = {
  bg:        "#f9f9f9",
  bgCard:    "#ffffff",
  bgCardAlt: "#ffffff",
  border:    "#e8e8e8",
  text:      "#0a0a0a",
  textMuted: "#666",
  textDim:   "#bbb",
  accent:    "#00aa55",
  accentBg:  "rgba(0,170,85,0.08)",
  tag:       "#f0f0f0",
  tagBorder: "#e0e0e0",
  tagText:   "#555",
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const STACK = {
  "Frontend":   ["React","Next.js","TypeScript","JavaScript","Tailwind CSS","Vue.js"],
  "Backend":    ["Python","Node.js","PHP","Laravel","MySQL","MongoDB"],
  "Networking": ["Cisco","Linux","GNS3","pfSense","Wireshark","TCP/IP"],
  "DevOps":     ["Docker","AWS","Azure","Git","Terraform","Kubernetes"],
};

const STACK_ICONS = {
  "React":       `${CDN}/react/react-original.svg`,
  "Next.js":     `${CDN}/nextjs/nextjs-original.svg`,
  "TypeScript":  `${CDN}/typescript/typescript-original.svg`,
  "JavaScript":  `${CDN}/javascript/javascript-original.svg`,
  "Tailwind CSS":`${CDN}/tailwindcss/tailwindcss-original.svg`,
  "Vue.js":      `${CDN}/vuejs/vuejs-original.svg`,
  "Python":      `${CDN}/python/python-original.svg`,
  "Node.js":     `${CDN}/nodejs/nodejs-original.svg`,
  "PHP":         `${CDN}/php/php-original.svg`,
  "Laravel":     `${CDN}/laravel/laravel-original.svg`,
  "MySQL":       `${CDN}/mysql/mysql-original.svg`,
  "MongoDB":     `${CDN}/mongodb/mongodb-original.svg`,
  "Linux":       `${CDN}/linux/linux-original.svg`,
  "Docker":      `${CDN}/docker/docker-original.svg`,
  "AWS":         `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Azure":       `${CDN}/azure/azure-original.svg`,
  "Git":         `${CDN}/git/git-original.svg`,
  "Terraform":   `${CDN}/terraform/terraform-original.svg`,
  "Kubernetes":  `${CDN}/kubernetes/kubernetes-plain.svg`,
};

const STACK_DESC = {
  "React":       "Component-based UI library for building interactive interfaces.",
  "Next.js":     "React framework with SSR, SSG, and file-based routing.",
  "TypeScript":  "Typed superset of JavaScript for safer, scalable code.",
  "JavaScript":  "Core language of the web — dynamic, flexible, everywhere.",
  "Tailwind CSS":"Utility-first CSS framework for rapid UI development.",
  "Vue.js":      "Progressive JS framework with a gentle learning curve.",
  "Python":      "Versatile language for scripting, automation, and AI/ML.",
  "Node.js":     "JavaScript runtime for building fast server-side apps.",
  "PHP":         "Server-side scripting language powering millions of sites.",
  "Laravel":     "Elegant PHP framework with expressive, beautiful syntax.",
  "MySQL":       "Relational database management system — fast and reliable.",
  "MongoDB":     "NoSQL document database for flexible, scalable data storage.",
  "Cisco":       "Industry-standard networking hardware and IOS configuration.",
  "Linux":       "Open-source OS powering servers, networks, and everything in between.",
  "GNS3":        "Network simulation platform for testing complex topologies.",
  "pfSense":     "Open-source firewall and router platform based on FreeBSD.",
  "Wireshark":   "Network protocol analyzer for deep packet inspection.",
  "TCP/IP":      "Foundational protocol suite of the internet and modern networks.",
  "Docker":      "Containerization platform for consistent, portable deployments.",
  "AWS":         "Amazon's cloud platform — compute, storage, and beyond.",
  "Azure":       "Microsoft's cloud computing platform and services.",
  "Git":         "Distributed version control system for tracking code changes.",
  "Terraform":   "Infrastructure-as-code tool for cloud provisioning.",
  "Kubernetes":  "Container orchestration system for automated deployment and scaling.",
};

const PROJECTS = [
  { title:"NeTPulse", desc:"Real-time network monitoring dashboard with live latency alerts.", tags:["Laravel","React","MySQL","Axios"], href:"https://github.com/Kenntheus/NeTPulse", type:"Monitoring" },
  { title:"Bilibeads", desc:"Customizable e-commerce for accessory enthusiasts.", tags:["Laravel","PHP","MySQL"], href:"https://github.com/Kenntheus/Bilibeads", type:"Website" },
  { title:"Network Infrastructure and Cyber Security Framework for Dagupan City Hall", desc:"Network & cybersecurity framework for Dagupan City Hall.", tags:["Cisco","Linux","pfSense","Wireshark","Snort"], href:"#", type:"Network Security" },
  { title:"GameBuddy", desc:"Match-based platform to find game partners with real-time chat.", tags:["Laravel","PHP","MySQL","JavaScript","Livewire"], href:"https://github.com/JorlanPrado/GameBuddy-Livewire", type:"Web App" },
  { title:"PHINMA Pulse", desc:"Document request & tracking system for academic records.", tags:["TypeScript","JavaScript","NodeJS","React","MongoDB"], href:"https://github.com/Swa-ne/HATAKONTITANS", type:"Web App" },
  { title:"SHINANAIDE!", desc:"Hockey-like game with shop customizability and multiplayer.", tags:["C#","Unity","Blender","MySQL"], href:"https://github.com/jairasolis/Shinanaide", type:"Game Dev" },
];

const EXPERIENCE = [
  { role:"IT Intern",                 org:"Concentrix",                        year:"Dec 2025 – Mar 2026", type:"work" },
  { role:"BS Information Technology", org:"PHINMA UPang · Computer Security",  year:"2022 – 2026",         type:"edu"  },
  { role:"Senior High School — ICT",  org:"PHINMA University of Pangasinan",   year:"2020 – 2022",         type:"edu"  },
];

const FONT_HEADING = "'Space Grotesk', system-ui, sans-serif";
const FONT_BODY    = "'DM Sans', system-ui, sans-serif";
const FONT_MONO    = "'JetBrains Mono', ui-monospace, Consolas, monospace";

// ─── ANIMATED PAGE WRAPPER ───────────────────────────────────────────────────
function PageWrapper({ children }) {
  return (
    <div style={{ animation:"pageEnter 0.35s cubic-bezier(0.22,1,0.36,1) both" }}>
      {children}
    </div>
  );
}

function AnimCard({ children, index = 0, T, style = {} }) {
  return (
    <div style={{
      background:T.bgCard, border:`1px solid ${T.border}`,
      borderRadius:14, padding:"22px 24px",
      animation:`cardFloat 0.45s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms both`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function ProfilePhoto({ dark, size = 110 }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position:"relative", width:size, height:size, flexShrink:0, cursor:"pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width:size, height:size, borderRadius:16, overflow:"hidden",
        border:`2px solid ${dark ? "#00ff8844" : "#e8e8e8"}`,
        background: dark ? "#1a1a1a" : "#eee",
        position:"relative",
        transition:"border-color 0.5s",
      }}>
        <img
          src="/images/kenn.jpg"
          alt="Martheus Kenn Banaag"
          style={{
            position:"absolute", inset:0,
            width:"100%", height:"100%", objectFit:"cover",
          }}
          onError={e => { e.target.style.display="none"; }}
        />
        <img
          src="/images/kenn-alt.jpg"
          alt="Martheus Kenn Banaag"
          style={{
            position:"absolute", inset:0,
            width:"100%", height:"100%", objectFit:"cover",
            opacity: hovered ? 1 : 0,
            transition:"opacity 0.45s ease",
          }}
          onError={e => { e.target.style.display="none"; }}
        />
      </div>
      <div style={{
        position:"absolute", bottom:6, right:6,
        width:13, height:13, borderRadius:"50%",
        background:"#00cc66",
        border:`2px solid ${dark ? "#0a0a0a" : "#f9f9f9"}`,
        transition:"border-color 0.4s",
        zIndex:2,
      }}/>
    </div>
  );
}

function Tag({ label, T }) {
  return (
    <span style={{
      fontSize:11, padding:"3px 10px", borderRadius:6,
      background:T.tag, border:`1px solid ${T.tagBorder}`,
      color:T.tagText, fontFamily:FONT_MONO,
      letterSpacing:0.3, whiteSpace:"nowrap",
    }}>{label}</span>
  );
}

function StackChip({ name, T }) {
  const icon = STACK_ICONS[name];
  const [err, setErr] = useState(false);
  return (
    <div style={{
      display:"flex", alignItems:"center", gap:6,
      padding:"5px 12px", borderRadius:8,
      background:T.tag, border:`1px solid ${T.tagBorder}`,
      transition:"all 0.15s", cursor:"default",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent+"66"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = T.tagBorder; }}
    >
      {icon && !err && (
        <img src={icon} alt={name} style={{ width:14, height:14, objectFit:"contain" }} onError={() => setErr(true)}/>
      )}
      <span style={{ fontSize:12, color:T.tagText, fontFamily:FONT_MONO, letterSpacing:0.3 }}>{name}</span>
    </div>
  );
}

function SectionHeader({ title, T, action, onAction }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
      <h2 style={{ fontSize:15, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:-0.3 }}>{title}</h2>
      {action && (
        <button onClick={onAction} style={{
          background:"transparent", border:"none", color:T.textMuted,
          fontSize:12, fontFamily:FONT_BODY, cursor:"pointer",
          display:"flex", alignItems:"center", gap:4, padding:0,
          transition:"color 0.15s",
        }}
        onMouseEnter={e => e.currentTarget.style.color = T.accent}
        onMouseLeave={e => e.currentTarget.style.color = T.textMuted}
        >{action} →</button>
      )}
    </div>
  );
}

function BackButton({ T, onBack }) {
  return (
    <button onClick={onBack} style={{
      display:"inline-flex", alignItems:"center", gap:8,
      background:"transparent", border:`1px solid ${T.border}`,
      borderRadius:8, padding:"8px 14px", cursor:"pointer",
      color:T.textMuted, fontFamily:FONT_BODY, fontSize:12,
      transition:"all 0.15s", letterSpacing:0.3,
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor=T.accent+"66"; e.currentTarget.style.color=T.text; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.color=T.textMuted; }}
    >← Back to Portfolio</button>
  );
}

// ─── HOME CARDS ───────────────────────────────────────────────────────────────

function AboutCard({ T, index }) {
  return (
    <AnimCard T={T} index={index}>
      <SectionHeader title="About" T={T}/>
      <p style={{ fontSize:14, lineHeight:1.85, color:T.textMuted, marginBottom:16, fontFamily:FONT_BODY }}>
        I'm an IT graduate passionate about software development and network engineering,
        with a specialization in Computer Security. I bridge the gap between infrastructure
        and application development, turning complex systems into reliable, high-performance solutions.
      </p>
      <p style={{ fontSize:14, lineHeight:1.85, color:T.textMuted, marginBottom:16, fontFamily:FONT_BODY }}>
        Whether it's configuring network topologies, building backend systems, or automating
        workflows with Python, I bring a detail-oriented, systems-thinking approach to
        every project.
      </p>
      <p style={{ fontSize:14, lineHeight:1.85, color:T.textMuted, fontFamily:FONT_BODY }}>
        Lately I've been going deeper into cloud infrastructure and AI engineering,
        exploring how intelligent tooling can supercharge development workflows and
        network operations alike.
      </p>
    </AnimCard>
  );
}

function TechStackCard({ T, onViewAll, index }) {
  const preview = Object.entries(STACK).filter(([cat]) => cat !== "Networking");
  return (
    <AnimCard T={T} index={index}>
      <SectionHeader title="Tech Stack" T={T} action="View all" onAction={onViewAll}/>
      <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
        {preview.map(([cat, items]) => (
          <div key={cat}>
            <div style={{ fontSize:11, fontFamily:FONT_MONO, color:T.textDim, letterSpacing:2, textTransform:"uppercase", marginBottom:10 }}>{cat}</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {items.map(name => <StackChip key={name} name={name} T={T}/>)}
            </div>
          </div>
        ))}
      </div>
    </AnimCard>
  );
}

function ProjectsCard({ T, onViewAll, index }) {
  const displayed = PROJECTS.filter(p => p.title !== "GameBuddy").slice(0, 3);
  return (
    <AnimCard T={T} index={index}>
      <SectionHeader title="Projects" T={T} action="View all" onAction={onViewAll}/>
      <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
        {displayed.map((p, i) => (
          <a key={p.title} href={p.href === "#" ? undefined : p.href}
            target={p.href !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              display:"block", textDecoration:"none",
              padding:"14px 0",
              borderBottom: i < displayed.length-1 ? `1px solid ${T.border}` : "none",
              transition:"all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.paddingLeft = "6px"; }}
            onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; }}
          >
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:5 }}>
              <span style={{ fontSize:13, fontWeight:700, color:T.text, fontFamily:FONT_HEADING }}>{p.title}</span>
              <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0, marginLeft:12 }}>
                <span style={{ fontSize:10, color:T.textDim, fontFamily:FONT_MONO, letterSpacing:1 }}>{p.type}</span>
                {p.href !== "#" && <span style={{ fontSize:11, color:T.accent, fontFamily:FONT_MONO }}>↗</span>}
              </div>
            </div>
            <p style={{ fontSize:13, color:T.textMuted, lineHeight:1.65, marginBottom:8, fontFamily:FONT_BODY }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {p.tags.map(t => <Tag key={t} label={t} T={T}/>)}
            </div>
          </a>
        ))}
      </div>
    </AnimCard>
  );
}

function ExperienceCard({ T, index }) {
  return (
    <AnimCard T={T} index={index}>
      <SectionHeader title="Experience" T={T}/>
      <div style={{ display:"flex", flexDirection:"column" }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{
            display:"flex", gap:14, alignItems:"flex-start",
            paddingBottom: i < EXPERIENCE.length-1 ? 18 : 0,
            marginBottom: i < EXPERIENCE.length-1 ? 18 : 0,
            borderBottom: i < EXPERIENCE.length-1 ? `1px solid ${T.border}` : "none",
          }}>
            <div style={{
              width:28, height:28, borderRadius:6, flexShrink:0, marginTop:2,
              background: e.type==="work" ? T.accentBg : T.tag,
              border:`1px solid ${e.type==="work" ? T.accent+"44" : T.border}`,
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              {e.type === "work"
                ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke={T.accent} strokeWidth="1.8"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke={T.accent} strokeWidth="1.8"/></svg>
                : <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M22 10v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9" stroke={T.textDim} strokeWidth="1.8"/><path d="M12 2L2 7l10 5 10-5-10-5z" stroke={T.textDim} strokeWidth="1.8"/></svg>
              }
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                <span style={{ fontSize:13, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, lineHeight:1.3 }}>{e.role}</span>
                <span style={{ fontSize:10, color:T.textDim, fontFamily:FONT_MONO, letterSpacing:0.5, whiteSpace:"nowrap", flexShrink:0 }}>{e.year}</span>
              </div>
              <div style={{ fontSize:12, color:T.textMuted, marginTop:3, fontFamily:FONT_BODY, letterSpacing:0.1 }}>{e.org}</div>
            </div>
          </div>
        ))}
      </div>
    </AnimCard>
  );
}

function NetworkCard({ T, index }) {
  const [ping, setPing] = useState(12);
  useEffect(() => {
    const t = setInterval(() => setPing(8 + Math.floor(Math.random() * 18)), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimCard T={T} index={index} style={{ background: T.bgCardAlt }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
        <span style={{ fontSize:13, fontWeight:700, color:T.text, fontFamily:FONT_HEADING }}>Network Status</span>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#00cc66", animation:"blink 2s infinite" }}/>
          <span style={{ fontSize:10, color:"#00cc66", fontFamily:FONT_MONO, letterSpacing:1 }}>ONLINE</span>
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {[
          ["Hostname",   "Krayden"],
          ["IP Address", "49.150.68.24"],
          ["Latency",    `${ping}ms`, true],
          ["Uptime",     "21y 11m"],
          ["Status",     "Open to work", true],
        ].map(([k, v, hi]) => (
          <div key={k} style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontSize:11, color:T.textDim, fontFamily:FONT_MONO, letterSpacing:1 }}>{k}</span>
            <span style={{ fontSize:11, color: hi ? T.accent : T.textMuted, fontFamily:FONT_MONO, letterSpacing:0.5 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop:16, height:1, background:`linear-gradient(90deg, ${T.accent}44, transparent)` }}/>
      <div style={{ marginTop:12, fontSize:10, color:T.textDim, fontFamily:FONT_MONO, letterSpacing:1 }}>
        SUBNET · 255.255.255.0 / 24
      </div>
    </AnimCard>
  );
}

function ContactCard({ T, index }) {
  const links = [
    { label:"kenntheus24@gmail.com", href:"mailto:kenntheus24@gmail.com", icon:"✉" },
    { label:"github.com/Kenntheus",  href:"https://github.com/Kenntheus",  icon:"⌥" },
    { label:"LinkedIn",              href:"https://linkedin.com/in/martheus-kenn-banaag", icon:"in" },
  ];
  return (
    <AnimCard T={T} index={index}>
      <SectionHeader title="Contact" T={T}/>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {links.map(({ label, href, icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{
              display:"flex", alignItems:"center", gap:10,
              padding:"10px 12px", borderRadius:8,
              border:`1px solid ${T.border}`, background:T.tag,
              textDecoration:"none", transition:"all 0.15s",
              color:T.textMuted,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent+"66"; e.currentTarget.style.color = T.text; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMuted; }}
          >
            <span style={{ fontSize:11, fontFamily:FONT_MONO, color:T.textDim, width:16, textAlign:"center" }}>{icon}</span>
            <span style={{ fontSize:12, fontFamily:FONT_BODY, letterSpacing:0.2 }}>{label}</span>
            <span style={{ marginLeft:"auto", fontSize:11, color:T.textDim }}>↗</span>
          </a>
        ))}
      </div>
    </AnimCard>
  );
}

function LearningCard({ T, index }) {
  return (
    <AnimCard T={T} index={index} style={{ background:T.bgCardAlt }}>
      <div style={{ fontSize:15, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:-0.3, marginBottom:12 }}>Currently Learning</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {["Cloud Architecture","AI Engineering","iOS Development","ML Ops"].map(t => (
          <span key={t} style={{
            fontSize:11, padding:"4px 10px", borderRadius:6,
            background:T.accentBg, border:`1px solid ${T.accent}33`,
            color:T.accent, fontFamily:FONT_MONO, letterSpacing:0.3,
          }}>{t}</span>
        ))}
      </div>
    </AnimCard>
  );
}

// ─── HEADER (home only) ───────────────────────────────────────────────────────
function Header({ dark, T, onToggle, onNav }) {
  return (
    <div style={{ background:T.bgCard, borderBottom:`1px solid ${T.border}`, marginBottom:36 }}>
      <div style={{ maxWidth:1020, margin:"0 auto", padding:"48px 24px 40px" }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:24, flexWrap:"wrap" }}>

          <div style={{ display:"flex", alignItems:"center", gap:28 }}>
            <ProfilePhoto dark={dark} size={160}/>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8 }}>
                <h1 style={{ fontSize:32, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:-1, lineHeight:1.1 }}>
                  Martheus Kenn Banaag
                </h1>
                <div style={{ width:22, height:22, borderRadius:"50%", background:T.accent, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div style={{ fontSize:13, color:T.textMuted, marginBottom:8, display:"flex", alignItems:"center", gap:6, fontFamily:FONT_BODY }}>
                <span>📍</span> Aguilar, Pangasinan, Philippines
              </div>

              <div style={{ fontSize:14, color:T.textMuted, fontFamily:FONT_BODY, letterSpacing:0.1, marginBottom:20 }}>
                IT Graduate &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Network Engineer
              </div>

              <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
                <a href="mailto:kenntheus24@gmail.com" style={{
                  display:"inline-flex", alignItems:"center", gap:7,
                  padding:"10px 20px", borderRadius:9, fontSize:13, fontFamily:FONT_BODY,
                  background:T.accent, color:"#000", textDecoration:"none", fontWeight:600, letterSpacing:0.2,
                  transition:"opacity 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity="1"}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#000" strokeWidth="2"/><polyline points="22,6 12,13 2,6" stroke="#000" strokeWidth="2"/></svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <button onClick={onToggle} style={{
            width:40, height:40, borderRadius:9,
            background:T.tag, border:`1px solid ${T.border}`,
            cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
            transition:"all 0.15s", fontSize:17, flexShrink:0,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor=T.accent+"66"}
          onMouseLeave={e => e.currentTarget.style.borderColor=T.border}
          title="Toggle theme"
          >{dark ? "☀️" : "🌙"}</button>

        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ T }) {
  return (
    <div style={{ borderTop:`1px solid ${T.border}`, marginTop:40, padding:"24px 0" }}>
      <div style={{ maxWidth:1020, margin:"0 auto", padding:"0 24px", textAlign:"center" }}>
        <span style={{ fontSize:11, color:T.textDim, fontFamily:FONT_MONO, letterSpacing:1 }}>
          © 2026 Martheus Kenn Banaag
        </span>
      </div>
    </div>
  );
}

// ─── SUB-PAGE SHELL ───────────────────────────────────────────────────────────
function SubPageShell({ T, dark, onToggle, onBack, children }) {
  return (
    <div style={{ background:T.bg, minHeight:"100vh" }}>
      <div style={{
        position:"sticky", top:0, zIndex:100,
        background:T.bgCard, borderBottom:`1px solid ${T.border}`,
        padding:"12px 0",
        backdropFilter:"blur(12px)",
      }}>
        <div style={{ maxWidth:1020, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <BackButton T={T} onBack={onBack}/>
          <button onClick={onToggle} style={{
            width:34, height:34, borderRadius:8,
            background:T.tag, border:`1px solid ${T.border}`,
            cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:14, transition:"all 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor=T.accent+"66"}
          onMouseLeave={e => e.currentTarget.style.borderColor=T.border}
          >{dark ? "☀️" : "🌙"}</button>
        </div>
      </div>
      <div style={{ maxWidth:1020, margin:"0 auto", padding:"40px 24px 64px" }}>
        {children}
      </div>
    </div>
  );
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function ProjectsPage({ T, dark, onToggle, onBack }) {
  return (
    <SubPageShell T={T} dark={dark} onToggle={onToggle} onBack={onBack}>
      <PageWrapper>
        <div style={{ marginBottom:32, animation:`cardFloat 0.4s cubic-bezier(0.22,1,0.36,1) both` }}>
          <h1 style={{ fontSize:30, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:-0.8, marginBottom:8 }}>All Projects</h1>
          <p style={{ fontSize:13, color:T.textMuted, fontFamily:FONT_BODY }}>
            {PROJECTS.length} projects across development, networking, and game dev.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(420px, 1fr))", gap:14 }}>
          {PROJECTS.map((p, idx) => (
            <div key={p.title} style={{
              background:T.bgCard, border:`1px solid ${T.border}`,
              borderRadius:14, padding:"22px 24px",
              display:"flex", flexDirection:"column",
              animation:`cardFloat 0.45s cubic-bezier(0.22,1,0.36,1) ${idx * 55}ms both`,
              transition:"border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent+"55"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                <div>
                  <span style={{ fontSize:14, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, display:"block", marginBottom:6 }}>{p.title}</span>
                  <span style={{
                    fontSize:10, padding:"2px 8px", borderRadius:4,
                    background:T.accentBg, border:`1px solid ${T.accent}33`,
                    color:T.accent, fontFamily:FONT_MONO, letterSpacing:1,
                  }}>{p.type}</span>
                </div>
                {p.href !== "#" && (
                  <a href={p.href} target="_blank" rel="noreferrer" style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    padding:"6px 12px", borderRadius:8,
                    background:T.tag, border:`1px solid ${T.tagBorder}`,
                    textDecoration:"none", color:T.accent, fontFamily:FONT_MONO, fontSize:11,
                    transition:"all 0.15s", flexShrink:0, marginLeft:12,
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = T.accent+"66"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = T.tagBorder}
                  >View ↗</a>
                )}
              </div>
              <p style={{ fontSize:13, color:T.textMuted, lineHeight:1.7, fontFamily:FONT_BODY, marginBottom:14, flex:1 }}>{p.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {p.tags.map(t => <Tag key={t} label={t} T={T}/>)}
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </SubPageShell>
  );
}

// ─── TECH STACK PAGE ──────────────────────────────────────────────────────────
function TechStackPage({ T, dark, onToggle, onBack }) {
  return (
    <SubPageShell T={T} dark={dark} onToggle={onToggle} onBack={onBack}>
      <PageWrapper>
        <div style={{ marginBottom:32, animation:`cardFloat 0.4s cubic-bezier(0.22,1,0.36,1) both` }}>
          <h1 style={{ fontSize:30, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:-0.8, marginBottom:8 }}>Tech Stack</h1>
          <p style={{ fontSize:13, color:T.textMuted, fontFamily:FONT_BODY }}>
            Full overview of tools, languages, and technologies I work with.
          </p>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {Object.entries(STACK).map(([cat, items], catIdx) => (
            <div key={cat} style={{
              background:T.bgCard, border:`1px solid ${T.border}`,
              borderRadius:14, padding:"24px",
              animation:`cardFloat 0.45s cubic-bezier(0.22,1,0.36,1) ${catIdx * 80}ms both`,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
                <div style={{ width:3, height:20, borderRadius:99, background:T.accent }}/>
                <h2 style={{ fontSize:14, fontWeight:700, color:T.text, fontFamily:FONT_HEADING, letterSpacing:0.5, textTransform:"uppercase" }}>{cat}</h2>
                <span style={{ fontSize:11, color:T.textDim, fontFamily:FONT_BODY }}>— {items.length} technologies</span>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
                {items.map(name => (
                  <div key={name} style={{
                    display:"flex", alignItems:"center", gap:10,
                    padding:"12px 14px", borderRadius:10,
                    background:T.tag, border:`1px solid ${T.tagBorder}`,
                    transition:"all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent+"66"; e.currentTarget.style.background = T.accentBg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.tagBorder; e.currentTarget.style.background = T.tag; }}
                  >
                    {STACK_ICONS[name] && (
                      <img src={STACK_ICONS[name]} alt={name}
                        style={{ width:20, height:20, objectFit:"contain", flexShrink:0 }}
                        onError={e => e.target.style.display="none"}
                      />
                    )}
                    <span style={{ fontSize:13, fontWeight:600, color:T.text, fontFamily:FONT_BODY }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </SubPageShell>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ T, onNav }) {
  return (
    <PageWrapper>
      <div style={{ maxWidth:1020, margin:"0 auto", padding:"0 24px 48px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 320px", gap:16, alignItems:"start" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <AboutCard       T={T} index={0}/>
            <TechStackCard   T={T} index={1} onViewAll={() => onNav("stack")}/>
            <ProjectsCard    T={T} index={2} onViewAll={() => onNav("projects")}/>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16, position:"sticky", top:24 }}>
            <ExperienceCard  T={T} index={1}/>
            <NetworkCard     T={T} index={2}/>
            <LearningCard    T={T} index={3}/>
            <ContactCard     T={T} index={4}/>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GLOBAL_STYLES = (borderColor) => `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; font-family:'DM Sans', system-ui, sans-serif; }
  body { overflow-x:hidden; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:${borderColor}; border-radius:99px; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes pageEnter { from{opacity:0} to{opacity:1} }
  @keyframes cardFloat { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  a { cursor:pointer; }
`;

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState("home");
  const T = dark ? DARK : LIGHT;

  const navigate = (to) => {
    setPage(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDark = () => setDark(d => !d);

  if (page === "projects") {
    return (
      <div style={{ fontFamily:FONT_BODY }}>
        <style>{GLOBAL_STYLES(T.border)}</style>
        <ProjectsPage T={T} dark={dark} onToggle={toggleDark} onBack={() => navigate("home")}/>
      </div>
    );
  }

  if (page === "stack") {
    return (
      <div style={{ fontFamily:FONT_BODY }}>
        <style>{GLOBAL_STYLES(T.border)}</style>
        <TechStackPage T={T} dark={dark} onToggle={toggleDark} onBack={() => navigate("home")}/>
      </div>
    );
  }

  return (
    <div style={{ background:T.bg, minHeight:"100vh", transition:"background 0.3s, color 0.3s" }}>
      <style>{GLOBAL_STYLES(T.border)}</style>
      <Header dark={dark} T={T} onToggle={toggleDark} onNav={navigate}/>
      <HomePage T={T} onNav={navigate}/>
      <Footer T={T}/>
    </div>
  );
}
