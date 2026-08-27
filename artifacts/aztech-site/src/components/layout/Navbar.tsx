import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useI18n, Language } from '@/lib/i18n';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [location] = useLocation();
  const { lang, setLang, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isGazstao = location === '/gazstao';
  const isHome = location === '/' || location === '/solucoes';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/solucoes', label: t.nav.home },
    { href: '/links', label: t.nav.links },
    { href: '/projects', label: t.nav.projects },
    { href: '/sobre', label: t.nav.about },
    { href: '/gazstao', label: t.nav.gazstao },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  if (isGazstao) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center text-[#00ff00] font-mono">
        <div>
          <Link href="/solucoes" className="hover:text-white transition-colors duration-300">
            [return_to_base]
          </Link>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Globe className="w-3.5 h-3.5 opacity-70" />
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-1.5 py-1 border transition-colors ${lang === l.code ? 'border-[#00ff00] text-white' : 'border-transparent opacity-60 hover:opacity-100'}`}
              aria-label={`Switch language to ${l.label}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-mono ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-background/65 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/solucoes" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-accent text-accent flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <div className="w-3 h-3 bg-accent" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            AZTECH<span className="text-accent">_</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-xs font-medium uppercase tracking-wider transition-colors hover:text-accent relative ${
                  (link.href === '/solucoes' ? isHome : location === link.href) ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {(link.href === '/solucoes' ? isHome : location === link.href) && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-l border-border pl-6">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-1">
              {langs.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                    className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                     lang === l.code ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background flex flex-col pt-24 px-6 pb-6 md:hidden font-mono"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium uppercase tracking-wider transition-colors ${
                    (link.href === '/solucoes' ? isHome : location === link.href) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                <Globe className="w-4 h-4" /> Language
              </span>
              <div className="flex gap-2">
                {langs.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                      className={`text-sm font-semibold px-3 py-1.5 rounded transition-colors ${
                       lang === l.code ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
