# MEMÓRIA DO PROJETO SPLITDOG
## Última atualização: 27/08/2026 16:30

---

## 1. OBJETIVO DO PROJETO

Criar um site completo para a marca **SplitDog** de hot dogs e lanches, com:
- Página inicial (home) com hero, cardápio e footer
- Seção de cardápio com categorias clicáveis
- Páginas individuais para cada categoria (apenas com navbar)
- Design responsivo para desktop e mobile
- Identidade visual: vermelho, amarelo, preto, branco
- Mascote do cachorro como elemento de branding

---

## 2. ESTRUTURA ATUAL DO PROJETO

```
D:\splitdog\
├── src/
│   ├── components/
│   │   ├── SplitDogHero.jsx   → Hero completo da home
│   │   ├── CardapioSection.jsx → Seção de cardápio com grid de categorias
│   │   ├── DeliverySection.jsx → Seção "PEDIU, CHEGOU" (banner vermelho)
│   │   ├── Footer.jsx          → Footer completo
│   │   └── Navbar.jsx          → Apenas navbar/header (sem hero)
│   ├── pages/
│   │   ├── HotDogsPage.jsx     → Página /hot-dogs (usa CategoryPage)
│   │   ├── MilkShakesPage.jsx  → Página /milk-shakes (usa CategoryPage)
│   │   ├── ChurrosPage.jsx     → Página /churros (usa CategoryPage)
│   │   ├── CrepesPage.jsx      → Página /crepes (usa CategoryPage)
│   │   ├── AcaiPage.jsx        → Página /acai (usa CategoryPage)
│   │   └── BebidasPage.jsx     → Página /bebidas (usa CategoryPage)
│   ├── assets/
│   │   ├── logos/
│   │   │   └── logo.png        → Logo da SplitDog
│   │   └── mascotes/
│   │       └── dog.png         → Mascote do cachorro (hero)
│   ├── App.jsx                 → Componente principal com rotas
│   ├── main.jsx                → Entry point do React
│   └── index.css               → CSS global + estilos mobile + hotdogs page
├── public/
│   └── assets/
│       ├── mascotes/
│       │   ├── mascote2.jpeg   → Mascote alternativo (backup)
│       │   └── mascote3.png    → Mascote do footer
│       ├── cardapio/           → Imagens do cardápio (home)
│       │   ├── hotdog.png
│       │   ├── milkshake.png
│       │   ├── churros.png
│       │   ├── crepe.png
│       │   ├── acai.png
│       │   ├── bebida.png
│       │   ├── batata.png
│       │   └── moto.png
│       └── hotdogs/            → Assets da página de hotdogs (base)
│           ├── hero-background.png
│           ├── hero-hotdog.png
│           ├── produto-1.png
│           ├── produto-2.png
│           ├── produto-3.png
│           └── produto-4.png
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 3. ARQUIVOS E SUAS FUNÇÕES

### `src/App.jsx`
- **Função:** Componente principal com rotas usando `react-router-dom`
- **Rotas:**
  - `/` → Página inicial completa (Hero + Cardápio + Footer)
  - `/hot-dogs` → Página apenas com navbar
  - `/milk-shakes` → Página apenas com navbar
  - `/churros` → Página apenas com navbar
  - `/crepes` → Página apenas com navbar
  - `/acai` → Página apenas com navbar
  - `/bebidas` → Página apenas com navbar
- **Estado:** Funcional, rotas operacionais

### `src/components/SplitDogHero.jsx`
- **Função:** Hero completo da página inicial
- **Conteúdo:**
  - Navbar com logo, menu, botão "Peça agora" e botão menu mobile
  - Badge "Hot Dog & Muito Mais"
  - Título "BATEU A FOME?" em vermelho
  - Descrição do produto
  - Botões "PEDIR AGORA" e "VER CARDÁPIO"
  - Métricas: 5K+ avaliações, 5.000+ clientes, Delivery
  - Mascote do cachorro com selo amarelo
  - Faixa amarela inferior com categorias
- **Imagens:** Importa `logo.png` de `src/assets/logos/` e `dog.png` de `src/assets/mascotes/`
- **Estado:** Funcional, responsivo para mobile e desktop

### `src/components/Navbar.jsx`
- **Função:** Apenas a navbar/header, sem conteúdo do hero
- **Conteúdo:**
  - Logo SplitDog (imagem + texto)
  - Menu desktop: Início, Cardápio, Sobre nós, Promoções, Unidades, Contato
  - Botão "Peça agora" (WhatsApp)
  - Botão menu mobile (hambúrguer)
- **Imagens:** Importa `logo.png` de `src/assets/logos/`
- **Estado:** Funcional, usada nas páginas de categoria

### `src/components/CardapioSection.jsx`
- **Função:** Seção de cardápio com grid de categorias
- **Conteúdo:**
  - 6 cards de categorias: Hot Dogs, Milk-Shakes, Churros, Crepes, Açaí, Bebidas
  - Cada card tem: imagem, título, descrição, botão "VER OPÇÕES"
  - Banner "PEDIU, CHEGOU!" com moto e CTA
- **Links dos cards:** Apontam para rotas React (`/hot-dogs`, etc.)
- **Estado:** Funcional, cards clicáveis levam para páginas de categoria

### `src/components/Footer.jsx`
- **Função:** Footer completo do site
- **Conteúdo:**
  - Logo SplitDog
  - Descrição da marca
  - Redes sociais (Instagram, Facebook, TikTok, WhatsApp)
  - Links rápidos: Início, Cardápio, Promoções, Unidades, Sobre nós, Contato
  - Contato: WhatsApp, Telefone, E-mail, Endereço
  - Horário de atendimento
  - Copyright
- **Mascote:** Posicionado no canto inferior direito (desktop), imagem em `public/assets/mascotes/mascote3.png`
- **Estado:** Funcional, responsivo para mobile

### `src/pages/HotDogsPage.jsx`
- **Função:** Página de categoria Hot Dogs — BASE REUTILIZÁVEL para outras categorias
- **Conteúdo:**
  - Navbar (componente `Navbar`) no topo
  - Breadcrumb (Início › Cardápio › Hot Dogs)
  - Hero com 3 camadas: fundo (`hero-background.png`), textos (título, subtítulo, descrição), imagem grande do produto na frente (`hero-banner-image`)
  - Grid de produtos com 4 cards
- **Carrinho de compras:**
  - Modal de adicionar item: quantidade (+/-) + observações
  - Carrinho flutuante no canto inferior direito (laranja, redondo, contador de itens)
  - Painel do carrinho: lista de itens, quantidades, observações, total
  - Formulário: tipo de pedido (entrega/retirada), endereço, observações gerais
  - Botão "ENVIAR PEDIDO PELO WHATSAPP" que formata mensagem detalhada
- **Configuração:** Objeto `SITE_CONFIG` no início do arquivo com textos, imagens e produtos editáveis
- **Assets:** `public/assets/hotdogs/` (hero-background.png, hero-hotdog.png, produto-1.png a 4.png, vermelho (1).png como bannerImage)
- **CSS:** Classes definidas em `src/index.css` (seção "HOT DOGS PAGE — BASE REUTILIZÁVEL" + "CARRINHO DE COMPRAS")
- **Efeito hero:** Imagem grande (520px desktop) que ultrapassa o banner vermelho para dar efeito 3D
- **Estado:** Funcional, base pronta para ser copiada para outras categorias

### `src/pages/MilkShakesPage.jsx`
- **Função:** Página de categoria Milk Shakes (placeholder)
- **Estado:** Apenas navbar + fundo branco, aguardando conteúdo

### `src/pages/ChurrosPage.jsx`
- **Função:** Página de categoria Churros (placeholder)
- **Estado:** Apenas navbar + fundo branco, aguardando conteúdo

### `src/pages/CrepesPage.jsx`
- **Função:** Página de categoria Crepes (placeholder)
- **Estado:** Apenas navbar + fundo branco, aguardando conteúdo

### `src/pages/AcaiPage.jsx`
- **Função:** Página de categoria Açaí (placeholder)
- **Estado:** Apenas navbar + fundo branco, aguardando conteúdo

### `src/pages/BebidasPage.jsx`
- **Função:** Página de categoria Bebidas (placeholder)
- **Estado:** Apenas navbar + fundo branco, aguardando conteúdo

### `src/index.css`
- **Função:** CSS global + todos os estilos do projeto
- **Conteúdo:**
  - Reset e fontes (Poppins, Anton, Bebas Neue, Montserrat)
  - Estilos do cardápio
  - Estilos do delivery banner
  - Estilos do footer
  - **Media queries mobile (`max-width: 767px`):**
    - Navbar compacta
    - Hero empilhado
    - Badge menor
    - Título 48px, line-height 0.92
    - Botões full width
    - Cards 2 colunas
    - Métricas 3 colunas horizontais
    - Footer 1 coluna
    - Faixa amarela com animação scroll
  - **Breakpoints adicionais:**
    - `max-width: 390px`
    - `max-width: 360px`
- **Estado:** Funcional, responsivo aplicado

---

## 4. DECISÕES TOMADAS

1. **React + Vite + Tailwind CSS** como stack principal
2. **React Router DOM v7** para roteamento entre páginas
3. **Lucide React** para ícones
4. **Font Awesome** para ícones do footer e ícones sociais
5. **Google Fonts:** Poppins, Anton, Bebas Neue, Montserrat
6. **Cores da marca:**
   - Vermelho: `#ED1C24` e `#9e0508`
   - Amarelo: `#FFD21C` e `#ffb700`
   - Preto: `#171717` e `#111111`
   - Branco/Creme: `#FFF8ED` e `#fffaf0`
