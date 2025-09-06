
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Menu, Star, ShieldCheck, Zap, MousePointerClick, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * BidWize Landing Page — Cursor-inspired
 * v2: Wired CTAs + Quick theming + Sticky CTA ribbon + Cursor trail
 */

// ---- Quick theming & links ----
const THEME = {
  gradientFrom: "#4f46e5", // indigo-600
  gradientVia: "#a855f7",  // fuchsia-500
  gradientTo: "#f59e0b",    // amber-500
};

const LINKS = {
  signIn: "/login",
  getStarted: "/signup",
  watchDemo: "/demo",
  openDemo: "/demo/sandbox",
  bookWalkthrough: "/book",
  pricing: "/pricing",
  contact: "/contact",
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-xl shadow ring-1 ring-white/30"
            style={{ background: `linear-gradient(135deg, ${THEME.gradientFrom}, ${THEME.gradientVia}, ${THEME.gradientTo})` }}
          />
          <span className="font-semibold tracking-tight">BidWize</span>
          <Badge variant="secondary" className="ml-1 hidden sm:inline-flex">beta</Badge>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition">How it works</a>
          <a href="#demo" className="hover:text-foreground transition">Live demo</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="hidden sm:inline-flex"><a href={LINKS.signIn}>Sign in</a></Button>
          <Button asChild>
            <a href={LINKS.getStarted}>Get started <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Background() {
  // inline SVG encoded safely so webpack/Next don't choke
  const NOISE_SVG = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
       <filter id='n'>
         <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/>
       </filter>
       <rect width='100%' height='100%' filter='url(#n)' opacity='0.35'/>
     </svg>`
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft radial spotlight */}
      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-500/20 via-indigo-500/10 to-transparent blur-3xl" />
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.25]" />
      {/* noise overlay (now safely encoded) */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${NOISE_SVG}")` }}
      />
    </div>
  );
}

function CursorTrail() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  React.useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -z-10 h-40 w-40 rounded-full blur-3xl opacity-30"
      style={{
        background: `radial-gradient(closest-side, ${THEME.gradientVia}55, transparent 65%)`,
        left: pos.x - 80,
        top: pos.y - 80,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.4 }}
      animate={{ x: 0, y: 0 }}
    />
  );
}

