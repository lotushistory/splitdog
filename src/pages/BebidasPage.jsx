import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Bebidas",
  },
  hero: {
    image: "/assets/bebidas/bebida.png",
    title: "BEBIDAS",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSAS BEBIDAS",
  products: [],
};

export default function BebidasPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
