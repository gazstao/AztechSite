import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Code2, Rocket, Lock } from 'lucide-react';

const projects = [
  {
    title: 'SpaceApps Challenge 2019 — Hexagoal',
    description: 'Projeto Hexagoal desenvolvido para o SpaceApps Challenge 2019.',
    icon: <Rocket className="w-6 h-6" />,
    url: 'https://2019.spaceappschallenge.org/challenges/living-our-world/smash-your-sdgs/teams/hexagoal/stream/',
    status: 'completed',
    tags: ['SpaceApps', 'Hexagoal', 'Hackathon']
  },
  {
    title: 'SpaceApps Covid19 Challenge — LockCare',
    description: 'Projeto LockCare desenvolvido pela Capiwarez Team para o desafio especial da NASA.',
    icon: <Lock className="w-6 h-6" />,
    url: 'https://covid19.spaceappschallenge.org/challenges/covid-challenges/where-theres-a-link-theres-a-way/teams/capiwarez/stream/',
    status: 'completed',
    tags: ['SpaceApps', 'Capiwarez', 'LockCare']
  },
  {
    title: 'Workshop de Inteligência Artificial — RecrutaTech',
    description: 'Workshop de Inteligência Artificial com Karol Barb e Wel Silva.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://github.com/gazstao/Workshop-de-IA',
    status: 'completed',
    tags: ['IA', 'Workshop', 'RecrutaTech']
  },
  {
    title: 'Material e Códigos da Palestra RecrutaTalks IA',
    description: 'Materiais e códigos de apoio da palestra sobre Inteligência Artificial.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://github.com/gazstao/RecrutaTalks-IA',
    status: 'completed',
    tags: ['IA', 'Código', 'RecrutaTech']
  },
  {
    title: 'Hacking, IA e Eu — RecrutaTech 2025',
    description: 'Roteiro e texto completo da apresentação da palestra “Hacking, IA e Eu”.',
    icon: <Lock className="w-6 h-6" />,
    url: 'https://aztechtecnologia.com.br/RecrutaTech2025v1.4.pdf/',
    status: 'completed',
    tags: ['Palestra', 'Hacking', 'IA']
  },
  {
    title: 'Off The Matrix',
    description: 'Compilação de estudos sobre cibersegurança e computação forense.',
    icon: <Lock className="w-6 h-6" />,
    url: 'https://aztechtecnologia.com.br/Documentos/OffTheMatrix.pdf',
    status: 'completed',
    tags: ['Cibersegurança', 'Forense', 'Estudos']
  },
  {
    title: 'Projetos no GitHub',
    description: 'Curso de Python, resumos de vídeos do YouTube usando Inteligência Artificial, laboratório web, forks e outros projetos.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://github.com/gazstao',
    status: 'completed',
    tags: ['GitHub', 'Python', 'IA']
  },
  {
    title: 'Monografia GETIC-III — UTFPR',
    description: 'Monografia de conclusão da pós-graduação em Gestão da Tecnologia da Informação e Comunicação sobre o desafio da Aztech com a obsolescência tecnológica.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://aztechtecnologia.com.br/CT_GETIC_III_2015_11.pdf',
    status: 'completed',
    tags: ['UTFPR', 'GETIC-III', 'Pesquisa']
  },
  {
    title: 'Projeto de Mecatrônica — Ensitec',
    description: 'Projeto de conclusão do curso de Mecatrônica na Ensitec.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://aztechtecnologia.com.br/Documentos/AGVDoc.pdf',
    status: 'completed',
    tags: ['Mecatrônica', 'Ensitec', 'Projeto']
  },
  {
    title: 'NFTs de Alberto Ferreira',
    description: 'NFTs do fotógrafo brasileiro Alberto Ferreira, incluindo a famosa Bicicleta de Pelé, desenvolvidos sob licença pela AzTokens.',
    icon: <Rocket className="w-6 h-6" />,
    url: 'https://og.rarible.com/albertoferreira',
    status: 'completed',
    tags: ['NFT', 'AzTokens', 'Arte']
  },
  {
    title: 'NFTs de André Ducci',
    description: 'Ilustrações de André Ducci transformadas em NFTs no Rarible.',
    icon: <Rocket className="w-6 h-6" />,
    url: 'https://rarible.com/andreducci',
    status: 'completed',
    tags: ['NFT', 'Rarible', 'Ilustração']
  },
  {
    title: 'Coleção Otaku Gems',
    description: 'Experimentos no mundo da arte digital, especialmente a coleção “Otaku Gems”, gerada por IA.',
    icon: <Rocket className="w-6 h-6" />,
    url: 'https://og.rarible.com/gazstao',
    status: 'completed',
    tags: ['NFT', 'IA', 'Otaku Gems']
  },
  {
    title: 'Nave Terra',
    description: 'Blog onde armazeno alguns pensamentos no mundo digital.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://naveterra.blogspot.com/',
    status: 'completed',
    tags: ['Blog', 'Tecnologia', 'Pessoal']
  },
  {
    title: 'Musiquinhas antigas',
    description: 'Gravações feitas em casa, perto dos anos 2000, preservadas para a posteridade.',
    icon: <Rocket className="w-6 h-6" />,
    url: 'https://www.palcomp3.com.br/gazstao/',
    status: 'completed',
    tags: ['Música', 'Arquivo', 'Pessoal']
  },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <div className="w-full pt-28 pb-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.projects.title}</h1>
          <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative flex flex-col justify-between bg-card border border-border rounded-2xl p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-125 duration-500" />
              
              <div>
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-accent mb-6">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {p.url !== '#' ? (
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {t.projects.viewProject}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground cursor-not-allowed">
                    {t.projects.soon}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
