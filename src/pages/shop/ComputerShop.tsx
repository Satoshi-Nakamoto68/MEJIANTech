import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/shop/ProductCard";
import { computerProducts } from "@/data/products";
import { Monitor, Star } from "lucide-react";

const ComputerShop = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    computerProducts.forEach((_, index) => {
      const ref = productRefs.current[index];
      if (!ref) return;
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
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Helmet>
        <title>Computer Accessories | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Shop quality computer accessories including keyboards, mice, USB hubs, cables, SSDs, and desk accessories from MEJIAN Global Technology."
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
              style={{ animation: "shopOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "shopOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "shopOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "shopShimmer 10s ease-in-out infinite",
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
                <Monitor className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Computer Accessories
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
                <span className="text-slate-100">Computer </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shopGradient">
                  Accessories
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
                Keyboards, mice, cables, hubs, drives & desk accessories.
                Everything you need for your perfect workspace.
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

        {/* Products Section */}
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
              className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-cyan-500/4"
              style={{ animation: "shopOrb 22s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div
              className="mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.2s",
              }}
            >
              <p className="text-slate-400">
                Showing{" "}
                <span className="font-semibold text-slate-100">
                  {computerProducts.length}
                </span>{" "}
                {computerProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {computerProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => {
                    productRefs.current[index] = el;
                  }}
                  className="product-card-shop-reveal"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted
                      ? "translateY(0) scale(1)"
                      : "translateY(50px) scale(0.95)",
                    transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                      0.3 + index * 0.05
                    }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                      0.3 + index * 0.05
                    }s`,
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes shopOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes shopShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes shopGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-shopGradient {
            animation: shopGradient 3s ease-in-out infinite;
          }
          .product-card-shop-reveal { opacity: 0; }
          .product-card-shop-reveal.revealed { opacity: 1; }
        `}</style>
      </Layout>
    </>
  );
};

export default ComputerShop;
