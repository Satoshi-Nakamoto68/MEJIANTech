import { useEffect, useState } from "react";
import {
  Shield,
  CheckCircle2,
  MapPin,
  Building2,
  Sparkles,
  Truck,
  Lock,
  Headphones,
  Award,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

const companyInfo = {
  name: "MEJIAN GLOBAL TECHNOLOGY LIMITED",
  tagline: "Global Technology Solutions",
  address: "",
  addressPlaceholder: "Address coming soon",
  email: "", // Placeholder - update later
  emailPlaceholder: "Contact us",
  phone: "", // Placeholder - update later
  phonePlaceholder: "Hotline coming soon",
  status: "Verified Business",
};

const trustBadges = [
  {
    icon: Truck,
    label: "Free Shipping",
    sub: "On orders over $99",
    aria: "Free shipping on orders over 99 dollars",
  },
  {
    icon: Lock,
    label: "Secure Payment",
    sub: "256-bit SSL encrypted",
    aria: "Secure payment with 256-bit SSL encryption",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    sub: "Dedicated team",
    aria: "24/7 customer support",
  },
  {
    icon: Award,
    label: "Quality Guaranteed",
    sub: "2-year warranty",
    aria: "Quality guaranteed with 2-year warranty",
  },
  {
    icon: Globe,
    label: "Global Delivery",
    sub: "150+ countries",
    aria: "Worldwide delivery to over 150 countries",
  },
] as const;

const TrustBar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Company information and trust badges"
      className="relative overflow-hidden border-b border-slate-700/40 bg-slate-950"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition:
          "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Background: gradient only, no grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 35%, #0f172a 70%, #1e293b 100%)",
        }}
      />
      {/* Subtle gradient orbs – soft, no grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl bg-cyan-500/8"
          style={{
            top: "-20%",
            right: "-5%",
            animation: "trustOrbFloat 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full blur-3xl bg-blue-500/6"
          style={{
            bottom: "-15%",
            left: "-5%",
            animation: "trustOrbFloat 12s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Primary row: Company | Address | Verified | Contact */}
      <div className="relative z-10 border-b border-slate-700/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            {/* Company */}
            <div
              className="flex items-center gap-3 group/company min-w-0"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-20px)",
                transition:
                  "opacity 0.5s ease-out 0.1s, transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              <div className="relative flex-shrink-0">
                <div className="rounded-lg border border-cyan-500/25 bg-cyan-500/5 p-2.5 transition-all duration-300 group-hover/company:border-cyan-500/40 group-hover/company:bg-cyan-500/10">
                  <Building2
                    className="h-5 w-5 text-cyan-400 transition-all duration-300 group-hover/company:scale-105"
                    aria-hidden
                  />
                </div>
                <Sparkles
                  className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 text-cyan-400 animate-pulse"
                  aria-hidden
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-slate-100 truncate transition-colors duration-300 group-hover/company:text-cyan-300">
                  {companyInfo.name}
                </p>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                  {companyInfo.tagline}
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-600/50 flex-shrink-0" />

            {/* Address */}
            <div
              className="flex items-center gap-2.5 group/address"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition:
                  "opacity 0.5s ease-out 0.2s, transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.2s",
              }}
            >
              <MapPin
                className="h-4 w-4 text-sky-400 flex-shrink-0 transition-transform duration-300 group-hover/address:scale-110"
                aria-hidden
              />
              <span
                className={`text-[11px] sm:text-xs truncate max-w-[220px] sm:max-w-none transition-colors duration-300 ${
                  companyInfo.address
                    ? "text-slate-300 group-hover/address:text-sky-300"
                    : "text-slate-500 italic"
                }`}
                title={companyInfo.address || companyInfo.addressPlaceholder}
              >
                {companyInfo.address || companyInfo.addressPlaceholder}
              </span>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-600/50 flex-shrink-0" />

            {/* Verified badge */}
            <div
              className="flex items-center gap-2"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition:
                  "opacity 0.5s ease-out 0.3s, transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.3s",
              }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5">
                <div className="relative">
                  <Shield
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden
                  />
                  <span
                    className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
                    aria-hidden
                  />
                </div>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-400/90">
                  {companyInfo.status}
                </span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-slate-600/50 flex-shrink-0" />

            {/* Contact: email & phone placeholders */}
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(20px)",
                transition:
                  "opacity 0.5s ease-out 0.4s, transform 0.5s cubic-bezier(0.4,0,0.2,1) 0.4s",
              }}
            >
              {companyInfo.email ? (
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-300 group/email"
                  aria-label={`Email us at ${companyInfo.email}`}
                >
                  <Mail className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-300 group-hover/email:scale-110" />
                  <span className="truncate max-w-[140px]">{companyInfo.email}</span>
                </a>
              ) : (
                <span
                  className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 italic"
                  aria-label="Contact email coming soon"
                >
                  <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate max-w-[140px]">{companyInfo.emailPlaceholder}</span>
                </span>
              )}
              {companyInfo.phone ? (
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-300 group/phone"
                  aria-label={`Call us at ${companyInfo.phone}`}
                >
                  <Phone className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-300 group-hover/phone:scale-110" />
                  <span className="truncate max-w-[120px]">{companyInfo.phone}</span>
                </a>
              ) : (
                <span
                  className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 italic"
                  aria-label="Hotline coming soon"
                >
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate max-w-[120px]">{companyInfo.phonePlaceholder}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges row */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-2.5">
          <div
            role="list"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8"
          >
            {trustBadges.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  role="listitem"
                  aria-label={item.aria}
                  className="flex items-center gap-2.5 group/badge"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(6px)",
                    transition: `opacity 0.4s ease-out ${0.5 + i * 0.05}s, transform 0.4s cubic-bezier(0.4,0,0.2,1) ${0.5 + i * 0.05}s`,
                  }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-600/40 bg-slate-800/40 transition-all duration-300 group-hover/badge:border-cyan-500/30 group-hover/badge:bg-cyan-500/10">
                    <Icon
                      className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover/badge:text-cyan-400 group-hover/badge:scale-110"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-semibold text-slate-200 transition-colors duration-300 group-hover/badge:text-cyan-300"
                      aria-hidden
                    >
                      {item.label}
                    </p>
                    <p className="text-[9px] text-slate-500 font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <style>{`
        @keyframes trustOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(15px, -10px) scale(1.05); opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default TrustBar;
