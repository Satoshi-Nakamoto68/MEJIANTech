import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Laptop,
  Headphones,
  Home,
  Shield,
  CheckCircle2,
  Sparkles,
  Star,
  TrendingUp,
  Rocket,
  Globe2,
  Zap,
  Award,
  Building2,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number }>
  >([]);
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(newParticles);
  }, []);

  const categories = [
    {
      name: "Computer",
      path: "/shop/computer",
      icon: Laptop,
      color: "cyan",
      delay: "0.1s",
    },
    {
      name: "Phone",
      path: "/shop/phone",
      icon: Headphones,
      color: "blue",
      delay: "0.2s",
    },
    {
      name: "Smart Home",
      path: "/shop/home",
      icon: Home,
      color: "cyan",
      delay: "0.3s",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background – gradient only, no grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 60%, #1e293b 100%)",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-cyan-500/8"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: "transform 0.15s ease-out",
            animation: "heroOrbFloat 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl bg-blue-500/6"
          style={{
            transform: `translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`,
            transition: "transform 0.15s ease-out",
            animation: "heroOrbFloat 18s ease-in-out infinite reverse",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "heroOrbFloat 22s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Particle System */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-500/15 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `heroParticleFloat ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.id * 0.4}s`,
          }}
        />
      ))}

      {/* Shimmer Effect */}
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.08), transparent)",
          animation: "heroShimmer 6s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
          {/* Content Section */}
          <div
            className="text-center lg:text-left space-y-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
            }}
          >
            {/* Trust Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 backdrop-blur-xl shadow-lg group/badge"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                  transition: "opacity 0.6s ease-out 0.3s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
                }}
              >
                <div className="relative">
                  <Shield className="h-4 w-4 text-cyan-400 group-hover/badge:scale-110 transition-transform duration-300" />
                  <CheckCircle2 className="absolute -bottom-1 -right-1 h-2.5 w-2.5 text-emerald-400 bg-slate-950 rounded-full" />
                </div>
                <span className="text-sm font-semibold text-slate-100">
                  MEJIAN Global Technology
                </span>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/8 to-blue-500/8 border border-cyan-500/20 backdrop-blur-xl shadow-lg group/new"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                  transition: "opacity 0.6s ease-out 0.35s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.35s",
                }}
              >
                <Rocket className="h-4 w-4 text-cyan-400 group-hover/new:scale-110 group-hover/new:rotate-12 transition-all duration-300" />
                <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Est. 2025 • Innovation Leader
                </span>
                <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out 0.4s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s",
                }}
              >
                <span className="block text-slate-100">
                  Technology Solutions for
                </span>
                <span className="block relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-heroGradientShift">
                    Your Digital World
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-cyan-400/30 blur-2xl opacity-50 animate-pulse-slow" />
                </span>
              </h1>

              <div
                className="flex items-center gap-2 justify-center lg:justify-start"
                style={{
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 0.6s ease-out 0.5s",
                }}
              >
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                <Star className="h-4 w-4 text-cyan-400 animate-pulse" />
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
            </div>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.7s ease-out 0.6s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.6s",
              }}
            >
              Premium technology accessories and smart home solutions. Founded in 2025, MEJIAN brings you{" "}
              <span className="font-semibold text-cyan-400">cutting-edge</span> computer accessories,{" "}
              <span className="font-semibold text-blue-400">innovative</span> phone accessories, and{" "}
              <span className="font-semibold text-cyan-400">intelligent</span> smart home devices.
            </p>

            {/* Stats Row */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.7s ease-out 0.7s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.7s",
              }}
            >
              {[
                { icon: Rocket, value: "2025", label: "Established", isCyan: true },
                { icon: Sparkles, value: "500+", label: "Products", isCyan: false },
                { icon: Globe2, value: "Global", label: "Shipping", isCyan: true },
                { icon: Award, value: "100%", label: "Quality", isCyan: false },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 group/stat"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity 0.5s ease-out ${0.75 + idx * 0.05}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.75 + idx * 0.05}s`,
                    }}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-300 group-hover/stat:scale-110 ${
                      stat.isCyan
                        ? "bg-cyan-500/10 group-hover/stat:bg-cyan-500/20"
                        : "bg-blue-500/10 group-hover/stat:bg-blue-500/20"
                    }`}>
                      <Icon className={`h-5 w-5 group-hover/stat:scale-110 transition-transform duration-300 ${
                        stat.isCyan ? "text-cyan-400" : "text-blue-400"
                      }`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-100">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease-out 0.9s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.9s",
              }}
            >
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isPrimary = index === 0;
                return (
                  <Link
                    key={category.path}
                    to={category.path}
                    className={`group/btn relative overflow-hidden rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 ${
                      isPrimary
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
                        : "bg-slate-800/60 text-slate-200 border border-slate-700/50 hover:bg-slate-800/80 hover:border-cyan-500/30 hover:scale-105"
                    }`}
                    style={{
                      animation: `heroButtonEntrance 0.6s ease-out ${category.delay} both`,
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon
                        className={`h-5 w-5 transition-all duration-300 ${
                          isPrimary
                            ? "group-hover/btn:rotate-12 group-hover/btn:scale-110"
                            : "group-hover/btn:scale-110"
                        }`}
                      />
                      <span>Shop {category.name}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1"
                      />
                    </span>
                    {isPrimary && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Hero Image Section */}
          <div
            ref={imageRef}
            className="relative"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`
                : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(0.95)",
              transition: "opacity 0.8s ease-out 0.4s, transform 0.15s ease-out",
            }}
          >
            <div className="relative group/image">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-cyan-500/15 rounded-3xl blur-2xl opacity-50 group-hover/image:opacity-75 transition-opacity duration-500" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl shadow-2xl group-hover/image:shadow-cyan-500/20 transition-all duration-500">
                <img
                  src={heroImage}
                  alt="Technology accessories including keyboard, mouse, earbuds, phone case, and smart home devices"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover/image:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badges */}
              <div
                className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out 0.8s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.8s",
                  animation: "heroBadgeFloat 4s ease-in-out infinite",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-100">
                      Verified Business
                    </p>
                    <p className="text-xs text-slate-400">
                      MEJIAN Global Technology
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out 1s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 1s",
                  animation: "heroBadgeFloat 4s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-cyan-400 fill-cyan-400/30" />
                  <div>
                    <p className="text-xs font-bold text-slate-100">5.0</p>
                    <p className="text-[10px] text-slate-400">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease-out 1.2s",
          animation: "heroScrollBounce 2s ease-in-out infinite",
          animationDelay: "1.2s",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-heroScrollIndicator" />
        </div>
      </div>

      <style>{`
        @keyframes heroOrbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes heroParticleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30px, -30px) scale(1.5);
            opacity: 0.6;
          }
        }

        @keyframes heroShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes heroGradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes heroButtonEntrance {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroBadgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes heroScrollBounce {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -10px);
          }
        }

        @keyframes heroScrollIndicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-heroGradientShift {
          animation: heroGradientShift 3s ease-in-out infinite;
        }

        .animate-heroScrollIndicator {
          animation: heroScrollIndicator 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
