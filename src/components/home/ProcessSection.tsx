import { useState, useEffect, useRef } from "react";
import {
  Search,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse & Discover",
    description:
      "Explore our extensive catalog of quality products across all categories.",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: true,
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Add to Cart",
    description:
      "Select your favorite items and add them to your shopping cart securely.",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: false,
  },
  {
    number: "03",
    icon: Package,
    title: "Secure Checkout",
    description:
      "Complete your purchase with our encrypted and protected payment system.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: true,
  },
  {
    number: "04",
    icon: Truck,
    title: "Fast Delivery",
    description: "Receive your order quickly with our global shipping network.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: false,
  },
];

const ProcessSection = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    steps.forEach((_, index) => {
      const ref = stepRefs.current[index];
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.2 }
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
      aria-label="Shopping process"
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
          style={{ animation: "processOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "processOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "processOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "processShimmer 10s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div
          className="text-center mb-16"
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
            <CheckCircle className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              How It Works
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
            <span className="text-slate-100">Simple </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-processGradient">
              Shopping
            </span>
            <span className="text-slate-100"> Process</span>
          </h2>

          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
            }}
          >
            From browsing to delivery, we make shopping easy and enjoyable.
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

        {/* Steps Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.number} className="relative">
                  <div
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative group/step step-card-reveal"
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
                    <div className="relative h-full p-8 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50 group-hover/step:opacity-100 transition-opacity duration-500`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.hoverGradient} opacity-0 group-hover/step:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="absolute inset-0 -translate-x-full group-hover/step:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/step:opacity-100" />

                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className={`absolute rounded-full ${
                              step.isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                            }`}
                            style={{
                              left: `${30 + i * 20}%`,
                              top: `${35 + i * 15}%`,
                              width: `${3 + i * 1.5}px`,
                              height: `${3 + i * 1.5}px`,
                              animation: `processParticle ${
                                12 + i * 2
                              }s ease-in-out infinite`,
                              animationDelay: `${i * 0.5}s`,
                              opacity: 0,
                            }}
                          />
                        ))}
                      </div>

                      {/* Step Number */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover/step:scale-110 group-hover/step:rotate-6 shadow-lg ${
                            step.isCyan
                              ? "bg-cyan-500/20 border-cyan-500/40"
                              : "bg-blue-500/20 border-blue-500/40"
                          }`}
                        >
                          <span className="text-lg font-bold text-slate-100">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover/step:scale-110 group-hover/step:rotate-6 shadow-lg ${
                              step.isCyan
                                ? "bg-cyan-500/20 border-cyan-500/40"
                                : "bg-blue-500/20 border-blue-500/40"
                            }`}
                          >
                            <Icon
                              className={`h-8 w-8 transition-transform duration-300 group-hover/step:scale-110 ${
                                step.isCyan ? "text-cyan-400" : "text-blue-400"
                              }`}
                              style={{
                                filter: `drop-shadow(0 4px 12px ${
                                  step.isCyan
                                    ? "rgba(6, 182, 212, 0.4)"
                                    : "rgba(14, 165, 233, 0.4)"
                                })`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover/step:text-cyan-300 transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-400 leading-relaxed group-hover/step:text-slate-300 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/step:opacity-100 transition-opacity duration-500 rounded-b-3xl ${
                          step.isCyan
                            ? "from-cyan-500 via-blue-500 to-cyan-500"
                            : "from-blue-500 via-cyan-500 to-blue-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Arrow Connector (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300 group-hover/connector:scale-110 ${
                          step.isCyan
                            ? "bg-slate-900/80 border-cyan-500/40"
                            : "bg-slate-900/80 border-blue-500/40"
                        }`}
                      >
                        <ArrowRight
                          className={`h-4 w-4 transition-colors duration-300 ${
                            step.isCyan ? "text-cyan-400" : "text-blue-400"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes processOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes processShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes processGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes processParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.6; }
        }
        @keyframes step-card-reveal {
          from { opacity: 0; transform: translateY(60px) scale(0.9) rotateX(10deg); }
          to { opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
        }
        .animate-processGradient {
          animation: processGradient 3s ease-in-out infinite;
        }
        .step-card-reveal { opacity: 0; }
        .step-card-reveal.revealed { opacity: 1; }
      `}</style>
    </section>
  );
};

export default ProcessSection;
