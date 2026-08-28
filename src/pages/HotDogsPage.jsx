import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Hot Dogs",
  },
  hero: {
    image: "/assets/hotdogs/hero.png",
    title: "HOT DOGS",
    subtitle: "Clássico, completo e do seu jeito!",
    description:
      "Salsicha de qualidade, ingredientes selecionados e muito sabor em cada mordida.",
  },
  sectionTitle: "NOSSOS HOT DOGS SALGADOS",
  products: [
    {
      image: "/assets/hotdogs/produto-1.png",
      name: "DOG DA CASA",
      description:
        "Uma salsicha, molho de tomate artesanal, bacon, calabresa, frango refogado, purê de batata, queijo muçarela, milho, vinagrete e batata palha.",
      price: 28.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-2.png",
      name: "DOG FRANGO COM CATUPIRY",
      description:
        "Uma salsicha, molho de tomate artesanal, frango, catupiry, milho, purê de batata, vinagrete, maionese e batata palha.",
      price: 26.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-3.png",
      name: "DOG PORTUGUESA",
      description:
        "Duas salsichas, maionese, vinagrete, milho, presunto, ovo cozido, azeitona, molho de tomate artesanal, queijo muçarela e batata palha.",
      price: 26.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-4.png",
      name: "DOG VEGETARIANO",
      description:
        "Cenoura temperada com shoyu e gergelim, cominho, maionese, vinagrete, milho, azeitona, molho de tomate artesanal e purê de batata.",
      price: 26.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/vermelho (1).png",
      name: "DOG AMERICANO",
      description:
        "Pão tradicional, duas salsichas, milho, queijo muçarela, molho de tomate e batata palha.",
      price: 15.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-4.png",
      name: "DOG KIDS",
      description: "Duas salsichas, batata palha e queijo muçarela.",
      price: 15.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function HotDogsPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
