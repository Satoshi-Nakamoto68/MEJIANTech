import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import {
  FileText,
  Download,
  CheckCircle,
  Send,
  FileCheck,
  Star,
  Building2,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const documents = [
  {
    name: "Business Registration Certificate",
    status: "Available",
    placeholder: true,
    isCyan: true,
  },
  {
    name: "Proof of Address",
    status: "Available",
    placeholder: true,
    isCyan: false,
  },
  {
    name: "Sample Invoice",
    status: "Available",
    placeholder: true,
    isCyan: true,
  },
  {
    name: "Compliance/AML Statement",
    status: "Available",
    placeholder: true,
    isCyan: false,
  },
];

const companyInfo = [
  {
    icon: Building2,
    label: "Company Name",
    value: "MEJIAN GLOBAL TECHNOLOGY LIMITED",
  },
  {
    icon: FileCheck,
    label: "Registration Number",
    value: "Certificate & validity — to be updated",
  },
  {
    icon: MapPin,
    label: "Registered Address",
    value: "Address to be updated",
  },
  {
    icon: Calendar,
    label: "Established",
    value: "2025",
  },
];

const Compliance = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    purpose: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const docRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    docRefs.current.forEach((ref) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Request Submitted",
      description:
        "We will send the verification pack to your email within 24 hours.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Compliance & Verification | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Official company verification information for banks, payment providers, and business partners. MEJIAN GLOBAL TECHNOLOGY LIMITED compliance documentation."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)",
            }}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-cyan-500/6"
              style={{ animation: "complianceOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "complianceOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "complianceOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "complianceShimmer 10s ease-in-out infinite",
            }}
          />

          <div className="container mx-auto relative z-10 px-4 text-center">
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 backdrop-blur-xl shadow-lg mb-6"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                  transition:
                    "opacity 0.6s ease-out 0.3s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
                }}
              >
                <FileCheck className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Compliance & Verification
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(15px)",
                  transition:
                    "opacity 0.7s ease-out 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
                }}
              >
                <span className="text-slate-100">Compliance & </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-complianceGradient">
                  Verification
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(15px)",
                  transition:
                    "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
                }}
              >
                Official company information for verification by banks, payment
                providers, and business partners
              </p>

              <div
                className="flex items-center justify-center gap-2 mt-8"
                style={{
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 0.6s ease-out 0.55s",
                }}
              >
                <div className="h-1 w-12 bg-gradient-to-r from-transparent to-cyan-500 rounded-full" />
                <Star className="h-4 w-4 text-cyan-400 animate-pulse" />
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)",
            }}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl bg-cyan-500/4"
              style={{ animation: "complianceOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "complianceOrb 20s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Company Info */}
              <div
                className="relative group/info p-8 md:p-10 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 mb-12"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(40px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/info:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover/info:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/info:opacity-100 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-lg">
                      <Building2 className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                      Verified Company Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {companyInfo.map((info, index) => (
                      <div
                        key={info.label}
                        className="group/item p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/item:scale-110 transition-transform duration-300">
                            <info.icon className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-hover/item:text-cyan-400 transition-colors duration-300">
                              {info.label}
                            </p>
                            <p className="text-sm md:text-base text-slate-100 font-medium leading-relaxed">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/info:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/30" />
                </div>
              </div>

              {/* Documents */}
              <div
                className="mb-12"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(30px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s",
                }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <FileText className="h-7 w-7 text-cyan-400" />
                  Available Documents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div
                      key={doc.name}
                      ref={(el) => (docRefs.current[index] = el)}
                      className="group/doc relative p-5 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted
                          ? "translateY(0) scale(1)"
                          : "translateY(50px) scale(0.95)",
                        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                          0.5 + index * 0.1
                        }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                          0.5 + index * 0.1
                        }s`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-50 group-hover/doc:opacity-100 transition-opacity duration-500 rounded-3xl ${
                          doc.isCyan
                            ? "from-cyan-500/20 via-cyan-500/10 to-blue-500/10"
                            : "from-blue-500/20 via-blue-500/10 to-cyan-500/10"
                        }`}
                      />
                      <div className="absolute inset-0 -translate-x-full group-hover/doc:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/doc:opacity-100 rounded-3xl" />

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg flex-shrink-0 ${
                              doc.isCyan
                                ? "bg-cyan-500/20 border-cyan-500/30"
                                : "bg-blue-500/20 border-blue-500/30"
                            }`}
                          >
                            <FileText
                              className={`h-6 w-6 ${
                                doc.isCyan ? "text-cyan-400" : "text-blue-400"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-100 text-sm mb-1 group-hover/doc:text-cyan-200 transition-colors duration-300">
                              {doc.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              PDF [placeholder]
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 flex-shrink-0 ${
                            doc.isCyan
                              ? "hover:bg-cyan-500/20"
                              : "hover:bg-blue-500/20"
                          }`}
                        >
                          <Download
                            className={`h-4 w-4 ${
                              doc.isCyan ? "text-cyan-400" : "text-blue-400"
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/doc:opacity-100 transition-opacity duration-500 rounded-b-3xl ${
                          doc.isCyan
                            ? "from-cyan-500 via-blue-500 to-cyan-500"
                            : "from-blue-500 via-cyan-500 to-blue-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Form */}
              <div
                className="relative group/form p-8 md:p-10 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(30px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.6s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.6s",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/form:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover/form:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/form:opacity-100 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-lg">
                      <Send className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                      Request Verification Pack
                    </h2>
                  </div>
                  <p className="text-sm text-slate-400 mb-6">
                    Fill out this form to receive our complete verification
                    documentation package.
                  </p>

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-500/30 shadow-lg">
                        <CheckCircle className="h-10 w-10 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-slate-100 mb-2 text-xl">
                        Request Submitted Successfully
                      </h3>
                      <p className="text-sm text-slate-400">
                        We will send the verification pack to your email within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="group/field">
                          <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-500/50 text-slate-100"
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="group/field">
                          <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                            Organization
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                organization: e.target.value,
                              })
                            }
                            className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-500/50 text-slate-100"
                            placeholder="Bank Name / Company"
                          />
                        </div>
                      </div>
                      <div className="group/field">
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-500/50 text-slate-100"
                          placeholder="verification@company.com"
                        />
                      </div>
                      <div className="group/field">
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                          Purpose of Verification
                        </label>
                        <textarea
                          required
                          value={formData.purpose}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              purpose: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 resize-none placeholder:text-slate-500/50 text-slate-100"
                          placeholder="KYC verification, payment provider onboarding, etc."
                        />
                      </div>
                      <button
                        type="submit"
                        className="group/btn w-full mt-6 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                      >
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        <span>Submit Request</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700 rounded-xl" />
                      </button>
                    </form>
                  )}
                </div>

                <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes complianceOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes complianceShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes complianceGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-complianceGradient {
            animation: complianceGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Compliance;
