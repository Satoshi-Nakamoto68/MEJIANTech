import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import {
  RotateCcw,
  Star,
  Ban,
  ListOrdered,
  CreditCard,
  AlertTriangle,
  Truck,
} from "lucide-react";

const Returns = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nonReturnableItems = [
    "Opened software or digital products",
    "Personalized or customized items",
    "Items marked as final sale",
    "Items damaged through misuse",
  ];

  const howToReturnSteps = [
    <>
      Contact us at{" "}
      <a
        href="mailto:contact@mejian.com"
        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
      >
        contact@mejian.com
      </a>{" "}
      with your order number
    </>,
    "Receive return authorization and shipping instructions",
    "Pack items securely in original packaging",
    "Ship to the provided address",
  ];

  const sections = [
    {
      number: "1",
      title: "Return Policy",
      icon: RotateCcw,
      isCyan: true,
      content:
        "We accept returns within 30 days of delivery for most items. Products must be unused, in their original packaging, and in resalable condition.",
    },
    {
      number: "2",
      title: "Non-Returnable Items",
      icon: Ban,
      isCyan: false,
      content: (
        <ul className="space-y-3 mt-2">
          {nonReturnableItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span
                className={`mt-1 ${idx % 2 === 0 ? "text-cyan-400" : "text-blue-400"}`}
              >
                •
              </span>
              <span className="text-slate-400">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      number: "3",
      title: "How to Return",
      icon: ListOrdered,
      isCyan: true,
      content: (
        <ol className="space-y-3 mt-2">
          {howToReturnSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  idx % 2 === 0
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                }`}
              >
                {idx + 1}
              </span>
              <span className="text-slate-400">{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
    {
      number: "4",
      title: "Refund Process",
      icon: CreditCard,
      isCyan: false,
      content:
        "Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method. Please allow additional time for your bank or credit card company to process the refund.",
    },
    {
      number: "5",
      title: "Damaged or Defective Items",
      icon: AlertTriangle,
      isCyan: true,
      content:
        "If you receive a damaged or defective item, please contact us within 48 hours of delivery with photos of the damage. We will arrange for a replacement or full refund including original shipping costs.",
    },
    {
      number: "6",
      title: "Return Shipping",
      icon: Truck,
      isCyan: false,
      content:
        "Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product. We recommend using a trackable shipping method.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Returns & Refunds | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Returns and refunds policy for MEJIAN GLOBAL TECHNOLOGY LIMITED. Learn about our return window, refund process, and how to initiate a return."
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
              style={{ animation: "returnsOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "returnsOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "returnsOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "returnsShimmer 10s ease-in-out infinite",
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
                <RotateCcw className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Returns & Refunds
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
                <span className="text-slate-100">Returns & </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-returnsGradient">
                  Refunds
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
                Hassle-free returns within 30 days. We’re here to make your
                experience smooth and worry-free.
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
              style={{ animation: "returnsOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "returnsOrb 20s ease-in-out infinite" }}
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
                      <RotateCcw className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Last updated</p>
                      <p className="text-base font-semibold text-slate-100">
                        January 2025
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {sections.map((section, index) => {
                      const Icon = section.icon;
                      return (
                        <section
                          key={section.number}
                          className="group/section"
                          style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                              0.3 + index * 0.1
                            }s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${
                              0.3 + index * 0.1
                            }s`,
                          }}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg group-hover/section:scale-110 transition-transform duration-300 ${
                                  section.isCyan
                                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                                    : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30"
                                }`}
                              >
                                <span
                                  className={`text-lg font-bold ${
                                    section.isCyan
                                      ? "text-cyan-400"
                                      : "text-blue-400"
                                  }`}
                                >
                                  {section.number}
                                </span>
                              </div>
                              <div
                                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border mt-1 group-hover/section:scale-110 transition-transform duration-300 ${
                                  section.isCyan
                                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                                    : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30"
                                }`}
                              >
                                <Icon
                                  className={`h-5 w-5 ${
                                    section.isCyan
                                      ? "text-cyan-400"
                                      : "text-blue-400"
                                  }`}
                                />
                              </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover/section:text-cyan-200 transition-colors duration-300">
                              {section.title}
                            </h2>
                          </div>
                          <div className="ml-24">
                            {typeof section.content === "string" ? (
                              <p className="text-slate-400 leading-relaxed">
                                {section.content}
                              </p>
                            ) : (
                              <div className="text-slate-400 leading-relaxed">
                                {section.content}
                              </div>
                            )}
                          </div>
                        </section>
                      );
                    })}
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
          @keyframes returnsOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes returnsShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes returnsGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-returnsGradient {
            animation: returnsGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Returns;
