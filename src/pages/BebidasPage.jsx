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
    subtitle: "Refresque-se com nossas bebidas!",
    description: "Sucos, refrigerantes, águas e muito mais para acompanhar seu lanche.",
  },
  sectionTitle: "NOSSAS BEBIDAS",
  products: [],
};

export default function BebidasPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
