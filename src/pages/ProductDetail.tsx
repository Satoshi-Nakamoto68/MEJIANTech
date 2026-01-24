import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { allProducts } from "@/data/products";
import { toast } from "sonner";
import {
  Star,
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Heart,
  Share2,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Copy,
} from "lucide-react";

const WISHLIST_STORAGE_KEY = "global-nexus-wishlist";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isWishlistAnimating, setIsWishlistAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const product = allProducts.find((p) => p.id === id);

  // Load wishlist from localStorage
  useEffect(() => {
    if (product) {
      const wishlist = JSON.parse(
        localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
      );
      setIsInWishlist(wishlist.includes(product.id));
    }
  }, [product]);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts or product changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  useEffect(() => {
    if (!product) {
      navigate("/shop/computer");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const allImages = [
    product.image,
    product.hoverImage,
    ...product.imageGallery,
  ];

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const getCategoryPath = (category: string) => {
    if (category === "Computer") return "/shop/computer";
    if (category === "Phone") return "/shop/phone";
    return "/shop/home";
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    setIsWishlistAnimating(true);
    setTimeout(() => setIsWishlistAnimating(false), 600);

    const wishlist = JSON.parse(
      localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
    );

    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(
        (itemId: string) => itemId !== product.id
      );
      localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(updatedWishlist)
      );
      setIsInWishlist(false);
      toast.success("Removed from wishlist", {
        description: `${product.name} has been removed from your wishlist.`,
        duration: 3000,
      });
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, product.id];
      localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(updatedWishlist)
      );
      setIsInWishlist(true);
      toast.success("Added to wishlist", {
        description: `${product.name} has been added to your wishlist.`,
        duration: 3000,
      });
    }
  };

  const handleShare = async () => {
    if (!product) return;

    const shareData = {
      title: product.name,
      text: product.shortDescription,
      url: window.location.href,
    };

    try {
      // Try Web Share API first (mobile devices)
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        toast.success("Shared successfully", {
          description: "Product link has been shared.",
          duration: 3000,
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied", {
          description: "Product link has been copied to clipboard.",
          duration: 3000,
          icon: <Copy className="h-4 w-4" />,
        });
      }
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== "AbortError") {
        // Fallback: Copy to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          toast.success("Link copied", {
            description: "Product link has been copied to clipboard.",
            duration: 3000,
            icon: <Copy className="h-4 w-4" />,
          });
        } catch (clipboardError) {
          toast.error("Failed to share", {
            description: "Please try again or copy the link manually.",
            duration: 3000,
          });
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Global NewMaterials</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <Layout>
        {/* Breadcrumb */}
        <section className="relative py-6 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to={getCategoryPath(product.category)}
                className="hover:text-primary transition-colors duration-300"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">
                {product.name}
              </span>
            </div>
          </div>
        </section>

        {/* Product Detail Section */}
        <section
          ref={sectionRef}
          className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Gallery */}
              <div
                className="product-detail-image-reveal"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                  transition: "all 0.8s ease-out",
                }}
              >
                <div className="relative group/image">
                  {/* Main Image */}
                  <div
                    ref={imageRef}
                    className="relative aspect-square rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={allImages[selectedImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: isZoomed ? "scale(2)" : "scale(1)",
                        cursor: isZoomed ? "zoom-out" : "zoom-in",
                      }}
                      onClick={() => setIsZoomed(!isZoomed)}
                    />

                    {/* Zoom Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg">
                        <ZoomIn className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold text-foreground">
                          Click to zoom
                        </span>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePreviousImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <div className="px-4 py-2 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/50 shadow-lg">
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            New
                          </span>
                        </div>
                      )}
                      {product.onSale && (
                        <div className="px-4 py-2 rounded-full bg-red-500/90 backdrop-blur-sm border border-red-400/50 shadow-lg">
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            Sale
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {allImages.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                      {allImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                            selectedImageIndex === index
                              ? "border-primary shadow-lg shadow-primary/25 scale-105"
                              : "border-border/50 hover:border-primary/50"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} view ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div
                className="product-detail-info-reveal"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(40px)",
                  transition: "all 0.8s ease-out",
                  transitionDelay: "0.2s",
                }}
              >
                <div className="relative h-full">
                  {/* Back Button */}
                  <Link
                    to={getCategoryPath(product.category)}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-6"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to {product.category}</span>
                  </Link>

                  {/* Category & Subcategory */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {product.category}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {product.subcategory}
                      </span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-accent fill-accent"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground">
                      ({Math.floor(Math.random() * 100 + 50)} reviews)
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      Product Details
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.fullDescription}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link
                      to="/contact"
                      className="group/btn relative flex-1 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
                      <span>Contact for Purchase</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover/btn:opacity-100 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700 rounded-xl" />
                    </Link>
                    <button
                      onClick={handleToggleWishlist}
                      className={`group/wishlist relative px-6 py-4 rounded-xl border transition-all duration-300 flex items-center justify-center overflow-hidden ${
                        isInWishlist
                          ? "border-red-500/50 bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/70"
                          : "border-border/50 bg-card/50 hover:bg-card hover:border-primary/30"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 transition-all duration-300 ${
                          isInWishlist
                            ? "text-red-500 fill-red-500"
                            : "text-foreground group-hover/wishlist:text-red-500"
                        } ${
                          isWishlistAnimating
                            ? "scale-150 animate-pulse"
                            : "group-hover/wishlist:scale-110"
                        }`}
                      />
                      {/* Ripple Effect */}
                      {isWishlistAnimating && (
                        <div className="absolute inset-0 rounded-xl bg-red-500/20 animate-ping" />
                      )}
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/wishlist:opacity-100 -translate-x-full group-hover/wishlist:translate-x-full transition-all duration-700 rounded-xl" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="group/share relative px-6 py-4 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 flex items-center justify-center overflow-hidden"
                    >
                      <Share2 className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/share:scale-110 group-hover/share:rotate-12" />
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/share:opacity-100 -translate-x-full group-hover/share:translate-x-full transition-all duration-700 rounded-xl" />
                    </button>
                  </div>

                  {/* Features */}
                  <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.fullDescription
                        .split(". ")
                        .slice(0, 4)
                        .map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature.trim()}.</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Animations */}
        <style>{`
          @keyframes product-detail-image-reveal {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes product-detail-info-reveal {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .product-detail-image-reveal {
            opacity: 0;
            animation: product-detail-image-reveal 0.8s ease-out forwards;
          }

          .product-detail-info-reveal {
            opacity: 0;
            animation: product-detail-info-reveal 0.8s ease-out forwards;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default ProductDetail;