function Hero() {
  return (
    <Section id="hero" className="pt-16">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> <span>AI for Bids & Takeoffs</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Ship estimates <span className="bg-clip-text text-transparent" style={{backgroundImage:`linear-gradient(to right, ${THEME.gradientFrom}, ${THEME.gradientVia}, ${THEME.gradientTo})`}}>10× faster</span> with BidWize
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Upload plans, auto‑extract quantities, and generate itemized bids in minutes. Collaborate with your team, track revisions, and export to your workflow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><a href={LINKS.getStarted}>Start free trial <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild variant="outline" size="lg"><a href={LINKS.watchDemo}><Play className="mr-2 h-4 w-4" /> Watch demo</a></Button>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" /> No credit card required
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Trusted by contractors and estimators across the U.S.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-white/10 bg-background/60 shadow-xl">
              <CardHeader className="border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  takeoff.json • v2
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
{`{
  "project": "Retail TI — Phoenix, AZ",
  "sheets": 42,
  "detected": {
    "drywall": "12,430 sqft",
    "studs": "1,870 lf",
    "doors": 28,
    "flooring": "6,220 sqft"
  },
  "export": ["XLSX", "Procore", "CSV"],
  "bid_total": 248730.45,
  "status": "review_required"
}`}
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function Marquee() {
  const logos = ["Dunaway", "HeadLight", "CityWorks", "Northline", "BuildRight", "MetroCivils", "TriPeak"];
  return (
    <Section id="logos" className="py-10">
      <Container>
        <div className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Teams moving faster with BidWize
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-[marquee_30s_linear_infinite] flex gap-10 opacity-70 hover:opacity-100">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="whitespace-nowrap rounded-xl border border-white/10 bg-background/40 px-4 py-2 text-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </Section>
  );
}

function Features() {
  const items = [
    { icon: <Zap className="h-5 w-5" />, title: "Auto‑takeoff", desc: "Detect walls, doors, finishes, and fixtures directly from plan PDFs with AI assistance." },
    { icon: <MousePointerClick className="h-5 w-5" />, title: "One‑click export", desc: "Push line items to CSV/XLSX or integrate with your existing workflow tools." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Version control", desc: "Compare revisions, highlight diffs, and keep a single source of truth." },
    { icon: <Star className="h-5 w-5" />, title: "Reusable templates", desc: "Save assemblies and cost libraries for repeatable, consistent estimates." },
  ];
  return (
    <Section id="features" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Powerful out of the box</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to go from plans to a polished bid — in one place.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Card key={i} className="border-white/10 bg-background/60">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-xl p-2 ring-1 ring-white/10" style={{background: `${THEME.gradientFrom}15`}}>{it.icon}</div>
                <CardTitle className="text-base">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{it.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Upload plans", d: "Drag‑drop PDFs or link your drive." },
    { t: "AI pre‑takeoff", d: "We detect quantities; you fine‑tune." },
    { t: "Assemble & price", d: "Apply templates, costs, and markups." },
    { t: "Export & share", d: "Send to Excel/CSV or sync to your tools." },
  ];
  return (
    <Section id="how-it-works" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From drawings to dollars</h2>
          <p className="mt-3 text-muted-foreground">A streamlined flow designed for estimators and PMs.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-background/60 p-6">
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                   style={{background: `linear-gradient(135deg, ${THEME.gradientFrom}, ${THEME.gradientVia})`}}>
                {i + 1}
              </div>
              <div className="text-base font-medium">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function LiveDemo() {
  return (
    <Section id="demo" className="py-20">
      <Container>
        <Card className="border-white/10 bg-background/60">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:p-12">
            <Badge variant="secondary">Interactive demo</Badge>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Try BidWize on a sample plan set</h3>
            <p className="max-w-2xl text-sm text-muted-foreground">Open a sandbox project, experiment with auto‑takeoff, and export the result to CSV. Your work won’t be saved.</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><a href={LINKS.openDemo}>Open demo <ChevronRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild variant="outline" size="lg"><a href={LINKS.bookWalkthrough}>Book a walkthrough</a></Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "$0", blurb: "For quick trials", features: ["3 projects / mo", "Auto‑takeoff", "CSV/XLSX export"] },
    { name: "Team", price: "$69", blurb: "Per user / mo", features: ["Unlimited projects", "Version compare", "Templates & libraries", "Priority support"] },
    { name: "Business", price: "Custom", blurb: "Annual", features: ["SSO & audit logs", "Roles & permissions", "Custom integrations"] },
  ];
  return (
    <Section id="pricing" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-muted-foreground">Start free, scale with your team when you’re ready.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Card key={i} className={`border-white/10 bg-background/60 ${i===1?"ring-2" : ""}`} style={i===1?{ boxShadow: `0 0 0 1px ${THEME.gradientFrom}44`}:{}}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{p.name}</span>
                  <span className="text-2xl font-semibold">{p.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">{p.blurb}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full"><a href={`${LINKS.pricing}?plan=${p.name.toLowerCase()}`}>Choose {p.name}</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "We cut estimate time from days to hours.", a: "Ops Lead, Civil Contractor" },
    { q: "Auto‑takeoff nailed 90% on our TI set.", a: "Senior Estimator" },
    { q: "Exports dropped right into our template.", a: "Project Manager" },
  ];
  return (
    <Section id="testimonials" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What teams are saying</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Card key={i} className="border-white/10 bg-background/60">
              <CardContent className="p-6">
                <p className="text-base">“{t.q}”</p>
                <p className="mt-3 text-xs text-muted-foreground">{t.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Can I try BidWize for free?", a: "Yes — the Starter plan lets you test core features with a monthly project limit." },
    { q: "What file types are supported?", a: "Start with PDFs. DWG and IFC are on our roadmap; contact us for early access." },
    { q: "Do you integrate with our tools?", a: "We support CSV/XLSX and custom exports. Ask about our Procore and SharePoint connectors." },
    { q: "Is my data secure?", a: "We encrypt data at rest and in transit. Business tier includes SSO and audit logs." },
  ];
  return (
    <Section id="faq" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="h-6 w-6 rounded-lg ring-1 ring-white/30" style={{background: `linear-gradient(135deg, ${THEME.gradientFrom}, ${THEME.gradientVia}, ${THEME.gradientTo})`}} />
          <span>© {new Date().getFullYear()} BidWize, Inc.</span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href={LINKS.contact}>Contact</a>
        </div>
      </Container>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Background />
      <CursorTrail />
      <NavBar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <LiveDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
