import React from 'react';
import { useLocation } from 'wouter';

export function Footer() {
  const [location] = useLocation();
  const isGazstao = location === '/gazstao';

  return (
    <footer className={`border-t py-12 mt-auto ${isGazstao ? 'border-[#00ff00]/35 bg-black text-[#00ff00] font-mono' : 'border-border bg-background'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-6 md:grid-cols-[1.15fr_1fr_auto] items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-7 h-7 rounded-sm flex items-center justify-center ${isGazstao ? 'border border-[#00ff00]' : 'bg-foreground'}`}>
              <div className={`w-3 h-3 rounded-sm ${isGazstao ? 'bg-[#00ff00]' : 'bg-accent'}`} />
            </div>
            <span className={`font-semibold ${isGazstao ? 'text-[#00ff00]' : 'text-foreground'}`}>Aztech Alta Tecnologia</span>
          </div>
          <p className={`text-sm leading-relaxed max-w-sm ${isGazstao ? 'text-[#00ff00]/75' : 'text-muted-foreground'}`}>
            Manutenção de Equipamentos de Medicina Nuclear, Workstations e Cibersegurança – desde 1998
          </p>
        </div>
        <div className={`text-sm leading-7 ${isGazstao ? 'text-[#00ff00]/75' : 'text-muted-foreground'}`}>
          <a href="mailto:sac@aztechtecnologia.com.br" className={`${isGazstao ? 'text-[#00ff00] hover:text-white' : 'text-foreground hover:text-accent'} transition-colors`}>
            sac@aztechtecnologia.com.br
          </a>
          <p>Rua Vicente Spisla, 238 casa 4<br />Curitiba - PR - CEP: 82640-620</p>
        </div>
        <div className={`text-sm font-medium md:text-right ${isGazstao ? 'text-[#00ff00]/75' : 'text-muted-foreground'}`}>
          <p>by <span className={isGazstao ? 'text-[#00ff00]' : 'text-foreground'}>Gazstao</span></p>
          <p className="mt-2 text-xs">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
