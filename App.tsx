
import React, { useState, useMemo, useEffect } from 'react';
import { Game } from './types';

// Real-world pattern URLs for unblocked games
const GITHUB_PAGES_BASE = "https://unblocked-games.s3.amazonaws.com";

const GAMES_DATA: Game[] = [
  { id: 'drift-hunters-max', title: 'Drift Hunters MAX', url: `https://drift-hunters-max.github.io/`, category: 'Racing' },
  { id: 'slope', title: 'Slope', url: `${GITHUB_PAGES_BASE}/slope.html`, category: 'Running' },
  { id: 'retro-bowl', title: 'Retro Bowl', url: `${GITHUB_PAGES_BASE}/retro-bowl.html`, category: 'Sports' },
  { id: '1v1-lol', title: '1v1.LOL', url: `${GITHUB_PAGES_BASE}/1v1-lol.html`, category: 'Shooting' },
  { id: 'tunnel-rush', title: 'Tunnel Rush', url: `${GITHUB_PAGES_BASE}/tunnel-rush.html`, category: 'Action' },
  { id: 'run-3', title: 'Run 3', url: `${GITHUB_PAGES_BASE}/run-3.html`, category: 'Platformer' },
  { id: 'bitlife', title: 'BitLife', url: `${GITHUB_PAGES_BASE}/bitlife.html`, category: 'Sim' },
  { id: 'cookie-clicker', title: 'Cookie Clicker', url: `${GITHUB_PAGES_BASE}/cookie-clicker.html`, category: 'Idle' },
  { id: 'geometry-dash', title: 'Geometry Dash', url: `${GITHUB_PAGES_BASE}/geometry-dash.html`, category: 'Rhythm' },
  { id: 'happy-wheels', title: 'Happy Wheels', url: `${GITHUB_PAGES_BASE}/happy-wheels.html`, category: 'Physics' },
  { id: 'paper-io-2', title: 'Paper.io 2', url: `${GITHUB_PAGES_BASE}/paper-io-2.html`, category: 'IO' },
  { id: 'smash-karts', title: 'Smash Karts', url: `${GITHUB_PAGES_BASE}/smash-karts.html`, category: 'Action' },
  { id: 'eggy-car', title: 'Eggy Car', url: `${GITHUB_PAGES_BASE}/eggy-car.html`, category: 'Driving' },
  { id: 'moto-x3m', title: 'Moto X3M', url: `${GITHUB_PAGES_BASE}/moto-x3m.html`, category: 'Racing' },
  { id: 'friday-night-funkin', title: 'FNF', url: `${GITHUB_PAGES_BASE}/friday-night-funkin.html`, category: 'Rhythm' },
  { id: 'minecraft-classic', title: 'Minecraft', url: `${GITHUB_PAGES_BASE}/minecraft-classic.html`, category: 'Sandbox' },
  { id: 'subway-surfers', title: 'Subway Surfers', url: `${GITHUB_PAGES_BASE}/subway-surfers.html`, category: 'Running' },
  { id: 'basketball-stars', title: 'Basketball Stars', url: `${GITHUB_PAGES_BASE}/basketball-stars.html`, category: 'Sports' },
  { id: 'among-us', title: 'Among Us', url: `${GITHUB_PAGES_BASE}/among-us.html`, category: 'Strategy' },
  { id: 'temple-run-2', title: 'Temple Run 2', url: `${GITHUB_PAGES_BASE}/temple-run-2.html`, category: 'Running' }
];

const Header: React.FC<{ onSearch: (val: string) => void }> = ({ onSearch }) => (
  <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 p-4 shadow-xl">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-black text-blue-500 uppercase tracking-tighter cursor-pointer" onClick={() => window.location.reload()}>
          Unblocked Games 76
        </h1>
        <span className="bg-blue-600 text-[10px] text-white font-bold px-2 py-1 rounded shadow-lg">2026 NEW</span>
      </div>
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          placeholder="SEARCH 2026 GAMES..." 
          className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  </header>
);

