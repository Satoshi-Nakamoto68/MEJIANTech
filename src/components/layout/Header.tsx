import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Laptop,
  Headphones,
  Home,
  Shield,
  CheckCircle2,
  Lock,
  Award,
  Star,
  Mail,
  Phone,
  Globe2,
  FileText,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Building2,
} from "lucide-react";

const companyName = "MEJIAN Global Technology";
const companyTagline = "Global Technology Solutions";

const shopCategories = [
  { name: "Computer Accessories", path: "/shop/computer", icon: Laptop },
  { name: "Phone Accessories", path: "/shop/phone", icon: Headphones },
  { name: "Smart Home", path: "/shop/home", icon: Home },
];

const NAV_DELAY_BASE = 0.15;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [trustDropdownOpen, setTrustDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const shopDropdownRef = useRef<HTMLDivElement>(null);
  const shopTriggerRef = useRef<HTMLDivElement>(null);
  const trustDropdownRef = useRef<HTMLDivElement>(null);
  const trustTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        shopDropdownRef.current &&
        shopTriggerRef.current &&
        !shopDropdownRef.current.contains(target) &&
        !shopTriggerRef.current.contains(target)
      )
        setShopDropdownOpen(false);
      if (
        trustDropdownRef.current &&
        trustTriggerRef.current &&
        !trustDropdownRef.current.contains(target) &&
        !trustTriggerRef.current.contains(target)
      )
        setTrustDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleCloseMobile = () => setMobileMenuOpen(false);

  return (
    <header
      ref={headerRef}
      role="banner"
      aria-label="Main navigation"
      className={`sticky top-0 z-[100] w-full border-b transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-slate-950/98 border-slate-700/50 shadow-lg shadow-black/20"
          : "bg-slate-950/95 border-slate-700/40 backdrop-blur-xl"
      }`}
    >
      {/* Background – gradient only, no grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl bg-cyan-500/6"
          style={{ animation: "headerOrb 12s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-blue-500/5"
          style={{
            animation: "headerOrb 10s ease-in-out infinite reverse",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between h-14 md:h-16 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group/logo relative h-full"
            aria-label={`${companyName} – Home`}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translateX(0) scale(1)"
                : "translateX(-12px) scale(0.96)",
              transition:
                "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <div className="relative h-full flex items-center">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/logo:opacity-100 blur-2xl transition-opacity duration-700 rounded-xl animate-pulse-slow" />

              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 rounded-xl" />

              {/* Logo image container */}
              <div className="relative h-full flex items-center">
                {/* Glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover/logo:opacity-100 blur-lg transition-opacity duration-500 rounded-xl" />

                {/* Logo image with white background */}
                <div className="relative bg-white rounded-xl shadow-2xl border-[3px] border-cyan-400/30 group-hover/logo:border-cyan-400/80 transition-all duration-500 group-hover/logo:shadow-[0_0_45px_rgba(56,189,248,1)] group-hover/logo:scale-[1.03] h-[52px] sm:h-[56px] md:h-[60px] px-4 sm:px-5 md:px-6 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex items-center justify-center">
                  {/* White background base */}
                  <div className="absolute inset-0 bg-white rounded-xl" />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/30 rounded-xl opacity-95" />

                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover/logo:opacity-100 -translate-x-full group-hover/logo:translate-x-full transition-all duration-1000 rounded-xl" />

                  {/* Animated border glow */}
                  <div className="absolute -inset-1 rounded-xl border-[3px] border-cyan-400/0 group-hover/logo:border-cyan-400/80 transition-all duration-500 pointer-events-none opacity-0 group-hover/logo:opacity-100" />

                  {/* Logo image */}
                  <div className="relative z-10 flex items-center justify-center h-full w-full">
                    <img
                      src="/logo-mejian.png"
                      alt="MEJIAN Global Technology Logo"
                      className="h-[40px] sm:h-[44px] md:h-[48px] w-auto max-w-full object-contain transition-all duration-500 group-hover/logo:brightness-110 group-hover/logo:scale-[1.06] group-hover/logo:drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]"
                      style={{
                        filter: "drop-shadow(0 3px 10px rgba(0, 0, 0, 0.25))",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        // Fallback to text if image not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.parentElement?.querySelector(".logo-fallback");
                        if (fallback) {
                          (fallback as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                  </div>

                  {/* Fallback text logo (hidden by default, shown if image fails to load) */}
                  <div className="logo-fallback hidden items-center justify-center h-full w-full font-bold text-sm sm:text-base md:text-lg text-slate-900 px-3">
                    {companyName}
                  </div>
                </div>

                {/* Outer animated border glow */}
                <div className="absolute -inset-1 rounded-xl border-[3px] border-cyan-400/0 group-hover/logo:border-cyan-400/60 transition-all duration-500 pointer-events-none opacity-0 group-hover/logo:opacity-100 blur-md" />
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`header-nav-link group/nav relative px-3.5 py-2 text-sm font-medium rounded-lg overflow-hidden ${
                isActive("/")
                  ? "text-cyan-400 bg-cyan-500/10"
                  : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s ease-out ${NAV_DELAY_BASE}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NAV_DELAY_BASE}s`,
              }}
            >
              <span className="relative z-10 block transition-transform duration-200 group-hover/nav:translate-y-[-1px]">
                Home
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-out ${
                  isActive("/") ? "w-full" : "w-0 group-hover/nav:w-full"
                }`}
              />
            </Link>

            {/* Shop dropdown */}
            <div
              ref={shopTriggerRef}
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s ease-out ${NAV_DELAY_BASE + 0.05}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NAV_DELAY_BASE + 0.05}s`,
              }}
            >
              <button
                className={`header-nav-link group/shop relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg overflow-hidden transition-colors duration-200 ${
                  shopDropdownOpen
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                }`}
                aria-expanded={shopDropdownOpen}
                aria-haspopup="true"
                aria-label="Shop categories"
              >
                <span className="relative z-10 block transition-transform duration-200 group-hover/shop:translate-y-[-1px]">
                  Shop
                </span>
                <ChevronDown
                  className={`relative z-10 h-4 w-4 transition-transform duration-300 ease-out ${
                    shopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-out ${
                    shopDropdownOpen ? "w-full" : "w-0 group-hover/shop:w-full"
                  }`}
                />
              </button>

              <div
                ref={shopDropdownRef}
                className={`absolute left-0 top-full mt-1.5 w-56 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden origin-top-left transition-all duration-300 ease-out ${
                  shopDropdownOpen
                    ? "visible opacity-100 translate-y-0 scale-100"
                    : "invisible opacity-0 -translate-y-2 scale-[0.97]"
                }`}
              >
                <div className="px-3 py-2.5 border-b border-slate-700/50">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400/80">
                    Categories
                  </p>
                </div>
                <div className="p-1.5">
                  {shopCategories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 group/item ${
                          isActive(cat.path)
                            ? "bg-cyan-500/15 text-cyan-400"
                            : "text-slate-300 hover:bg-slate-800/60 hover:text-cyan-400"
                        }`}
                        style={
                          shopDropdownOpen
                            ? {
                                animation: `headerDropdownItem 0.3s ease-out ${idx * 0.04}s both`,
                              }
                            : undefined
                        }
                      >
                        <div
                          className={`p-1.5 rounded-lg transition-all duration-200 group-hover/item:scale-110 ${
                            isActive(cat.path)
                              ? "bg-cyan-500/20"
                              : "bg-slate-800/50"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{cat.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`header-nav-link group/nav relative px-3.5 py-2 text-sm font-medium rounded-lg overflow-hidden ${
                isActive("/about")
                  ? "text-cyan-400 bg-cyan-500/10"
                  : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s ease-out ${NAV_DELAY_BASE + 0.1}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NAV_DELAY_BASE + 0.1}s`,
              }}
            >
              <span className="relative z-10 block transition-transform duration-200 group-hover/nav:translate-y-[-1px]">
                About
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-out ${
                  isActive("/about") ? "w-full" : "w-0 group-hover/nav:w-full"
                }`}
              />
            </Link>

            {/* Trust & Quality dropdown */}
            <div
              ref={trustTriggerRef}
              className="relative"
              onMouseEnter={() => setTrustDropdownOpen(true)}
              onMouseLeave={() => setTrustDropdownOpen(false)}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s ease-out ${NAV_DELAY_BASE + 0.15}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NAV_DELAY_BASE + 0.15}s`,
              }}
            >
              <button
                className={`header-nav-link group/trust relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg overflow-hidden transition-colors duration-200 ${
                  trustDropdownOpen
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                }`}
                aria-expanded={trustDropdownOpen}
                aria-haspopup="true"
                aria-label="Trust & Quality"
              >
                <Shield className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover/trust:rotate-12" />
                <span className="relative z-10 block transition-transform duration-200 group-hover/trust:translate-y-[-1px]">
                  Trust & Quality
                </span>
                <ChevronDown
                  className={`relative z-10 h-4 w-4 transition-transform duration-300 ease-out ${
                    trustDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-out ${
                    trustDropdownOpen
                      ? "w-full"
                      : "w-0 group-hover/trust:w-full"
                  }`}
                />
              </button>

              <div
                ref={trustDropdownRef}
                className={`absolute right-0 top-full mt-1.5 w-72 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden origin-top-right transition-all duration-300 ease-out ${
                  trustDropdownOpen
                    ? "visible opacity-100 translate-y-0 scale-100"
                    : "invisible opacity-0 -translate-y-2 scale-[0.97]"
                }`}
              >
                <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400/80 mb-2">
                    Trust indicators
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: CheckCircle2, label: "Verified" },
                      { icon: Lock, label: "Secure" },
                      { icon: Award, label: "Quality" },
                      { icon: Globe2, label: "Global" },
                    ].map(({ icon: Icon, label }, idx) => (
                      <div
                        key={label}
                        className="group/tb flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-200 hover:scale-[1.02]"
                        style={
                          trustDropdownOpen
                            ? {
                                animation: `headerDropdownItem 0.3s ease-out ${0.05 + idx * 0.04}s both`,
                              }
                            : undefined
                        }
                      >
                        <div className="p-1.5 rounded-lg bg-cyan-500/15 transition-transform duration-200 group-hover/tb:scale-110">
                          <Icon className="h-4 w-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-medium text-slate-200">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div
                    className="flex items-start gap-3"
                    style={
                      trustDropdownOpen
                        ? {
                            animation: `headerDropdownItem 0.35s ease-out 0.2s both`,
                          }
                        : undefined
                    }
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 flex-shrink-0">
                      <Shield className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-100 mb-0.5">
                        MEJIAN Global Technology
                      </p>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Verified Business · Registered Company
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 transition-colors duration-200 group/reg"
                    style={
                      trustDropdownOpen
                        ? {
                            animation: `headerDropdownItem 0.35s ease-out 0.25s both`,
                          }
                        : undefined
                    }
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/15 flex-shrink-0 group-hover/reg:scale-110 transition-transform duration-200">
                      <FileText className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-emerald-300 mb-0.5">
                        Business Registration
                      </p>
                      <p className="text-[10px] text-emerald-200/80 leading-relaxed break-all">
                        79695664
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Unit+2610,+APEC+Plaza,+49+Hoi+Yuen+Road,+Kwun+Tong,+Hong+Kong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 transition-all duration-200 group/addr"
                    style={
                      trustDropdownOpen
                        ? {
                            animation: `headerDropdownItem 0.35s ease-out 0.3s both`,
                          }
                        : undefined
                    }
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/15 flex-shrink-0 group-hover/addr:scale-110 transition-transform duration-200">
                      <MapPin className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-emerald-300 mb-0.5 group-hover/addr:text-emerald-200 transition-colors duration-200">
                        Registered Address
                      </p>
                      <p className="text-[10px] text-emerald-200/80 leading-relaxed break-words group-hover/addr:text-emerald-100 transition-colors duration-200">
                        Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong
                        Kong
                      </p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-400 opacity-0 group-hover/addr:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-1" />
                  </a>

                  <div
                    className="flex items-start gap-3"
                    style={
                      trustDropdownOpen
                        ? {
                            animation: `headerDropdownItem 0.35s ease-out 0.35s both`,
                          }
                        : undefined
                    }
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 flex-shrink-0">
                      <Star className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-100 mb-0.5">
                        Quality Assured
                      </p>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Premium materials & verified suppliers
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-4 border-t border-slate-700/50 bg-slate-800/30 space-y-2"
                  style={
                    trustDropdownOpen
                      ? {
                          animation:
                            "headerDropdownItem 0.35s ease-out 0.4s both",
                        }
                      : undefined
                  }
                >
                  <p className="text-xs font-semibold text-slate-100 mb-2">
                    Quick Contact
                  </p>
                  <a
                    href="mailto:info@mejianglobal.com"
                    className="flex items-center gap-2 text-xs text-purple-300 hover:text-purple-200 transition-colors duration-200 group/email"
                  >
                    <Mail className="h-3.5 w-3.5 flex-shrink-0 group-hover/email:scale-110 transition-transform duration-200" />
                    <span className="flex-1">info@mejianglobal.com</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/email:opacity-100 transition-opacity duration-200" />
                  </a>
                  <a
                    href="tel:+85247486175"
                    className="flex items-center gap-2 text-xs text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group/phone"
                  >
                    <Phone className="h-3.5 w-3.5 flex-shrink-0 group-hover/phone:scale-110 transition-transform duration-200" />
                    <span className="flex-1">+852 47486175</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200" />
                  </a>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`header-nav-link group/nav relative px-3.5 py-2 text-sm font-medium rounded-lg overflow-hidden ${
                isActive("/contact")
                  ? "text-cyan-400 bg-cyan-500/10"
                  : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.4s ease-out ${NAV_DELAY_BASE + 0.2}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NAV_DELAY_BASE + 0.2}s`,
              }}
            >
              <span className="relative z-10 block transition-transform duration-200 group-hover/nav:translate-y-[-1px]">
                Contact
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-out ${
                  isActive("/contact") ? "w-full" : "w-0 group-hover/nav:w-full"
                }`}
              />
            </Link>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className={`lg:hidden relative p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ${
              mounted ? "animate-headerBtnIn" : "opacity-0"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="relative z-10 flex items-center justify-center transition-transform duration-300">
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
            <span
              className={`absolute inset-0 bg-cyan-500/10 rounded-lg transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: mobileMenuOpen ? "1fr" : "0fr" }}
        >
          <div className="min-h-0 overflow-hidden">
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 top-[3.5rem] md:top-16 bg-black/20 backdrop-blur-sm z-[-1] animate-headerBackdropIn"
                onClick={handleCloseMobile}
                aria-hidden="true"
              />
            )}
            <div
              className={`border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-xl px-4 py-4 space-y-1 ${
                mobileMenuOpen ? "animate-headerMobilePanelIn" : ""
              }`}
            >
              <Link
                to="/"
                onClick={handleCloseMobile}
                className={`header-mobile-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.99] ${
                  isActive("/")
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400"
                }`}
                style={
                  mobileMenuOpen
                    ? {
                        animation: "headerMobileItem 0.35s ease-out 0.05s both",
                      }
                    : undefined
                }
              >
                Home
              </Link>

              <p
                className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                style={
                  mobileMenuOpen
                    ? { animation: "headerMobileItem 0.35s ease-out 0.1s both" }
                    : undefined
                }
              >
                Shop
              </p>
              {shopCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.path}
                    to={cat.path}
                    onClick={handleCloseMobile}
                    className={`header-mobile-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.99] ${
                      isActive(cat.path)
                        ? "bg-cyan-500/15 text-cyan-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400"
                    }`}
                    style={
                      mobileMenuOpen
                        ? {
                            animation: `headerMobileItem 0.35s ease-out ${0.12 + idx * 0.04}s both`,
                          }
                        : undefined
                    }
                  >
                    <div
                      className={`p-2 rounded-lg transition-transform duration-200 ${
                        isActive(cat.path)
                          ? "bg-cyan-500/20"
                          : "bg-slate-800/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    {cat.name}
                  </Link>
                );
              })}

              <Link
                to="/about"
                onClick={handleCloseMobile}
                className={`header-mobile-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.99] ${
                  isActive("/about")
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400"
                }`}
                style={
                  mobileMenuOpen
                    ? {
                        animation: "headerMobileItem 0.35s ease-out 0.28s both",
                      }
                    : undefined
                }
              >
                About
              </Link>

              <p
                className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                style={
                  mobileMenuOpen
                    ? {
                        animation: "headerMobileItem 0.35s ease-out 0.32s both",
                      }
                    : undefined
                }
              >
                Trust & Quality
              </p>
              <div
                className="px-4 space-y-1.5"
                style={
                  mobileMenuOpen
                    ? {
                        animation: "headerMobileItem 0.35s ease-out 0.36s both",
                      }
                    : undefined
                }
              >
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cyan-500/10">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-medium text-slate-200">
                    Verified Business
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/50">
                  <Lock className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-medium text-slate-200">
                    Secure Payments
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/50">
                  <Award className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-medium text-slate-200">
                    Quality Assured
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={handleCloseMobile}
                className={`header-mobile-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.99] ${
                  isActive("/contact")
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400"
                }`}
                style={
                  mobileMenuOpen
                    ? {
                        animation: "headerMobileItem 0.35s ease-out 0.42s both",
                      }
                    : undefined
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none transition-opacity duration-500"
        style={{ opacity: isScrolled ? 0.6 : 1 }}
      />

      <style>{`
        @keyframes headerOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(8px, -6px) scale(1.05); opacity: 1; }
        }

        @keyframes headerDropdownItem {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes headerMobileItem {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes headerBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-headerBackdropIn {
          animation: headerBackdropIn 0.25s ease-out forwards;
        }

        .animate-headerMobilePanelIn {
          animation: headerMobilePanelIn 0.3s ease-out forwards;
        }

        @keyframes headerMobilePanelIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes headerBtnIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-headerBtnIn {
          animation: headerBtnIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s
            forwards;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
