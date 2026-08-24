import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Code2, Rocket, Lock } from 'lucide-react';

const projects = [
  {
    title: 'SpaceApps Challenge 2019',
    description: 'Participação com desenvolvimento em Jupyter Notebook no hackathon da NASA, edição Curitiba.',
    icon: <Rocket className="w-6 h-6" />,
    url: '#',
    status: 'completed',
    tags: ['NASA', 'Jupyter', 'Hackathon']
  },
  {
    title: 'Hack Pelo Futuro',
    description: 'Solução desenvolvida em equipe durante o hackathon voltado para inovações em momentos de crise.',
    icon: <Code2 className="w-6 h-6" />,
    url: 'https://hackpelofuturo.paniclobster.com/team/14',
    status: 'completed',
    tags: ['Innovation', 'Hackathon']
  },
  {
    title: 'Lockcare - CapiWarez',
    description: 'Projeto especial para o NASA SpaceApps 2020 Special Edition, focando em soluções de cuidado e segurança.',
    icon: <Lock className="w-6 h-6" />,
    url: '#',
    status: 'completed',
    tags: ['NASA', 'Security', 'Health']
  }
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
