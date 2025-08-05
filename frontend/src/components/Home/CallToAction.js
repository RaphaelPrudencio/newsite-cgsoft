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
                href={`tel:${company.phone}`}
                className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
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