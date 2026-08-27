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
  products: [],
};

export default function CrepesPage() {
  return <CategoryPage config={SITE_CONFIG} />;
}
