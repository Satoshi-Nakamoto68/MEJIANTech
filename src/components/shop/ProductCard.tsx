import { Link } from "react-router-dom";
import { Star, ArrowRight, Eye } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isCyan = product.category === "Computer" || product.subcategory === "Keyboards";

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative block h-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <div className="px-3 py-1.5 rounded-full bg-cyan-500/90 backdrop-blur-sm border border-cyan-400/50 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                New
              </span>
            </div>
          )}
          {product.onSale && (
            <div className="px-3 py-1.5 rounded-full bg-blue-500/90 backdrop-blur-sm border border-blue-400/50 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Sale
              </span>
            </div>
          )}
        </div>

        {/* View Badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-lg">
            <Eye className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-xs font-semibold text-slate-100">View</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
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
              {product.subcategory}
            </span>
            <div
              className={`absolute inset-0 rounded-full blur-md opacity-60 ${
                isCyan ? "bg-cyan-400/40" : "bg-blue-400/40"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 group-hover:text-cyan-400/80 transition-colors duration-300">
          {product.category}
        </p>

        <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? isCyan
                    ? "text-cyan-400 fill-cyan-400/50"
                    : "text-blue-400 fill-blue-400/50"
                  : "text-slate-600/30"
              }`}
            />
          ))}
          <span className="text-xs font-medium text-slate-500 ml-2">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-end pt-4 border-t border-slate-700/50">
          <div
            className={`flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ${
              isCyan ? "text-cyan-400" : "text-blue-400"
            }`}
          >
            <span>View Details</span>
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                isCyan ? "text-cyan-400" : "text-blue-400"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isCyan
            ? "from-cyan-500 via-blue-500 to-cyan-500"
            : "from-blue-500 via-cyan-500 to-blue-500"
        }`}
      />
    </Link>
  );
};

export default ProductCard;
