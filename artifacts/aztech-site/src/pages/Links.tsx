import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Search, Database, Shield, BrainCircuit, Rocket, LayoutGrid, FileText, Activity } from 'lucide-react';

const categories = [
  { id: 'nuclear', icon: <Activity className="w-5 h-5"/>, label: 'Medicina Nuclear' },
  { id: 'data', icon: <Database className="w-5 h-5"/>, label: 'Datasets' },
  { id: 'ai', icon: <BrainCircuit className="w-5 h-5"/>, label: 'Inteligência Artificial' },
  { id: 'forensic', icon: <Search className="w-5 h-5"/>, label: 'Forense' },
  { id: 'cyber', icon: <Shield className="w-5 h-5"/>, label: 'Hacking & Cyber' },
  { id: 'space', icon: <Rocket className="w-5 h-5"/>, label: 'Espaço' },
  { id: 'misc', icon: <LayoutGrid className="w-5 h-5"/>, label: 'Diversos' },
];

const rawLinks = [
  { cat: 'nuclear', title: 'Calculadora de Conversão de Unidades de Radiação', url: 'https://aztechtecnologia.com.br/calculaRad.html' },
  { cat: 'nuclear', title: 'GE Healthcare Documentation', url: 'https://www.gehealthcare.com/support/manuals' },
  
  { cat: 'data', title: 'Kaggle', url: 'https://www.kaggle.com/' },
  { cat: 'data', title: 'Nasa Open Data', url: 'https://data.nasa.gov/' },
  
  { cat: 'ai', title: 'Ollama - IA local offline fácil e rápido', url: 'https://www.ollama.com' },
  { cat: 'ai', title: 'Modelos Llama da Meta (públicos)', url: 'https://llama.meta.com/' },
  { cat: 'ai', title: 'HuggingFace Spaces (Ache um modelo de IA)', url: 'https://huggingface.co/spaces/' },
  { cat: 'ai', title: 'Open-WebUI (Interface estilo ChatGPT p/ Ollama)', url: 'https://github.com/open-webui/open-webui' },
  { cat: 'ai', title: 'Riscos da IA (MIT)', url: 'https://airisk.mit.edu/' },
  
  { cat: 'forensic', title: 'Ferramentas Forenses para Windows Freeware (NirSoft)', url: 'https://www.nirsoft.net/utils/index.html' },
  { cat: 'forensic', title: 'Autopsy: Ferramenta para Análise Forense', url: 'https://www.autopsy.com/download/' },
  
  { cat: 'cyber', title: 'Material de Fiscalização de Segurança do TCU', url: '#' },
  { cat: 'cyber', title: 'Darknet Diaries', url: 'https://darknetdiaries.com/' },
  { cat: 'cyber', title: 'The Hacker News', url: 'https://thehackernews.com/' },
  { cat: 'cyber', title: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/' },
  { cat: 'cyber', title: 'Pacific News', url: 'https://pacificnews.today/' },
  { cat: 'cyber', title: 'Malicious Life', url: 'https://malicious.life/' },
  { cat: 'cyber', title: 'Podcasts TrustedSec', url: 'https://www.trustedsec.com/resources?sections=podcasts' },
  { cat: 'cyber', title: 'Laboratórios PortSwigger', url: 'https://portswigger.net/web-security/all-labs' },
  { cat: 'cyber', title: 'Darkweb Informer', url: 'https://darkwebinformer.com' },
  
  { cat: 'misc', title: 'Artigos em arxiv.org', url: 'https://arxiv.org/' },
  { cat: 'misc', title: 'Teste de Personalidade (16 Personalities)', url: 'https://www.16personalities.com/br/teste-de-personalidade' },
  { cat: 'misc', title: 'Pesquisa de patentes nos Estados Unidos', url: 'https://patft.uspto.gov/netahtml/PTO/search-bool.html' },
  { cat: 'misc', title: 'Versão antiga da página de links (Aztech)', url: 'https://aztechtecnologia.com.br/links.html' },
  
  { cat: 'space', title: 'Sistema solar em escala', url: 'https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html' },
  { cat: 'space', title: 'Imagens de satélite NOAA', url: '#' },
  { cat: 'space', title: 'Imagens de satélite do Inmet', url: '#' },
  { cat: 'space', title: 'Imagens de satélite atualizadas (apolo11.com)', url: '#' },
];

export default function Links() {
  const { t } = useI18n();
  const [activeCat, setActiveCat] = useState<string>('all');
  
  const filteredLinks = useMemo(() => {
    if (activeCat === 'all') return rawLinks;
    return rawLinks.filter(l => l.cat === activeCat);
  }, [activeCat]);

  return (
    <div className="w-full pt-28 pb-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.links.title}</h1>
          <p className="text-lg text-muted-foreground">{t.links.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCat('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCat === 'all' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Todos
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCat === c.id ? 'bg-accent text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {c.icon}
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url !== '#' ? link.url : undefined}
              target={link.url !== '#' ? "_blank" : undefined}
              rel={link.url !== '#' ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`flex items-start gap-4 p-5 rounded-xl border border-border bg-card transition-all duration-300 ${
                link.url !== '#' ? 'hover:border-accent hover:shadow-sm cursor-pointer group' : 'opacity-80 cursor-default'
              }`}
            >
              <div className="mt-0.5 p-2 bg-muted rounded-lg text-muted-foreground">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold text-foreground mb-1 leading-snug ${link.url !== '#' ? 'group-hover:text-accent transition-colors' : ''}`}>
                  {link.title}
                </h3>
                {link.url !== '#' && (
                  <span className="text-xs text-muted-foreground truncate block max-w-full">
                    {new URL(link.url).hostname}
                  </span>
                )}
              </div>
              {link.url !== '#' && (
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-50 group-hover:opacity-100" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
