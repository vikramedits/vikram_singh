"use client";
import Link from "next/link";
import { useState } from "react";

const businessPackages = [
    {
        id: "starter",
        name: "Starter",
        price: "₹5,000",
        priceNum: 5000,
        tagline: "Perfect for small businesses & local shops",
        color: "border-border",
        badge: null,
        features: [
            "Up to 5 custom pages",
            "Mobile responsive design",
            "Contact & enquiry form",
            "Google Maps integration",
            "Basic SEO setup",
            "WhatsApp chat button",
            "1 month free support",
        ],
        notIncluded: ["Backend / Database", "Payment Gateway", "Admin Panel"],
    },
    {
        id: "business",
        name: "Business",
        price: "₹8,000",
        priceNum: 8000,
        tagline: "Full stack for growing organizations",
        color: "border-violet-500",
        badge: "Most Popular",
        features: [
            "Unlimited pages",
            "Full stack (React + Node + DB)",
            "Admin dashboard",
            "User authentication",
            "Payment gateway (Razorpay)",
            "Email/SMS notifications",
            "SEO + Performance optimized",
            "Vercel/Cloud deployment",
            "3 months free support",
        ],
        notIncluded: [],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        priceNum: null,
        tagline: "Large-scale systems & custom requirements",
        color: "border-border",
        badge: null,
        features: [
            "Everything in Business",
            "Custom architecture",
            "ERP / CRM integration",
            "Multi-user roles & permissions",
            "Analytics dashboard",
            "Priority 24/7 support",
            "Dedicated project manager",
            "SLA guarantee",
        ],
        notIncluded: [],
    },
];

const orgTypes = [
    { icon: "🏪", label: "Local Business" },
    { icon: "🏥", label: "Clinic / Hospital" },
    { icon: "🎓", label: "Institute / College" },
    { icon: "🏭", label: "Manufacturing" },
    { icon: "🛒", label: "E-Commerce Store" },
    { icon: "🏛️", label: "NGO / Trust" },
    { icon: "💼", label: "Agency / Firm" },
    { icon: "🍽️", label: "Restaurant / Cafe" },
];

const studentProjects = [
    { icon: "📊", title: "Result Management", tag: "Management" },
    { icon: "📚", title: "Library System", tag: "Management" },
    { icon: "🏥", title: "Hospital Appointment", tag: "Healthcare" },
    { icon: "✏️", title: "Online Exam Portal", tag: "Education" },
    { icon: "🛍️", title: "Clothing Store", tag: "E-Commerce" },
    { icon: "💰", title: "Finance Tracker", tag: "Finance" },
];

