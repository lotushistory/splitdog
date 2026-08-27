import React from "react";
import {
  Star,
  Users,
  Bike,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import logo from "../assets/logos/logo.png";
import mascot from "../assets/mascotes/dog.png";

export default function SplitDogHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8ED] text-[#171717]">

      {/* =========================
          DECORAÇÕES DE FUNDO
      ========================== */}

      <div className="pointer-events-none absolute -right-20 top-24 h-[620px] w-[620px] rounded-full bg-[#ED1C24] opacity-[0.07]" />

      <div className="pointer-events-none absolute left-[-150px] top-[500px] h-[350px] w-[350px] rounded-full bg-[#FFD21C] opacity-20 blur-3xl" />

      {/* LINHA */}

      <div className="mx-auto h-px max-w-[1440px] bg-[#ED1C24]/10" />

      {/* =========================
          HERO
      ========================== */}

      <main
        id="inicio"
        className="relative z-10 mx-auto max-w-[1440px] px-6 pb-10 pt-12 lg:px-12 lg:pt-16"
      >

        <div className="grid min-h-[700px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =========================
              COLUNA ESQUERDA
          ========================== */}

          <div className="relative z-20 max-w-[650px]">

            {/* PEQUENO BADGE */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ED1C24]/20 bg-white px-4 py-2 shadow-sm">

              <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#ED1C24]" />

              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#ED1C24]">
                Hot Dog & Muito Mais
              </span>

            </div>

            {/* TÍTULO */}

            <h1 className="font-black uppercase leading-[0.82] tracking-[-0.055em]">

              <span className="block text-[clamp(4.5rem,8vw,8.5rem)] text-[#171717]">
                Bateu
              </span>

              <span className="block text-[clamp(4.5rem,8vw,8.5rem)] text-[#ED1C24]">
                a fome?
              </span>

            </h1>

            {/* DECORAÇÃO */}

            <div className="mt-5 flex items-center gap-3">

              <span className="h-2 w-20 rotate-[-4deg] rounded-full bg-[#ED1C24]" />

              <span className="h-2 w-10 rotate-[5deg] rounded-full bg-[#FFD21C]" />

              <span className="h-2 w-5 rotate-[-3deg] rounded-full bg-[#ED1C24]" />

            </div>

            {/* TEXTO */}

            <p className="mt-7 max-w-[510px] text-lg font-medium leading-relaxed text-[#3E3E3E] md:text-xl">
              Aqui o hot dog é de verdade, do jeito que você gosta.
              Escolha seu lanche, monte seu pedido e deixe a fome fazer o resto.
            </p>

            {/* BOTÕES */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#pedido"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#FFD21C] px-8 py-4 text-base font-black uppercase text-[#111] shadow-[0_6px_0_#111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_#111] active:translate-y-1 active:shadow-[0_3px_0_#111]"
              >
                <MessageCircle size={21} strokeWidth={3} />

                Pedir agora

                <ArrowUpRight
                  size={20}
                  strokeWidth={3}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#cardapio"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#171717] bg-white px-8 py-4 text-base font-black uppercase text-[#171717] transition-all hover:bg-[#171717] hover:text-white"
              >
                Ver cardápio
              </a>

            </div>

            {/* =========================
                MÉTRICAS
            ========================== */}

            <div className="mt-12 grid max-w-[650px] grid-cols-3 gap-5 border-t border-[#171717]/10 pt-7">

              {/* AVALIAÇÕES */}

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ED1C24] text-white">
                  <Star size={21} fill="currentColor" />
                </div>

                <div>
                  <strong className="block text-lg font-black">
                    5K+
                  </strong>

                  <span className="text-xs font-bold text-[#666]">
                    Avaliações
                  </span>
                </div>

              </div>

              {/* CLIENTES */}

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ED1C24] text-white">
                  <Users size={21} />
                </div>

                <div>
                  <strong className="block text-lg font-black">
                    5.000+
                  </strong>

                  <span className="text-xs font-bold text-[#666]">
                    Clientes felizes
                  </span>
                </div>

              </div>

              {/* DELIVERY */}

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ED1C24] text-white">
                  <Bike size={21} />
                </div>

                <div>
                  <strong className="block text-lg font-black">
                    Delivery
                  </strong>

                  <span className="text-xs font-bold text-[#666]">
                    Rápido e seguro
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* =========================
              COLUNA DIREITA
          ========================== */}

          <div className="relative min-h-[560px] lg:min-h-[700px]">

            {/* CAMPO VERMELHO */}

            <div className="absolute right-0 top-1/2 h-[500px] w-[90%] -translate-y-1/2 rounded-[150px_150px_70px_70px] bg-[#ED1C24] lg:h-[650px] lg:w-[88%]" />

            {/* TEXTURA */}

            <div
              className="absolute bottom-10 right-0 h-[180px] w-[88%] rounded-b-[70px] opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* SELO */}

            <div className="absolute left-[4%] top-[4%] z-30 flex h-32 w-32 rotate-[-7deg] items-center justify-center rounded-full bg-[#FFD21C] p-5 text-center shadow-lg lg:h-36 lg:w-36">

              <div className="text-sm font-black uppercase leading-tight text-[#111]">
                O hot dog
                <br />
                que todo
                <br />
                mundo ama!
              </div>

            </div>

            {/* LINHAS DE MOVIMENTO */}

            <div className="absolute right-[-10px] top-[-10px] z-20 hidden lg:block">

              <svg
                width="180"
                height="170"
                viewBox="0 0 180 170"
                fill="none"
              >

                <path
                  d="M20 140C100 130 150 80 100 20"
                  stroke="#ED1C24"
                  strokeWidth="2"
                  strokeDasharray="7 7"
                />

                <path
                  d="M99 20L110 30L113 15"
                  stroke="#ED1C24"
                  strokeWidth="3"
                />

              </svg>

            </div>

            {/* MASCOTE */}

            <div className="absolute inset-0 z-20 flex items-center justify-center lg:items-end lg:justify-end">

              <img
                src={mascot}
                alt="Mascote SplitDog segurando um hot dog"
                className="mascot-float relative h-[500px] w-auto max-w-none object-contain drop-shadow-[0_25px_20px_rgba(0,0,0,0.20)] sm:h-[580px] lg:-mr-2 lg:h-[690px]"
              />

            </div>

            {/* CARD DOS LANCHES */}

            <div className="absolute bottom-2 left-1/2 z-40 flex w-[92%] max-w-[430px] -translate-x-1/2 items-center gap-4 rounded-[28px] bg-white px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:bottom-4 lg:left-auto lg:right-[-20px] lg:w-[390px] lg:translate-x-0">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFF3B5]">

                <div className="text-4xl">
                  🍟
                </div>

              </div>

              <div>

                <span className="block text-lg font-black">
                  Os melhores lanches
                </span>

                <span className="mt-1 block text-sm font-medium leading-snug text-[#ED1C24]">
                  Feitos com ingredientes frescos e muito sabor!
                </span>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* =========================
          FAIXA INFERIOR
      ========================== */}

      <div className="relative z-20 h-16 overflow-hidden bg-[#FFD21C]">

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20px 20px, #C98B00 2px, transparent 2px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative flex h-full items-center justify-center gap-8 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] text-[#8B6500]">

          <span>🌭 HOT DOG</span>
          <span>🍟 MUITO SABOR</span>
          <span>🥤 MILK-SHAKE</span>
          <span>🍫 CHURROS</span>
          <span>🥞 CREPES</span>
          <span>🌭 SPLITDOG</span>

        </div>

      </div>

      {/* =========================
          ANIMAÇÃO
      ========================== */}

      <style>{`
        @keyframes splitDogFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(0.5deg);
          }
        }

        .mascot-float {
          animation: splitDogFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .mascot-float {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}