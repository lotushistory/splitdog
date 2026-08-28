import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Churros",
  },
  hero: {
    image: "",
    title: "CHURROS",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS CHURROS",
  products: [
    {
      image: "/assets/churros/churros.png",
      name: "DOCE DE LEITE + CHOCOLATE",
      description: "Churros recheado com doce de leite e chocolate.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/churros/churros.png",
      name: "NUTELLA",
      description: "Churros recheado com Nutella.",
      price: 22.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function ChurrosPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
