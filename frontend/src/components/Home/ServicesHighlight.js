import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Code, 
  Users, 
  Headphones, 
  Network, 
  ArrowRight
} from 'lucide-react';
import mockData from '../../data/mock';

const ServicesHighlight = () => {
  const { services } = mockData;
  const featuredServices = services.filter(service => service.featured);

  const getIcon = (iconName) => {
    const icons = {
      Code,
      Users,
      HeadphonesIcon: Headphones,
      Network
    };
    return icons[iconName] || Code;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Principais Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Oferecemos soluções em tecnologia para impulsionar o crescimento da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/servicos">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white px-8 py-3 text-lg font-semibold group transition-all duration-200"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;