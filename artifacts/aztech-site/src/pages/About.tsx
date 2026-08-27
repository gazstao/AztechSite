import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <div className="w-full pt-28 pb-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
            <div className="w-6 h-6 bg-accent rounded-sm rotate-45" />
          </div>
           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 terminal-glow">{t.about.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4"
          >
             <div className="terminal-card aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent" />
              {/* Geometric decorative element in place of a generic office photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 border border-accent/40 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full blur-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 space-y-8 text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-foreground font-medium text-xl">
              {t.about.content1}
            </p>
            <p>
              {t.about.content2}
            </p>
            <div className="pl-6 border-l-2 border-accent text-foreground font-medium py-2">
              {t.about.content3}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
