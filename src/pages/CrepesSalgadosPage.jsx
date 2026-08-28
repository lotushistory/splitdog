import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Crepes",
  },
  hero: {
    image: "/assets/crepes/crepe.png",
    title: "CREPES SALGADOS",
    subtitle: "Finos, recheados e cheios de sabor!",
    description: "Massa leve e crocante com recheios irresistíveis. Escolha seu favorito!",
  },
  sectionTitle: "NOSSOS CREPES SALGADOS",
  products: [
    {
      image: "/assets/crepes/crepe.png",
      name: "PRESUNTO E QUEIJO",
      description: "Crepe recheado com presunto e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "MUÇARELA COM PROVOLONE",
      description: "Crepe recheado com muçarela e provolone.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "PIZZA",
      description: "Crepe sabor pizza.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "SALSICHA COM QUEIJO",
      description: "Crepe recheado com salsicha e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "CALABRESA COM QUEIJO",
      description: "Crepe recheado com calabresa e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "FRANGO COM QUEIJO",
      description: "Crepe recheado com frango e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "BACON COM QUEIJO",
      description: "Crepe recheado com bacon e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function CrepesSalgadosPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
