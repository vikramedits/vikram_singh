"use client";

import { useState } from "react";

const plans = [
  {
    id: "standard",
    name: "Standard Website",
    price: "₹5,000",
    description: "Fully designed & responsive website for businesses",
    features: ["Custom UI Design", "Responsive Layout", "Up to 5 Pages", "Contact Form", "SEO Basics"],
    popular: false,
  },
  {
    id: "fullstack",
    name: "Full Stack Website",
    price: "₹8,000",
    description: "Complete web app with frontend + backend + database",
    features: ["Everything in Standard", "Backend API", "Database Integration", "Authentication", "Admin Dashboard"],
    popular: true,
  },
  {
    id: "student",
    name: "Student / College Project",
    price: "₹500",
    description: "Affordable projects for students, colleges & schools",
    features: ["Clean UI", "Project Documentation", "Basic Functionality", "Source Code Included", "Demo Deployment"],
    popular: false,
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  plan: string;
  projectTitle: string;
  description: string;
  deadline: string;
  extras: string[];
};

const extras = [
  "Payment Gateway",
  "WhatsApp Integration",
  "Multi-language Support",
  "Blog / CMS",
  "Custom Domain Setup",
  "Maintenance Support",
];

export default function ProjectInquiryForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    plan: "",
    projectTitle: "",
    description: "",
    deadline: "",
    extras: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^\+?[\d\s\-]{10,}/)) e.phone = "Valid phone required";
    if (!form.plan) e.plan = "Please select a plan";
    if (!form.projectTitle.trim()) e.projectTitle = "Project title is required";
    if (form.description.trim().length < 30) e.description = "Please describe in at least 30 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const toggleExtra = (val: string) => {
    setForm((f) => ({
      ...f,
      extras: f.extras.includes(val) ? f.extras.filter((x) => x !== val) : [...f.extras, val],
    }));
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4">Inquiry Received!</h2>
          <p className="text-muted-foreground text-lg mb-2">
            Thanks, <span className="text-foreground font-semibold">{form.name}</span>. We've got your project inquiry.
          </p>
          <p className="text-muted-foreground mb-8">
            Our team will reach out to <span className="text-violet-400">{form.email}</span> within 24 hours to discuss your{" "}
            <span className="text-foreground font-medium">{plans.find((p) => p.id === form.plan)?.name}</span> project.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", organization: "", plan: "", projectTitle: "", description: "", deadline: "", extras: [] }); setErrors({}); }}
            className="px-6 py-2.5 rounded-full border border-border hover:bg-accent transition text-sm font-medium"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-500 font-semibold tracking-wider uppercase text-sm">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Start Your Project</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your vision. We'll turn it into a stunning, high-performance digital product.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setForm((f) => ({ ...f, plan: plan.id }))}
              className={`relative text-left p-6 rounded-2xl border transition-all duration-200 focus:outline-none group
                ${form.plan === plan.id
                  ? "border-violet-500 bg-violet-500/5 shadow-[0_0_0_1px_rgb(139,92,246)]"
                  : "border-border bg-card hover:border-violet-400/50"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full tracking-wide">
                  Most Popular
                </span>
              )}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-base">{plan.name}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{plan.description}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 mt-1 flex-shrink-0 flex items-center justify-center transition-colors
                  ${form.plan === plan.id ? "border-violet-500 bg-violet-500" : "border-muted-foreground/30"}`}>
                  {form.plan === plan.id && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-3xl font-bold text-violet-500 mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        {errors.plan && <p className="text-red-400 text-sm text-center -mt-10 mb-6">{errors.plan}</p>}

        {/* Form */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name <span className="text-violet-500">*</span></label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? "border-red-500" : "border-border"} focus:outline-none focus:border-violet-500 transition text-sm`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address <span className="text-violet-500">*</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="rahul@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? "border-red-500" : "border-border"} focus:outline-none focus:border-violet-500 transition text-sm`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number <span className="text-violet-500">*</span></label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.phone ? "border-red-500" : "border-border"} focus:outline-none focus:border-violet-500 transition text-sm`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              {/* Organization */}
              <div>
                <label className="block text-sm font-medium mb-2">Company / College / School</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
                  placeholder="Acme Corp / IIT Indore / DPS"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-violet-500 transition text-sm"
                />
              </div>
              {/* Project Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Project Title <span className="text-violet-500">*</span></label>
                <input
                  type="text"
                  value={form.projectTitle}
                  onChange={(e) => setForm((f) => ({ ...f, projectTitle: e.target.value }))}
                  placeholder="E-commerce Website / Hospital Management System"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.projectTitle ? "border-red-500" : "border-border"} focus:outline-none focus:border-violet-500 transition text-sm`}
                />
                {errors.projectTitle && <p className="text-red-400 text-xs mt-1">{errors.projectTitle}</p>}
              </div>
              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium mb-2">Expected Deadline</label>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => setForm((f) => ({ ...f, deadline: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-violet-500 transition text-sm"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Project Description <span className="text-violet-500">*</span></label>
              <textarea
                rows={5}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Describe your project — what it should do, who it's for, any specific features or design preferences you have in mind..."
                className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.description ? "border-red-500" : "border-border"} focus:outline-none focus:border-violet-500 transition text-sm resize-none`}
              />
              <div className="flex justify-between mt-1">
                {errors.description
                  ? <p className="text-red-400 text-xs">{errors.description}</p>
                  : <span />}
                <p className={`text-xs ${form.description.length < 30 ? "text-muted-foreground" : "text-violet-500"}`}>
                  {form.description.length} chars
                </p>
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Optional Add-ons</label>
              <div className="flex flex-wrap gap-2">
                {extras.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => toggleExtra(ex)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                      ${form.extras.includes(ex)
                        ? "bg-violet-600 border-violet-600 text-white"
                        : "border-border hover:border-violet-400/60 text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Plan Summary */}
            {form.plan && (
              <div className="mb-8 p-4 rounded-xl bg-violet-500/5 border border-violet-500/20 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Selected Plan</p>
                  <p className="font-semibold">{plans.find((p) => p.id === form.plan)?.name}</p>
                </div>
                <p className="text-2xl font-bold text-violet-500">{plans.find((p) => p.id === form.plan)?.price}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting Inquiry...
                </>
              ) : (
                <>
                  Send Project Inquiry
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-muted-foreground text-xs mt-4">
              We typically respond within 24 hours. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}