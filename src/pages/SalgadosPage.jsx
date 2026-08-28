import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Salgados",
  },
  hero: {
    image: "",
    title: "SALGADOS",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS SALGADOS",
  products: [
    {
      image: "/assets/cardapio/batata.png",
      name: "FRANGO COM CATUPIRY",
      description: "Salgado sabor frango com catupiry.",
      price: 24.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/batata.png",
      name: "BACON COM CHEDDAR",
      description: "Salgado sabor bacon com cheddar.",
      price: 24.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/batata.png",
      name: "CALABRESA COM CHEDDAR",
      description: "Salgado sabor calabresa com cheddar.",
      price: 24.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function SalgadosPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
