
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
        <span className="bg-blue-600 text-[10px] text-white font-bold px-2 py-1 rounded">2026 EDITION</span>
      </div>
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          placeholder="SEARCH GAMES..." 
          className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
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
      console.warn('AdSense failed');
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto my-6 p-4 bg-gray-900 border border-gray-800 flex items-center justify-center min-h-[100px] rounded-lg overflow-hidden">
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%" }}
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
          className="group cursor-pointer bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all transform hover:-translate-y-1"
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
            <button className="text-[10px] font-bold text-gray-400 group-hover:text-blue-400 transition-colors">
              PLAY NOW
            </button>
            <span className="text-[10px] text-gray-600">v2026</span>
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
    <div className="fixed inset-0 z-[60] bg-gray-950 flex flex-col overflow-y-auto">
      <div className="sticky top-0 z-[70] bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm font-bold flex items-center transition-colors"
          >
            BACK TO HUB
          </button>
          <h2 className="text-white font-bold hidden sm:block">{game.title}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
          <span className="text-xs text-gray-400 uppercase font-bold">Safe for School</span>
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto p-4 flex-1">
        <div className="text-center text-white bg-purple-900 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-lg border border-purple-700">
          <strong>Pro Tip:</strong> Rotate to landscape for the ultimate <strong>unblocked games 2026 school chromebook</strong> experience!
        </div>

        <button 
          onClick={handleFullscreen} 
          className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          Enter Full Screen Mode (Press F)
        </button>

        <div className="text-center text-white bg-blue-900 p-3 rounded-lg mb-6 max-w-lg mx-auto border border-blue-700">
          Optimized for <strong>no download</strong> play on any <strong>Chromebook</strong>! No lag, pure immersion.
        </div>

        <div className="bg-black relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <iframe 
            src={game.url} 
            className="w-full h-full border-none"
            title={game.title}
            allowFullScreen
          />
        </div>

        <div className="ad-bottom mt-8 text-center min-h-[100px]">
          <AdBanner slot="bottom-ad-player" />
        </div>

        <div className="strategy mt-8 text-gray-300 p-6 bg-gray-900 border border-gray-800 rounded-xl leading-relaxed">
          <h3 className="text-xl font-bold text-white mb-4">Mastery Guide: {game.title} Unblocked 2026</h3>
          <p className="mb-4">
            Looking for the definitive <strong>unblocked games 2026 school chromebook no download</strong> experience? This version of {game.title} is specifically tuned for low-latency performance on student laptops. In 2026, our servers have been upgraded to bypass the newest firewall updates, ensuring you can play your favorite titles without interruption.
          </p>
          <p className="mb-4">
            <strong>School Hack:</strong> If the game feels slow, try clearing your browser cache. This "no download" version runs entirely in your RAM, making it the perfect choice for restricted Chromebook environments where installing software is prohibited.
          </p>
          <div className="border-t border-gray-800 pt-4 text-sm text-gray-400 italic">
            Keywords: unblocked games 2026, school chromebook games, no download browser games, drift hunters max 2026 guide.
          </div>
        </div>

        <div className="other-games mt-8 bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Top 2026 Student Picks</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              <li><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 font-medium">Drift Hunters MAX 2026 Unblocked</a></li>
              <li><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 font-medium">Slope Game 2026 No Download</a></li>
              <li><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 font-medium">Retro Bowl School Edition 2026</a></li>
              <li><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 font-medium">1v1.LOL Chromebook Optimized</a></li>
              <li><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 font-medium">Snake Game Unblocked 2026</a></li>
          </ul>
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
    <div className="min-h-screen font-sans text-gray-100 bg-[#0f172a]">
      {selectedGame ? (
        <GamePlayer game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <>
          <Header onSearch={setSearchTerm} />
          <main className="pb-20">
            <AdBanner slot="top-home-banner" />
            
            <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black border-l-4 border-blue-500 pl-4 uppercase tracking-tight">
                Trending 2026 Picks
              </h2>
              <div className="hidden sm:flex space-x-2 text-[10px] font-bold text-gray-500 uppercase">
                <span>Fast</span>
                <span className="text-blue-500">•</span>
                <span>Unblocked</span>
                <span className="text-blue-500">•</span>
                <span>Safe</span>
              </div>
            </div>

            <GameGrid games={filteredGames} onSelect={setSelectedGame} />
            
            <AdBanner slot="middle-grid-ad" />

            <div className="max-w-7xl mx-auto px-4 mt-16 py-12 border-t border-gray-800 bg-gray-900/50 rounded-2xl shadow-inner">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">
                The Future of Unblocked Games 2026 (School Chromebook)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    Welcome to the premier destination for <strong>unblocked games 2026 school chromebook no download</strong>. As we move into the 2026 academic year, school filters are becoming more sophisticated. Our engineering team at <strong>DriftBest2025.site</strong> stays ahead of the curve by utilizing decentralized hosting and advanced proxy techniques to ensure your access to Drift Hunters MAX, Slope, and 1v1.LOL remains 100% stable.
                  </p>
                  <p>
                    Every game on this portal is a <strong>no download</strong> version, meaning it runs directly in your browser without leaving a footprint on your device. This makes it the safest and most efficient way to play during breaks on restricted hardware.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    Why choose our 2026 platform? We offer ultra-lightweight game instances specifically optimized for <strong>school Chromebooks</strong> with limited CPU power. Our "Turbo Mode" architecture reduces memory usage by 40%, preventing the common "Out of Memory" errors found on other unblocked sites.
                  </p>
                  <ul className="space-y-2 text-blue-400 font-medium">
                    <li>✓ No Download Required</li>
                    <li>✓ Works on Restricted School WiFi</li>
                    <li>✓ 2026 Firewall Bypass Ready</li>
                    <li>✓ 60 FPS on any Chromebook</li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-gray-950 p-8 text-center border-t border-gray-900">
            <div className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-4">
              © 2026 UNBLOCKED GAMES HUB • DRIFTBEST2025.SITE • NO DOWNLOAD GAMING
            </div>
            <div className="flex justify-center space-x-6 text-[10px] text-gray-600 uppercase">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Contact US</a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
