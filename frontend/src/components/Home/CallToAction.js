import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import mockData from '../../data/mock';

const CallToAction = () => {
  const { company } = mockData;

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar sua empresa?
          </h2>
          
          <p className="text-xl text-red-100 mb-10 leading-relaxed">
            Entre em contato conosco e descubra como nossas soluções podem revolucionar seus processos de negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contato">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 group"
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/55${company.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors duration-200"
              >
                {/* Ícone WhatsApp no mesmo estilo vermelho */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.3 5.448 0 12.059 0c3.184 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.481 8.418c-.003 6.615-5.388 11.902-12.002 11.902a12.3 12.3 0 01-5.938-1.52L.057 24zM6.6 20.013c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.434 9.889-9.879.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.433-9.889 9.885a9.862 9.862 0 001.575 5.293l-.999 3.648 3.913-1.048zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413z" />
                </svg>
                <span className="font-medium">{company.phone}</span>
              </a>
              
              <a 
                href={`mailto:${company.email}`}
                className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">{company.email}</span>
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Resposta em 24h</div>
              <div className="text-red-200">Garantimos retorno rápido</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Orçamento Gratuito</div>
              <div className="text-red-200">Sem compromisso inicial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Suporte Contínuo</div>
              <div className="text-red-200">Acompanhamento pós-projeto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;