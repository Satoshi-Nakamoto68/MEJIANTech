import { useState, useEffect, useRef } from "react";
import {
  Package,
  BadgeCheck,
  CreditCard,
  Plane,
  Factory,
  Navigation,
  ScrollText,
  CalendarCheck,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

const trustBadges = [
  {
    icon: Package,
    label: "Quality Products",
    description: "Premium materials & craftsmanship",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: true,
  },
  {
    icon: BadgeCheck,
    label: "Verified Business",
    description: "Officially registered & certified",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: false,
  },
  {
    icon: CreditCard,
    label: "Secure Payments",
    description: "Encrypted & protected transactions",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: true,
  },
  {
    icon: Plane,
    label: "Global Shipping",
    description: "Worldwide delivery available",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: false,
  },
];

const companyInfo = [
  {
    icon: Factory,
    label: "Company Name",
    value: "MEJIAN GLOBAL TECHNOLOGY LIMITED",
  },
  {
    icon: Navigation,
    label: "Address",
    value: "Address to be updated",
  },
  {
    icon: ScrollText,
    label: "Certificate No.",
    value: "—",
  },
  {
    icon: CalendarCheck,
    label: "Valid",
    value: "—",
  },
];

const TrustSection = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    [...badgeRefs.current, ...infoRefs.current].forEach((ref) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
      aria-label="Trust and company information"
    >
      {/* Background */}
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
          style={{ animation: "trustOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "trustOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "trustOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "trustShimmer 10s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div
          className="text-center mb-16 md:mb-20"
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
            <Award className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Trust & Credibility
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
            }}
          >
            <span className="text-slate-100">A Trusted </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-trustGradient">
              Global
            </span>
            <span className="text-slate-100"> Company</span>
          </h2>

          <p
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
            }}
          >
            MEJIAN Global Technology is committed to transparency, quality, and
            customer satisfaction. Your trust is our foundation.
          </p>

          <div
            className="flex items-center justify-center gap-2 mt-6"
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Company Information Card */}
          <div
            className="relative"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.95)",
              transition:
                "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s",
            }}
          >
            <div className="relative group/card h-full p-8 md:p-10 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-cyan-500/10 rounded-3xl opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/40">
                    <Factory className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                    Company Information
                  </h3>
                </div>

                <div className="space-y-4">
                  {companyInfo.map((info, index) => (
                    <div
                      key={info.label}
                      ref={(el) => {
                        infoRefs.current[index] = el;
                      }}
                      className="group/info flex gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-500/15 flex items-center justify-center border border-cyan-500/30 group-hover/info:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 group-hover/info:text-cyan-400 transition-colors duration-300">
                          {info.label}
                        </p>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-sm font-medium text-slate-200">
                      <span className="text-cyan-400">Verified</span> and
                      committed to transparency
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/40" />
              </div>
            </div>
          </div>

          {/* Right: Trust Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  ref={(el) => {
                    badgeRefs.current[index] = el;
                  }}
                  className="relative group/badge trust-badge-reveal"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted
                      ? "translateY(0) scale(1)"
                      : "translateY(50px) scale(0.95)",
                    transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                      0.3 + index * 0.08
                    }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                      0.3 + index * 0.08
                    }s`,
                  }}
                >
                  <div className="relative h-full p-6 md:p-8 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} opacity-50 group-hover/badge:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${badge.hoverGradient} opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />
                    <div className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/badge:opacity-100 rounded-2xl" />

                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className={`absolute rounded-full ${
                            badge.isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                          }`}
                          style={{
                            left: `${30 + i * 25}%`,
                            top: `${40 + i * 20}%`,
                            width: `${3 + i}px`,
                            height: `${3 + i}px`,
                            animation: `trustParticle ${
                              12 + i * 2
                            }s ease-in-out infinite`,
                            animationDelay: `${i * 0.6}s`,
                            opacity: 0,
                          }}
                        />
                      ))}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:rotate-6 shadow-lg ${
                            badge.isCyan
                              ? "bg-cyan-500/20 border-cyan-500/40"
                              : "bg-blue-500/20 border-blue-500/40"
                          }`}
                        >
                          <Icon
                            className={`h-7 w-7 ${
                              badge.isCyan ? "text-cyan-400" : "text-blue-400"
                            }`}
                            style={{
                              filter: `drop-shadow(0 4px 12px ${
                                badge.isCyan
                                  ? "rgba(6, 182, 212, 0.4)"
                                  : "rgba(14, 165, 233, 0.4)"
                              })`,
                            }}
                          />
                        </div>
                      </div>

                      <h4 className="text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover/badge:text-cyan-300 transition-colors duration-300">
                        {badge.label}
                      </h4>

                      <p className="text-sm text-slate-400 leading-relaxed group-hover/badge:text-slate-300 transition-colors duration-300">
                        {badge.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover/badge:opacity-100 transform translate-y-2 group-hover/badge:translate-y-0 transition-all duration-500">
                        <span
                          className={
                            badge.isCyan ? "text-cyan-400" : "text-blue-400"
                          }
                        >
                          Learn more
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            badge.isCyan
                              ? "bg-cyan-500/20"
                              : "bg-blue-500/20"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              badge.isCyan ? "bg-cyan-400" : "bg-blue-400"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 rounded-b-2xl ${
                        badge.isCyan
                          ? "from-cyan-500 via-blue-500 to-cyan-500"
                          : "from-blue-500 via-cyan-500 to-blue-500"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trustOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes trustShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes trustGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes trustParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.6; }
        }
        .animate-trustGradient {
          animation: trustGradient 3s ease-in-out infinite;
        }
        .trust-badge-reveal { opacity: 0; }
        .trust-badge-reveal.revealed { opacity: 1; }
      `}</style>
    </section>
  );
};

export default TrustSection;
