// Dados mock para o site da CGSoft
export const mockData = {
  // Informações da empresa
  company: {
    name: "CGSoft",
    slogan: "Soluções inteligentes para sua empresa",
    description: "Empresa especializada em desenvolvimento de software personalizado e suporte técnico de alta qualidade, garantindo soluções sob medida para o seu negócio.",
    address: "Campo Grande - MS, Brasil",
    email: "contato@cgsoft.com.br",
    phone: "(67) 99228-8629",
    location: {
      lat: -20.4634,
      lng: -54.6412,
      city: "Campo Grande",
      state: "MS"
    }
  },

  // Serviços principais
  services: [
    {
      id: 1,
      title: "Desenvolvimento de Software Personalizado",
      description: "Criamos sistemas sob medida para atender necessidades específicas do seu negócio.",
      icon: "Code",
      featured: true
    },
    {
      id: 2,
      title: "Sites personalizados",
      description: "Desenvolvemos sites profissionais e modernos, alinhados à identidade da sua empresa.",
      icon: "Users",
      featured: true
    },
    {
      id: 3,
      title: "Suporte Técnico",
      description: "Suporte especializado e manutenção preventiva para manter seus sistemas funcionando perfeitamente.",
      icon: "HeadphonesIcon",
      featured: true
    },
    {
      id: 4,
      title: "Integração de Sistemas",
      description: "Conectamos diferentes plataformas para que elas “conversem” entre si.",
      icon: "Network",
      featured: true
    },
    {
      id: 5,
      title: "Análise de Dados",
      description: "Transformamos seus dados em insights valiosos para tomada de decisões estratégicas.",
      icon: "BarChart3",
      featured: false
    }
    // {
    //   id: 6,
    //   title: "Segurança da Informação",
    //   description: "Protegemos seus dados e sistemas com as melhores práticas de segurança digital.",
    //   icon: "Shield",
    //   featured: false
    // }
  ],

  // Diferenciais da empresa
  differentials: [
    {
      id: 1,
      title: "Inovação",
      description: "Aplicamos as melhores práticas de desenvolvimento para criar soluções modernas, seguras e eficientes.",
      icon: "CircuitBoard"
    },
    {
      id: 2,
      title: "Agilidade",
      description: "Metodologias ágeis que garantem entregas rápidas, eficientes e alinhadas às necessidades do cliente.",
      icon: "Zap"
    },
    {
      id: 3,
      title: "Suporte Especializado",
      description: "Equipe dedicada para suporte contínuo, manutenção preventiva e resolução de problemas críticos.",
      icon: "Headphones"
    },
    {
      id: 4,
      title: "Soluções Escaláveis",
      description: "Tecnologias que acompanham o crescimento do seu negócio, sem comprometer performance e segurança.",
      icon: "TrendingUp"
    }
  ],

  // Depoimentos de clientes
  testimonials: [
    {
      id: 1,
      name: "Maria Santos",
      company: "TechCorp Solutions",
      role: "Diretora de TI",
      content: "A CGSoft transformou nossa infraestrutura tecnológica. O sistema personalizado que desenvolveram aumentou nossa produtividade em 40%.",
      avatar: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      company: "Inovação Digital Ltda",
      role: "CEO",
      content: "Profissionais extremamente competentes. O suporte técnico é excepcional e sempre atendem com agilidade.",
      avatar: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      company: "Gestão Inteligente",
      role: "Gerente de Projetos",
      content: "A integração de sistemas que a CGSoft realizou superou nossas expectativas. Agora temos todos os dados centralizados.",
      avatar: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85"
    }
  ],

  // Membros da equipe
  team: [
    {
      id: 1,
      name: "João Silva",
      role: "Diretor Técnico",
      description: "Especialista em arquitetura de software com mais de 15 anos de experiência.",
      avatar: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Gerente de Projetos",
      description: "Especializada em metodologias ágeis e gestão de equipes de desenvolvimento.",
      avatar: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Ricardo Ferreira",
      role: "Desenvolvedor Senior",
      description: "Expert em tecnologias web modernas e integração de sistemas.",
      avatar: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Camila Souza",
      role: "Analista de Sistemas",
      description: "Especialista em análise de requisitos e modelagem de processos de negócio.",
      avatar: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc1NDQyNTYwN3ww&ixlib=rb-4.1.0&q=85",
      linkedin: "#"
    }
  ],

  // Conteúdo das páginas
  pages: {
    about: {
      history: "Fundada em 2025, a CGSoft nasceu da visão de democratizar o acesso a tecnologias avançadas para empresas de todos os portes. Desenvolvemos projetos que transformam a forma como nossos clientes fazem negócios.",
      mission: "Nossa missão é desenvolver soluções tecnológicas inovadoras que impulsionem o crescimento e a eficiência dos nossos clientes, sempre priorizando a qualidade e a satisfação.",
      vision: "Ser reconhecida como a principal referência em soluções de software personalizadas no Centro-Oeste brasileiro.",
      values: [
        "Excelência técnica em cada projeto",
        "Relacionamento duradouro com clientes",
        "Inovação constante e adaptação às mudanças",
        "Transparência e ética em todas as relações"
      ]
    }
  },

  // Dados para o formulário de contato
  contactForm: {
    subjects: [
      "Desenvolvimento de Software",      
      "Suporte Técnico",      
      "Outros"
    ]
  },

  // Redes sociais
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/cgsoft",
      icon: "Linkedin"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/cgsoft",
      icon: "Instagram"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/cgsoft",
      icon: "Facebook"
    }
  ]
};

export default mockData;