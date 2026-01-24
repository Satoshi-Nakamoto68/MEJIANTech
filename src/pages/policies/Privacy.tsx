import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Star, FileText, Lock, Eye, Users, Globe } from "lucide-react";

const Privacy = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Privacy policy for MEJIAN GLOBAL TECHNOLOGY LIMITED. Learn how we collect, use, and protect your personal information."
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
              style={{ animation: "privacyOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "privacyOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "privacyOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "privacyShimmer 10s ease-in-out infinite",
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
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Privacy Policy
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
                <span className="text-slate-100">Privacy </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-privacyGradient">
                  Policy
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
                Your privacy is important to us. Learn how we collect, use, and
                protect your personal information.
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
              style={{ animation: "privacyOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "privacyOrb 20s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="relative group/content p-8 md:p-10 lg:p-12 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(40px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/content:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover/content:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/content:opacity-100 rounded-3xl" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-lg">
                      <FileText className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Last updated</p>
                      <p className="text-base font-semibold text-slate-100">
                        January 2025
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <FileText className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Introduction
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-14">
                        MEJIAN GLOBAL TECHNOLOGY LIMITED ("we," "us," or "our")
                        respects your privacy and is committed to protecting your
                        personal data. This privacy policy explains how we
                        collect, use, and safeguard your information.
                      </p>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Eye className="h-5 w-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Information We Collect
                        </h2>
                      </div>
                      <ul className="list-none space-y-3 ml-14">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <div>
                            <strong className="text-cyan-300">Contact Information:</strong>{" "}
                            <span className="text-slate-400">
                              Name, email address, phone number, shipping address
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <div>
                            <strong className="text-blue-300">Payment Information:</strong>{" "}
                            <span className="text-slate-400">
                              Credit card details (processed securely by payment providers)
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <div>
                            <strong className="text-cyan-300">Order Information:</strong>{" "}
                            <span className="text-slate-400">
                              Products purchased, order history
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <div>
                            <strong className="text-blue-300">Technical Data:</strong>{" "}
                            <span className="text-slate-400">
                              IP address, browser type, device information
                            </span>
                          </div>
                        </li>
                      </ul>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Users className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          How We Use Your Information
                        </h2>
                      </div>
                      <ul className="list-none space-y-3 ml-14">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-400">
                            Process and fulfill your orders
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-400">
                            Communicate with you about your orders
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-400">
                            Provide customer support
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-400">
                            Improve our products and services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-400">
                            Comply with legal obligations
                          </span>
                        </li>
                      </ul>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.6s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.6s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Lock className="h-5 w-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Data Security
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-14">
                        We implement appropriate technical and organizational
                        measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or
                        destruction.
                      </p>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.7s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.7s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Globe className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Data Sharing
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-14">
                        We do not sell your personal information. We may share
                        your data with trusted third parties who assist us in
                        operating our website, processing payments, and
                        delivering orders, subject to confidentiality agreements.
                      </p>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.8s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.8s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Shield className="h-5 w-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Your Rights
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-14">
                        You have the right to access, correct, or delete your
                        personal data. To exercise these rights, please contact
                        us at{" "}
                        <a
                          href="mailto:contact@mejian.com"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
                        >
                          contact@mejian.com
                        </a>
                        .
                      </p>
                    </section>

                    <section
                      className="group/section"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.9s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.9s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <FileText className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Cookies
                        </h2>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-14">
                        We use cookies to enhance your browsing experience and
                        analyze website traffic. You can control cookie settings
                        through your browser preferences.
                      </p>
                    </section>

                    <section
                      className="group/section pt-6 border-t border-slate-700/50"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition:
                          "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 1s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 1s",
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 mt-1 group-hover/section:scale-110 transition-transform duration-300">
                          <Users className="h-5 w-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                          Contact Us
                        </h2>
                      </div>
                      <div className="ml-14 space-y-2 text-slate-400">
                        <p>
                          For privacy-related inquiries, please contact:
                        </p>
                        <p className="font-semibold text-slate-100">
                          MEJIAN GLOBAL TECHNOLOGY LIMITED
                        </p>
                        <p>Address to be updated</p>
                        <p>
                          Email:{" "}
                          <a
                            href="mailto:contact@mejian.com"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
                          >
                            contact@mejian.com
                          </a>
                        </p>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/content:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes privacyOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes privacyShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes privacyGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-privacyGradient {
            animation: privacyGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Privacy;
