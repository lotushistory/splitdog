import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Porções",
  },
  hero: {
    image: "/assets/cardapio/batata.png",
    title: "PORÇÕES",
    subtitle: "Coração e batata para compartilhar!",
    description: "Porções generosas para acompanhar seu lanche.",
  },
  sectionTitle: "NOSSAS PORÇÕES",
  products: [
    {
      image: "/assets/porcoes/batata.png",
      name: "CORAÇÃO 300G",
      description: "Coração grelhado na chapa com temperos especiais. 300g.",
      price: 25.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA FRITA 150G",
      description: "Batata frita crocante. Porção de 150g.",
      price: 10.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA FRITA 300G",
      description: "Batata frita crocante. Porção de 300g.",
      price: 17.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA COM CHEDDAR 150G",
      description: "Batata frita com cheddar cremoso. Porção de 150g.",
      price: 12.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA COM CHEDDAR 300G",
      description: "Batata frita com cheddar cremoso. Porção de 300g.",
      price: 19.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA COM BACON 150G",
      description: "Batata frita com bacon crocante. Porção de 150g.",
      price: 15.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/porcoes/batata.png",
      name: "BATATA COM BACON 300G",
      description: "Batata frita com bacon crocante. Porção de 300g.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function SalgadosPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
