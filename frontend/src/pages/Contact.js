// src/pages/Contact.js
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import mockData from '../data/mock';

const Contact = () => {
  const { company, contactForm } = mockData;
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // utils
  const normalizeWhatsNumber = (raw) => {
    const onlyDigits = String(raw || '').replace(/\D/g, '');
    // se já vier com DDI 55, mantém; caso contrário, prefixa
    return onlyDigits.startsWith('55') ? onlyDigits : `55${onlyDigits}`;
  };

  const buildWhatsLink = (data) => {
    const rawTarget = company?.whatsapp || company?.phone || '';
    const target = normalizeWhatsNumber(rawTarget);

    const text =
      `*Novo chamado pelo site CGSoft*%0A` +
      `*Nome:* ${encodeURIComponent(data.name)}%0A` +
      `*Email:* ${encodeURIComponent(data.email)}%0A` +
      (data.phone ? `*Telefone:* ${encodeURIComponent(data.phone)}%0A` : '') +
      `*Assunto:* ${encodeURIComponent(data.subject)}%0A` +
      `*Mensagem:* ${encodeURIComponent(data.message)}`;

    return `https://wa.me/${target}?text=${text}`;
  };

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validações mínimas
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome, Email, Assunto e Mensagem são obrigatórios.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // monta e abre o WhatsApp com a mensagem
      const whatsURL = buildWhatsLink(formData);
      window.open(whatsURL, "_blank", "noopener,noreferrer");

      toast({
        title: "Abrimos uma conversa no WhatsApp",
        description: "Envie a mensagem para concluir o contato. Também responderemos por email se necessário.",
        duration: 5000,
      });

      // limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Não foi possível enviar agora",
        description: "Tente novamente em instantes.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Entre em
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Contato</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ouvir suas ideias e transformá-las em soluções tecnológicas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  {/* Endereço */}
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Local
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {company.address}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Telefone */}
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Telefone
                          </h3>
                          <a
                            href={`tel:${company.phone}`}
                            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                          >
                            {company.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Email
                          </h3>
                          <a
                            href={`mailto:${company.email}`}
                            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                          >
                            {company.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Horário */}
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Horário de Atendimento
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Segunda a Sexta: 8h às 18h<br />
                            Sábado: 8h às 12h
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Envie sua Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(67) 99999-9999"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                          Assunto *
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={handleSubjectChange}
                          required
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione um assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactForm.subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva seu projeto ou necessidade..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando…</span>
                        </div>
                      ) : (
                        <>
                          Solicitar contato
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Como Podemos Ajudar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Consulta Gratuita
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Primeira consulta sem custo para entender suas necessidades
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Resposta Rápida
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Retornamos seu contato em até 24 horas úteis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Proposta Personalizada
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orçamento detalhado baseado em suas necessidades específicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
