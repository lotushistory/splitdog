import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Lanches",
  },
  hero: {
    image: "",
    title: "LANCHES E XIS",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS LANCHES",
  products: [
    {
      image: "/assets/cardapio/batata.png",
      name: "CARNE CREME COM QUEIJO",
      description:
        "Tiras de alcatra, maionese, vinagrete, milho e catupiry. Opcional: cheddar ou cream cheese.",
      price: 33.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/hotdog.png",
      name: "BURGER PARMEGIANA",
      description:
        "Três almôndegas, maionese, vinagrete, milho, molho de tomate, azeitona, catupiry, queijo muçarela e batata palha.",
      price: 30.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/moto.png",
      name: "XIS CORAÇÃO",
      description:
        "Coração refogado, molho de tomate artesanal, milho, queijo muçarela, batata palha e purê de batata. Opcional: cream cheese ou tomate fatiado.",
      price: 28.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function LanchesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
