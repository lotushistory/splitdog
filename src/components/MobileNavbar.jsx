import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logos/logo.png";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="mobile-header">
        <a href="/" className="mobile-logo">
          <img
            src={logo}
            alt="SplitDog"
            className="mobile-logo-img"
          />
          <span className="mobile-logo-text">SplitDog</span>
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="mobile-menu-button"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2.5} />
          ) : (
            <Menu size={24} strokeWidth={2.5} />
          )}
        </button>
      </header>

      <div
        className="mobile-overlay"
        style={{ display: isMenuOpen ? 'block' : 'none' }}
        onClick={closeMenu}
      />

      <div
        className="mobile-menu-panel"
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <nav className="mobile-menu-nav">
          <a href="/" onClick={closeMenu} className="mobile-menu-link">Início</a>
          <a href="/#cardapio" onClick={closeMenu} className="mobile-menu-link">Cardápio</a>
          <a href="/#sobre" onClick={closeMenu} className="mobile-menu-link">Sobre nós</a>
          <a href="/#promocoes" onClick={closeMenu} className="mobile-menu-link">Promoções</a>
          <a href="/#unidades" onClick={closeMenu} className="mobile-menu-link">Unidades</a>
          <a href="/#contato" onClick={closeMenu} className="mobile-menu-link">Contato</a>
        </nav>
      </div>
    </>
  );
}
