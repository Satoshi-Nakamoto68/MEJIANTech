import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import {
  Package,
  Star,
  Clock,
  Truck,
  Globe,
  MapPin,
  Search,
  AlertCircle,
  Mail,
} from "lucide-react";

const Shipping = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    {
      number: "1",
      title: "Processing Time",
      icon: Clock,
      isCyan: true,
      content:
        "Orders are typically processed within 1-3 business days. You will receive a confirmation email with tracking information once your order has shipped.",
    },
    {
      number: "2",
      title: "Shipping Methods",
      icon: Truck,
      isCyan: false,
      content:
        "We offer multiple shipping options including standard and express delivery. Shipping costs and estimated delivery times are calculated at checkout based on your location and selected shipping method.",
    },
    {
      number: "3",
      title: "International Shipping",
      icon: Globe,
      isCyan: true,
      content:
        "We ship to most countries worldwide. International customers may be responsible for import duties, taxes, and customs fees imposed by their country. These charges are not included in the product price or shipping cost.",
    },
    {
      number: "4",
      title: "Delivery Times",
      icon: MapPin,
      isCyan: false,
      content: (
        <ul className="space-y-3 mt-2">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            <span>
              <strong className="text-cyan-300">Hong Kong:</strong>{" "}
              <span className="text-slate-400">1-3 business days</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span>
              <strong className="text-blue-300">Asia Pacific:</strong>{" "}
              <span className="text-slate-400">5-10 business days</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            <span>
              <strong className="text-cyan-300">Europe & Americas:</strong>{" "}
              <span className="text-slate-400">7-14 business days</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">•</span>
            <span>
              <strong className="text-blue-300">Rest of World:</strong>{" "}
              <span className="text-slate-400">10-21 business days</span>
            </span>
          </li>
        </ul>
      ),
    },
    {
      number: "5",
      title: "Order Tracking",
      icon: Search,
      isCyan: true,
      content:
        "Once your order ships, you will receive an email with tracking information. You can track your package using the provided tracking number on the carrier's website.",
    },
    {
      number: "6",
      title: "Shipping Issues",
      icon: AlertCircle,
      isCyan: false,
      content: (
        <>
          If your package is lost, damaged, or significantly delayed, please
          contact us at{" "}
          <a
            href="mailto:contact@mejian.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
          >
            contact@mejian.com
          </a>{" "}
          and we will work with you to resolve the issue.
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shipping Policy | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Shipping policy for MEJIAN GLOBAL TECHNOLOGY LIMITED. Learn about our shipping methods, delivery times, and international shipping options."
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
              style={{ animation: "shippingOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "shippingOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "shippingOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "shippingShimmer 10s ease-in-out infinite",
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
                <Package className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Shipping Policy
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
                <span className="text-slate-100">Shipping </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shippingGradient">
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
                Fast, reliable shipping worldwide. Track your orders and stay
                informed every step of the way.
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
              style={{ animation: "shippingOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "shippingOrb 20s ease-in-out infinite" }}
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
                      <Package className="h-6 w-6 text-cyan-400" />
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
          @keyframes shippingOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes shippingShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes shippingGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-shippingGradient {
            animation: shippingGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Shipping;
