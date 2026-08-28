import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplitDogHero from "./components/SplitDogHero";
import CardapioSection from "./components/CardapioSection";
import Footer from "./components/Footer";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import HotDogsPage from "./pages/HotDogsPage";
import HotDogsDocesPage from "./pages/HotDogsDocesPage";
import LanchesPage from "./pages/LanchesPage";
import MilkShakesPage from "./pages/MilkShakesPage";
import ChurrosPage from "./pages/ChurrosPage";
import CrepesPage from "./pages/CrepesPage";
import CrepesDocesPage from "./pages/CrepesDocesPage";
import CrepesSalgadosPage from "./pages/CrepesSalgadosPage";
import SalgadosPage from "./pages/SalgadosPage";
import AcaiPage from "./pages/AcaiPage";
import BebidasPage from "./pages/BebidasPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-[#FFF8ED]">
                <DesktopNavbar />
                <MobileNavbar />
                <SplitDogHero />
                <CardapioSection />
                <Footer />
              </div>
            }
          />
          <Route
            path="/hot-dogs"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <HotDogsPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/hot-dogs-doces"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <HotDogsDocesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/lanches"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <LanchesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/milk-shakes"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <MilkShakesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/churros"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <ChurrosPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/crepes"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <CrepesSalgadosPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/crepes-doces"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <CrepesDocesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/salgados"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <SalgadosPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/acai"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <AcaiPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/bebidas"
            element={
              <div className="min-h-screen bg-[#f6f1eb]">
                <DesktopNavbar />
                <MobileNavbar />
                <BebidasPage />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
      <Cart />
    </CartProvider>
  );
}

export default App;
