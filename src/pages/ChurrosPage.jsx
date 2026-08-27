import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Churros",
  },
  hero: {
    image: "",
    title: "CHURROS",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS CHURROS",
  products: [],
};

export default function ChurrosPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
