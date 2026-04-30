const MenuNavigation = () => {
  const menuItems = [
    { id: "entradas", label: "Entradas", icon: "🥟" },
    { id: "plato-principal", label: "Plato Principal", icon: "🍽️" },
    { id: "postres", label: "Postres", icon: "🍰" },
    { id: "bebidas", label: "Bebidas", icon: "🥤" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Altura del navbar + espacio
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-20 z-40 bg-neutral-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 px-4 py-4 text-white hover:text-primary transition-colors whitespace-nowrap group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="text-sm md:text-base font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;
