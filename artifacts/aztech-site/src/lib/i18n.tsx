import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

type Translations = {
  [key in Language]: {
    nav: {
      home: string;
      about: string;
      projects: string;
      links: string;
      gazstao: string;
    };
    footer: {
      company: string;
      rights: string;
      location: string;
    };
    home: {
      heroTitle: string;
      heroSubtitle: string;
      heroCta: string;
      solutionsTitle: string;
      solNuclear: string;
      solNuclearDesc: string;
      solCyber: string;
      solCyberDesc: string;
      solIT: string;
      solITDesc: string;
      solAI: string;
      solAIDesc: string;
      solEdu: string;
      solEduDesc: string;
      contactTitle: string;
      contactDesc: string;
      contactBtn: string;
    };
    about: {
      title: string;
      subtitle: string;
      content1: string;
      content2: string;
      content3: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewProject: string;
      soon: string;
    };
    links: {
      title: string;
      subtitle: string;
    };
    gazstao: {
      loaded: string;
      passionate: string;
    };
  };
};

const translations: Translations = {
  pt: {
    nav: {
      home: 'Soluções',
      about: 'Sobre Nós',
      projects: 'Projetos',
      links: 'Recursos',
      gazstao: 'Gazstao',
    },
    footer: {
      company: 'Aztech Alta Tecnologia',
      rights: 'Todos os direitos reservados.',
      location: 'Curitiba, PR - Brasil',
    },
    home: {
      heroTitle: 'Tecnologia. Precisão. Confiança.',
      heroSubtitle: 'Parceiro tecnológico especializado em medicina nuclear, cibersegurança, gestão de TI, inteligência artificial e educação contínua.',
      heroCta: 'Fale Conosco',
      solutionsTitle: 'Nossas Áreas de Atuação',
      solNuclear: 'Medicina Nuclear',
      solNuclearDesc: 'Manutenção especializada em equipamentos e soluções de precisão para clínicas de medicina nuclear.',
      solCyber: 'Cibersegurança',
      solCyberDesc: 'Proteção avançada de dados, análise de vulnerabilidades e implementação de rotinas seguras.',
      solIT: 'Gestão de TI',
      solITDesc: 'Infraestrutura robusta e gerenciamento completo para garantir operação ininterrupta do seu negócio.',
      solAI: 'Inteligência Artificial',
      solAIDesc: 'Projetos de IA locais e privados, implementando modelos offline com segurança e performance.',
      solEdu: 'Educação Contínua',
      solEduDesc: 'Treinamentos técnicos e capacitação constante para equipes manterem-se atualizadas com a vanguarda tecnológica.',
      contactTitle: 'Pronto para elevar sua infraestrutura?',
      contactDesc: 'Entre em contato com nossos especialistas para desenhar a solução ideal para seu cenário.',
      contactBtn: 'Iniciar Conversa',
    },
    about: {
      title: 'Nossa História',
      subtitle: 'Conectando alta tecnologia ao fator humano.',
      content1: 'A Aztech Alta Tecnologia nasceu em Curitiba com uma missão clara: fornecer suporte técnico e tecnológico de extrema precisão para setores críticos, onde a margem de erro é zero.',
      content2: 'Começamos nossa jornada atendendo clínicas de medicina nuclear, desenvolvendo um rigor técnico que posteriormente aplicamos às nossas verticais de cibersegurança e gestão de infraestrutura de TI.',
      content3: 'Acreditamos que a verdadeira inovação une sistemas robustos com conhecimento humano. É por isso que investimos em projetos privados de Inteligência Artificial e mantemos um braço forte de educação contínua. Na Aztech, a tecnologia é a ferramenta, mas a confiança é o nosso produto final.',
    },
    projects: {
      title: 'Projetos e Iniciativas',
      subtitle: 'Casos de sucesso, hackathons e desenvolvimentos sob medida.',
      viewProject: 'Acessar Projeto',
      soon: 'Em Breve',
    },
    links: {
      title: 'Recursos Curados',
      subtitle: 'Uma seleção cuidadosa de ferramentas, datasets e referências tecnológicas.',
    },
    gazstao: {
      loaded: 'Loaded...',
      passionate: 'Apaixonado por computadores, máquinas e seres vivos.',
    }
  },
  en: {
    nav: {
      home: 'Solutions',
      about: 'About',
      projects: 'Projects',
      links: 'Resources',
      gazstao: 'Gazstao',
    },
    footer: {
      company: 'Aztech High Technology',
      rights: 'All rights reserved.',
      location: 'Curitiba, PR - Brazil',
    },
    home: {
      heroTitle: 'Technology. Precision. Trust.',
      heroSubtitle: 'Specialized technology partner for nuclear medicine, cybersecurity, IT management, artificial intelligence, and continuing education.',
      heroCta: 'Contact Us',
      solutionsTitle: 'Our Expertise Areas',
      solNuclear: 'Nuclear Medicine',
      solNuclearDesc: 'Specialized maintenance and precision solutions for nuclear medicine clinics and equipment.',
      solCyber: 'Cybersecurity',
      solCyberDesc: 'Advanced data protection, vulnerability analysis, and secure routine implementation.',
      solIT: 'IT Management',
      solITDesc: 'Robust infrastructure and complete management to ensure your business operates uninterrupted.',
      solAI: 'Artificial Intelligence',
      solAIDesc: 'Local and private AI projects, implementing offline models with security and high performance.',
      solEdu: 'Continuing Education',
      solEduDesc: 'Technical training and constant skill development to keep teams at the technological vanguard.',
      contactTitle: 'Ready to elevate your infrastructure?',
      contactDesc: 'Get in touch with our experts to design the ideal solution for your scenario.',
      contactBtn: 'Start a Conversation',
    },
    about: {
      title: 'Our Story',
      subtitle: 'Connecting high technology with the human factor.',
      content1: 'Aztech High Technology was founded in Curitiba with a clear mission: to provide extremely precise technical and technological support for critical sectors where the margin of error is zero.',
      content2: 'We began our journey serving nuclear medicine clinics, developing a technical rigor that we later applied to our cybersecurity and IT infrastructure management verticals.',
      content3: 'We believe true innovation unites robust systems with human knowledge. That is why we invest in private Artificial Intelligence projects and maintain a strong arm of continuing education. At Aztech, technology is the tool, but trust is our final product.',
    },
    projects: {
      title: 'Projects & Initiatives',
      subtitle: 'Success stories, hackathons, and custom developments.',
      viewProject: 'View Project',
      soon: 'Coming Soon',
    },
    links: {
      title: 'Curated Resources',
      subtitle: 'A careful selection of tools, datasets, and technological references.',
    },
    gazstao: {
      loaded: 'Loaded...',
      passionate: 'Passionate about computers, machines and living beings.',
    }
  },
  es: {
    nav: {
      home: 'Soluciones',
      about: 'Nosotros',
      projects: 'Proyectos',
      links: 'Recursos',
      gazstao: 'Gazstao',
    },
    footer: {
      company: 'Aztech Alta Tecnología',
      rights: 'Todos los derechos reservados.',
      location: 'Curitiba, PR - Brasil',
    },
    home: {
      heroTitle: 'Tecnología. Precisión. Confianza.',
      heroSubtitle: 'Socio tecnológico especializado en medicina nuclear, ciberseguridad, gestión de TI, inteligencia artificial y educación continua.',
      heroCta: 'Contáctenos',
      solutionsTitle: 'Nuestras Áreas de Experiencia',
      solNuclear: 'Medicina Nuclear',
      solNuclearDesc: 'Mantenimiento especializado de equipos y soluciones de precisión para clínicas de medicina nuclear.',
      solCyber: 'Ciberseguridad',
      solCyberDesc: 'Protección avanzada de datos, análisis de vulnerabilidades e implementación de rutinas seguras.',
      solIT: 'Gestión de TI',
      solITDesc: 'Infraestructura robusta y gestión completa para garantizar la operación ininterrumpida de su negocio.',
      solAI: 'Inteligencia Artificial',
      solAIDesc: 'Proyectos de IA locales y privados, implementando modelos offline con seguridad y rendimiento.',
      solEdu: 'Educación Continua',
      solEduDesc: 'Entrenamientos técnicos y capacitación constante para mantener a los equipos a la vanguardia tecnológica.',
      contactTitle: '¿Listo para elevar su infraestructura?',
      contactDesc: 'Póngase en contacto con nuestros expertos para diseñar la solución ideal para su escenario.',
      contactBtn: 'Iniciar Conversación',
    },
    about: {
      title: 'Nuestra Historia',
      subtitle: 'Conectando alta tecnología con el factor humano.',
      content1: 'Aztech Alta Tecnología nació en Curitiba con una misión clara: brindar soporte técnico y tecnológico de extrema precisión para sectores críticos, donde el margen de error es cero.',
      content2: 'Comenzamos nuestro viaje atendiendo clínicas de medicina nuclear, desarrollando un rigor técnico que luego aplicamos a nuestras verticales de ciberseguridad y gestión de infraestructura de TI.',
      content3: 'Creemos que la verdadera innovación une sistemas robustos con el conocimiento humano. Por eso invertimos en proyectos privados de Inteligencia Artificial y mantenemos un fuerte brazo de educación continua. En Aztech, la tecnología es la herramienta, pero la confianza es nuestro producto final.',
    },
    projects: {
      title: 'Proyectos e Iniciativas',
      subtitle: 'Casos de éxito, hackathons y desarrollos a medida.',
      viewProject: 'Ver Proyecto',
      soon: 'Próximamente',
    },
    links: {
      title: 'Recursos Curados',
      subtitle: 'Una cuidadosa selección de herramientas, datasets y referencias tecnológicas.',
    },
    gazstao: {
      loaded: 'Loaded...',
      passionate: 'Apasionado por computadoras, máquinas y seres vivos.',
    }
  }
};

type I18nContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.pt;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('aztech-lang') as Language;
    if (saved && ['pt', 'en', 'es'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('aztech-lang', l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
