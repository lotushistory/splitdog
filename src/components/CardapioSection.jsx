import { useEffect } from "react";

const menuItems = [
  {
    id: "hot-dogs",
    title: "HOT DOGS",
    description: "Clássico, completo\ne do seu jeito!",
    image: "/assets/cardapio/hotdog.png",
    theme: "card-red",
    link: "/hot-dogs",
  },
  {
    id: "lanches",
    title: "LANCHES E XIS",
    description: "Saborosos,\nprontos para você!",
    image: "/assets/cardapio/moto.png",
    theme: "card-yellow dark-text",
    link: "/lanches",
  },
  {
    id: "dog-doces",
    title: "DOG DOCE",
    description: "Uma explosão\nde sabor doce!",
    image: "/assets/cardapio/milkshake.png",
    theme: "card-brown",
    link: "/hot-dogs-doces",
  },
  {
    id: "porcoes",
    title: "PORÇÕES",
    description: "Coração e batata\npara compartilhar!",
    image: "/assets/cardapio/batata.png",
    theme: "card-red",
    link: "/salgados",
  },
  {
    id: "churros",
    title: "CHURROS",
    description: "Crocantes por fora,\nmacios por dentro!",
    image: "/assets/cardapio/churros.png",
    theme: "card-yellow dark-text",
    link: "/churros",
  },
  {
    id: "crepes",
    title: "CREPES",
    description: "Doces ou salgados,\ndo seu jeito!",
    image: "/assets/cardapio/crepe.png",
    theme: "card-red",
    link: "/crepes",
  },
  {
    id: "acai",
    title: "AÇAÍ",
    description: "Energético, refrescante\ne delicioso!",
    image: "/assets/cardapio/acai.png",
    theme: "card-yellow dark-text",
    link: "/acai",
  },
  {
    id: "bebidas",
    title: "BEBIDAS",
    description: "Refresque-se com\nnossas bebidas!",
    image: "/assets/cardapio/bebida.png",
    theme: "card-red",
    link: "/bebidas",
  },
];

export default function CardapioSection() {
  useEffect(() => {
    const whatsappButton = document.getElementById("whatsappOrder");
    if (whatsappButton) {
      const whatsappNumber = "5547999999999";
      const whatsappMessage =
        "Olá! Vim pelo site da SplitDog e gostaria de fazer um pedido.";
      whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    }
  }, []);

  return (
    <section className="splitdog-cardapio" id="cardapio">
      <main className="menu-section" id="splitdog">
        <div className="section-heading">
          <span className="eyebrow">NOSSO CARDÁPIO</span>
          <h1>
            ESCOLHA SEU FAVORITO.
            <span className="heading-quotes">"</span><span className="heading-quotes">"</span>
          </h1>
          <p>Tudo feito com ingredientes frescos e muito sabor!</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.id} className={`menu-card ${item.theme}`} id={item.id}>
              <img className="card-image" src={item.image} alt={item.title} />

              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <a className="card-button" href={item.link}>
                  VER OPÇÕES
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="delivery-banner" id="pedido">
          <div className="delivery-title">
            <span>PEDIU,</span>
            <strong>CHEGOU!</strong>
            <div className="red-strokes" aria-hidden="true">╱╲</div>
          </div>

          <div className="scooter-wrap">
            <span className="speed s1"></span>
            <span className="speed s2"></span>
            <span className="speed s3"></span>
            <img src="/assets/cardapio/moto.png" alt="Entrega de moto" className="scooter-img" />
          </div>

          <p className="delivery-copy">
            Delivery rápido,<br />
            lanches quentes e<br />
            muito sabor na sua casa!
          </p>

          <a className="order-button" id="whatsappOrder" href="#" target="_blank" rel="noopener noreferrer">
            <span className="whatsapp"><i className="fa-solid fa-phone"></i></span>
            PEÇA AGORA
          </a>

          <div className="map-decoration" aria-hidden="true">
            <span className="map-pin">●</span>
            <span className="dashed-path"></span>
            <span className="spark">✦</span>
          </div>
        </section>
      </main>
    </section>
  );
}
