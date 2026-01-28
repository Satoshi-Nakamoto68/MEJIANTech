import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import {
  Building2,
  Globe,
  Users,
  Award,
  Factory,
  Plane,
  Heart,
  CheckCircle,
  Target,
  FileCheck,
  MapPin,
  Calendar,
  Briefcase,
  ArrowRight,
  Star,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Factory,
    title: "Established Business",
    desc: "Registered company with verified business credentials and global operations",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-cyan-500/30 via-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    isCyan: true,
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving customers across the world with reliable shipping and support",
    gradient: "from-blue-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-blue-500/30 via-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    isCyan: false,
  },
  {
    icon: Heart,
    title: "Customer Focus",
    desc: "Dedicated support team ensuring your satisfaction and trust",
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-500/10",
    hoverGradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    isCyan: true,
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    desc: "Rigorous quality control on all products we offer and deliver",
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/10",
    hoverGradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    isCyan: false,
  },
];

const companyInfo = [
  {
    icon: Building2,
    label: "Company Name",
    value: "MEJIAN GLOBAL TECHNOLOGY LIMITED",
    isLink: false,
    isCyan: true,
  },
  {
    icon: FileText,
    label: "Business Registration Certificate Number",
    value: "79695664-000-01-26-2",
    isLink: false,
    isCyan: false,
  },
  {
    icon: MapPin,
    label: "Registered Business Address",
    value: "Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong",
    isLink: true,
    link: "https://maps.google.com/?q=Unit+2610,+APEC+Plaza,+49+Hoi+Yuen+Road,+Kwun+Tong,+Hong+Kong",
    isCyan: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mejianglobal.com",
    isLink: true,
    link: "mailto:info@mejianglobal.com",
    isCyan: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+852 47486175",
    isLink: true,
    link: "tel:+85247486175",
    isCyan: true,
  },
  {
    icon: Briefcase,
    label: "Nature of Business",
    value: "Technology Solutions & Global Commerce",
    isLink: false,
    isCyan: false,
  },
  {
    icon: Calendar,
    label: "Established",
    value: "2026",
    isLink: false,
    isCyan: true,
  },
];

