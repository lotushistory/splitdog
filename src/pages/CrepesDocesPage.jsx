import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Crepes",
  },
  hero: {
    image: "/assets/crepes/crepe.png",
    title: "CREPES DOCES",
    subtitle: "Doces, cremosos e irresistíveis!",
    description: "Massa fina e delicada com recheios doces incríveis. A sobremesa perfeita!",
  },
  sectionTitle: "NOSSOS CREPES DOCES",
  products: [
    {
      image: "/assets/crepes/crepe.png",
      name: "CHOCOLATE PRETO",
      description: "Crepe doce recheado com chocolate preto.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "DOCE DE LEITE COM QUEIJO",
      description: "Crepe doce recheado com doce de leite e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "GOIABADA COM QUEIJO",
      description: "Crepe doce recheado com goiabada e queijo.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "BANANA COM CANELA",
      description: "Crepe doce recheado com banana e canela.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
    {
      image: "/assets/crepes/crepe.png",
      name: "PRESTÍGIO",
      description: "Crepe doce sabor prestígio.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function CrepesDocesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
