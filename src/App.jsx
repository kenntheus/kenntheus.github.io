import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About","Projects","Skills","Experience","Contact"];

const PROJECTS = [
  {
    title: "SHINANAIDE!",
    desc: "A hockey-like game that will have you playing for hours. This online game has a ton of features, including a shop customizability.",
    stack: ["C#","MySQL","Blender","Unity"],
    type: "Game Development",
    color: "#00f5c4",
    github: "https://github.com/jairasolis/Shinanaide",
    image: "/images/shinanaide.jpg"
  },
  {
    title: "GameBuddy",
    desc: "A Web Application for finding your game buddy through a matching algorithm with real-time chat system, profile and interest management.",
    stack: ["Laravel","PHP","MySQL","JavaScript"],
    type: "Web Application",
    color: "#7c6eff",
    github: "https://github.com/JorlanPrado/GameBuddy-Livewire",
    image: "/images/gamebuddy.png"
  },
  {
    title: "PHINMA Pulse",
    desc: "An Online Document Request & Tracking System designed to automate and transparency the academic record-requesting process.",
    stack: ["Typescript","React","MongoDB"],
    type: "Web Application",
    color: "#a8ff78",
    github: "https://github.com/Swa-ne/HATAKONTITANS",
    image: "/images/phinmapulse.jpg"
  },
  {
    title: "Bilibeads: Accessories",
    desc: "A customizable e-commerce site for accessory enthusiasts to design their own pieces using preferred beads and styles.",
    stack: ["Laravel","PHP","MySQL","JavaScript"],
    type: "Website",
    color: "#ff6b6b",
    github: "https://github.com/Kenntheus/Bilibeads",
    image: "/images/bilibeads.png"
  },
  {
    title: "Dagupan City: NetSec Framework",
    desc: "Strengthening Dagupan City Hall's network and cybersecurity to ensure data integrity, operational continuity, and citizen privacy.",
    stack: ["Cisco","Linux","pfSense"],
    type: "Network and Security",
    color: "#ffd93d",
    github: "#",
    image: "/images/netsec.png"
  },
  {
    title: "NeTPulse",
    desc: "A Laravel-React dashboard for real-time network monitoring, featuring live latency tracking, automated alerts, and CSV reporting.",
    stack: ["Laravel","React","MySQL","Axios"],
    type: "System and Security Monitoring",
    color: "#00c6ff",
    github: "https://github.com/Kenntheus/NeTPulse",
    image: "/images/netpulse.png"
  },
];

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const SKILL_ICONS = {
  "Programming": [
    { name:"Python",       icon:`${CDN}/python/python-original.svg` },
    { name:"JavaScript",   icon:`${CDN}/javascript/javascript-original.svg` },
    { name:"TypeScript",   icon:`${CDN}/typescript/typescript-original.svg` },
    { name:"C#",           icon:`${CDN}/csharp/csharp-original.svg` },
    { name:"Java",         icon:`${CDN}/java/java-original.svg` },
    { name:"SQL",          icon:`${CDN}/mysql/mysql-original.svg` },
    { name:"Bash / Shell", icon:`${CDN}/bash/bash-original.svg` },
    { name:"PHP",          icon:`${CDN}/php/php-original.svg` },
    { name:"Laravel",      icon:`${CDN}/laravel/laravel-original.svg` },
    { name:"React",        icon:`${CDN}/react/react-original.svg` },
    { name:"Node.js",      icon:`${CDN}/nodejs/nodejs-original.svg` },
    { name:"Kotlin",       icon:`${CDN}/kotlin/kotlin-original.svg` },
  ],
  "Networking": [
    { name:"Linux",   icon:`${CDN}/linux/linux-original.svg` },
    { name:"Ubuntu",  icon:`${CDN}/ubuntu/ubuntu-original.svg` },
    { name:"Red Hat", icon:`${CDN}/redhat/redhat-original.svg` },
    { name:"Wireshark", icon:"https://www.wireshark.org/favicon.ico" },
    {
      name:"Cisco",
      icon:null,
      svg: (
        <svg width="36" height="36" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0"  y="25" width="12" height="10" rx="3" fill="#1BA0D7"/>
          <rect x="16" y="15" width="12" height="20" rx="3" fill="#1BA0D7"/>
          <rect x="32" y="5"  width="12" height="30" rx="3" fill="#1BA0D7"/>
          <rect x="48" y="15" width="12" height="20" rx="3" fill="#1BA0D7"/>
          <rect x="64" y="25" width="12" height="10" rx="3" fill="#1BA0D7"/>
          <rect x="80" y="15" width="12" height="20" rx="3" fill="#1BA0D7"/>
        </svg>
      )
    },
    {
      name:"GNS3",
      icon:null,
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="#0288D1"/>
          <text x="18" y="23" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold" fontFamily="monospace">GNS3</text>
        </svg>
      )
    },
    {
      name:"TCP/IP",
      icon:null,
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="6" fill="#455A64"/>
          <text x="18" y="15" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">TCP</text>
          <text x="18" y="27" textAnchor="middle" fontSize="9" fill="#90CAF9" fontFamily="monospace">/IP</text>
        </svg>
      )
    },
    {
      name:"BGP / OSPF",
      icon:null,
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="6" fill="#37474F"/>
          <text x="18" y="15" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">BGP</text>
          <text x="18" y="27" textAnchor="middle" fontSize="8" fill="#80DEEA" fontFamily="monospace">OSPF</text>
        </svg>
      )
    },
    {
      name:"VPN / IPSec",
      icon:null,
      svg: (
        <svg width="36" height="36" viewBox="0 0 36 36">
          <rect width="36" height="36" rx="6" fill="#2E7D32"/>
          <text x="18" y="15" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">VPN</text>
          <text x="18" y="27" textAnchor="middle" fontSize="8" fill="#A5D6A7" fontFamily="monospace">IPSec</text>
        </svg>
      )
    },
  ],
  "Tools & Platforms": [
    { name:"Docker",     icon:`${CDN}/docker/docker-original.svg` },
    { name:"Kubernetes", icon:`${CDN}/kubernetes/kubernetes-plain.svg` },
    { name:"Terraform",  icon:`${CDN}/terraform/terraform-original.svg` },
    { name:"Ansible",    icon:`${CDN}/ansible/ansible-original.svg` },
    { name:"AWS",        icon:`${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name:"Azure",      icon:`${CDN}/azure/azure-original.svg` },
    { name:"GCP",        icon:`${CDN}/googlecloud/googlecloud-original.svg` },
    { name:"Git",        icon:`${CDN}/git/git-original.svg` },
    { name:"GitHub",     icon:`${CDN}/github/github-original.svg` },
    { name:"GitLab",     icon:`${CDN}/gitlab/gitlab-original.svg` },
    { name:"Grafana",    icon:`${CDN}/grafana/grafana-original.svg` },
    { name:"Prometheus", icon:`${CDN}/prometheus/prometheus-original.svg` },
    { name:"Postman",    icon:`${CDN}/postman/postman-original.svg` },
    { name:"Vercel",     icon:`${CDN}/vercel/vercel-original.svg` },
    { name:"Netlify",    icon:`${CDN}/netlify/netlify-original.svg` },
    { name:"Linux",      icon:`${CDN}/linux/linux-original.svg` },
  ],
};

const TIMELINE = [
  {
    year:"2020 – 2022",
    role:"Senior High School",
    org:"PHINMA University of Pangasinan.",
    desc:"Studied ICT for my last year as Senior High School in UPang.",
    type:"Student"
  },
  {
    year:"2022 – 2026",
    role:"College",
    org:"PHINMA University of Pangasinan.",
    desc:"4 years of studying Bachelor of Science in Information Technology, specializing in Computer Security.",
    type:"Student"
  },
  {
    year:"December 2025 – March 2026",
    role:"IT Intern",
    org:"Concentrix",
    desc:"Managed IT support, network diagnostics, and hardware/software deployment to maintain system availability.",
    type:"work"
  }
];

// Particle canvas
function ParticleCanvas({ dark }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const accent = dark ? "0,245,196" : "100,60,220";
      const node = dark ? "100,200,255" : "80,100,180";

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node},${dark ? 0.6 : 0.4})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${accent},${(1 - dist / 130) * (dark ? 0.18 : 0.12)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [dark]);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }} />;
}

// Section reveal
function Reveal({ children, delay = 0 }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
    }}>{children}</div>
  );
}

// Single skill logo card
function SkillLogo({ skill, accent, glassBorder, cardBg }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      title={skill.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:"16px 8px", borderRadius:12,
        background: cardBg,
        backdropFilter:"blur(12px)",
        border:`1px solid ${hovered ? accent+"66" : glassBorder}`,
        transition:"all 0.2s", cursor:"default",
        boxShadow: hovered ? `0 6px 24px ${accent}18` : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        aspectRatio:"1",
      }}
    >
      {skill.svg
        ? skill.svg
        : skill.icon
          ? <img src={skill.icon} alt={skill.name} style={{ width:36, height:36, objectFit:"contain" }} />
          : <span style={{ fontSize:10, fontFamily:"'JetBrains Mono', monospace", color:accent, textAlign:"center", lineHeight:1.3 }}>{skill.name}</span>
      }
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeSkillCat, setActiveSkillCat] = useState("Programming");

  const PROFILE_IMAGE = "/images/kenn.jpg";

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sections = ["hero","about","projects","skills","experience","contact"];
    const handler = () => {
      const scrollY = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const D = dark;

  const bg          = D ? "#050d1a" : "#f0f4fc";
  const glass       = D ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)";
  const glassBorder = D ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const text        = D ? "#e8f0fb" : "#0d1a33";
  const muted       = D ? "#6b85a6" : "#5a6f90";
  const accent      = D ? "#00f5c4" : "#4c3bce";
  const accent2     = D ? "#7c6eff" : "#2563eb";
  const cardBg      = D ? "rgba(14,26,52,0.7)" : "rgba(255,255,255,0.75)";

  const globalFont = "'Inter', 'Segoe UI', sans-serif";
  const monoFont   = "'JetBrains Mono', 'Fira Code', monospace";

  if (loading) return (
    <div style={{ minHeight:"100vh", background:"#050d1a", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:24, fontFamily:globalFont }}>
      <div style={{ position:"relative", width:72, height:72 }}>
        <div style={{ position:"absolute", inset:0, border:"2px solid transparent", borderTopColor:"#00f5c4", borderRadius:"50%", animation:"spin 0.9s linear infinite" }} />
        <div style={{ position:"absolute", inset:8, border:"2px solid transparent", borderTopColor:"#7c6eff", borderRadius:"50%", animation:"spin 1.4s linear infinite reverse" }} />
        <div style={{ position:"absolute", inset:16, background:"#00f5c4", borderRadius:"50%", opacity:0.15 }} />
      </div>
      <div style={{ color:"#00f5c4", fontFamily:monoFont, fontSize:13, letterSpacing:3, textTransform:"uppercase", animation:"pulse 1.5s ease-in-out infinite" }}>
        Initializing...
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }
      `}</style>
    </div>
  );

  return (
    <div style={{ background: bg, color: text, fontFamily: globalFont, minHeight:"100vh", width:"100%", transition:"background 0.4s, color 0.4s" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; margin: 0; padding: 0; overflow-x: hidden; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${accent}55; border-radius: 99px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes gradshift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scanline { 0%{top:-20%} 100%{top:110%} }
        @keyframes profilePulse { 0%,100%{box-shadow:0 0 0 0 ${accent}44, 0 0 32px ${accent}22} 50%{box-shadow:0 0 0 8px ${accent}00, 0 0 48px ${accent}33} }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .nav-link { cursor:pointer; transition:color 0.2s; }
        .nav-link:hover { color: ${accent}; }
        .btn { cursor:pointer; border:none; outline:none; font-family:${globalFont}; transition:all 0.25s; }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(0) scale(0.97); }
        .project-card { transition: transform 0.3s, box-shadow 0.3s; cursor:pointer; }
        .project-card:hover { transform: translateY(-6px) scale(1.01); }
        .tag { display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-family:${monoFont}; font-weight:500; margin:3px; }
        .tl-line { position:absolute; left:20px; top:0; bottom:0; width:1px; background: linear-gradient(to bottom, ${accent}44, ${accent2}44); }
        a { text-decoration:none; }
        .contact-card:hover { border-color: var(--col) !important; box-shadow: 0 4px 20px rgba(0,0,0,0.2); transform: translateY(-2px); }
        .contact-card { transition: all 0.25s; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }
      `}</style>

      {/* ─── NAV ─────────────────────────────────────── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        backdropFilter:"blur(18px)",
        background: D ? "rgba(5,13,26,0.8)" : "rgba(240,244,252,0.85)",
        borderBottom:`1px solid ${glassBorder}`,
        padding:"0 32px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between"
      }}>
        <span style={{ fontFamily:monoFont, fontWeight:600, fontSize:15, color:accent, letterSpacing:1 }}>
          &lt;Kenn/&gt;
        </span>
        <div style={{ display:"flex", gap:28, alignItems:"center" }}>
          {NAV_LINKS.map(l => (
            <span
              key={l}
              className="nav-link"
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                fontSize:13, fontWeight:500, letterSpacing:0.5,
                color: activeSection === l.toLowerCase() ? accent : muted,
                borderBottom: activeSection === l.toLowerCase() ? `1px solid ${accent}` : "1px solid transparent",
                paddingBottom:2
              }}
            >{l}</span>
          ))}
          <button
            className="btn"
            onClick={() => setDark(!dark)}
            style={{
              background: glass, border:`1px solid ${glassBorder}`,
              borderRadius:8, padding:"6px 14px", color: text,
              fontSize:13, fontWeight:500
            }}
          >{D ? "☀ Light" : "◐ Dark"}</button>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────── */}
      <section id="hero" style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", paddingTop:60 }}>
        <ParticleCanvas dark={D} />
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${D?"rgba(0,245,196,0.025)":"rgba(76,59,206,0.03)"} 1px, transparent 1px), linear-gradient(90deg, ${D?"rgba(0,245,196,0.025)":"rgba(76,59,206,0.03)"} 1px, transparent 1px)`, backgroundSize:"48px 48px", pointerEvents:"none" }} />

        <div style={{ position:"relative", zIndex:2, maxWidth:960, margin:"0 auto", padding:"0 40px", width:"100%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:60, justifyContent:"space-between" }}>
            <div style={{ flex:"1 1 0", minWidth:0 }}>
              <div style={{ fontFamily:monoFont, fontSize:12, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:20, display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ display:"inline-block", width:32, height:1, background:accent }} />
                Available for opportunities
                <span style={{ display:"inline-block", width:8, height:8, borderRadius:"50%", background:"#2ef", animation:"blink 1.5s infinite" }} />
              </div>

              <h1 style={{ fontSize:"clamp(2.4rem,5vw,4.2rem)", fontWeight:700, lineHeight:1.08, letterSpacing:-1, marginBottom:16 }}>
                <span style={{ display:"block", color: text }}>Martheus Kenn</span>
                <span style={{ display:"block", color: accent, lineHeight:1.15 }}>Banaag</span>
              </h1>

              <div style={{ fontFamily:monoFont, fontSize:"clamp(0.9rem,2vw,1.15rem)", fontWeight:500, color:muted, marginBottom:20, letterSpacing:0.5 }}>
                <span style={{ color: accent }}>&gt;</span>{" "}
                IT Graduate{" "}
                <span style={{ color:D?"#7c6eff":"#4c3bce" }}>|</span>{" "}
                Developer & Network Engineer
              </div>

              <p style={{ fontSize:15, lineHeight:1.75, color:muted, maxWidth:520, marginBottom:36 }}>
                Building resilient networks and elegant software. I bridge the gap between infrastructure and application — turning complex systems into reliable, high-performance solutions.
              </p>

              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <button
                  className="btn"
                  onClick={() => scrollTo("projects")}
                  style={{
                    background: `linear-gradient(135deg, ${accent}22, ${accent2}22)`,
                    border:`1px solid ${accent}55`,
                    color:accent, borderRadius:10, padding:"12px 28px",
                    fontSize:14, fontWeight:600, letterSpacing:0.5,
                    boxShadow: D ? `0 0 24px ${accent}22` : "none"
                  }}
                >View Projects →</button>
                <button
                  className="btn"
                  onClick={() => scrollTo("contact")}
                  style={{
                    background: "transparent",
                    border:`1px solid ${glassBorder}`,
                    color:muted, borderRadius:10, padding:"12px 28px",
                    fontSize:14, fontWeight:500
                  }}
                >Contact Me</button>
              </div>

              <div style={{ display:"flex", gap:36, marginTop:52, paddingTop:32, borderTop:`1px solid ${glassBorder}` }} />
            </div>

            {/* RIGHT: Profile photo */}
            <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
              <div style={{ position:"relative", width:220, height:220 }}>
                <div style={{
                  position:"absolute", inset:-6, borderRadius:"50%",
                  background:`conic-gradient(${accent}, ${accent2}, transparent, ${accent})`,
                  animation:"spin 6s linear infinite",
                  opacity: D ? 0.5 : 0.35,
                }} />
                <div style={{ position:"absolute", inset:-2, borderRadius:"50%", background: bg }} />
                <div style={{
                  position:"relative", width:"100%", height:"100%",
                  borderRadius:"50%", overflow:"hidden",
                  border:`2px solid ${accent}55`,
                  animation:"profilePulse 3s ease-in-out infinite",
                  background: D ? "rgba(14,26,52,0.9)" : "rgba(220,230,248,0.9)",
                }}>
                  {PROFILE_IMAGE ? (
                    <img src={PROFILE_IMAGE} alt="Martheus Kenn Banaag" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  ) : (
                    <div style={{
                      width:"100%", height:"100%", display:"flex", flexDirection:"column",
                      alignItems:"center", justifyContent:"center", gap:8,
                      backgroundImage:`linear-gradient(135deg, ${accent}10, ${accent2}10)`,
                    }}>
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="28" r="18" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" strokeOpacity="0.5"/>
                        <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" strokeOpacity="0.4"/>
                      </svg>
                      <span style={{ fontSize:10, fontFamily:monoFont, color:accent, opacity:0.6, letterSpacing:1.5, textTransform:"uppercase" }}>Add Photo</span>
                    </div>
                  )}
                </div>
              </div>
              <div style={{
                background: D ? "rgba(14,26,52,0.8)" : "rgba(255,255,255,0.8)",
                backdropFilter:"blur(12px)", border:`1px solid ${glassBorder}`,
                borderRadius:99, padding:"6px 18px", display:"flex", alignItems:"center", gap:8,
              }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:"#2ef", animation:"blink 1.5s infinite" }} />
                <span style={{ fontSize:12, fontFamily:monoFont, color:muted }}>Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────── */}
      <section id="about" style={{ padding:"100px 0", position:"relative" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
            <div style={{ fontFamily:monoFont, fontSize:11, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
              01. About Me
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, marginBottom:40, letterSpacing:-0.5 }}>
              The Stack Behind<br/>
              <span style={{ color:accent }}>the Engineer</span>
            </h2>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>
            <Reveal delay={100}>
              <p style={{ fontSize:15, lineHeight:1.85, color:muted, marginBottom:20 }}>
                I'm an IT graduate passionate about software development and network engineering, with a focus on creating efficient, reliable, and well-structured solutions.
              </p>
              <p style={{ fontSize:15, lineHeight:1.85, color:muted, marginBottom:28 }}>
                Whether it's working with network configurations, developing backend systems, or automating workflows with Python, I bring a detail-oriented and systems-thinking approach to every project.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                {[
                  ["Frontend","React, Vue, Next.js, Tailwind","#7c6eff"],
                  ["Backend","Python, Node.js, PHP, Java","#00f5c4"],
                  ["Networking","Cisco, SD-WAN, BGP, GNS3","#00c6ff"],
                  ["DevOps","K8s, Terraform, Ansible, CI/CD","#a8ff78"],
                  ["Security","Firewalls, SIEM, Zero-Trust","#ff6b6b"],
                  ["Cloud","AWS, Azure, GCP, Multi-cloud","#ffd93d"],
                ].map(([cat, items, col]) => (
                  <div key={cat} style={{
                    background: cardBg, backdropFilter:"blur(12px)",
                    border:`1px solid ${glassBorder}`, borderRadius:12,
                    padding:"16px 18px", borderLeft:`3px solid ${col}`
                  }}>
                    <div style={{ fontSize:11, fontFamily:monoFont, color:col, fontWeight:600, marginBottom:6, textTransform:"uppercase", letterSpacing:1 }}>{cat}</div>
                    <div style={{ fontSize:12, color:muted, lineHeight:1.6 }}>{items}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────── */}
      <section id="projects" style={{ padding:"100px 0", background: D?"rgba(6,14,28,0.5)":"rgba(230,236,252,0.4)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
            <div style={{ fontFamily:monoFont, fontSize:11, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
              02. Work
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, marginBottom:12, letterSpacing:-0.5 }}>
              Selected <span style={{ color:accent }}>Projects</span>
            </h2>
            <p style={{ fontSize:15, color:muted, marginBottom:48 }}>Real-world systems built with purpose and precision.</p>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:20 }}>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  className="project-card"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    background: cardBg, backdropFilter:"blur(16px)",
                    border:`1px solid ${hoveredProject === i ? p.color+"55" : glassBorder}`,
                    borderRadius:16, padding:"24px",
                    boxShadow: hoveredProject === i ? `0 12px 40px ${p.color}18, 0 0 0 1px ${p.color}22` : "none",
                    transition:"all 0.3s"
                  }}
                >
                  <div style={{
                    width:"100%", height:160, borderRadius:10, marginBottom:18, overflow:"hidden",
                    background: D ? `linear-gradient(135deg, ${p.color}18, ${p.color}06)` : `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
                    border:`1px solid ${p.color}28`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    position:"relative"
                  }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:10 }} />
                    ) : (
                      <>
                        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${p.color}18 1px, transparent 1px), linear-gradient(90deg, ${p.color}18 1px, transparent 1px)`, backgroundSize:"24px 24px" }} />
                        <div style={{ position:"relative", textAlign:"center" }}>
                          <div style={{ fontSize:28, marginBottom:6, opacity:0.5 }}>🖼</div>
                          <div style={{ fontSize:11, fontFamily:monoFont, color:p.color, opacity:0.6, letterSpacing:1 }}>ADD IMAGE</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                    <span style={{ fontSize:11, fontFamily:monoFont, color:p.color, textTransform:"uppercase", letterSpacing:1.5, fontWeight:600 }}>{p.type}</span>
                    <a href={p.github} style={{ fontSize:13, color:muted, transition:"color 0.2s" }} title="GitHub">GH↗</a>
                  </div>
                  <h3 style={{ fontSize:17, fontWeight:700, marginBottom:10, color:text }}>{p.title}</h3>
                  <p style={{ fontSize:13, color:muted, lineHeight:1.7, marginBottom:16 }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                    {p.stack.map(s => (
                      <span key={s} className="tag" style={{ background: D?`${p.color}12`:`${p.color}18`, color:p.color, border:`1px solid ${p.color}33` }}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────── */}
      <section id="skills" style={{ padding:"100px 0" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
            <div style={{ fontFamily:monoFont, fontSize:11, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
              03. Arsenal
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, marginBottom:40, letterSpacing:-0.5 }}>
              Skills & <span style={{ color:accent }}>Technologies</span>
            </h2>
          </Reveal>

          {/* Category tabs */}
          <div style={{ display:"flex", gap:8, marginBottom:36 }}>
            {Object.keys(SKILL_ICONS).map(cat => (
              <button
                key={cat}
                className="btn"
                onClick={() => setActiveSkillCat(cat)}
                style={{
                  background: activeSkillCat===cat ? `linear-gradient(135deg, ${accent}22, ${accent2}22)` : "transparent",
                  border: `1px solid ${activeSkillCat===cat ? accent+"66" : glassBorder}`,
                  color: activeSkillCat===cat ? accent : muted,
                  borderRadius:8, padding:"8px 18px", fontSize:13, fontWeight:500
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Logo grid + currently learning side by side */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"start" }}>
            {/* Logo grid */}
            <Reveal>
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fill, minmax(70px, 1fr))",
                gap:12
              }}>
                {SKILL_ICONS[activeSkillCat].map((s, i) => (
                  <Reveal key={s.name} delay={i * 40}>
                    <SkillLogo skill={s} accent={accent} glassBorder={glassBorder} cardBg={cardBg} />
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Currently learning */}
            <Reveal delay={200}>
              <div style={{
                minWidth:220,
                background: D?"rgba(0,245,196,0.06)":"rgba(76,59,206,0.06)",
                border:`1px solid ${accent}33`,
                borderRadius:12, padding:"16px 20px"
              }}>
                <div style={{ fontSize:12, fontFamily:monoFont, color:accent, marginBottom:10, letterSpacing:1.5, textTransform:"uppercase" }}>Currently Learning</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {["Cloud","AI Engineering","iOS Development","ML Ops"].map(t => (
                    <span key={t} className="tag" style={{ background: D?"rgba(124,110,255,0.12)":"rgba(124,110,255,0.1)", color:"#7c6eff", border:"1px solid #7c6eff33" }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ──────────────────────────────── */}
      <section id="experience" style={{ padding:"100px 0", background: D?"rgba(6,14,28,0.5)":"rgba(230,236,252,0.4)" }}>
        <div style={{ maxWidth:900, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
            <div style={{ fontFamily:monoFont, fontSize:11, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
              04. Journey
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, marginBottom:52, letterSpacing:-0.5 }}>
              Experience &{" "}
              <span style={{ color:accent }}>Education</span>
            </h2>
          </Reveal>

          <div style={{ position:"relative", paddingLeft:56 }}>
            <div className="tl-line" />
            {TIMELINE.map((item, i) => {
              const nodeColor = item.type==="work" ? accent : item.type==="cert" ? "#ffd93d" : "#7c6eff";
              return (
                <Reveal key={item.role} delay={i*100}>
                  <div style={{ position:"relative", marginBottom:40 }}>
                    <div style={{
                      position:"absolute", left:-47, top:4,
                      width:14, height:14, borderRadius:"50%",
                      border:`2px solid ${nodeColor}`,
                      background: D?"#050d1a":"#f0f4fc",
                      boxShadow: `0 0 10px ${nodeColor}55`
                    }} />
                    <div style={{
                      background: cardBg, backdropFilter:"blur(12px)",
                      border:`1px solid ${glassBorder}`,
                      borderRadius:14, padding:"20px 24px",
                      borderLeft:`3px solid ${nodeColor}`
                    }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:6 }}>
                        <h3 style={{ fontSize:16, fontWeight:700, color:text }}>{item.role}</h3>
                        <span style={{ fontSize:11, fontFamily:monoFont, color:nodeColor, background:`${nodeColor}15`, padding:"3px 10px", borderRadius:99, whiteSpace:"nowrap" }}>{item.year}</span>
                      </div>
                      <div style={{ fontSize:13, color:accent, fontFamily:monoFont, marginBottom:10 }}>{item.org}</div>
                      <p style={{ fontSize:13, color:muted, lineHeight:1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────── */}
      <section id="contact" style={{ padding:"100px 0" }}>
        <div style={{ maxWidth:700, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
            <div style={{ fontFamily:monoFont, fontSize:11, color:accent, letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
              05. Get In Touch
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, marginBottom:12, letterSpacing:-0.5 }}>
              Let's <span style={{ color:accent }}>Connect</span>
            </h2>
            <p style={{ fontSize:15, color:muted, marginBottom:48, maxWidth:480 }}>
              Open to freelance projects, full-time roles, or just a good tech conversation. Reach out through any of the channels below.
            </p>
          </Reveal>

          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <Reveal delay={100}>
              {[
                ["📧","Email","kenntheus24@gmail.com","mailto:kenntheus24@gmail.com","#00f5c4"],
                ["🐙","GitHub","github.com/Kenntheus","https://github.com/Kenntheus","#7c6eff"],
                ["💼","LinkedIn","linkedin.com/in/martheus-kenn-banaag","https://linkedin.com/in/martheus-kenn-banaag","#00c6ff"],
              ].map(([icon, platform, handle, href, col]) => (
                <a
                  key={platform}
                  href={href}
                  className="contact-card"
                  style={{
                    display:"flex", alignItems:"center", gap:18,
                    background: cardBg, backdropFilter:"blur(12px)",
                    border:`1px solid ${glassBorder}`, borderRadius:14,
                    padding:"20px 24px", color:text,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=col+"66"; e.currentTarget.style.boxShadow=`0 4px 24px ${col}20`; e.currentTarget.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=glassBorder; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
                >
                  <div style={{ width:48, height:48, borderRadius:12, background:`${col}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:600, color:col, marginBottom:3 }}>{platform}</div>
                    <div style={{ fontSize:13, color:muted, fontFamily:monoFont }}>{handle}</div>
                  </div>
                  <span style={{ marginLeft:"auto", color:muted, fontSize:16 }}>↗</span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────── */}
      <footer style={{
        padding:"28px 40px",
        borderTop:`1px solid ${glassBorder}`,
        display:"flex", justifyContent:"space-between", alignItems:"center",
        fontSize:12, color:muted
      }}>
        <span style={{ fontFamily:monoFont, color:accent }}>&lt;Kenn/&gt;</span>
        <span>Built with React · {new Date().getFullYear()}</span>
        <span>Designed & developed by Martheus Kenn Banaag</span>
      </footer>
    </div>
  );
}