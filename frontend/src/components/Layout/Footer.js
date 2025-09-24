// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import mockData from '../../data/mock';
import { useTheme } from '../../contexts/ThemeContext';

import logoLight from '../../assets/logo-cgsoft-light.png'; // usa no tema escuro do site (logo clara)
import logoDark  from '../../assets/logo-cgsoft-dark.png';  // usa no tema claro do site (logo escura)

const Footer = () => {
  const { company, socialMedia } = mockData;
  const { theme } = useTheme();

  const getIcon = (iconName) => {
    const icons = { Linkedin, Instagram, Facebook };
    return icons[iconName] || Linkedin;
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <Link to="/" className="flex items-center group" aria-label="CGSoft — Início">
                  <img
                    src={theme === 'light' ? logoLight : logoDark}
                    alt="CGSoft"
                    className="h-16 w-auto select-none"
                    draggable="false"
                  />
                </Link>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                {company.description}
              </p>

              {/* <div className="flex space-x-4">
                {socialMedia.map((social) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div> */}
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li><Link to="/"         className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">Início</Link></li>
                <li><Link to="/sobre"    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">Sobre</Link></li>
                <li><Link to="/servicos" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">Serviços</Link></li>
                <li><Link to="/contato"  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">Contato</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Contato
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-sm">{company.address}</span>
                </li>

                {/* Telefone normal */}
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-sm">{company.phone}</span>
                </li>

                {/* WhatsApp (link clicável) */}
                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    {/* Ícone WhatsApp em vermelho para combinar com o resto */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.3 5.448 0 12.059 0c3.184 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.481 8.418c-.003 6.615-5.388 11.902-12.002 11.902a12.3 12.3 0 01-5.938-1.52L.057 24zM6.6 20.013c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.434 9.889-9.879.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.433-9.889 9.885a9.862 9.862 0 001.575 5.293l-.999 3.648 3.913-1.048zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413z" />
                    </svg>
                  <a
                    href={`https://wa.me/55${company.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                  {company.phone}
                  </a>
                </li>

                <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-sm">{company.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Desenvolvido com ❤️ em {company.address.replace(', Brasil', '')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
