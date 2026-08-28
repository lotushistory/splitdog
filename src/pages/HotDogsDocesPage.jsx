import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Hot Dogs Doces",
  },
  hero: {
    image: "",
    title: "DOG DOCE",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS DOGS DOCES",
  products: [
    {
      image: "/assets/hotdogs/vermelho (1).png",
      name: "DOG DOCE",
      description:
        "Pão, leite Moça e Nutella. Fruta/base opcional: banana, chocolate, coco ou morango.",
      price: 20.0,
      button: "ADICIONAR AO CARRINHO",
    },
  ],
};

export default function HotDogsDocesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
