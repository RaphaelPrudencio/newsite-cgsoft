import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Star, Quote } from 'lucide-react';
import mockData from '../../data/mock';

const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <>
      {/*
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header *-/}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Depoimentos reais de empresas que transformaram seus negócios conosco
            </p>
          </div>

          {/* Testimonials Grid *-/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon *-/}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-red-600 dark:text-red-400" />
                </div>

                <CardContent className="p-8 relative z-10">
                  {/* Star Rating *-/}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content *-/}
                  <blockquote className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info *-/}
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-12 h-12 ring-2 ring-red-100 dark:ring-red-900/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default Testimonials;