7. **Mascote:** Usado no hero (desktop e mobile) e no footer (desktop)
8. **Mobile-first:** Design responsivo com breakpoints em 767px, 390px e 360px
9. **Páginas de categoria:** Apenas navbar + fundo branco (sem conteúdo ainda)
10. **WhatsApp:** Botão "PEÇA AGORA" com link fictício (5547999999999) - precisa ser alterado

---

## 5. O QUE ESTÁ FUNCIONAL

- [x] Página inicial completa (Hero + Cardápio + Footer)
- [x] Navbar funcional com logo e menu
- [x] Cards de categorias clicáveis
- [x] Rotas funcionando para as 6 categorias
- [x] Páginas de categoria com apenas navbar
- [x] Footer completo com mascote no desktop
- [x] Responsivo mobile (767px, 390px, 360px)
- [x] Faixa amarela com animação
- [x] Delivery banner com moto
- [x] Ícones de redes sociais
- [x] Botão WhatsApp funcional (precisa número real)

---

## 6. O QUE PRECISA SER FEITO / AJUSTES PENDENTES

1. **Número do WhatsApp:** Alterar de `5547999999999` para número real
2. **Páginas de categoria:** Adicionar conteúdo específico de cada categoria (opções de lanches)
3. **Mascote no footer mobile:** Está posicionado mas pode precisar de ajuste fino
4. **Testes finais:** Verificar responsividade em diferentes dispositivos
5. **Deploy:** Configurar para produção (Vercel, Netlify, etc.)
6. **Otimizações:** Imagens, performance, SEO

