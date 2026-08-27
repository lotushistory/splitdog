import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, X, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "5547999999999";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [generalObservation, setGeneralObservation] = useState("");
  const [deliveryType, setDeliveryType] = useState("delivery");

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = "*NOVO PEDIDO - SPLITDOG*\n\n";
    message += "*ITENS DO PEDIDO:*\n";

    cart.forEach((item, index) => {
      message += `\n${index + 1}. *${item.name}*\n`;
      message += `   Qtd: ${item.quantity}x\n`;
      message += `   Preço: ${item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n`;
      if (item.observation.trim()) {
        message += `   Obs: ${item.observation.trim()}\n`;
      }
    });

    message += `\n*TOTAL: ${cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n\n`;
    message += "*INFORMAÇÕES DE ENTREGA:*\n";
    message += `Tipo: ${deliveryType === "delivery" ? "Entrega" : "Retirada"}\n`;
    if (deliveryType === "delivery") {
      message += `Endereço: ${address.trim() || "Não informado"}\n`;
    }
    if (generalObservation.trim()) {
      message += `Observações: ${generalObservation.trim()}\n`;
    }
    message += `\n_Pedido enviado pelo site. Aguardo confirmação e informações de pagamento._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Carrinho flutuante */}
      {cartCount > 0 && (
        <button
          className="floating-cart"
          onClick={() => setIsCartOpen(true)}
          aria-label="Abrir carrinho"
        >
          <ShoppingCart size={22} color="#fff" />
          <span className="floating-cart-count">{cartCount}</span>
        </button>
      )}

      {/* Painel do carrinho */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>
                <ShoppingCart size={20} /> MEU CARRINHO
              </h3>
              <button onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="cart-items">
              {cart.length === 0 && (
                <p className="cart-empty">Seu carrinho está vazio</p>
              )}
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <strong>{item.name}</strong>
                    <span>{(item.price * item.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                    {item.observation && (
                      <small>Obs: {item.observation}</small>
                    )}
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <Plus size={16} />
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <>
                <div className="cart-total">
                  <strong>TOTAL</strong>
                  <strong>{cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
                </div>

                <div className="cart-form">
                  <label>Tipo de pedido</label>
                  <div className="delivery-type">
                    <button
                      className={deliveryType === "delivery" ? "active" : ""}
                      onClick={() => setDeliveryType("delivery")}
                    >
                      Entrega
                    </button>
                    <button
                      className={deliveryType === "pickup" ? "active" : ""}
                      onClick={() => setDeliveryType("pickup")}
                    >
                      Retirada
                    </button>
                  </div>

                  {deliveryType === "delivery" && (
                    <div className="form-group">
                      <label>Endereço de entrega</label>
                      <input
                        type="text"
                        placeholder="Rua, número, bairro..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label>Observações gerais</label>
                    <textarea
                      placeholder="Alguma observação para o pedido..."
                      value={generalObservation}
                      onChange={(e) => setGeneralObservation(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <button className="checkout-button" onClick={handleCheckout}>
                  <MessageCircle size={20} />
                  ENVIAR PEDIDO PELO WHATSAPP
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
