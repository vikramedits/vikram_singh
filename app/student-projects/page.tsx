"use client";
import { useState } from "react";

const tags = ["All", "Web App", "E-Commerce", "Dashboard", "Management", "Portfolio", "Healthcare", "Education", "Finance"];

const projects = [
    {
        id: 1, title: "Student Result Management System", tag: "Management",
        desc: "Full portal for school/college staff to enter and publish student results with grade calculation.",
        tech: ["HTML", "CSS", "PHP", "MySQL"], color: "from-violet-600 to-indigo-600",
        icon: "📊", pages: 6, preview: "https://student-result-demo.vercel.app",
    },
    {
        id: 2, title: "Library Management System", tag: "Management",
        desc: "Issue/return books, track inventory, fine management, and student login portal.",
        tech: ["React", "Node.js", "MongoDB"], color: "from-blue-600 to-cyan-500",
        icon: "📚", pages: 7, preview: "https://library-mgmt-demo.vercel.app",
    },
    {
        id: 3, title: "Hospital Appointment System", tag: "Healthcare",
        desc: "Patients book doctor appointments online, doctors manage schedule, admin dashboard.",
        tech: ["Next.js", "Tailwind", "PostgreSQL"], color: "from-emerald-600 to-teal-500",
        icon: "🏥", pages: 8, preview: "https://hospital-appt-demo.vercel.app",
    },
    {
        id: 4, title: "Online Exam Portal", tag: "Education",
        desc: "MCQ-based exams with timer, auto grading, result PDF download, and admin panel.",
        tech: ["React", "Firebase"], color: "from-orange-500 to-amber-500",
        icon: "✏️", pages: 5, preview: "https://exam-portal-demo.vercel.app",
    },
    {
        id: 5, title: "E-Commerce Clothing Store", tag: "E-Commerce",
        desc: "Full shopping cart, product filters, Razorpay checkout, and order tracking.",
        tech: ["Next.js", "Stripe", "MongoDB"], color: "from-pink-600 to-rose-500",
        icon: "🛍️", pages: 10, preview: "https://clothing-store-demo.vercel.app",
    },
    {
        id: 6, title: "Canteen / Food Ordering System", tag: "Management",
        desc: "College canteen online ordering, QR code menu, order queue for staff.",
        tech: ["React", "Express", "MySQL"], color: "from-yellow-500 to-orange-500",
        icon: "🍱", pages: 5, preview: "https://canteen-demo.vercel.app",
    },
    {
        id: 7, title: "Personal Finance Tracker", tag: "Finance",
        desc: "Income/expense logging, category-wise charts, monthly budget goals, CSV export.",
        tech: ["React", "Chart.js", "LocalStorage"], color: "from-green-600 to-emerald-500",
        icon: "💰", pages: 4, preview: "https://finance-tracker-demo.vercel.app",
    },
    {
        id: 8, title: "Developer Portfolio Website", tag: "Portfolio",
        desc: "Animated portfolio with skills, projects, blog, and contact form. Dark/light mode.",
        tech: ["Next.js", "Framer Motion", "Tailwind"], color: "from-slate-700 to-slate-500",
        icon: "💼", pages: 4, preview: "https://dev-portfolio-demo.vercel.app",
    },
    {
        id: 9, title: "Hostel Management System", tag: "Management",
        desc: "Room allotment, fee tracking, complaint portal, warden & student logins.",
        tech: ["PHP", "Bootstrap", "MySQL"], color: "from-purple-600 to-violet-500",
        icon: "🏠", pages: 7, preview: "https://hostel-mgmt-demo.vercel.app",
    },
    {
        id: 10, title: "Job Portal for Freshers", tag: "Web App",
        desc: "Students post resumes, companies post jobs, filter by skill/location, apply system.",
        tech: ["React", "Node.js", "MongoDB"], color: "from-cyan-600 to-blue-500",
        icon: "🔍", pages: 8, preview: "https://job-portal-demo.vercel.app",
    },
    {
        id: 11, title: "Blood Bank Management", tag: "Healthcare",
        desc: "Blood stock management, donor registration, request & dispatch tracking.",
        tech: ["HTML", "PHP", "MySQL"], color: "from-red-600 to-rose-500",
        icon: "🩸", pages: 6, preview: "https://bloodbank-demo.vercel.app",
    },
    {
        id: 12, title: "Inventory / Stock Manager", tag: "Dashboard",
        desc: "Product stock in/out, low stock alerts, supplier management, reports dashboard.",
        tech: ["React", "Express", "PostgreSQL"], color: "from-indigo-600 to-blue-500",
        icon: "📦", pages: 6, preview: "https://inventory-demo.vercel.app",
    },
    {
        id: 13, title: "Alumni Network Portal", tag: "Web App",
        desc: "Alumni registration, batch-wise directory, event management, job referrals.",
        tech: ["Next.js", "Prisma", "MySQL"], color: "from-teal-600 to-cyan-500",
        icon: "🎓", pages: 7, preview: "https://alumni-portal-demo.vercel.app",
    },
    {
        id: 14, title: "Attendance Management System", tag: "Education",
        desc: "Faculty marks attendance, auto email/SMS to absentees, monthly reports, student dashboard.",
        tech: ["React", "Node.js", "MongoDB"], color: "from-amber-600 to-yellow-500",
        icon: "✅", pages: 5, preview: "https://attendance-demo.vercel.app",
    },
    {
        id: 15, title: "Notes Sharing Platform", tag: "Education",
        desc: "Students upload/download PDF notes by subject, upvote system, search & filter.",
        tech: ["Next.js", "Firebase Storage"], color: "from-violet-500 to-purple-400",
        icon: "📝", pages: 5, preview: "https://notes-share-demo.vercel.app",
    },
    {
        id: 16, title: "Event Management Portal", tag: "Web App",
        desc: "College events listing, registrations, QR ticket generation, admin approvals.",
        tech: ["React", "Supabase", "Tailwind"], color: "from-fuchsia-600 to-pink-500",
        icon: "🎉", pages: 6, preview: "https://event-mgmt-demo.vercel.app",
    },
    {
        id: 17, title: "Pharmacy Management System", tag: "Healthcare",
        desc: "Medicine stock, billing, expiry alerts, doctor prescription upload.",
        tech: ["PHP", "Bootstrap", "MySQL"], color: "from-green-700 to-teal-600",
        icon: "💊", pages: 7, preview: "https://pharmacy-demo.vercel.app",
    },
    {
        id: 18, title: "Hotel Booking System", tag: "E-Commerce",
        desc: "Room browsing, date-based availability, booking with payment, admin panel.",
        tech: ["Next.js", "Razorpay", "MongoDB"], color: "from-orange-600 to-red-500",
        icon: "🏨", pages: 8, preview: "https://hotel-booking-demo.vercel.app",
    },
    {
        id: 19, title: "Admin Analytics Dashboard", tag: "Dashboard",
        desc: "Beautiful charts for users, revenue, traffic. Responsive tables, dark mode.",
        tech: ["React", "Recharts", "Tailwind"], color: "from-sky-600 to-indigo-500",
        icon: "📈", pages: 4, preview: "https://admin-dash-demo.vercel.app",
    },
    {
        id: 20, title: "NGO / Charity Website", tag: "Portfolio",
        desc: "Cause pages, donation integration, volunteer registration, event gallery.",
        tech: ["Next.js", "Stripe", "Sanity CMS"], color: "from-lime-600 to-green-500",
        icon: "❤️", pages: 6, preview: "https://ngo-demo.vercel.app",
    },
];

