import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import TrustSection from "@/components/home/TrustSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { allProducts } from "@/data/products";
import {
  Star,
  ArrowRight,
  Eye,
  Award,
  LayoutGrid,
} from "lucide-react";

const Index = () => {
  const featuredProducts = allProducts.slice(0, 6);
  const [mousePosition, setMousePosition] = useState<
    { x: number; y: number }[]
  >([]);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
    setMousePosition(Array(featuredProducts.length).fill({ x: 0, y: 0 }));
  }, []);

  // Intersection Observer for scroll animations
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
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
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
    <>
      <Helmet>
        <title>MEJIAN Global Technology | Computer, Phone & Smart Home</title>
        <meta
          name="description"
          content="Premium technology accessories and smart home solutions from MEJIAN Global Technology. Computer, phone accessories, and smart home devices."
        />
      </Helmet>

      <Layout>
        <Hero />
        <CategoryShowcase />

        {/* Featured Collection – Dark theme, MEJIAN UI */}
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-cyan-500/6"
              style={{ animation: "featuredOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "featuredOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "featuredOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "featuredShimmer 10s ease-in-out infinite",
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
                  "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
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
                <Award className="h-4 w-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Featured Collection
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
                <span className="text-slate-100">Featured </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-featuredGradient">
                  Products
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
                Discover our most popular items across all categories, carefully
                curated for quality and style.
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((product, index) => {
                const mousePos = mousePosition[index] || { x: 0, y: 0 };
                const isCyan = index % 2 === 0;

                return (
                  <div
                    key={product.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="relative group/product product-card-reveal"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: mounted ? 1 : 0,
                      transform: mounted
                        ? "translateY(0) scale(1)"
                        : "translateY(50px) scale(0.95)",
                      transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                        0.6 + index * 0.08
                      }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                        0.6 + index * 0.08
                      }s`,
                    }}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="relative block h-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                      style={{
                        transform: `perspective(1000px) rotateX(${
                          -mousePos.y * 0.03
                        }deg) rotateY(${mousePos.x * 0.03}deg) translateZ(0)`,
                        transition:
                          "transform 0.1s ease-out, box-shadow 0.3s ease-out",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-50 group-hover/product:opacity-100 transition-opacity duration-500 ${
                          isCyan
                            ? "from-cyan-500/20 via-cyan-500/10 to-blue-500/10"
                            : "from-blue-500/20 via-blue-500/10 to-cyan-500/10"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 ${
                          isCyan
                            ? "from-cyan-500/30 via-cyan-500/20 to-blue-500/20"
                            : "from-blue-500/30 via-blue-500/20 to-cyan-500/20"
                        }`}
                      />
                      <div className="absolute inset-0 -translate-x-full group-hover/product:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/product:opacity-100" />
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className={`absolute rounded-full ${
                              isCyan ? "bg-cyan-500/15" : "bg-blue-500/15"
                            }`}
                            style={{
                              left: `${25 + i * 18}%`,
                              top: `${35 + i * 12}%`,
                              width: `${3 + i * 1.5}px`,
                              height: `${3 + i * 1.5}px`,
                              animation: `featuredParticle ${
                                12 + i * 2
                              }s ease-in-out infinite`,
                              animationDelay: `${i * 0.6}s`,
                              opacity: 0,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/product:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover/product:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/product:translate-y-0">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-lg">
                            <Eye className="h-3.5 w-3.5 text-cyan-400" />
                            <span className="text-xs font-semibold text-slate-100">
                              View
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          {/* Dark backdrop for contrast */}
                          <div className="absolute -inset-1 bg-slate-950/70 backdrop-blur-md rounded-full blur-sm" />
                          <div
                            className={`relative px-3 py-1.5 rounded-full backdrop-blur-xl border-2 shadow-2xl ${
                              isCyan
                                ? "bg-cyan-500/80 border-cyan-400/90 shadow-cyan-500/50"
                                : "bg-blue-500/80 border-blue-400/90 shadow-blue-500/50"
                            }`}
                          >
                            <span
                              className={`text-xs font-extrabold uppercase tracking-wider drop-shadow-lg ${
                                isCyan ? "text-cyan-50" : "text-blue-50"
                              }`}
                              style={{
                                textShadow:
                                  "0 1px 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)",
                              }}
                            >
                              {product.category}
                            </span>
                            {/* Glow effect */}
                            <div
                              className={`absolute inset-0 rounded-full blur-md opacity-60 ${
                                isCyan ? "bg-cyan-400/40" : "bg-blue-400/40"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 p-6">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 group-hover/product:text-cyan-400/80 transition-colors duration-300">
                          {product.subcategory}
                        </p>
                        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover/product:text-cyan-300 transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2 group-hover/product:text-slate-300 transition-colors duration-300">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  isCyan
                                    ? "text-cyan-400 fill-cyan-400/40"
                                    : "text-blue-400 fill-blue-400/40"
                                }`}
                              />
                            ))}
                            <span className="text-xs font-medium text-slate-500 ml-2">
                              5.0
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover/product:opacity-100 transform translate-x-2 group-hover/product:translate-x-0 transition-all duration-500">
                            <span
                              className={
                                isCyan ? "text-cyan-400" : "text-blue-400"
                              }
                            >
                              Explore
                            </span>
                            <ArrowRight
                              className={`h-4 w-4 transition-transform duration-300 group-hover/product:translate-x-1 ${
                                isCyan ? "text-cyan-400" : "text-blue-400"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 ${
                          isCyan
                            ? "from-cyan-500 via-blue-500 to-cyan-500"
                            : "from-blue-500 via-cyan-500 to-blue-500"
                        }`}
                      />
                      <div className="absolute top-4 right-4 w-14 h-14 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl ${
                            isCyan ? "border-cyan-500/40" : "border-blue-500/40"
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* View All */}
            <div
              className="text-center mt-14"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.7s ease-out 1s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 1s",
              }}
            >
              <Link
                to="/shop/computer"
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <LayoutGrid className="h-5 w-5 transition-all duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-90" />
                <span>View All Products</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700 rounded-xl" />
              </Link>
            </div>
          </div>

          <style>{`
            @keyframes featuredOrb {
              0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.7;
              }
              50% {
                transform: translate(30px, -30px) scale(1.1);
                opacity: 1;
              }
            }
            @keyframes featuredShimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
            @keyframes featuredGradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes featuredParticle {
              0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0;
              }
              50% {
                transform: translate(20px, -20px) scale(1.5);
                opacity: 0.6;
              }
            }
            @keyframes product-card-reveal {
              from {
                opacity: 0;
                transform: translateY(60px) scale(0.9) rotateX(15deg);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1) rotateX(0deg);
              }
            }
            .animate-featuredGradient {
              animation: featuredGradient 3s ease-in-out infinite;
            }
            .product-card-reveal {
              opacity: 0;
            }
            .product-card-reveal.revealed {
              opacity: 1;
            }
          `}</style>
        </section>

        <StatsSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TrustSection />
        <NewsletterSection />
      </Layout>
    </>
  );
};

export default Index;
