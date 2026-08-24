import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ShieldCheck, Activity, Server, Cpu, GraduationCap, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();

  const solutions = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: t.home.solNuclear,
      desc: t.home.solNuclearDesc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.home.solCyber,
      desc: t.home.solCyberDesc,
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t.home.solIT,
      desc: t.home.solITDesc,
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: t.home.solAI,
      desc: t.home.solAIDesc,
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t.home.solEdu,
      desc: t.home.solEduDesc,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }} />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Alta Tecnologia
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
          >
            {t.home.heroTitle}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {t.home.heroSubtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-10"
          >
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent/25"
            >
              {t.home.heroCta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-muted/30 px-6 md:px-12 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.home.solutionsTitle}</h2>
            <div className="h-1 w-20 bg-accent mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{sol.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t.home.contactTitle}</h2>
          <p className="text-xl text-muted-foreground mb-10">{t.home.contactDesc}</p>
          <a href="mailto:contato@aztechtecnologia.com.br" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20">
            {t.home.contactBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
