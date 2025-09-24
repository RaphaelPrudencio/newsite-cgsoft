import React from 'react';
import { Card, CardContent } from '../ui/card';
import { 
  Award, 
  Zap, 
  Headphones, 
  TrendingUp
} from 'lucide-react';
import mockData from '../../data/mock';

const WhyChooseUs = () => {
  const { differentials } = mockData;

  const getIcon = (iconName) => {
    const icons = {
      Award,
      Zap,
      Headphones,
      TrendingUp
    };
    return icons[iconName] || Award;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher a CGSoft?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transformamos tecnologia em valor real para o crescimento dos seus projetos
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => {
            const Icon = getIcon(differential.icon);
            return (
              <Card 
                key={differential.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-10 h-10 text-red-600 dark:text-red-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      {differential.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;