export default function ServicesPage() {
    const [billing] = useState<"onetime">("onetime");
    const [activeOrg, setActiveOrg] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800&display=swap');
        .card-hover { transition: transform 0.2s ease, border-color 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); }
        .float { animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .glow-violet { box-shadow: 0 0 40px rgba(139,92,246,0.15); }
      `}</style>

            {/* ─── SECTION 1: Student Projects ─── */}
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/8 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/6 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 text-violet-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
                                🎓 For Students
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
                                Ready-Made<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                                    College Projects
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                20 fully built projects for BCA, MCA, B.Tech & MBA — with live demos, complete source code, and documentation.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {[
                                    ["✅", "Live Demo on Vercel"],
                                    ["📦", "Full Source Code"],
                                    ["📄", "Project Documentation"],
                                    ["⚡", "Instant Delivery"],
                                    ["💬", "WhatsApp Support"],
                                    ["🔒", "100% Plagiarism Safe"],
                                ].map(([icon, text]) => (
                                    <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>{icon}</span><span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price per project</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-violet-400">₹500</span>
                                        <span className="text-muted-foreground text-sm">one-time</span>
                                    </div>
                                </div>
                                <Link
                                    href="/student-projects"
                                    className="flex-shrink-0 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition flex items-center gap-2 text-sm"
                                >
                                    Browse 20 Projects
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right — Preview cards */}
                        <div className="relative hidden lg:block">
                            <div className="grid grid-cols-2 gap-3">
                                {studentProjects.map((p, i) => (
                                    <div
                                        key={p.title}
                                        className="bg-card border border-border rounded-xl p-4 card-hover"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                        <span className="text-2xl mb-2 block">{p.icon}</span>
                                        <p className="text-sm font-medium leading-tight">{p.title}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">{p.tag}</p>
                                        <div className="mt-3 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-xs text-green-400">Live Demo</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-violet-600 text-white rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg float">
                                +14 more projects →
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: Business Packages ─── */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                            🏢 For Businesses & Organizations
                        </span>
                        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                            Your Business,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                Online & Growing
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Professional web presence for every kind of organization — from local shops to large enterprises.
                        </p>
                    </div>

                    {/* Org Type Selector */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {orgTypes.map((o) => (
                            <button
                                key={o.label}
                                onClick={() => setActiveOrg(activeOrg === o.label ? null : o.label)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition flex items-center gap-2
                  ${activeOrg === o.label
                                        ? "bg-indigo-600 border-indigo-600 text-white"
                                        : "border-border text-muted-foreground hover:border-indigo-400/50"
                                    }`}
                            >
                                <span>{o.icon}</span>{o.label}
                            </button>
                        ))}
                    </div>
                    {activeOrg && (
                        <p className="text-center text-sm text-indigo-400 mb-8 -mt-6">
                            ✨ Great choice! We've built websites for many {activeOrg} businesses. See our packages below.
                        </p>
                    )}

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                        {businessPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`card-hover relative bg-card rounded-2xl border-2 ${pkg.color} p-7 ${pkg.badge ? "glow-violet" : ""}`}
                            >
                                {pkg.badge && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-violet-600 text-white text-xs font-bold rounded-full">
                                        {pkg.badge}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{pkg.name}</h3>
                                <p className="text-muted-foreground text-sm mb-5">{pkg.tagline}</p>

                                <div className="mb-6">
                                    {pkg.priceNum ? (
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold">{pkg.price}</span>
                                            <span className="text-muted-foreground text-sm">/ website</span>
                                        </div>
                                    ) : (
                                        <span className="text-4xl font-bold">{pkg.price}</span>
                                    )}
                                </div>

                                <a
                                    href="/#contact"
                                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition mb-6
                    ${pkg.badge
                                            ? "bg-violet-600 hover:bg-violet-700 text-white"
                                            : "border border-border hover:bg-accent"
                                        }`}
                                >
                                    {pkg.priceNum ? "Get Started" : "Talk to Us"}
                                </a>

                                <ul className="space-y-2.5">
                                    {pkg.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm">
                                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-foreground">{f}</span>
                                        </li>
                                    ))}
                                    {pkg.notIncluded.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm">
                                            <svg className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                            <span className="text-muted-foreground/50 line-through">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Process Steps */}
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>How It Works</h3>
                        <div className="grid sm:grid-cols-4 gap-4">
                            {[
                                { n: "01", title: "Tell Us Your Idea", desc: "Fill the inquiry form with your requirements" },
                                { n: "02", title: "We Plan & Quote", desc: "Our team shares a detailed proposal in 24 hrs" },
                                { n: "03", title: "Design & Build", desc: "We craft your site and share regular updates" },
                                { n: "04", title: "Launch 🚀", desc: "Go live with full handover and support" },
                            ].map((s, i) => (
                                <div key={s.n} className="relative">
                                    {i < 3 && (
                                        <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px border-t border-dashed border-border" />
                                    )}
                                    <div className="relative bg-card border border-border rounded-xl p-5 text-left">
                                        <span className="text-3xl font-bold text-violet-500/30" style={{ fontFamily: "'Syne', sans-serif" }}>{s.n}</span>
                                        <h4 className="font-semibold text-sm mt-2 mb-1">{s.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-full transition text-base shadow-lg"
                        >
                            Start Your Project Inquiry
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <p className="text-muted-foreground text-sm mt-3">We respond within 24 hours · No spam ever</p>
                    </div>
                </div>
            </section>
        </div>
    );
}