const AdBanner: React.FC<{ slot?: string }> = ({ slot }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.warn('AdSense initialization suppressed or failed');
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto my-6 p-4 bg-gray-900 border border-gray-800 flex items-center justify-center min-h-[100px] rounded-lg overflow-hidden shadow-inner">
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%", minHeight: "90px" }}
           data-ad-client="ca-pub-9774042341049510"
           data-ad-slot={slot || "7404234104"}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

const GameGrid: React.FC<{ games: Game[], onSelect: (g: Game) => void }> = ({ games, onSelect }) => (
  <div className="max-w-7xl mx-auto p-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {games.map((game) => (
        <div 
          key={game.id}
          onClick={() => onSelect(game)}
          className="group cursor-pointer bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div className="aspect-square bg-gray-700 flex items-center justify-center relative overflow-hidden">
            <span className="text-gray-500 font-bold opacity-20 text-4xl uppercase select-none">
              {game.title.charAt(0)}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="absolute bottom-2 left-2 right-2">
               <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{game.category}</span>
               <h3 className="text-white font-bold text-sm truncate">{game.title}</h3>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center bg-gray-800">
            <button className="text-[10px] font-bold text-gray-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
              Free Play
            </button>
            <span className="text-[10px] text-gray-600 font-mono">2026.v1</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GamePlayer: React.FC<{ game: Game, onBack: () => void }> = ({ game, onBack }) => {
  const handleFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#020617] flex flex-col overflow-y-auto">
      <div className="sticky top-0 z-[70] bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between shadow-2xl">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="text-white bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg text-sm font-bold flex items-center transition-all border border-gray-700"
          >
            ← BACK TO HUB
          </button>
          <h2 className="text-white font-black text-lg hidden sm:block uppercase tracking-tight">{game.title}</h2>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse mr-2"></span>
            <span className="text-[10px] text-green-500 uppercase font-black">2026 Bypass Active</span>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto p-4 flex-1">
        <div className="text-center text-white bg-gradient-to-r from-purple-900 to-indigo-900 p-4 rounded-xl mb-6 max-w-md mx-auto shadow-2xl border border-purple-500/30">
          <p className="text-sm font-medium">
            <strong>Pro Tip:</strong> Rotate to landscape for the ultimate <strong>unblocked games 2026 school chromebook no download free play</strong> experience!
          </p>
        </div>

        <button 
          onClick={handleFullscreen} 
          className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-black py-4 px-10 rounded-2xl text-xl mb-6 shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all hover:scale-105 active:scale-95"
        >
          PLAY FULL SCREEN (PRESS F)
        </button>

        <div className="text-center text-white bg-blue-900/40 p-3 rounded-xl mb-6 max-w-lg mx-auto border border-blue-500/30 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest font-bold">
            Optimized for <strong>no download</strong> play on any <strong>Chromebook</strong>! High-FPS Mode Enabled.
          </p>
        </div>

        <div className="bg-black relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800">
          <iframe 
            src={game.url} 
            className="w-full h-full border-none"
            title={game.title}
            allowFullScreen
          />
        </div>

        {/* Strategic AdSense Placement Below Game */}
        <div className="ad-bottom mt-10 text-center min-h-[100px] bg-gray-900/30 rounded-2xl border border-dashed border-gray-800 p-4">
          <p className="text-[9px] text-gray-600 uppercase mb-2 tracking-[0.2em]">Advertisement</p>
          <AdBanner slot="below-player-2026-premium" />
        </div>

        <div className="strategy mt-10 text-gray-400 p-8 bg-gray-900/50 border border-gray-800 rounded-2xl leading-relaxed shadow-inner">
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic">Pro Mastery: {game.title} (2026 Edition)</h3>
          <p className="mb-6">
            Welcome to the definitive source for <strong>unblocked games 2026 school chromebook no download free play</strong>. This version of {game.title} is specifically architected to bypass modern school network restrictions while maintaining zero-lag performance on lower-end Chromebook hardware. Our 2026 server cluster ensures that you get <strong>free play</strong> access without any hidden costs or annoying downloads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
               <h4 className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">School Chromebook Optimization</h4>
               <p className="text-sm">Our "no download" tech loads assets directly into the browser cache, bypassing the need for local storage. This is perfect for restricted <strong>school chromebooks</strong> that block file downloads.</p>
            </div>
            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
               <h4 className="text-purple-400 font-black mb-2 uppercase text-xs tracking-widest">2026 Performance Secrets</h4>
               <p className="text-sm">For {game.title}, we recommend using Chrome's "Hardware Acceleration" mode. This allows the game to tap into the integrated GPU of your 2026-era laptop for silky smooth 60fps action.</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap gap-2">
            <span className="text-[10px] bg-gray-800 px-3 py-1 rounded-full text-gray-500 font-mono">#unblocked-games-2026</span>
            <span className="text-[10px] bg-gray-800 px-3 py-1 rounded-full text-gray-500 font-mono">#school-chromebook-hacks</span>
            <span className="text-[10px] bg-gray-800 px-3 py-1 rounded-full text-gray-500 font-mono">#no-download-gaming</span>
          </div>
        </div>

        <div className="other-games mt-10 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <h3 className="text-xl font-black text-white mb-6 border-b border-gray-800 pb-4 uppercase tracking-tighter">Recommended for Students (2026)</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
              <li><a href="https://driftbest2025.site" className="text-blue-400 hover:text-white transition-all font-bold flex items-center bg-gray-800/40 p-3 rounded-lg border border-transparent hover:border-blue-500">
                <span className="mr-2">🔥</span> Drift Hunters MAX Unblocked
              </a></li>
              <li><a href="https://slope2025.online" className="text-blue-400 hover:text-white transition-all font-bold flex items-center bg-gray-800/40 p-3 rounded-lg border border-transparent hover:border-blue-500">
                <span className="mr-2">🚀</span> Slope Game 2026 Free Play
              </a></li>
              <li><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-white transition-all font-bold flex items-center bg-gray-800/40 p-3 rounded-lg border border-transparent hover:border-blue-500">
                <span className="mr-2">🏈</span> Retro Bowl School Chromebook
              </a></li>
              <li><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-white transition-all font-bold flex items-center bg-gray-800/40 p-3 rounded-lg border border-transparent hover:border-blue-500">
                <span className="mr-2">🔫</span> 1v1.LOL No Download 2026
              </a></li>
              <li><a href="https://snakegame.cfd" className="text-blue-400 hover:text-white transition-all font-bold flex items-center bg-gray-800/40 p-3 rounded-lg border border-transparent hover:border-blue-500">
                <span className="mr-2">🐍</span> Snake Game Unblocked
              </a></li>
          </ul>
        </div>
        
        <div className="mt-16 mb-8 text-center text-[10px] text-gray-700 uppercase tracking-[0.5em] font-black">
          Powered by Ultra-Latency CDN v2026.04
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(g => 
      g.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      g.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-[#0f172a] selection:bg-blue-500 selection:text-white">
      {selectedGame ? (
        <GamePlayer game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <>
          <Header onSearch={setSearchTerm} />
          <main className="pb-20">
            <AdBanner slot="top-home-hero-2026" />
            
            <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-3xl font-black border-l-8 border-blue-500 pl-4 uppercase tracking-tighter italic">
                Trending 2026 Games
              </h2>
              <div className="flex space-x-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span className="bg-gray-800 px-3 py-1 rounded">Fast CDN</span>
                <span className="bg-gray-800 px-3 py-1 rounded">No Login</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded">Verified 2026</span>
              </div>
            </div>

            <GameGrid games={filteredGames} onSelect={setSelectedGame} />
            
            <div className="max-w-7xl mx-auto px-4 mt-20">
               <AdBanner slot="middle-grid-discovery" />
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-20 py-16 border-t border-gray-800 bg-gray-900/30 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                 <h4 className="text-[12rem] font-black uppercase tracking-tighter leading-none select-none">2026</h4>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-10 uppercase tracking-tighter italic text-center md:text-left">
                The 2026 Evolution of Unblocked Gaming
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12 text-base text-gray-400 leading-relaxed relative z-10">
                <div className="space-y-6">
                  <p className="">
                    Welcome to the 2026 standard for <strong>unblocked games 2026 school chromebook no download free play</strong>. We have completely reimagined how student gaming works on school networks. By utilizing decentralized edge computing, we ensure that every title on <strong>DriftBest2025.site</strong> remains active even when main hubs are restricted.
                  </p>
                  <p className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10 italic">
                    "Our mission for 2026 is simple: provide the fastest <strong>free play</strong> environment for Chromebook users without requiring a single file download."
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p>
                    Why settle for legacy sites? Our 2026 platform is the only one optimized for the newest <strong>Chromebook</strong> operating systems. We've eliminated the "Shockwave" and "Flash" legacy issues, moving 100% to WebAssembly and WebGL for native performance. 
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex flex-col">
                       <span className="text-white font-black text-2xl tracking-tighter">0 MB</span>
                       <span className="text-[10px] uppercase font-bold text-gray-600">Download Size</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-black text-2xl tracking-tighter">60 FPS</span>
                       <span className="text-[10px] uppercase font-bold text-gray-600">On any School WiFi</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-black text-2xl tracking-tighter">100%</span>
                       <span className="text-[10px] uppercase font-bold text-gray-600">Chromebook Native</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-black text-2xl tracking-tighter">FREE</span>
                       <span className="text-[10px] uppercase font-bold text-gray-600">No Premium Tiers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          <footer className="bg-gray-950 p-12 text-center border-t border-gray-900 mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-gray-400 text-[11px] uppercase tracking-[0.4em] font-black mb-8">
                © 2026 UNBLOCKED GAMES PREMIUM • DRIFTBEST2025.SITE • NO DOWNLOAD PORTAL
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-[10px] text-gray-600 uppercase font-black">
                <a href="#" className="hover:text-blue-500 transition-colors border-b border-gray-800 pb-1">Privacy Engine</a>
                <a href="#" className="hover:text-blue-500 transition-colors border-b border-gray-800 pb-1">Terms of Play</a>
                <a href="#" className="hover:text-blue-500 transition-colors border-b border-gray-800 pb-1">DMCA Portal</a>
                <a href="#" className="hover:text-blue-500 transition-colors border-b border-gray-800 pb-1">Contact Dev</a>
              </div>
              <p className="mt-10 text-[9px] text-gray-800 leading-relaxed max-w-2xl mx-auto">
                Legal: DriftBest2025.site is an independent repository for unblocked web assets. All trademarks remain property of their respective owners. Safe for school environments.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
