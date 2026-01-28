import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  ArrowRight,
  Laptop,
  Smartphone,
  Home,
  Users,
  FileCheck,
  MessageCircle,
  FileText,
  Truck,
  RotateCcw,
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingBag,
  Building2,
  Clipboard,
  Star,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const footerLinks = {
  shop: [
    { icon: Laptop, label: "Computer Accessories", to: "/shop/computer" },
    { icon: Smartphone, label: "Phone Accessories", to: "/shop/phone" },
    { icon: Home, label: "Smart Home", to: "/shop/home" },
  ],
  company: [
    { icon: Users, label: "About Us", to: "/about" },
    { icon: FileCheck, label: "Compliance & Verification", to: "/compliance" },
    { icon: MessageCircle, label: "Contact", to: "/contact" },
  ],
  policies: [
    { icon: FileText, label: "Terms & Conditions", to: "/policies/terms" },
    { icon: Truck, label: "Shipping Policy", to: "/policies/shipping" },
    { icon: RotateCcw, label: "Returns & Refunds", to: "/policies/returns" },
    { icon: Shield, label: "Privacy Policy", to: "/policies/privacy" },
  ],
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-slate-950 text-slate-100"
      role="contentinfo"
      aria-label="Site footer"
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
          style={{ animation: "footerOrb 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "footerOrb 20s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
          style={{
            animation: "footerOrb 24s ease-in-out infinite",
            animationDelay: "6s",
          }}
        />
      </div>
      <div
        className="absolute inset-0 -translate-x-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
          animation: "footerShimmer 10s ease-in-out infinite",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto relative z-10 px-4 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & contact */}
          <div className="lg:col-span-1">
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 mb-6 group/logo focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-xl"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover/logo:scale-105 group-hover/logo:shadow-cyan-500/40 transition-all duration-300">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xl text-slate-100 block">
                    MEJIAN
                  </span>
                  <span className="text-sm text-slate-400">
                    Global Technology
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Technology solutions for your digital world. Computer, phone
                accessories, and smart home devices. Committed to quality and
                innovation.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:info@mejianglobal.com"
                  className="group/contact flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/40 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover/contact:scale-105 group-hover/contact:border-purple-500/50 transition-all duration-300">
                    <Mail className="h-4 w-4 text-purple-400 group-hover/contact:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover/contact:text-purple-300 transition-colors duration-300 break-all flex-1 min-w-0">
                    info@mejianglobal.com
                  </span>
                  <ArrowRight className="h-3 w-3 text-purple-400 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </a>
                <a
                  href="tel:+85247486175"
                  className="group/contact flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover/contact:scale-105 group-hover/contact:border-blue-500/50 transition-all duration-300">
                    <Phone className="h-4 w-4 text-blue-400 group-hover/contact:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover/contact:text-blue-300 transition-colors duration-300">
                    +852 47486175
                  </span>
                  <ArrowRight className="h-3 w-3 text-blue-400 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </a>
                <a
                  href="https://maps.google.com/?q=Unit+2610,+APEC+Plaza,+49+Hoi+Yuen+Road,+Kwun+Tong,+Hong+Kong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contact flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover/contact:scale-105 group-hover/contact:border-emerald-500/50 transition-all duration-300">
                    <MapPin className="h-4 w-4 text-emerald-400 group-hover/contact:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover/contact:text-emerald-300 transition-colors duration-300 leading-relaxed flex-1 min-w-0">
                    Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong
                  </span>
                  <ArrowRight className="h-3 w-3 text-emerald-400 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group/social w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-slate-400 group-hover/social:text-cyan-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Shop */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s",
            }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-100">
              <ShoppingBag className="h-4 w-4 text-cyan-400" />
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group/link flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-1 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <link.icon className="h-4 w-4 text-cyan-400/80 shrink-0" />
                    <span className="text-sm flex-1">{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 opacity-0 group-hover/link:opacity-100 transition-all duration-300 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s",
            }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-100">
              <Building2 className="h-4 w-4 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group/link flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-1 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <link.icon className="h-4 w-4 text-cyan-400/80 shrink-0" />
                    <span className="text-sm flex-1">{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 opacity-0 group-hover/link:opacity-100 transition-all duration-300 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.4s",
            }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-100">
              <Clipboard className="h-4 w-4 text-cyan-400" />
              Policies
            </h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group/link flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-1 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <link.icon className="h-4 w-4 text-cyan-400/80 shrink-0" />
                    <span className="text-sm flex-1">{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/link:text-cyan-400 group-hover/link:translate-x-0.5 opacity-0 group-hover/link:opacity-100 transition-all duration-300 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative border-t border-slate-800 bg-slate-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.5s",
            }}
          >
            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mt-0.5 group/company hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-5 w-5 text-cyan-400 group-hover/company:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Company Name
                    </p>
                    <p className="text-sm font-bold text-slate-200 leading-relaxed">
                      MEJIAN GLOBAL TECHNOLOGY LIMITED
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Unit+2610,+APEC+Plaza,+49+Hoi+Yuen+Road,+Kwun+Tong,+Hong+Kong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/address flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mt-0.5 group-hover/address:scale-110 group-hover/address:border-emerald-500/50 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-emerald-400 group-hover/address:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 group-hover/address:text-emerald-400 transition-colors duration-300">
                      Registered Business Address
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed group-hover/address:text-emerald-200 transition-colors duration-300">
                      Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong
                    </p>
                    <div className="mt-2 flex items-center gap-2 opacity-0 group-hover/address:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-3 w-3 text-emerald-400" />
                      <span className="text-xs text-emerald-400">View on Google Maps</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mt-0.5 group/reg hover:scale-110 transition-transform duration-300">
                    <FileText className="h-5 w-5 text-cyan-400 group-hover/reg:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Business Registration Certificate Number
                    </p>
                    <p className="text-sm font-bold text-cyan-300 leading-relaxed break-all">
                      79695664-000-01-26-2
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group/verified hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 group-hover/verified:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Status
                    </p>
                    <p className="text-sm font-semibold text-emerald-300">
                      Verified Business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Star className="h-3.5 w-3.5 text-cyan-400/60" />
                <span>© {new Date().getFullYear()} MEJIAN GLOBAL TECHNOLOGY LIMITED. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <a
                  href="mailto:info@mejianglobal.com"
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors duration-300 group/email"
                >
                  <Mail className="h-3 w-3 group-hover/email:scale-110" />
                  <span>info@mejianglobal.com</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href="tel:+85247486175"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors duration-300 group/phone"
                >
                  <Phone className="h-3 w-3 group-hover/phone:scale-110" />
                  <span>+852 47486175</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes footerShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
