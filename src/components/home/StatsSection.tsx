import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Users,
  Package,
  Globe,
  Award,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "500+",
    label: "Products",
    description: "Quality items across all categories",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: true,
  },
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
    description: "Satisfied clients worldwide",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: false,
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Global shipping coverage",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: true,
  },
  {
    icon: Award,
    value: "100%",
    label: "Quality",
    description: "Premium materials guaranteed",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: false,
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [countedValues, setCountedValues] = useState<{ [key: number]: number }>(
    {}
  );
  const sectionRef = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers: ReturnType<typeof setInterval>[] = [];

    stats.forEach((stat, index) => {
      const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
      if (Number.isNaN(numericValue)) return;

      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCountedValues((prev) => ({ ...prev, [index]: numericValue }));
          clearInterval(timer);
          timers.splice(timers.indexOf(timer), 1);
          return;
        }
        setCountedValues((prev) => ({
          ...prev,
          [index]: Math.floor(current),
        }));
      }, duration / steps);

      timers.push(timer);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stats.forEach((_, index) => {
      const ref = statRefs.current[index];
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.3 }
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
      aria-label="Company statistics and impact"
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
          style={{ animation: "statsOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "statsOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "statsOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "statsShimmer 10s ease-in-out infinite",
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
            <TrendingUp className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Impact
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
            <span className="text-slate-100">Numbers That </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-statsGradient">
              Speak
            </span>
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
            Building trust through transparency and measurable results.
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const raw =
              countedValues[index] !== undefined ? countedValues[index]! : null;
            const displayValue =
              raw !== null
                ? stat.value.includes("%")
                  ? `${raw}%`
                  : stat.value.includes("K")
                    ? `${raw}K+`
                    : `${raw}+`
                : stat.value;

            return (
              <div
                key={stat.label}
                ref={(el) => {
                  statRefs.current[index] = el;
                }}
                className="relative group/stat stat-card-reveal"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? "translateY(0) scale(1)"
                    : "translateY(50px) scale(0.95)",
                  transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                    0.5 + index * 0.08
                  }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                    0.5 + index * 0.08
                  }s`,
                }}
              >
                <div className="relative h-full p-8 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50 group-hover/stat:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.hoverGradient} opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/stat:opacity-100" />
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full ${
                          stat.isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                        }`}
                        style={{
                          left: `${25 + i * 18}%`,
                          top: `${35 + i * 12}%`,
                          width: `${3 + i * 1.5}px`,
                          height: `${3 + i * 1.5}px`,
                          animation: `statsParticle ${
                            12 + i * 2
                          }s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                          opacity: 0,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6 shadow-lg ${
                          stat.isCyan
                            ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border-cyan-500/30"
                            : "bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-500/30"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 transition-transform duration-300 group-hover/stat:scale-110 ${
                            stat.isCyan ? "text-cyan-400" : "text-blue-400"
                          }`}
                          style={{
                            filter: `drop-shadow(0 4px 12px ${
                              stat.isCyan
                                ? "rgba(6, 182, 212, 0.4)"
                                : "rgba(14, 165, 233, 0.4)"
                            })`,
                          }}
                        />
                      </div>
                    </div>

                    <p className="text-4xl md:text-5xl font-bold text-slate-100 mb-2 group-hover/stat:text-cyan-300 transition-colors duration-300 tabular-nums">
                      {displayValue}
                    </p>
                    <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover/stat:text-cyan-300 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover/stat:text-slate-300 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 ${
                      stat.isCyan
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

      <style>{`
        @keyframes statsOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes statsShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes statsGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes statsParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.6; }
        }
        @keyframes stat-card-reveal {
          from { opacity: 0; transform: translateY(60px) scale(0.9) rotateX(15deg); }
          to { opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
        }
        .animate-statsGradient {
          animation: statsGradient 3s ease-in-out infinite;
        }
        .stat-card-reveal { opacity: 0; }
        .stat-card-reveal.revealed { opacity: 1; }
      `}</style>
    </section>
  );
};

export default StatsSection;
