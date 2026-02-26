import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/toaster";

// Framer Motion
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/Transitions/PageTransition";
import ScrollToTop from "./components/Transitions/ScrollToTop";

// Layout Components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults"; // resultados da busca

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/sobre"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/servicos"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/contato"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/buscar"
            element={
              <PageTransition>
                <SearchResults />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <HashRouter>
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </HashRouter>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
