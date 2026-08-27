import React from "react";

import logo from "../assets/logos/logo.png";
import mascot from "../assets/mascotes/dog.png";

export default function Footer() {
  return (
    <footer className="sd-footer">
      <div className="sd-footer-content">
        <div className="sd-footer-main">
          <div className="sd-footer-container">
            <section className="sd-footer-brand">
              <div className="sd-logo">
                <span className="sd-logo-white">SPLIT</span>
                <span className="sd-logo-red">DOG</span>
              </div>
              <p className="sd-brand-description">
                Muito sabor, lanches feitos com<br />
                amor e ingredientes selecionados<br />
                para você!
              </p>
              <div className="sd-socials">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="TikTok">
                  <svg viewBox="0 0 24 24">
                    <path d="M15 4c.3 2.1 1.5 3.5 3.5 3.8V11c-1.4-.1-2.7-.5-3.5-1.2V15a5 5 0 1 1-5-5c.4 0 .7 0 1 .1v3.2a2 2 0 1 0 .8 1.7V4h3.2z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"></path>
                    <path d="M8.5 8.5c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.4 2.3l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6 0 .4-.2.9-.5 1.1-.3.3-.8.4-1.2.4-2 0-3.8-1.1-5.1-2.6-1-1.1-1.7-2.4-1.7-3.4 0-.4.1-.7.2-1z"></path>
                  </svg>
                </a>
              </div>
            </section>

            <section className="sd-footer-column sd-contact">
              <h3>FALE CONOSCO</h3>
              <a href="tel:+5547999999999" className="sd-contact-row">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 3.5h3l1.2 4-2 1.5a14 14 0 0 0 6.3 6.3l1.5-2 4 1.2v3c0 .8-.7 1.5-1.5 1.5C11.3 19 5 12.7 5 5c0-.8.7-1.5 1.5-1.5z"></path>
                </svg>
                <span>(47) 99999-9999</span>
              </a>
              <a href="tel:+5547999999999" className="sd-contact-row">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 3.5h3l1.2 4-2 1.5a14 14 0 0 0 6.3 6.3l1.5-2 4 1.2v3c0 .8-.7 1.5-1.5 1.5C11.3 19 5 12.7 5 5c0-.8.7-1.5 1.5-1.5z"></path>
                </svg>
                <span>(47) 99999-9999</span>
              </a>
              <a href="mailto:contato@splitdog.com.br" className="sd-contact-row">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="m4 7 8 6 8-6"></path>
                </svg>
                <span>contato@splitdog.com.br</span>
              </a>
              <div className="sd-contact-row sd-address">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"></path>
                  <circle cx="12" cy="9" r="2.2"></circle>
                </svg>
                <span>
                  Rua das Delícias, 123<br />
                  Centro - Joinville/SC
                </span>
              </div>
            </section>

            <section className="sd-footer-column sd-hours">
              <h3>ATENDIMENTO</h3>
              <div className="sd-hour-group">
                <strong>Segunda a Sexta</strong>
                <span>16h00 às 23h30</span>
              </div>
              <div className="sd-hour-group">
                <strong>Sábado</strong>
                <span>15h00 às 00h00</span>
              </div>
              <div className="sd-hour-group">
                <strong>Domingo</strong>
                <span>15h00 às 22h30</span>
              </div>
            </section>

            <section className="sd-footer-column sd-links">
              <h3>LINKS RÁPIDOS</h3>
              <a href="#">Início</a>
              <a href="#">Cardápio</a>
              <a href="#">Promoções</a>
              <a href="#">Unidades</a>
              <a href="#">Sobre nós</a>
              <a href="#">Contato</a>
            </section>

            <section className="sd-footer-column sd-newsletter">
              <h3>RECEBA NOVIDADES</h3>
              <p>
                Cadastre seu WhatsApp e receba<br />
                promoções exclusivas!
              </p>
              <form className="sd-whatsapp-form" id="sdWhatsappForm">
                <div className="sd-whatsapp-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"></path>
                    <path d="M8.5 8.5c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.4 2.3l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6 0 .4-.2.9-.5 1.1-.3.3-.8.4-1.2.4-2 0-3.8-1.1-5.1-2.6-1-1.1-1.7-2.4-1.7-3.4 0-.4.1-.7.2-1z"></path>
                  </svg>
                </div>
                <input
                  type="tel"
                  id="sdWhatsappInput"
                  placeholder="Seu WhatsApp"
                  autocomplete="tel"
                />
                <button type="submit">
                  →
                </button>
              </form>
            </section>
          </div>

          <div className="sd-mascot-placeholder">
            <img
              src={mascot}
              alt="Mascote"
              className="sd-mascot"
            />
          </div>
        </div>
      </div>

      <div className="sd-footer-bottom">
        <p>
          Desenvolvido com <span>♥</span> para você! &nbsp;© 2026 SplitDog ·
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
