import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Code, 
  Users, 
  Headphones, 
  Network, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import mockData from '../data/mock';

const Services = () => {
  const { services } = mockData;

  const getIcon = (iconName) => {
    const icons = {
      Code,
      Users,
      HeadphonesIcon: Headphones,
      Network,
      BarChart3,
      Shield
    };
    return icons[iconName] || Code;
  };

  const servicesBenefits = [
    "Análise detalhada dos requisitos",
    "Desenvolvimento ágil e iterativo", 
    "Testes rigorosos de qualidade",
    "Documentação completa",
    "Treinamento da equipe",
    "Suporte pós-implementação"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Nossos 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Soluções em tecnologia para impulsionar o crescimento da sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <Card 
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CardContent className="p-8 relative">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-red-100 dark:from-gray-950/20 dark:to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* <Button 
                        variant="ghost"
                        className="w-full hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 group/btn transition-all duration-200"
                      >
                        Saiba Mais
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nosso processo garante qualidade e satisfação em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Entre em contato e transforme suas ideias em realidade
          </p>
          <Button 
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 group"
            onClick={() => window.location.href = '/contato'}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;