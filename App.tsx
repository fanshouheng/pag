import React, { useState, useCallback, useEffect } from 'react';
import { GameState, Pet } from './types';
import { EGG_SPRITE, CRACKED_EGG_SPRITE, QUESTION_MARK_SPRITE, PETS } from './data/sprites';
import PixelDisplay from './components/PixelDisplay';

const HATCH_THRESHOLD_MIN = 8;
const HATCH_THRESHOLD_MAX = 15;
const STORAGE_KEY = 'pixel_hatch_collection';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [clicks, setClicks] = useState(0);
  const [targetClicks, setTargetClicks] = useState(10);
  const [currentPet, setCurrentPet] = useState<Pet | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [unlockedPets, setUnlockedPets] = useState<string[]>([]);
  const [showLibrary, setShowLibrary] = useState(false);

  // Load collection from local storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUnlockedPets(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved pets", e);
      }
    }
  }, []);

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
      
      // Save to collection if not already unlocked
      if (!unlockedPets.includes(randomPet.id)) {
        const newCollection = [...unlockedPets, randomPet.id];
        setUnlockedPets(newCollection);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCollection));
      }
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
  const progressPercent = Math.min((clicks / targetClicks) * 100, 100);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-1000 ${bgColor} p-4 relative`}>
      
      {/* Header */}
      <header className="absolute top-8 text-center w-full px-4 flex justify-center items-center relative">
        <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-stone-700 uppercase mb-2">
                Pixel Hatch
            </h1>
            <p className="text-xs md:text-sm text-stone-500 font-mono">
            {gameState === GameState.HATCHED ? "孵化成功！" : "点击这颗蛋..."}
            </p>
        </div>
        
        {/* Library Button */}
        <button 
            onClick={() => setShowLibrary(true)}
            className="absolute right-4 top-2 md:right-8 md:top-4 p-2 bg-white border-2 border-stone-700 hover:bg-stone-100 transition-colors"
            title="宠物图鉴"
        >
            <span className="text-xs font-bold text-stone-700 block">📚 图鉴</span>
        </button>
      </header>

      {/* Main Interaction Area */}
      <main className="flex flex-col items-center justify-center space-y-12 w-full max-w-md">
        
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
        <div className="h-24 flex items-center justify-center text-center w-full">
          {gameState === GameState.HATCHED && currentPet ? (
            <div className="animate-fade-in-up space-y-2">
              <h2 className="text-xl font-bold text-stone-800">{currentPet.name}</h2>
              <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
                {currentPet.description}
              </p>
            </div>
          ) : (
            <div className="space-y-3 w-full flex flex-col items-center">
               <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
                 <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">Incubation Progress</span>
                 {/* Retro Block Progress Bar */}
                 <div className="w-full h-6 border-4 border-stone-700 bg-white p-1">
                    <div 
                        className="h-full bg-stone-700 transition-all duration-200 ease-steps"
                        style={{ width: `${progressPercent}%` }}
                    />
                 </div>
               </div>
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

      {/* Library Modal */}
      {showLibrary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#f5f5f4] border-4 border-stone-800 p-6 w-full max-w-lg shadow-[8px_8px_0px_0px_rgba(41,37,36,1)] relative max-h-[90vh] overflow-y-auto">
                <button 
                    onClick={() => setShowLibrary(false)}
                    className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 font-bold text-xl"
                >
                    ✕
                </button>
                
                <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center tracking-widest uppercase border-b-4 border-stone-200 pb-4">
                    宠物图鉴 ({unlockedPets.length}/{PETS.length})
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {PETS.map(pet => {
                        const isUnlocked = unlockedPets.includes(pet.id);
                        return (
                            <div key={pet.id} className={`flex flex-col items-center p-4 border-2 ${isUnlocked ? 'border-stone-300 bg-white' : 'border-dashed border-stone-300 bg-stone-100'} rounded-lg transition-all`}>
                                <div className="mb-4 transform scale-75 md:scale-100">
                                    <PixelDisplay 
                                        data={isUnlocked ? pet.sprite : QUESTION_MARK_SPRITE} 
                                        scale={0.25}
                                    />
                                </div>
                                <div className="text-center">
                                    <p className={`font-bold text-xs md:text-sm ${isUnlocked ? 'text-stone-800' : 'text-stone-400'}`}>
                                        {isUnlocked ? pet.name : '???'}
                                    </p>
                                    {isUnlocked && (
                                        <p className="text-[10px] text-stone-500 mt-1 hidden md:block">
                                            {pet.description.substring(0, 10)}...
                                        </p>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-8 text-center">
                    <button 
                         onClick={() => setShowLibrary(false)}
                         className="px-4 py-2 bg-stone-700 text-white font-mono text-xs uppercase hover:bg-stone-800"
                    >
                        关闭
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;