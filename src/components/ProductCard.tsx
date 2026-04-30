import { Link } from "react-router";
import type { Product } from "../types/menu";


type Props = {
  item: Product;
  clickable?: boolean;
  category?: string;
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ProductCard = ({ item, clickable = false, category }: Props) => {
  if (clickable && category) {
    const linkTarget = item.subcategory
      ? `/${category}/${item.subcategory}`
      : `/${category}`;

    return (
      <Link to={linkTarget} className="block group">
        <div className="flex flex-col gap-4 cursor-pointer">

          {/* Imagen */}
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-800 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
            />
          </div>

          {/* Info */}
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-lg text-white mb-1">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-sm text-gray-400 max-w-[80%]">
                  {item.desc}
                </p>
              )}
            </div>

            {/* "Ver más" en lugar del precio */}
            <span className="flex items-center gap-1 text-sm text-amber-400 font-medium mt-1 shrink-0">
              Ver más
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group">
      <div className="flex flex-col gap-4">

        {/* Imagen */}
        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-800 transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
          />
        </div>

        {/* Info */}
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-lg text-white mb-1">
              {item.title}
            </h4>
            {item.desc && (
              <p className="text-sm text-gray-400 max-w-[80%]">
                {item.desc}
              </p>
            )}
          </div>

          <span className="text-primary font-medium text-lg text-white">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;