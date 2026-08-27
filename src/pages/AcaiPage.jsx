import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Açaí",
  },
  hero: {
    image: "",
    title: "AÇAÍ",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSO AÇAÍ",
  products: [],
};

export default function AcaiPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
