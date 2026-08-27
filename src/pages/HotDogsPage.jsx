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
      "Salsicha de qualidade, ingredientes selecionados\ne muito sabor em cada mordida.",
  },

  sectionTitle: "NOSSOS HOT DOGS",

  products: [
    {
      image: "/assets/hotdogs/produto-1.png",
      name: "DOG CLÁSSICO",
      description:
        "Salsicha, pão, ketchup, mostarda e batata palha",
      price: 14.90,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-2.png",
      name: "DOG COMPLETO",
      description:
        "Salsicha, pão, milho, ervilha, batata palha, ketchup e mostarda",
      price: 17.90,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-3.png",
      name: "DOG BACON",
      description:
        "Salsicha, pão, bacon, queijo, batata palha, ketchup e mostarda",
      price: 19.90,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/hotdogs/produto-4.png",
      name: "DOG CHEDDAR",
      description:
        "Salsicha, pão, cheddar, batata palha, ketchup e mostarda",
      price: 18.90,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function HotDogsPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
