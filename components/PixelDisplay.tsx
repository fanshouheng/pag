import React from 'react';
import { SpriteData } from '../types';

interface PixelDisplayProps {
  data: SpriteData;
  scale?: number;
  className?: string;
}

const PixelDisplay: React.FC<PixelDisplayProps> = ({ data, scale = 1, className = '' }) => {
  const size = data.length;

  return (
    <div 
      className={`inline-grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        width: `${size * scale}rem`, 
        height: `${size * scale}rem`,
      }}
    >
      {data.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{ backgroundColor: color || 'transparent' }}
            className="w-full h-full"
          />
        ))
      )}
    </div>
  );
};

export default PixelDisplay;