type BuyState = { open: boolean; project: (typeof projects)[0] | null };

export default function StudentProjectsPage() {
    const [activeTag, setActiveTag] = useState("All");
    const [search, setSearch] = useState("");
    const [buy, setBuy] = useState<BuyState>({ open: false, project: null });
    const [form, setForm] = useState({ name: "", email: "", phone: "", upi: "" });
    const [step, setStep] = useState<"form" | "pay" | "done">("form");
    const [loading, setLoading] = useState(false);

    const filtered = projects.filter((p) => {
        const matchTag = activeTag === "All" || p.tag === activeTag;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
        return matchTag && matchSearch;
    });

    const openBuy = (p: typeof projects[0]) => {
        setBuy({ open: true, project: p });
        setStep("form");
        setForm({ name: "", email: "", phone: "", upi: "" });
    };

    const handleOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("pay");
    };

    const handleConfirmPay = () => {
        setLoading(true);
        setTimeout(() => { setLoading(false); setStep("done"); }, 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        .project-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .project-card:hover { transform: translateY(-4px); }
        .tag-pill { transition: all 0.15s ease; }
        .shine { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent); background-size: 200% 100%; animation: shine 2.5s infinite; }
        @keyframes shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .modal-backdrop { backdrop-filter: blur(8px); }
      `}</style>

            {/* Hero */}
            <div className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-background to-background pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative">
                    <div className="flex items-center gap-2 mb-4">
                        <a href="/" className="text-muted-foreground hover:text-foreground text-sm transition flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            Nexaura
                        </a>
                        <span className="text-muted-foreground/50">/</span>
                        <span className="text-sm text-violet-400">Student Projects</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-violet-500/15 text-violet-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                        🎓 Ready-Made College Projects
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Get Your Project<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Done. Fast.</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                        20 production-quality projects — live demo, full source code, documentation. Buy instantly for just <span className="text-white font-semibold">₹500</span>. Perfect for BCA, MCA, B.Tech, MBA submissions.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 flex-1 max-w-sm">
                            <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" /></svg>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search projects..."
                                className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />Live Demos Available</span>
                            <span>·</span>
                            <span>Source Code Included</span>
                            <span>·</span>
                            <span>Instant Delivery</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tag Filter */}
            <div className="sticky top-0 z-20 bg-background/95 border-b border-border backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTag(t)}
                            className={`tag-pill flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition
                ${activeTag === t
                                    ? "bg-violet-600 border-violet-600 text-white"
                                    : "border-border text-muted-foreground hover:border-violet-400/50 hover:text-foreground"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <p className="text-muted-foreground text-sm mb-6">{filtered.length} project{filtered.length !== 1 ? "s" : ""} found</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtered.map((p, i) => (
                        <div
                            key={p.id}
                            className="project-card bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
                            style={{ animationDelay: `${i * 0.04}s` }}
                        >
                            {/* Card header */}
                            <div className={`relative h-28 bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}>
                                <div className="shine absolute inset-0" />
                                <span className="text-5xl relative z-10">{p.icon}</span>
                                <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/30 text-white/90 text-xs rounded-full font-medium">
                                    {p.tag}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-semibold text-sm leading-snug mb-1.5">{p.title}</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">{p.desc}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {p.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 bg-muted/30 text-muted-foreground text-[10px] font-medium rounded-md border border-border">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                                    <span>{p.pages} Pages/Screens</span>
                                    <span className="text-green-400 font-semibold">₹500</span>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={p.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 rounded-lg border border-border text-xs font-medium text-center hover:bg-accent transition flex items-center justify-center gap-1"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        Live Demo
                                    </a>
                                    <button
                                        onClick={() => openBuy(p)}
                                        className="flex-1 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition flex items-center justify-center gap-1"
                                    >
                                        Buy ₹500
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-3">🔍</p>
                        <p className="text-muted-foreground">No projects match your search.</p>
                        <button onClick={() => { setSearch(""); setActiveTag("All"); }} className="mt-4 text-violet-400 text-sm hover:underline">
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* CTA Banner */}
            <div className="border-t border-border bg-gradient-to-r from-violet-950/30 to-indigo-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Need Something Custom?</h3>
                        <p className="text-muted-foreground">Our team can build your exact project from scratch — unique, plagiarism-free, with documentation.</p>
                    </div>
                    <a
                        href="/#contact"
                        className="flex-shrink-0 px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition flex items-center gap-2"
                    >
                        Request Custom Project
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </div>

            {/* Buy Modal */}
            {buy.open && buy.project && (
                <div
                    className="modal-backdrop fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-4"
                    onClick={(e) => { if (e.target === e.currentTarget) setBuy({ open: false, project: null }); }}
                >
                    <div className="bg-card border border-border rounded-2xl w-full max-w-md overflow-hidden">
                        {/* Modal Header */}
                        <div className={`relative h-16 bg-gradient-to-r ${buy.project.color} flex items-center px-5 gap-3`}>
                            <span className="text-2xl">{buy.project.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">{buy.project.title}</p>
                                <p className="text-white/70 text-xs">Source Code + Documentation</p>
                            </div>
                            <span className="text-white font-bold text-xl">₹500</span>
                            <button onClick={() => setBuy({ open: false, project: null })} className="ml-2 text-white/70 hover:text-white transition">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-5">
                            {step === "form" && (
                                <form onSubmit={handleOrder}>
                                    <h3 className="font-semibold mb-4">Your Details</h3>
                                    <div className="space-y-3">
                                        <input required value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Full Name *" className="w-full px-3 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-violet-500 transition" />
                                        <input required type="email" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email — for source code delivery *" className="w-full px-3 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-violet-500 transition" />
                                        <input required value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="WhatsApp Number *" className="w-full px-3 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-violet-500 transition" />
                                    </div>
                                    <button type="submit" className="w-full mt-5 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition">
                                        Continue to Payment →
                                    </button>
                                </form>
                            )}

                            {step === "pay" && (
                                <div>
                                    <h3 className="font-semibold mb-1">Pay ₹500 via UPI</h3>
                                    <p className="text-muted-foreground text-xs mb-4">Source code will be sent to <strong className="text-foreground">{form.email}</strong> within 30 minutes.</p>

                                    {/* UPI QR Placeholder */}
                                    <div className="bg-white rounded-xl p-4 mb-4 flex flex-col items-center">
                                        <div className="w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                                            <svg className="w-24 h-24 text-gray-800" viewBox="0 0 100 100" fill="currentColor">
                                                <rect x="10" y="10" width="30" height="30" rx="2" />
                                                <rect x="15" y="15" width="20" height="20" rx="1" fill="white" />
                                                <rect x="20" y="20" width="10" height="10" rx="1" />
                                                <rect x="60" y="10" width="30" height="30" rx="2" />
                                                <rect x="65" y="15" width="20" height="20" rx="1" fill="white" />
                                                <rect x="70" y="20" width="10" height="10" rx="1" />
                                                <rect x="10" y="60" width="30" height="30" rx="2" />
                                                <rect x="15" y="65" width="20" height="20" rx="1" fill="white" />
                                                <rect x="20" y="70" width="10" height="10" rx="1" />
                                                <rect x="45" y="10" width="8" height="8" rx="1" />
                                                <rect x="45" y="22" width="8" height="8" rx="1" />
                                                <rect x="45" y="45" width="8" height="8" rx="1" />
                                                <rect x="57" y="45" width="8" height="8" rx="1" />
                                                <rect x="69" y="45" width="8" height="8" rx="1" />
                                                <rect x="81" y="45" width="8" height="8" rx="1" />
                                                <rect x="57" y="57" width="8" height="8" rx="1" />
                                                <rect x="69" y="69" width="8" height="8" rx="1" />
                                                <rect x="81" y="57" width="8" height="8" rx="1" />
                                                <rect x="57" y="81" width="8" height="8" rx="1" />
                                                <rect x="81" y="81" width="8" height="8" rx="1" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 font-mono font-bold text-sm">nexaura@upi</p>
                                        <p className="text-gray-500 text-xs">Scan with any UPI app</p>
                                    </div>

                                    <div className="bg-muted/20 rounded-xl p-3 mb-4 text-xs text-muted-foreground">
                                        <p className="font-medium text-foreground mb-1">After paying:</p>
                                        <ol className="space-y-1 list-decimal list-inside">
                                            <li>Screenshot your payment confirmation</li>
                                            <li>WhatsApp it to: <strong className="text-foreground">+91 98765 XXXXX</strong></li>
                                            <li>Receive source code on your email within 30 min</li>
                                        </ol>
                                    </div>

                                    <button onClick={handleConfirmPay} disabled={loading} className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
                                        {loading ? (
                                            <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Processing...</>
                                        ) : "✅ I've Paid — Confirm Order"}
                                    </button>
                                </div>
                            )}

                            {step === "done" && (
                                <div className="text-center py-4">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Order Confirmed! 🎉</h3>
                                    <p className="text-muted-foreground text-sm mb-1">Source code will be delivered to</p>
                                    <p className="text-violet-400 font-medium text-sm mb-4">{form.email}</p>
                                    <p className="text-xs text-muted-foreground mb-5">Also check your WhatsApp for updates. Delivery within 30 minutes.</p>
                                    <button onClick={() => setBuy({ open: false, project: null })} className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-accent transition">
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}