import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Headphones,
  Home,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Radio,
  Zap,
} from "lucide-react";

const categories = [
  {
    id: "computer",
    title: "Computer Accessories",
    description: "Keyboards, mice, cables, hubs, drives & desk accessories",
    icon: Laptop,
    hoverIcon: Cpu,
    path: "/shop/computer",
    isCyan: true,
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
  },
  {
    id: "phone",
    title: "Phone Accessories",
    description: "Cases, chargers, earbuds, stands & power banks",
    icon: Headphones,
    hoverIcon: Radio,
    path: "/shop/phone",
    isCyan: false,
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
  },
  {
    id: "home",
    title: "Smart Home",
    description: "Smart devices, automation systems, IoT solutions & connected home essentials",
    icon: Home,
    hoverIcon: Zap,
    path: "/shop/home",
    isCyan: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
  },
];

const CategoryShowcase = () => {
  const [mousePosition, setMousePosition] = useState<
    { x: number; y: number }[]
  >([]);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
    setMousePosition(Array(categories.length).fill({ x: 0, y: 0 }));
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
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
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition((prev) => {
      const newPositions = [...prev];
      newPositions[index] = { x, y };
      return newPositions;
    });
  };

  const handleMouseLeave = (index: number) => {
    setMousePosition((prev) => {
      const newPositions = [...prev];
      newPositions[index] = { x: 0, y: 0 };
      return newPositions;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
    >
      {/* Background – gradient only, no grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl bg-cyan-500/6"
          style={{
            animation: "categoryOrbFloat 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "categoryOrbFloat 18s ease-in-out infinite reverse",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "categoryOrbFloat 22s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Shimmer Effect */}
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.06), transparent)",
          animation: "categoryShimmer 8s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 backdrop-blur-xl shadow-lg mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 0.6s ease-out 0.3s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
            }}
          >
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Collections
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.7s ease-out 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
            }}
          >
            <span className="text-slate-100">Shop by </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-categoryGradientShift">
              Category
            </span>
          </h2>

          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
            }}
          >
            Discover premium technology products across our three main categories,
            carefully curated for your digital and smart home lifestyle needs.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const HoverIcon = category.hoverIcon;
            const mousePos = mousePosition[index] || { x: 0, y: 0 };

            return (
              <div
                key={category.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative group/card category-card-reveal"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted
                    ? `translateY(0) scale(1)`
                    : `translateY(50px) scale(0.95)`,
                  transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${0.6 + index * 0.1}s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.6 + index * 0.1}s`,
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Link
                  to={category.path}
                  className="relative block h-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                  style={{
                    transform: `perspective(1000px) rotateX(${
                      -mousePos.y * 0.05
                    }deg) rotateY(${mousePos.x * 0.05}deg) translateZ(0)`,
                    transition:
                      "transform 0.1s ease-out, box-shadow 0.3s ease-out",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 group-hover/card:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100" />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full ${
                          category.isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                        }`}
                        style={{
                          left: `${15 + i * 12}%`,
                          top: `${25 + i * 8}%`,
                          width: `${3 + i * 1.5}px`,
                          height: `${3 + i * 1.5}px`,
                          animation: `categoryParticleFloat ${
                            10 + i * 2
                          }s ease-in-out infinite`,
                          animationDelay: `${i * 0.4}s`,
                          opacity: 0,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      {/* Icon Glow */}
                      <div
                        className={`absolute -inset-4 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${
                          category.isCyan ? "bg-cyan-500/25" : "bg-blue-500/25"
                        }`}
                      />

                      {/* Icon Background */}
                      <div
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 ${
                          category.isCyan
                            ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30"
                            : "bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30"
                        }`}
                      >
                        <Icon
                          className={`h-10 w-10 transition-all duration-500 ${
                            category.isCyan
                              ? "text-cyan-400 group-hover/card:scale-125 group-hover/card:rotate-12"
                              : "text-blue-400 group-hover/card:scale-125 group-hover/card:rotate-12"
                          }`}
                          style={{
                            filter: `drop-shadow(0 4px 12px ${
                              category.isCyan
                                ? "rgba(6, 182, 212, 0.4)"
                                : "rgba(14, 165, 233, 0.4)"
                            })`,
                          }}
                        />

                        {/* Hover Icon Badge */}
                        <div className="absolute -top-1 -right-1">
                          <div
                            className={`relative p-1.5 rounded-lg bg-slate-900/95 backdrop-blur-sm border shadow-lg opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-500 ${
                              category.isCyan
                                ? "border-cyan-500/30"
                                : "border-blue-500/30"
                            }`}
                          >
                            <HoverIcon
                              className={`h-3.5 w-3.5 transition-transform duration-500 group-hover/card:scale-110 ${
                                category.isCyan ? "text-cyan-400" : "text-blue-400"
                              }`}
                              style={{
                                filter: `drop-shadow(0 2px 6px ${
                                  category.isCyan
                                    ? "rgba(6, 182, 212, 0.5)"
                                    : "rgba(14, 165, 233, 0.5)"
                                })`,
                              }}
                            />
                            <div
                              className={`absolute inset-0 rounded-lg blur-md opacity-50 -z-10 ${
                                category.isCyan ? "bg-cyan-500/30" : "bg-blue-500/30"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 flex items-center gap-3 group/title">
                      <span className="relative">
                        {category.title}
                        {/* Underline Animation */}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-500 group-hover/card:w-full ${
                            category.isCyan
                              ? "from-cyan-400 to-blue-400"
                              : "from-blue-400 to-cyan-400"
                          }`}
                        />
                      </span>
                      <ArrowUpRight
                        className={`h-6 w-6 transition-all duration-500 ${
                          category.isCyan ? "text-cyan-400" : "text-blue-400"
                        } opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:scale-110`}
                      />
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-6 group-hover/card:text-slate-300 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Explore Button */}
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500">
                      <span
                        className={
                          category.isCyan ? "text-cyan-400" : "text-blue-400"
                        }
                      >
                        Explore Collection
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          category.isCyan ? "text-cyan-400" : "text-blue-400"
                        } group-hover/card:translate-x-1 group-hover/card:-translate-y-1`}
                      />
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${
                      category.isCyan
                        ? "from-cyan-500 via-blue-500 to-cyan-500"
                        : "from-blue-500 via-cyan-500 to-blue-500"
                    }`}
                  />

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl ${
                        category.isCyan ? "border-cyan-500/50" : "border-blue-500/50"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes categoryOrbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(25px, -25px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes categoryParticleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translate(25px, -25px) scale(1.5);
            opacity: 0.6;
          }
        }

        @keyframes categoryShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes categoryGradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes card-reveal {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        .animate-categoryGradientShift {
          animation: categoryGradientShift 3s ease-in-out infinite;
        }

        .category-card-reveal {
          opacity: 0;
        }

        .category-card-reveal.revealed {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default CategoryShowcase;
