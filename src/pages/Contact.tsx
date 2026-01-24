import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Registered Address",
    value: "Address to be updated",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    isCyan: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@mejian.com",
    value: "contact@mejian.com",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    isCyan: false,
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+8600000000",
    value: "+86 0000 0000",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    isCyan: true,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    infoRefs.current.forEach((ref) => {
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
      title: "Message Sent",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Get in touch with MEJIAN GLOBAL TECHNOLOGY LIMITED. We're here to help with any questions about our technology solutions and products."
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
              style={{ animation: "contactOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "contactOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "contactOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "contactShimmer 10s ease-in-out infinite",
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
                <MessageCircle className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Get in Touch
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
                <span className="text-slate-100">Contact </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-contactGradient">
                  Us
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
                We're here to help with any questions you may have. Reach out
                and we'll respond as soon as possible.
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
              style={{ animation: "contactOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "contactOrb 20s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(30px)",
                    transition:
                      "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-cyan-400" />
                    Get in Touch
                  </h2>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      ref={(el) => (infoRefs.current[index] = el)}
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted
                          ? "translateX(0) scale(1)"
                          : "translateX(-30px) scale(0.95)",
                        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                          0.3 + index * 0.1
                        }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                          0.3 + index * 0.1
                        }s`,
                      }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="group/info relative block p-6 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-50 group-hover/info:opacity-100 transition-opacity duration-500 rounded-3xl`}
                          />
                          <div
                            className={`absolute inset-0 rounded-3xl border-2 ${info.borderColor} opacity-0 group-hover/info:opacity-100 transition-opacity duration-500`}
                          />
                          <div className="absolute inset-0 -translate-x-full group-hover/info:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/info:opacity-100 rounded-3xl" />

                          <div className="relative z-10 flex items-start gap-4">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center border ${info.borderColor} group-hover/info:scale-110 group-hover/info:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0`}
                            >
                              <info.icon
                                className={`h-7 w-7 ${info.iconColor} group-hover/info:scale-110 transition-transform duration-300`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-hover/info:text-cyan-400 transition-colors duration-300">
                                {info.label}
                              </p>
                              <p className="text-base md:text-lg text-slate-100 font-medium leading-relaxed group-hover/info:text-cyan-200 transition-colors duration-300">
                                {info.value}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-500 group-hover/info:text-cyan-400 group-hover/info:translate-x-1 transition-all duration-300 opacity-0 group-hover/info:opacity-100 flex-shrink-0" />
                          </div>

                          <div
                            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/info:opacity-100 transition-opacity duration-500 rounded-b-3xl ${
                              info.isCyan
                                ? "from-cyan-500 via-blue-500 to-cyan-500"
                                : "from-blue-500 via-cyan-500 to-blue-500"
                            }`}
                          />
                        </a>
                      ) : (
                        <div className="group/info relative block p-6 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-50 rounded-3xl`}
                          />
                          <div className="relative z-10 flex items-start gap-4">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center border ${info.borderColor} shadow-lg flex-shrink-0`}
                            >
                              <info.icon
                                className={`h-7 w-7 ${info.iconColor}`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                                {info.label}
                              </p>
                              <p className="text-base md:text-lg text-slate-100 font-medium leading-relaxed">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? "translateX(0) scale(1)"
                    : "translateX(30px) scale(0.95)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s",
                }}
              >
                <div className="relative group/form h-full p-8 md:p-10 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/form:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 -translate-x-full group-hover/form:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/form:opacity-100 rounded-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-lg">
                        <Send className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Send a Message
                      </h2>
                    </div>

                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-500/30 shadow-lg">
                          <CheckCircle className="h-10 w-10 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-3">
                          Message Sent!
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          Thank you for reaching out. We'll get back to you
                          within 24-48 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
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
                            placeholder="Your name"
                          />
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
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-500/50 text-slate-100"
                            placeholder="you@example.com"
                          />
                        </div>

                        <div className="group/field">
                          <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                            Subject
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                            className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 placeholder:text-slate-500/50 text-slate-100"
                            placeholder="How can we help?"
                          />
                        </div>

                        <div className="group/field">
                          <label className="block text-sm font-semibold text-slate-300 mb-2.5 group-hover/field:text-cyan-400 transition-colors duration-300">
                            Message
                          </label>
                          <textarea
                            required
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            rows={6}
                            className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 resize-none placeholder:text-slate-500/50 text-slate-100"
                            placeholder="Your message..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="group/btn w-full mt-6 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                          <Send className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          <span>Send Message</span>
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
          </div>
        </section>

        <style>{`
          @keyframes contactOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes contactShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes contactGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-contactGradient {
            animation: contactGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Contact;
