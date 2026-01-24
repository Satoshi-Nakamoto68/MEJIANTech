import { useState, useEffect, useRef } from "react";
import { Mail, Send, CheckCircle2, Star } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-slate-950"
      aria-label="Newsletter signup"
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
          style={{ animation: "newsletterOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "newsletterOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "newsletterOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "newsletterShimmer 10s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        <div
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 backdrop-blur-xl shadow-lg mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-10px)",
              transition:
                "opacity 0.6s ease-out 0.3s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
            }}
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Stay Updated
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
            }}
          >
            Never Miss a{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-newsletterGradient">
              Deal
            </span>
          </h2>

          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition:
                "opacity 0.7s ease-out 0.5s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s",
            }}
          >
            Subscribe to our newsletter and be the first to know about new
            products, exclusive offers, and special promotions.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="relative max-w-md mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s ease-out 0.55s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.55s",
            }}
          >
            <div className="relative group/form">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-0">
                  <Mail className="h-5 w-5 text-cyan-400/80 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-500 text-base"
                    required
                    disabled={isSubmitted}
                    aria-label="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Benefits */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.65s",
            }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>

          {/* Decorative */}
          <div
            className="flex items-center justify-center gap-2 mt-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.7s",
            }}
          >
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-cyan-500 rounded-full" />
            <Star className="h-4 w-4 text-cyan-400 animate-pulse" />
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes newsletterOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes newsletterShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes newsletterGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-newsletterGradient {
          animation: newsletterGradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
