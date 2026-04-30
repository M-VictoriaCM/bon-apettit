import ProductCard from "../ProductCard";
import "./menuSection.css";
import Title from "../Title";
import type { Product } from "../../types/menu";

type Props = {
  title: string;
  items: Product[];
  id: string;
  clickable?: boolean;
  category?: string;
};

const MenuSection2 = ({ title, items, id, clickable, category }: Props) => {
  return (
    <section id={id} className="mb-16 md:mb-24 mx-8">
      
      <Title title={title} />

      {/* Grid de productos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 align-center">
        {items.map((item, index) => (
          <ProductCard key={index} item={item} clickable={clickable} category={category} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection2;