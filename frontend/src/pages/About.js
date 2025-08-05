import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { 
  Target, 
  Eye, 
  Heart, 
  CheckCircle,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import mockData from '../data/mock';

const About = () => {
  const { pages, team } = mockData;
  const aboutContent = pages.about;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre a 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> CGSoft</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Conheça nossa história, valores e a equipe que transforma ideias em soluções tecnológicas
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {aboutContent.history}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">2014</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ano de Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">MS</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mato Grosso do Sul</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlfGVufDB8fHx8MTc1NDQyNTYxM3ww&ixlib=rb-4.1.0&q=85"
                alt="Tecnologia e Inovação"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Missão
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {aboutContent.mission}
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Visão
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {aboutContent.vision}
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Valores
                </h3>
                <ul className="text-left space-y-2">
                  {aboutContent.values.map((value, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Profissionais especializados e apaixonados por tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.id}
                className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Avatar className="w-24 h-24 mx-auto ring-4 ring-red-100 dark:ring-red-900/30 group-hover:ring-red-200 dark:group-hover:ring-red-800/50 transition-all duration-300">
                      <AvatarImage 
                        src={member.avatar} 
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="text-red-600 dark:text-red-400 font-medium mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 group/btn"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Ver Perfil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quer fazer parte da nossa equipe?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Estamos sempre em busca de talentos excepcionais para fortalecer nosso time.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white px-8 py-3 font-semibold group transition-all duration-200"
          >
            Trabalhe Conosco
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;