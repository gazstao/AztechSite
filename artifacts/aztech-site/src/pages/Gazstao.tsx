import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import profileImg from '@assets/image_1787573453832.png';

export default function Gazstao() {
  const { t, lang } = useI18n();
  const profileIntro = {
    pt: 'Apaixonado pela vida, por tecnologia, segurança cibernética e inovação. Com mais de 26 anos de experiência em manutenção de equipamentos médicos de alta complexidade e segurança da informação, desenvolvo projetos focados na gestão e proteção de sistemas, análise forense e melhoria contínua de processos tecnológicos.',
    en: 'Passionate about life, technology, cybersecurity and innovation. With more than 26 years of experience maintaining highly complex medical equipment and working with information security, I develop projects focused on system management and protection, forensic analysis and continuous improvement of technology processes.',
    es: 'Apasionado por la vida, la tecnología, la ciberseguridad y la innovación. Con más de 26 años de experiencia en mantenimiento de equipos médicos de alta complejidad y seguridad de la información, desarrollo proyectos centrados en la gestión y protección de sistemas, análisis forense y mejora continua de procesos tecnológicos.',
  }[lang];
  const labels = {
    pt: { education: 'FORMAÇÃO', certifications: 'CERTIFICAÇÕES', expertise: 'EXPERIÊNCIA' },
    en: { education: 'EDUCATION', certifications: 'CERTIFICATIONS', expertise: 'EXPERIENCE' },
    es: { education: 'FORMACIÓN', certifications: 'CERTIFICACIONES', expertise: 'EXPERIENCIA' },
  }[lang];

  return (
    <div className="min-h-[100dvh] w-full bg-black flex flex-col items-center justify-center font-mono text-[#00ff00] p-6 relative overflow-hidden selection:bg-[#00ff00]/30 selection:text-white">
      {/* Background Matrix Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10" 
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }} 
      />

      <div className="max-w-3xl w-full z-20 relative">
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="flex gap-2 items-center mb-6 text-sm md:text-base opacity-70">
            <span>root@aztech:~#</span>
            <span className="typing-animation overflow-hidden whitespace-nowrap border-r-2 border-[#00ff00] pr-1">
              ./execute_profile.sh
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col md:flex-row items-center gap-10 border border-[#00ff00]/30 p-8 bg-black/50 backdrop-blur-sm relative"
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00ff00]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00ff00]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00ff00]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00ff00]" />

          <div className="w-64 h-auto shrink-0 relative group">
            <div className="absolute inset-0 bg-[#00ff00]/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
            <img 
              src={profileImg} 
              alt="Gazstao Profile" 
              className="w-full h-auto border border-[#00ff00]/50 filter grayscale contrast-125 sepia-[0.8] hue-rotate-[70deg]"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 tracking-wider text-shadow-glow">
                GAZSTAO
              </h1>
              <div className="h-px w-full bg-[#00ff00]/30" />
            </div>
            
            <p className="text-lg opacity-90">&gt; {profileIntro}</p>

            <div className="space-y-2 text-sm opacity-70">
              <p>[STATUS]: ONLINE</p>
              <p>[LOCATION]: CURITIBA, BR</p>
              <p>[ROLES]: SYSADMIN, SECURITY, NUCLEAR TECH, AI HACKER</p>
            </div>
            
            <div className="pt-4 animate-pulse text-sm">
              <span className="mr-2">_</span>{t.gazstao.loaded}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-5 md:grid-cols-3 text-xs leading-relaxed opacity-80"
        >
          <div className="border-l border-[#00ff00]/40 pl-4">
            <p className="text-[#00ff00] mb-2">[{labels.education}]</p>
            <p>Graduação em Tecnologia da Informação — UTFPR</p>
            <p>Pós-graduação em Gestão de TI — UTFPR</p>
            <p>Técnico em Mecatrônica — Ensitec</p>
          </div>
          <div className="border-l border-[#00ff00]/40 pl-4">
            <p className="text-[#00ff00] mb-2">[{labels.certifications}]</p>
            <p>CEH · CEH Master · CHFI</p>
            <p className="mt-2">EC-Council</p>
            <div className="mt-3 flex gap-2 text-[10px]">
              <span className="border border-[#00ff00]/40 px-2 py-1">CEH</span>
              <span className="border border-[#00ff00]/40 px-2 py-1">CHFI</span>
              <span className="border border-[#00ff00]/40 px-2 py-1">UTFPR</span>
            </div>
          </div>
          <div className="border-l border-[#00ff00]/40 pl-4">
            <p className="text-[#00ff00] mb-2">[{labels.expertise}]</p>
            <p>Vulnerability analysis & incident response</p>
            <p>Networks, endpoints & threat defense</p>
            <p>Critical systems & nuclear medicine</p>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(0,255,0,0.7);
        }
        .typing-animation {
          animation: typing 2s steps(20, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 180px }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00ff00; }
        }
      `}} />
    </div>
  );
}
