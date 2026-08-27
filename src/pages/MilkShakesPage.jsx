import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Milk Shakes",
  },
  hero: {
    image: "",
    title: "MILK SHAKES",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS MILK SHAKES",
  products: [],
};

export default function MilkShakesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
