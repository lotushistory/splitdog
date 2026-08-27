import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Crepes",
  },
  hero: {
    image: "",
    title: "CREPES",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS CREPES",
  products: [
    {
      image: "/assets/cardapio/crepe.png",
      name: "PRESUNTO E QUEIJO",
      description: "Crepe recheado com presunto e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "MUÇARELA COM PROVOLONE",
      description: "Crepe recheado com muçarela e provolone.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "PIZZA",
      description: "Crepe sabor pizza.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "SALSICHA COM QUEIJO",
      description: "Crepe recheado com salsicha e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "CALABRESA COM QUEIJO",
      description: "Crepe recheado com calabresa e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "FRANGO COM QUEIJO",
      description: "Crepe recheado com frango e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "BACON COM QUEIJO",
      description: "Crepe recheado com bacon e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "CHOCOLATE PRETO",
      description: "Crepe doce recheado com chocolate preto.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "DOCE DE LEITE COM QUEIJO",
      description: "Crepe doce recheado com doce de leite e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "GOIABADA COM QUEIJO",
      description: "Crepe doce recheado com goiabada e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "BANANA COM CANELA",
      description: "Crepe doce recheado com banana e canela.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/cardapio/crepe.png",
      name: "PRESTÍGIO",
      description: "Crepe doce sabor prestígio.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function CrepesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
