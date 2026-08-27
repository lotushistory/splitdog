import React from "react";
import { MessageCircle } from "lucide-react";

import logo from "../assets/logos/logo.png";

export default function DesktopNavbar() {
  return (
      <header className="desktop-navbar relative z-50 mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

      <a href="/" className="group flex shrink-0 items-center gap-3">
        <img
          src={logo}
          alt="SplitDog"
          className="h-[58px] w-[58px] rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-2xl font-black uppercase tracking-tight text-[#171717]">
          SplitDog
        </span>
      </a>

      <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
        <a
          href="/"
          className="rounded-full bg-[#ED1C24] px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-sm transition-all hover:scale-105"
        >
          Início
        </a>
        <a
          href="/#cardapio"
          className="rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#FFD21C] hover:text-[#111]"
        >
          Cardápio
        </a>
        <a
          href="/#sobre"
          className="rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#FFD21C] hover:text-[#111]"
        >
          Sobre nós
        </a>
        <a
          href="/#promocoes"
          className="rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#FFD21C] hover:text-[#111]"
        >
          Promoções
        </a>
        <a
          href="/#unidades"
          className="rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#FFD21C] hover:text-[#111]"
        >
          Unidades
        </a>
        <a
          href="/#contato"
          className="rounded-full px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#FFD21C] hover:text-[#111]"
        >
          Contato
        </a>
      </nav>

      <a
        href="https://wa.me/5547999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden shrink-0 items-center gap-2 rounded-full border-2 border-[#ED1C24] bg-white px-5 py-3 text-sm font-black uppercase text-[#ED1C24] transition-all hover:bg-[#ED1C24] hover:text-white md:flex"
      >
        <MessageCircle size={18} strokeWidth={2.5} />
        Peça agora
      </a>
    </header>
  );
}
