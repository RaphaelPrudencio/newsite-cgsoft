// src/components/Home/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import mockData from '../../data/mock';
import { useTheme } from '../../contexts/ThemeContext';
import logoLight from '../../assets/logo-cgsoft-light.png'; // para tema escuro do site
import logoDark  from '../../assets/logo-cgsoft-dark.png';  // para tema claro do site

const HeroSection = () => {
  const { company } = mockData;
  const { theme } = useTheme();

  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Logo Principal */}
          <div className="flex justify-center mb-8">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt={`${company.name} logo`}
              className="h-24 w-auto md:h-28 lg:h-32 select-none drop-shadow-xl"
              draggable="false"
            />
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.15] md:leading-[1.12]">
            <span className="block">Soluções</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent inline-block pb-1">
              inteligentes
            </span>
            <span className="block">para sua empresa</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos softwares e sites personalizados, com suporte técnico especializado,
            para levar sua empresa ao próximo nível.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>

            <Link to="/servicos">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 dark:hover:border-red-400 px-8 py-3 text-lg font-semibold hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
              >
                Nossos Serviços
              </Button>
            </Link>
          </div>

          {/* Stats / Badges */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Suporte Técnico</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
