import CategoryPage from "../components/CategoryPage";

const SITE_CONFIG = {
  breadcrumb: {
    home: "Início",
    category: "Cardápio",
    current: "Açaí",
  },
  hero: {
    image: "/assets/acai/acai.png",
    title: "AÇAÍ",
    subtitle: "",
    description: "",
  },
  sectionTitle: "NOSSOS AÇAÍS",
  products: [],
};

export default function AcaiPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
