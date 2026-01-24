import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Verified,
  Globe,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Tech Enthusiast",
    location: "Singapore",
    rating: 5,
    comment:
      "Outstanding quality and fast shipping! The products exceeded my expectations. Highly recommend for anyone looking for reliable tech accessories.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Home Designer",
    location: "Australia",
    rating: 5,
    comment:
      "Beautiful smart home products that perfectly match my aesthetic. The quality is exceptional and the customer service is top-notch. Will definitely order again!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    isCyan: false,
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Content Creator",
    location: "United Kingdom",
    rating: 5,
    comment:
      "As a content creator, I need reliable equipment. This company delivers exactly that. Professional quality products at great prices. Love it!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Software Developer",
    location: "South Korea",
    rating: 5,
    comment:
      "The computer accessories are exactly what I needed for my setup. Fast delivery, great packaging, and products that last. Excellent experience!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    isCyan: false,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Business Owner",
    location: "Canada",
    rating: 5,
    comment:
      "Ordered multiple items for my office. Everything arrived in perfect condition. The quality is impressive and the prices are very competitive.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 6,
    name: "Yuki Tanaka",
    role: "UX Designer",
    location: "Japan",
    rating: 5,
    comment:
      "Clean, minimalist design meets functionality. The phone accessories blend seamlessly with my workspace. International shipping was smooth and packaging pristine.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    isCyan: false,
  },
  {
    id: 7,
    name: "Hans Müller",
    role: "Systems Engineer",
    location: "Germany",
    rating: 5,
    comment:
      "Precision and reliability—exactly what I expect. Keyboard and peripherals perform flawlessly. Customer support responded quickly when I had a question. Top tier.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 8,
    name: "Priya Sharma",
    role: "Product Manager",
    location: "India",
    rating: 5,
    comment:
      "From Mumbai to MEJIAN—no hassles. Great variety of computer and smart home gear. Prices are fair and delivery was faster than expected. Will order again!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    isCyan: false,
  },
  {
    id: 9,
    name: "Fatima Al-Hassan",
    role: "Entrepreneur",
    location: "UAE",
    rating: 5,
    comment:
      "Sourced tech accessories for our Dubai office. Premium quality and the smart home range is impressive. Our team loves the new setup. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 10,
    name: "Carlos Méndez",
    role: "Freelance Designer",
    location: "Mexico",
    rating: 5,
    comment:
      "Increíble relación calidad-precio. Los accesorios para laptop y el envío internacional fueron impecables. Mi cliente quedó encantado con el pedido.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    isCyan: false,
  },
  {
    id: 11,
    name: "Marie Dubois",
    role: "Architect",
    location: "France",
    rating: 5,
    comment:
      "Équipement pro et design soigné. Les accessoires informatiques et smart home s'intègrent parfaitement à nos espaces. Livraison rapide en Europe.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    isCyan: true,
  },
  {
    id: 12,
    name: "Oluwaseun Adeyemi",
    role: "Software Developer",
    location: "Nigeria",
    rating: 5,
    comment:
      "Reliable tech gear is hard to find here. MEJIAN delivered—keyboard, mouse, and phone accessories all solid. Shipping to Lagos was smooth. Big fan!",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80",
    isCyan: false,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible: Array<(typeof testimonials)[number] & { position: number }> =
      [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
      aria-label="Customer testimonials"
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
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-cyan-500/6"
          style={{ animation: "testimonialOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "testimonialOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "testimonialOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "testimonialShimmer 10s ease-in-out infinite",
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
            <Star className="h-4 w-4 text-cyan-400 animate-pulse fill-cyan-400/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Customer Stories
            </span>
            <Verified className="h-3.5 w-3.5 text-blue-400" />
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
            <span className="text-slate-100">What Our </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-testimonialGradient">
              Customers
            </span>
            <span className="text-slate-100"> Say</span>
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
            Real feedback from satisfied customers around the world. Join
            thousands of happy customers who trust us.
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

        {/* Carousel */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial) => {
              const position = testimonial.position;
              const isCenter = position === 0;

              return (
                <div
                  key={`${testimonial.id}-${currentIndex}-${position}`}
                  className={`relative ${isCenter ? "lg:col-span-1 z-20" : "hidden lg:block z-10"}`}
                  style={{
                    transform: isCenter
                      ? "translateY(0) scale(1)"
                      : position === -1
                        ? "translateX(-20%) translateY(20px) scale(0.85)"
                        : "translateX(20%) translateY(20px) scale(0.85)",
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? "none" : "blur(2px)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="relative h-full group/testimonial"
                    style={{
                      transform:
                        hoveredCard === testimonial.id && isCenter
                          ? `perspective(1000px) rotateX(${-mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg) translateZ(12px)`
                          : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
                      transition: "transform 0.15s ease-out",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-3xl overflow-hidden opacity-[0.04] group-hover/testimonial:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                      style={{
                        backgroundImage: `url(${testimonial.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(24px)",
                      }}
                    />

                    <div
                      className={`relative h-full p-8 md:p-10 rounded-3xl border backdrop-blur-xl shadow-xl transition-all duration-500 overflow-hidden ${
                        isCenter
                          ? "border-slate-600/60 bg-slate-900/70"
                          : "border-slate-700/40 bg-slate-900/50"
                      } ${hoveredCard === testimonial.id && isCenter ? "shadow-cyan-500/15 -translate-y-2" : ""}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-40 group-hover/testimonial:opacity-70 transition-opacity duration-500 ${
                          testimonial.isCyan
                            ? "from-cyan-500/20 via-cyan-500/10 to-blue-500/10"
                            : "from-blue-500/20 via-blue-500/10 to-cyan-500/10"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-500 ${
                          testimonial.isCyan
                            ? "from-cyan-500/25 via-cyan-500/15 to-blue-500/15"
                            : "from-blue-500/25 via-blue-500/15 to-cyan-500/15"
                        }`}
                      />
                      <div className="absolute inset-0 -translate-x-full group-hover/testimonial:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/testimonial:opacity-100" />

                      <div className="absolute top-6 right-6 opacity-20 group-hover/testimonial:opacity-40 transition-all duration-500 group-hover/testimonial:scale-110 group-hover/testimonial:rotate-6 pointer-events-none">
                        <Quote
                          className={`h-24 w-24 ${testimonial.isCyan ? "text-cyan-500/60" : "text-blue-500/60"}`}
                        />
                      </div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-1 mb-5">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  testimonial.isCyan
                                    ? "text-cyan-400 fill-cyan-400/50"
                                    : "text-blue-400 fill-blue-400/50"
                                }`}
                              />
                            )
                          )}
                          <span className="ml-2 text-sm font-semibold text-slate-500 group-hover/testimonial:text-slate-400 transition-colors duration-300">
                            5.0
                          </span>
                        </div>

                        <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-6 flex-1 group-hover/testimonial:text-slate-100 transition-colors duration-300">
                          <span
                            className={`text-2xl font-serif leading-none mr-1 ${testimonial.isCyan ? "text-cyan-400/50" : "text-blue-400/50"}`}
                          >
                            &ldquo;
                          </span>
                          {testimonial.comment}
                          <span
                            className={`text-2xl font-serif leading-none ml-1 ${testimonial.isCyan ? "text-cyan-400/50" : "text-blue-400/50"}`}
                          >
                            &rdquo;
                          </span>
                        </p>

                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700/50 group-hover/testimonial:border-slate-600/60 transition-colors duration-300">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="relative w-14 h-14 rounded-full object-cover border-2 border-slate-600/60 group-hover/testimonial:border-cyan-500/40 transition-all duration-500 group-hover/testimonial:scale-105 shadow-lg"
                            />
                            <div
                              className={`absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-lg ${
                                testimonial.isCyan
                                  ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                                  : "bg-gradient-to-br from-blue-500 to-cyan-500"
                              }`}
                            >
                              <Verified className="h-3 w-3 text-white" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-slate-100 group-hover/testimonial:text-cyan-300 transition-colors duration-300 truncate">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover/testimonial:text-slate-400 flex-wrap">
                              <span>{testimonial.role}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Globe className="h-3.5 w-3.5 shrink-0" />
                                <span className="truncate">
                                  {testimonial.location}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-500 ${
                          testimonial.isCyan
                            ? "from-cyan-500 via-blue-500 to-cyan-500"
                            : "from-blue-500 via-cyan-500 to-blue-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              className="group/btn relative w-14 h-14 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-600/50 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="h-6 w-6 text-slate-300 group-hover/btn:text-cyan-400 transition-colors duration-300 relative z-10" />
            </button>

            <div className="flex items-center gap-3" role="tablist">
              {testimonials.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className="relative group/dot focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-full"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={isActive}
                    role="tab"
                  >
                    <div
                      className={`relative transition-all duration-500 rounded-full ${
                        isActive
                          ? "w-10 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/30"
                          : "w-2 h-2 bg-slate-600 hover:bg-cyan-500/60"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-full blur-md opacity-70 animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="group/btn relative w-14 h-14 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-600/50 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Next testimonial"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="h-6 w-6 text-slate-300 group-hover/btn:text-cyan-400 transition-colors duration-300 relative z-10" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonialOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes testimonialShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes testimonialGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-testimonialGradient {
          animation: testimonialGradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
