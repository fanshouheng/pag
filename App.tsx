import React, { useState, useCallback, useEffect } from 'react';
import { GameState, Pet } from './types';
import { EGG_SPRITE, CRACKED_EGG_SPRITE, PETS } from './data/sprites';
import PixelDisplay from './components/PixelDisplay';

const HATCH_THRESHOLD_MIN = 8;
const HATCH_THRESHOLD_MAX = 15;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [clicks, setClicks] = useState(0);
  const [targetClicks, setTargetClicks] = useState(10);
  const [currentPet, setCurrentPet] = useState<Pet | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  // Initialize random hatch target on mount or reset
  const initGame = useCallback(() => {
    const randomThreshold = Math.floor(Math.random() * (HATCH_THRESHOLD_MAX - HATCH_THRESHOLD_MIN + 1)) + HATCH_THRESHOLD_MIN;
    setTargetClicks(randomThreshold);
    setClicks(0);
    setGameState(GameState.IDLE);
    setCurrentPet(null);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleEggClick = () => {
    if (gameState === GameState.HATCHED) return;

    // Shake animation
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 200);

    const newClickCount = clicks + 1;
    setClicks(newClickCount);

    // Update state based on progress
    if (newClickCount >= targetClicks) {
      // Hatch logic
      setGameState(GameState.HATCHED);
      const randomPet = PETS[Math.floor(Math.random() * PETS.length)];
      setCurrentPet(randomPet);
    } else if (newClickCount >= Math.floor(targetClicks / 2)) {
        setGameState(GameState.HATCHING);
    }
  };

  // Determine which sprite to show
  let displayedSprite = EGG_SPRITE;
  if (gameState === GameState.HATCHED && currentPet) {
    displayedSprite = currentPet.sprite;
  } else if (gameState === GameState.HATCHING || (clicks > 0 && clicks % 2 === 0)) {
    // Show cracked sprite occasionally during tapping or when half-way
    displayedSprite = CRACKED_EGG_SPRITE;
  } else {
    displayedSprite = EGG_SPRITE;
  }

  // Dynamic Background
  const bgColor = currentPet ? currentPet.color : 'bg-[#e6e2d3]';

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-1000 ${bgColor} p-4`}>
      
      {/* Header */}
      <header className="absolute top-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-stone-700 uppercase mb-2">
            Pixel Hatch
        </h1>
        <p className="text-xs md:text-sm text-stone-500 font-mono">
          {gameState === GameState.HATCHED ? "孵化成功！" : "点击这颗蛋..."}
        </p>
      </header>

      {/* Main Interaction Area */}
      <main className="flex flex-col items-center justify-center space-y-12">
        
        {/* Sprite Container */}
        <div 
          className={`
            cursor-pointer transform transition-all select-none
            ${isShaking ? 'animate-pixel-shake' : ''}
            ${gameState === GameState.HATCHED ? 'animate-float' : ''}
            active:scale-95
          `}
          onClick={handleEggClick}
          role="button"
          aria-label={gameState === GameState.HATCHED ? "查看你的宠物" : "点击孵化"}
        >
          {/* 
            Scale Logic: 
            Mobile: 0.75rem per pixel (16 * 0.75 = 12rem = 192px)
            Desktop: 1.25rem per pixel (16 * 1.25 = 20rem = 320px)
          */}
          <PixelDisplay 
            data={displayedSprite} 
            className="md:scale-[2.0] scale-[1.5] origin-center shadow-none"
            scale={0.5} // Base unit size, scaled up by transform for crisp edges
          />
        </div>

        {/* Info / Stats */}
        <div className="h-24 flex items-center justify-center text-center">
          {gameState === GameState.HATCHED && currentPet ? (
            <div className="animate-fade-in-up space-y-2">
              <h2 className="text-xl font-bold text-stone-800">{currentPet.name}</h2>
              <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
                {currentPet.description}
              </p>
            </div>
          ) : (
            <div className="space-y-2 opacity-50">
               {clicks > 0 ? (
                 <div className="w-32 h-2 bg-stone-300 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-stone-500 transition-all duration-300"
                        style={{ width: `${Math.min((clicks / targetClicks) * 100, 100)}%` }}
                    />
                 </div>
               ) : (
                 <span className="text-stone-400 text-xs">Waiting...</span>
               )}
            </div>
          )}
        </div>

      </main>

      {/* Controls */}
      <footer className="absolute bottom-12">
        {gameState === GameState.HATCHED && (
          <button
            onClick={initGame}
            className="
              px-6 py-3 
              border-4 border-stone-700 
              bg-white text-stone-700 
              font-bold font-mono text-sm uppercase 
              hover:bg-stone-700 hover:text-white 
              transition-colors
              shadow-[4px_4px_0px_0px_rgba(41,37,36,1)]
              active:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)]
              active:translate-x-1 active:translate-y-1
            "
          >
            再次孵化
          </button>
        )}
      </footer>
    </div>
  );
};

export default App;