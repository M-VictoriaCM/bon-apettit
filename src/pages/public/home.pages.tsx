import Hero from "../../components/Hero/Hero";
import MenuSection from "../../components/menu/MenuSection";
import MenuSection2 from "../../components/menu/menuSection2";

import { mockMenu } from "../../data/mockMenu";

const HomePages = () => {
  return (
    <main className="pt-24 pb-24 overflow-hidden ">
      <Hero />

      <MenuSection
        id="entradas"
        title="Entradas"
        items={mockMenu.entradas}
      />
      <MenuSection
        id="principal"
        title="PLATO PRINCIPAL"
        items={mockMenu.principales}
      />
       <MenuSection2
        id="postres"
        title="POSTRES"
        items={mockMenu.postres}
      />
      <MenuSection2
        id="bebidas"
        title="Bebidas"
        items={mockMenu.bebidas}
        clickable={true}
        category="bebidas"
      />

    </main>
  );
};

export default HomePages;