import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Zap,
  Globe,
  Award,
  Headphones,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified & Trusted",
    description:
      "Officially registered company with full transparency and certification. Your trust is our foundation.",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: true,
    image:
      "/verified_trusted.jpg",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Quick processing and global shipping to get your orders delivered fast. Experience speed like never before.",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: false,
    image:
      "/lightning_fast.jpg",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Carefully selected products made from high-quality materials and craftsmanship. Excellence in every detail.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: true,
    image:"/premium_quality.jpg",
  },
  {
    icon: Globe,
    title: "Worldwide Reach",
    description:
      "Serving customers globally with reliable international shipping options. We deliver everywhere you need.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: false,
    image:
      "/worldwide_reach.jpg",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated customer service team ready to assist you anytime, anywhere. We're always here for you.",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    isCyan: true,
    image:
      "/support24.jpg",
  },
  {
    icon: TrendingUp,
    title: "Best Value",
    description:
      "Competitive prices without compromising on quality or service standards. Get more for your money.",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    isCyan: false,
    image:
      "/best_value.jpg",
  },
];

const WhyChooseUsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
      aria-label="Why choose us"
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
          style={{ animation: "whyChooseOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "whyChooseOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "whyChooseOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "whyChooseShimmer 10s ease-in-out infinite",
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
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why Choose Us
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
            <span className="text-slate-100">Why We&apos;re </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-whyChooseGradient">
              Different
            </span>
          </h2>

          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
            }}
          >
            Experience the difference with our commitment to quality, service,
            and customer satisfaction. Discover what makes us stand out.
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={feature.title}
                className="relative group/feature"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? "translateY(0) scale(1)"
                    : "translateY(50px) scale(0.95)",
                  transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                    0.5 + index * 0.07
                  }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                    0.5 + index * 0.07
                  }s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative h-full rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                  style={{
                    transform: isHovered
                      ? `perspective(1000px) rotateX(${-mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg) translateZ(8px)`
                      : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
                    transition:
                      "transform 0.15s ease-out, box-shadow 0.3s ease-out",
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/feature:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 group-hover/feature:opacity-70 transition-opacity duration-500`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500`}
                    />
                  </div>

                  <div className="absolute inset-0 -translate-x-full group-hover/feature:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/feature:opacity-100" />

                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full ${
                          feature.isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                        }`}
                        style={{
                          left: `${25 + i * 18}%`,
                          top: `${30 + i * 15}%`,
                          width: `${3 + i * 1.5}px`,
                          height: `${3 + i * 1.5}px`,
                          animation: `whyChooseParticle ${
                            12 + i * 2
                          }s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                          opacity: 0,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col h-full min-h-[280px] p-6 md:p-8">
                    <div className="mb-5">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover/feature:scale-110 group-hover/feature:rotate-6 ${
                          feature.isCyan
                            ? "bg-cyan-500/20 border-cyan-500/40"
                            : "bg-blue-500/20 border-blue-500/40"
                        }`}
                      >
                        <Icon
                          className={`h-7 w-7 ${
                            feature.isCyan ? "text-cyan-400" : "text-blue-400"
                          }`}
                          style={{
                            filter: `drop-shadow(0 4px 12px ${
                              feature.isCyan
                                ? "rgba(6, 182, 212, 0.4)"
                                : "rgba(14, 165, 233, 0.4)"
                            })`,
                          }}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover/feature:text-cyan-200 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed flex-1 group-hover/feature:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold mt-4 opacity-0 group-hover/feature:opacity-100 transform translate-y-2 group-hover/feature:translate-y-0 transition-all duration-500">
                      <span
                        className={
                          feature.isCyan ? "text-cyan-400" : "text-blue-400"
                        }
                      >
                        Learn more
                      </span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-300 group-hover/feature:translate-x-1 ${
                          feature.isCyan ? "text-cyan-400" : "text-blue-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 ${
                      feature.isCyan
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
        @keyframes whyChooseOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes whyChooseShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes whyChooseGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes whyChooseParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.6; }
        }
        .animate-whyChooseGradient {
          animation: whyChooseGradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
