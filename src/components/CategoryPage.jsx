import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Plus, Minus, X } from "lucide-react";

export default function CategoryPage({ config }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState("");
  const { addToCart } = useCart();

  const openProductModal = (index) => {
    const product = config.products[index];
    setSelectedProduct({ ...product, originalIndex: index });
    setQuantity(1);
    setObservation("");
  };

  const confirmAddToCart = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, quantity, observation);
    setSelectedProduct(null);
    setQuantity(1);
    setObservation("");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [config]);

  if (!config) return null;

  return (
    <div className="min-h-screen bg-[#f6f1eb]">
      <div className="category-main">
        {/* Breadcrumb */}
        <div className="category-breadcrumb">
          <span>{config.breadcrumb.home}</span>
          <span className="arrow">›</span>
          <span>{config.breadcrumb.category}</span>
          <span className="arrow">›</span>
          <span className="current">{config.breadcrumb.current}</span>
        </div>

        {/* Hero */}
        <section className="category-hero">
          <div className="category-hero-content">
            <div className="category-hero-texts">
              <h1>{config.hero.title}</h1>
              <h2>{config.hero.subtitle}</h2>
              <p>{config.hero.description}</p>
            </div>

            {config.hero.image && (
              <img
                className="category-hero-image"
                src={config.hero.image}
                alt={config.hero.title}
              />
            )}
          </div>
        </section>

        {/* Produtos */}
        <section className="products-section">
          <div className="section-heading">
            <h2>{config.sectionTitle}</h2>
            <span></span>
          </div>
          <div className="products-grid">
            {config.products.map((product, index) => (
              <article className="product-card" key={index}>
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <h3 className="product-name">{product.name}</h3>

                <p className="product-description">{product.description}</p>

                <div className="product-price">
                  {typeof product.price === 'number'
                    ? product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                    : product.price}
                </div>

                <button
                  className="cart-button"
                  type="button"
                  onClick={() => openProductModal(index)}
                >
                  🛒 &nbsp; {product.button || "ADICIONAR AO CARRINHO"}
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Modal de adicionar ao carrinho */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProduct.name}</h3>
              <button onClick={() => setSelectedProduct(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="quantity-control">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  <Minus size={18} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>
                  <Plus size={18} />
                </button>
              </div>

              <div className="modal-price">
                {typeof selectedProduct.price === 'number'
                  ? (selectedProduct.price * quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                  : selectedProduct.price}
              </div>

              <label className="modal-label">Observações (opcional)</label>
              <textarea
                className="modal-textarea"
                placeholder="Ex: Sem cebola, com molho extra..."
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                rows={3}
              />
            </div>

            <div className="modal-footer">
              <button className="confirm-cart-button" onClick={confirmAddToCart}>
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
