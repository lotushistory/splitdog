import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Milk Shakes",
  },
  hero: {
    image: "/assets/cardapio/milkshake.png",
    title: "MILK SHAKES",
    subtitle: "Cremosos, gelados e irresistíveis!",
    description: "Milk shakes artesanais com sabores incríveis. A sobremesa perfeita para qualquer momento!",
  },
  sectionTitle: "NOSSOS MILK SHAKES",
  products: [],
};

export default function MilkShakesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