const About = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    [...cardRefs.current, ...infoRefs.current].forEach((ref) => {
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
        <title>About Us | MEJIAN Global Technology</title>
        <meta
          name="description"
          content="Learn about MEJIAN GLOBAL TECHNOLOGY LIMITED - a trusted company providing quality technology solutions, computer accessories, phone accessories, and smart home devices worldwide."
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
              style={{ animation: "aboutOrb 22s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5"
              style={{
                animation: "aboutOrb 20s ease-in-out infinite reverse",
                animationDelay: "3s",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl bg-purple-500/4"
              style={{
                animation: "aboutOrb 24s ease-in-out infinite",
                animationDelay: "6s",
              }}
            />
          </div>
          <div
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.05), transparent)",
              animation: "aboutShimmer 10s ease-in-out infinite",
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
                <Target className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Our Story
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
                <span className="text-slate-100">About </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-aboutGradient">
                  Our Company
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
                Building trust through transparency and quality. Your trusted
                partner for premium technology solutions worldwide.
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

        {/* Mission Section */}
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
              className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl bg-cyan-500/4"
              style={{ animation: "aboutOrb 22s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-4xl mx-auto">
              <div
                ref={(el) => (sectionRefs.current[0] = el)}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(40px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
                }}
              >
                <div className="relative group/mission p-10 md:p-12 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/mission:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 -translate-x-full group-hover/mission:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/mission:opacity-100 rounded-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-lg">
                        <Target className="h-7 w-7 text-cyan-400" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Our Mission
                      </h2>
                    </div>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-6">
                      At MEJIAN Global Technology, we are dedicated to providing
                      high-quality technology solutions, computer accessories,
                      phone accessories, and smart home devices to customers
                      worldwide. We leverage our strategic global network to
                      bring you the best products at competitive prices with
                      exceptional service.
                    </p>

                    <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover/mission:translate-x-2 transition-transform duration-300">
                      <span>Learn more about our values</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/mission:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
              style={{ animation: "aboutOrb 22s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div
              className="text-center mb-16"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="text-slate-100">Our Core </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-aboutGradient">
                  Values
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group/value relative"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted
                      ? "translateY(0) scale(1)"
                      : "translateY(50px) scale(0.95)",
                    transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${
                      0.5 + index * 0.1
                    }s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                      0.5 + index * 0.1
                    }s`,
                  }}
                >
                  <div className="relative h-full p-8 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-50 group-hover/value:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    />
                    <div
                      className={`absolute inset-0 rounded-3xl border-2 ${value.borderColor} opacity-0 group-hover/value:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 -translate-x-full group-hover/value:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/value:opacity-100 rounded-3xl" />

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center border ${value.borderColor} group-hover/value:scale-110 group-hover/value:rotate-6 transition-all duration-500 shadow-lg`}
                        >
                          <value.icon
                            className={`h-8 w-8 ${value.iconColor} group-hover/value:scale-110 transition-transform duration-300`}
                          />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover/value:text-cyan-200 transition-colors duration-300">
                        {value.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed group-hover/value:text-slate-300 transition-colors duration-300">
                        {value.desc}
                      </p>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover/value:opacity-100 transition-opacity duration-500 rounded-b-3xl ${
                        value.isCyan
                          ? "from-cyan-500 via-blue-500 to-cyan-500"
                          : "from-blue-500 via-cyan-500 to-blue-500"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information Section */}
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
              className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/4"
              style={{ animation: "aboutOrb 22s ease-in-out infinite" }}
            />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-5xl mx-auto">
              <div
                className="text-center mb-12"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(30px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.9s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.9s",
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  <span className="text-slate-100">Official </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-aboutGradient">
                    Company Information
                  </span>
                </h2>
                <p className="text-lg text-slate-400">
                  Transparent business credentials and registration details
                </p>
              </div>

              <div className="relative group/info p-10 md:p-12 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl opacity-50 group-hover/info:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover/info:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/info:opacity-100 rounded-3xl" />

                <div className="relative z-10">
                  <div className="space-y-6">
                    {companyInfo.map((info, index) => {
                      const Icon = info.icon;
                      const isCyan = info.isCyan !== undefined ? info.isCyan : index % 2 === 0;
                      const iconColorClass = isCyan ? "text-cyan-400" : "text-blue-400";
                      const borderColorClass = isCyan
                        ? "border-cyan-500/30 hover:border-cyan-500/50"
                        : "border-blue-500/30 hover:border-blue-500/50";
                      const gradientClass = isCyan
                        ? "from-cyan-500/10 to-blue-500/10"
                        : "from-blue-500/10 to-cyan-500/10";
                      const hoverTextClass = isCyan
                        ? "group-hover/item:text-cyan-300"
                        : "group-hover/item:text-blue-300";
                      const labelHoverClass = isCyan
                        ? "group-hover/item:text-cyan-400"
                        : "group-hover/item:text-blue-400";
                      const iconBorderClass = isCyan
                        ? "border-cyan-500/20"
                        : "border-blue-500/20";

                      const content = (
                        <>
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center border ${iconBorderClass} group-hover/item:scale-110 transition-all duration-300`}
                          >
                            <Icon
                              className={`h-6 w-6 ${iconColorClass} group-hover/item:drop-shadow-[0_0_8px_currentColor]`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 ${labelHoverClass} transition-colors duration-300`}
                            >
                              {info.label}
                            </p>
                            <p
                              className={`text-base md:text-lg text-slate-100 leading-relaxed font-medium ${hoverTextClass} transition-colors duration-300 break-words ${
                                info.isLink ? "inline-flex items-center gap-2" : ""
                              }`}
                            >
                              {info.value}
                              {info.isLink && (
                                <ArrowRight
                                  className={`h-4 w-4 ${iconColorClass} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex-shrink-0`}
                                />
                              )}
                            </p>
                          </div>
                        </>
                      );

                      return (
                        <div
                          key={info.label}
                          ref={(el) => (infoRefs.current[index] = el)}
                          className={`group/item flex gap-4 p-5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 ${borderColorClass} transition-all duration-300 hover:shadow-lg ${
                            info.isLink ? "cursor-pointer" : ""
                          }`}
                          style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateX(0)" : "translateX(-20px)",
                            transition: `opacity 0.6s ease-out ${
                              1 + index * 0.1
                            }s, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${
                              1 + index * 0.1
                            }s`,
                          }}
                        >
                          {info.isLink ? (
                            <a
                              href={info.link}
                              target={info.link?.startsWith("http") ? "_blank" : undefined}
                              rel={
                                info.link?.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="flex gap-4 w-full"
                              onClick={(e) => {
                                if (!info.link) e.preventDefault();
                              }}
                            >
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Verification Badge Section */}
                  <div className="mt-8 pt-8 border-t border-slate-700/50 space-y-4">
                    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 group/verified hover:border-cyan-500/40 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-blue-500/15 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 group-hover/verified:scale-110 transition-transform duration-300" />
                      <p className="text-sm font-medium text-slate-200">
                        <span className="text-cyan-400">Verified</span> and
                        committed to transparency
                      </p>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/25 group/reg hover:border-emerald-500/40 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 transition-all duration-300">
                      <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 group-hover/reg:scale-110 transition-transform duration-300" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 group-hover/reg:text-emerald-400 transition-colors duration-300">
                          Business Registration Certificate Number
                        </p>
                        <p className="text-sm font-bold text-emerald-300 break-all">
                          79695664-000-01-26-2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover/info:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-t-2 border-r-2 rounded-tr-3xl border-cyan-500/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes aboutOrb {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
          }
          @keyframes aboutShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes aboutGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-aboutGradient {
            animation: aboutGradient 3s ease-in-out infinite;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default About;
