
import React, { useState, useMemo } from 'react';
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
        <span className="bg-blue-600 text-[10px] text-white font-bold px-2 py-1 rounded">2025 NEW</span>
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

const AdBanner: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto my-6 p-10 bg-gray-800 border border-dashed border-gray-700 flex items-center justify-center text-gray-500 rounded-lg">
    <span className="font-mono text-sm">[ ADVERTISEMENT PLACEHOLDER ]</span>
  </div>
);

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
            <span className="text-[10px] text-gray-600">v2.5</span>
          </div>
        </div>
      ))}
    </div>
    {games.length === 0 && (
      <div className="text-center py-20 text-gray-500">
        NO GAMES FOUND. TRY ANOTHER SEARCH.
      </div>
    )}
  </div>
);

const GamePlayer: React.FC<{ game: Game, onBack: () => void }> = ({ game, onBack }) => (
  <div className="fixed inset-0 z-[60] bg-gray-950 flex flex-col overflow-y-auto">
    <div className="sticky top-0 z-[70] bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
          className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm font-bold flex items-center transition-colors"
        >
          BACK TO GAMES
        </button>
        <h2 className="text-white font-bold hidden sm:block">{game.title}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
        <span className="text-xs text-gray-400 uppercase font-bold">Live Server</span>
      </div>
    </div>
    
    <div className="w-full max-w-6xl mx-auto p-4 flex-1">
      <div className="bg-black relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        <iframe 
          src={game.url} 
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
        />
      </div>

      {/* SEO & Strategy Section */}
      <div className="strategy mt-8 text-gray-300 p-6 bg-gray-800 rounded-lg shadow-inner border border-gray-700 leading-relaxed">
        <p className="mb-4">
          If the original isn't enough, <strong>Drift Hunters MAX Unblocked 2025</strong> is your upgrade. This specific variant offers more track selections and unlocks premium supercars faster. Compared to the main site, this version focuses on the "Best" experience, with optimized grip physics making the drifting feel heavier and more realistic.
        </p>
        <p className="border-t border-gray-700 pt-4 font-medium">
          <span className="text-blue-400 font-bold uppercase mr-2">Advanced Play:</span>
          This version often includes hidden or special tracks like complex Docks or Mountain passes. Use the Handbrake (Space) to initiate, but master "Feathering the Throttle" (tapping W) to maintain the perfect angle. For players chasing the ultimate drift score without downloading heavy clients, this site offers pure driving pleasure.
        </p>
      </div>

      {/* Internal Linking Section */}
      <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
            <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
            <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
            <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
            <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
        </ul>
      </div>
      
      <div className="mt-12 mb-8 text-center text-xs text-gray-600 uppercase tracking-widest font-mono">
        Running stable instance of {game.title} unblocked v.2025.03
      </div>
    </div>
  </div>
);

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
    <div className="min-h-screen font-sans text-gray-100 bg-[#111827]">
      {selectedGame ? (
        <GamePlayer game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <>
          <Header onSearch={setSearchTerm} />
          <main className="pb-20">
            <AdBanner />
            <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-3">TRENDING NOW</h2>
              <span className="text-xs text-gray-500 uppercase tracking-tighter">Updated: March 2025</span>
            </div>
            <GameGrid games={filteredGames} onSelect={setSelectedGame} />
            
            <div className="max-w-7xl mx-auto px-4 mt-12 py-8 border-t border-gray-800">
              <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase">About Unblocked Games 76 - 2025 Edition</h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
                Welcome to the ultimate hub for Unblocked Games 76 in 2025. Our platform provides high-performance access to popular web games including Drift Hunters MAX, Slope, and 1v1.LOL. Designed with a crash-resistant single-page architecture, we ensure maximum uptime and zero redirection. All games are served via stable CDNs and private S3 buckets to bypass restrictive filters. Enjoy a seamless gaming experience without the need for additional plugins or complex routing.
              </p>
            </div>
          </main>
          <footer className="bg-gray-950 p-6 text-center border-t border-gray-900 text-gray-600 text-[10px] uppercase tracking-widest">
            © 2025 UNBLOCKED GAMES 76 NEW • DRIFTBEST2025.SITE • ALL RIGHTS RESERVED
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
