import { useParams, Link } from "react-router";
import { mockMenu } from "../../data/mockMenu";

type CategoryKey = keyof typeof mockMenu;

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !(category in mockMenu)) {
    return (
      <div className="min-h-screen pt-24 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Categoría no encontrada</h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const categoryKey = category as CategoryKey;
  const items = mockMenu[categoryKey];
  
  const categoryTitles: Record<CategoryKey, string> = {
    entradas: "Entradas",
    principales: "Plato Principal",
    postres: "Postres",
    bebidas: "Bebidas"
  };

  return (
    <div className="min-h-screen pt-24 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← Volver al menú
          </Link>
          <h1 className="text-4xl font-bold text-white">
            {categoryTitles[categoryKey]}
          </h1>
          <p className="text-gray-400 mt-2">
            {items.length} productos disponibles
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition-colors"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-gray-400 mb-4">{item.desc}</p>
                )}
                <div className="flex justify-between items-center">
                  {/* <span className="text-2xl font-bold text-primary">
                    ${item.price}
                  </span> */}
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