---

## 7. COMO TRABALHAR NESTE PROJETO

### Comandos úteis:
```powershell
# Instalar dependências
npm install

# Rodar servidor local
npm run dev -- --host

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Acessos:
- **Local:** http://localhost:5174/
- **Rede local:** http://192.168.1.104:5174/

### Estrutura de edição:
- **Navbar/Header:** `src/components/Navbar.jsx`
- **Hero:** `src/components/SplitDogHero.jsx`
- **Cardápio:** `src/components/CardapioSection.jsx`
- **Footer:** `src/components/Footer.jsx`
- **Rotas:** `src/App.jsx`
- **Estilos:** `src/index.css`
- **Páginas de categoria:** `src/pages/*.jsx`

---

## 8. CONTEXTO IMPORTANTE

- O usuário quer **APENAS navbar** nas páginas de categoria
- O site principal deve continuar intacto (Hero + Cardápio + Footer)
- Mobile deve ter composição própria, não apenas desktop empilhado
- Mascote deve aparecer no hero e no footer (desktop)
- Cores devem seguir a identidade SplitDog (vermelho, amarelo, preto, branco)
- Tipografia: Anton para títulos, Poppins para texto
- Botões devem ter física/hover (levantar ao passar mouse)
- Faixa amarela deve ter animação de scroll horizontal

---

## 9. ARQUIVOS DE CONFIGURAÇÃO

- `package.json` — Dependências e scripts
- `vite.config.js` — Configuração do Vite
- `tailwind.config.js` — Configuração do Tailwind
- `postcss.config.js` — Configuração do PostCSS
- `index.html` — HTML base com fontes e Font Awesome

---

## 10. MEMÓRIA TÉCNICA

- **React Router DOM v7** está instalado e funcionando
- **Rotas configuradas:** `/`, `/hot-dogs`, `/milk-shakes`, `/churros`, `/crepes`, `/acai`, `/bebidas`
- **CSS mobile:** Dentro de `@media (max-width: 767px)` no `index.css`
- **Animações:** Keyframes `scrollText` para faixa amarela
- **Imagens importadas via JS:** `logo.png` em `src/assets/logos/`, `dog.png` em `src/assets/mascotes/`
- **Imagens estáticas (caminho URL):** `mascote3.png` em `public/assets/mascotes/`, cardápio em `public/assets/cardapio/`
- **Imagem não usada:** `mascote2.jpeg` em `public/assets/mascotes/` (backup)
- **Font Awesome:** Carregado via CDN no `index.html`
- **Google Fonts:** Poppins, Anton, Bebas Neue, Montserrat

---

## 11. BASE REUTILIZÁVEL PARA PÁGINAS DE CATEGORIA

A `HotDogsPage.jsx` é a base para todas as outras páginas de categoria.

**Estrutura:**
- Navbar em cima (componente `Navbar`)
- Breadcrumb (Início › Cardápio › [Categoria])
- Hero com 3 camadas: fundo, textos, imagem do produto na frente
- Grid de produtos (cards com imagem, nome, descrição, preço, botão)

**Como criar nova categoria:**
1. Copiar `HotDogsPage.jsx` para nova página (ex: `MilkShakesPage.jsx`)
2. Alterar `SITE_CONFIG`:
   - `breadcrumb.current` → nome da categoria
   - `hero.background` → imagem de fundo da categoria
   - `hero.hotdog` → imagem do produto (PNG transparente)
   - `hero.title`, `hero.subtitle`, `hero.description` → textos da categoria
   - `sectionTitle` → título da seção
   - `products` → array de produtos com imagem, nome, descrição, preço, botão
3. Copiar assets para `public/assets/[categoria]/`
4. Atualizar rota no `App.jsx`

**Categorias pendentes:**
- Milk Shakes
- Churros
- Crepes
- Açaí
- Bebidas

**Efeito 3D do banner:**
- `.hero-banner-image` usa `position: absolute` e `transform: translateY(-50%)`
- Desktop: 520px, posicionada à direita (`right: -60px`), ultrapassa o banner
- Tablet: 300px, `right: -30px`
- Mobile: 260px, `right: -20px`
- `overflow: visible` no `.hero` permite a imagem sair do banner
- Textos ficam em largura fixa à esquerda (420px desktop, 280px tablet, 100% mobile)
- `.hero-texts` com `z-index: 15` para ficar acima da imagem

---

## 12. CARRINHO DE COMPRAS GLOBAL

Implementado como **contexto global** que acompanha em **todas as páginas** do site.

**Arquivos:**
- `src/context/CartContext.jsx` — estado global do carrinho + funções
- `src/components/Cart.jsx` — componente visual (flutuante + modal + painel)
- `src/components/CategoryPage.jsx` — template genérico de página de categoria com modal de adicionar item
- `src/App.jsx` — envolve o app com `CartProvider` e renderiza `<Cart />` globalmente

**Fluxo:**
1. Usuário clica em "ADICIONAR AO CARRINHO" em qualquer página
2. Abre modal com quantidade (+/-) e campo de observações
3. Confirma → item vai para o carrinho global
4. Carrinho flutuante aparece no canto inferior direito (amarelo, redondo, contador de itens)
5. Ao clicar no carrinho, abre painel com:
   - Lista de itens com quantidade, preço e observações
   - Botões de alterar quantidade e remover
   - Total do pedido
   - Tipo de pedido: Entrega ou Retirada
   - Campo de endereço (se entrega)
   - Campo de observações gerais
   - Botão "ENVIAR PEDIDO PELO WHATSAPP"
6. O carrinho **não some** a menos que o usuário remova todos os itens
7. O carrinho **persiste** no localStorage entre sessões

**WhatsApp:**
- Número configurado em `WHATSAPP_NUMBER = "5547999999999"`
- Mensagem formatada com:
  - Lista de itens, quantidades, preços e observações individuais
  - Total do pedido
  - Tipo de pedido (entrega/retirada)
  - Endereço (se entrega)
  - Observações gerais
  - Texto final pedindo confirmação e pagamento

**CSS:**
- `.floating-cart` — carrinho flutuante fixo
- `.modal-overlay` — modal de adicionar item
- `.cart-overlay` — overlay do painel do carrinho
- `.cart-panel` — painel deslizante de baixo
- `.checkout-button` — botão verde WhatsApp

**Ícones usados:**
- `ShoppingCart`, `Plus`, `Minus`, `Trash2`, `MessageCircle`, `X`, `ChevronRight` (lucide-react)

---

## 13. NAVBARS SEPARADAS — DESKTOP E MOBILE

**Arquivos:**
- `src/components/DesktopNavbar.jsx` — navbar para desktop (≥1024px)
- `src/components/MobileNavbar.jsx` — navbar para mobile (<1024px)

**DesktopNavbar:**
- Menu horizontal sempre visível: Início, Cardápio, Sobre nós, Promoções, Unidades, Contato
- Botão "Peça agora" à direita
- Sem botão hambúrguer
- Sem menu mobile

**MobileNavbar:**
- Logo à esquerda
- Botão hambúrguer vermelho redondo à direita
- Menu escondido por padrão (`translateY(-100%)`)
- Ao clicar no botão: menu desliza de cima para baixo
- Overlay escuro atrás do menu
- Fecha ao clicar em um link ou no overlay
- Ícone alterna entre `Menu` e `X`

**Uso no App.jsx:**
- `DesktopNavbar` + `MobileNavbar` renderizados uma única vez no `App.jsx`
- DesktopNavbar é escondido no mobile via CSS
- MobileNavbar é escondido no desktop via CSS

**CSS:**
- `.desktop-navbar` — classe no header do DesktopNavbar
- `.mobile-header`, `.mobile-overlay`, `.mobile-menu-panel` — classes do MobileNavbar
- `@media (min-width: 1024px)` esconde elementos mobile
- `@media (max-width: 1023px)` esconde elementos desktop

**Estado:** Funcional em todas as páginas

---

## 14. FOOTERS SEPARADOS — DESKTOP E MOBILE

**Arquivos:**
- `src/components/DesktopFooter.jsx` — footer desktop original (mantido intacto)
- `src/components/MobileFooter.jsx` — footer mobile recriado do zero

**DesktopFooter:**
- Mantém o design original da página principal
- Grid com colunas: marca, navegação, contato, horário, mascote
- Visível apenas em desktop (≥1024px)

**MobileFooter:**
- Recriado do zero com layout mobile-first
- Seções: logo/descrição/redes, links rápidos, contato, horário, copyright
- Visível apenas em mobile (<1024px)
- Esconde desktop footer em telas pequenas

**Uso no App.jsx:**
- `DesktopFooter` + `MobileFooter` renderizados em todas as rotas
- DesktopFooter é escondido no mobile via CSS
- MobileFooter é escondido no desktop via CSS

---

## 14. CATEGORY PAGE — TEMPLATE GENÉRICO

Todas as páginas de categoria usam o componente `CategoryPage.jsx`.

**Estrutura:**
- `MainNavbar` no topo
- Breadcrumb (Início › Cardápio › [Categoria])
- Hero com fundo vermelho, texto à esquerda e imagem do produto à direita
- Grid de produtos
- Carrinho global

**Hero:**
- Desktop: texto à esquerda, imagem 260px à direita, min-height 220px
- Tablet: imagem 180px
- Mobile: layout empilhado, imagem 160px, min-height 260px
- Sem sobreposição de texto e imagem
- `.category-hero-image` controla a imagem do produto

**Cards:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna, altura reduzida
- Imagem com altura fixa (`product-image-wrap: 174px` desktop, `140px` mobile)
- Título, descrição, preço e botão sempre na mesma ordem

**Carrinho:**
- Global, igual em todas as páginas
- Modal de quantidade + observações
- Painel com lista, total e checkout WhatsApp

---

## 14. CATEGORY PAGE — TEMPLATE GENÉRICO

Todas as páginas de categoria usam o componente `CategoryPage.jsx`.

**Como funciona:**
- `CategoryPage` recebe um objeto `config` com todos os dados da categoria
- Cada página de categoria (`HotDogsPage`, `MilkShakesPage`, etc.) só define o `config`
- O layout é o mesmo para todas: MainNavbar, breadcrumb, hero, grid de produtos, carrinho
- Não há mais código duplicado entre páginas

**Estrutura do `config`:**
```js
{
  breadcrumb: { home, category, current },
  hero: { image, title, subtitle, description },
  sectionTitle: string,
  products: [
    { image, name, description, price, button }
  ]
}
```

**Para criar nova categoria:**
1. Criar pasta em `public/assets/[categoria]/` com as imagens
2. Criar arquivo em `src/pages/[Categoria]Page.jsx`
3. Definir `SITE_CONFIG` com os dados da categoria
4. Adicionar rota no `App.jsx`

**Categorias pendentes:**
- Milk Shakes — config criado, sem produtos ainda
- Churros — config criado, sem produtos ainda
- Crepes — config criado, sem produtos ainda
- Açaí — config criado, sem produtos ainda
- Bebidas — config criado, sem produtos ainda

**Hero:**
- Fundo vermelho sólido `#a90000`
- Texto à esquerda, imagem do produto à direita
- No mobile: layout empilhado, imagem menor
- Sem sobreposição de texto e imagem
- `.category-hero-image` controla a imagem do produto

**Cards:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna, altura reduzida
- Imagem com altura fixa (`product-image-wrap: 174px` desktop, `140px` mobile)
- Título, descrição, preço e botão sempre na mesma ordem

**Carrinho:**
- Global, igual em todas as páginas
- Modal de quantidade + observações
- Painel com lista, total e checkout WhatsApp

---

## 15. PASTA PARA IMPORTAR FOTOS

Criada pasta `D:\splitdog\public\assets\importar\` para o usuário colocar fotos novas sem precisar organizar. Quando houver fotos lá, a IA deve:
1. Mover para a pasta correta da categoria
2. Atualizar os caminhos no código
3. Apagar a pasta `importar` depois

---

## 16. ESTRUTURA GENÉRICA DE CATEGORIA

**Arquivo principal:** `src/components/CategoryPage.jsx`

Esta é a base para **todas** as páginas de categoria. Ela recebe um `config` e renderiza:
- breadcrumb
- hero com fundo vermelho + texto + imagem do produto
- grid de produtos
- modal de adicionar ao carrinho

**Vantagem:** não precisa mais copiar código entre páginas. Só muda o `config`.

**Categorias existentes:**
- `/hot-dogs` — `HotDogsPage.jsx` com produtos configurados
- `/milk-shakes` — `MilkShakesPage.jsx` (aguardando produtos)
- `/churros` — `ChurrosPage.jsx` (aguardando produtos)
- `/crepes` — `CrepesPage.jsx` (aguardando produtos)
- `/acai` — `AcaiPage.jsx` (aguardando produtos)
- `/bebidas` — `BebidasPage.jsx` (aguardando produtos)

**Como adicionar produtos a uma categoria:**
1. Colocar fotos em `public/assets/[categoria]/`
2. Abrir o arquivo da categoria em `src/pages/`
3. Editar o array `products` dentro de `SITE_CONFIG`
4. Salvar e testar

**Regras do template:**
- Hero: fundo vermelho sólido, texto à esquerda, imagem do produto à direita
- Mobile: hero empilhado, imagem menor
- Cards: 4 colunas desktop, 2 tablet, 1 mobile
- Imagens dos produtos: altura fixa, `object-fit: contain`
- Carrinho: global, igual em todas as páginas

---

## FIM DA MEMÓRIA

**Para qualquer IA que ler este arquivo:**
- Este é o estado atual do projeto SplitDog
- Siga as decisões tomadas e não altere o que já está funcionando
- Qualquer mudança deve ser comunicada ao usuário primeiro
- Mantenha a identidade visual da marca
- Priorize mobile-first
- Não quebre funcionalidades existentes
- **Use a CategoryPage como base para criar/editar páginas de categoria**
- **O carrinho de compras é global e deve aparecer em todas as páginas**
- **A navbar é separada em DesktopNavbar e MobileNavbar. NÃO use MainNavbar.**
- **Fotos novas devem ser colocadas em `public/assets/importar/` primeiro**
- **O hero usa fundo vermelho sólido + imagem do produto, sem sobreposição de texto**
- **Estrutura correta: DesktopNavbar + MobileNavbar, nunca os dois juntos na mesma tela**
