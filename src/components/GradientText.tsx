import { CSSProperties } from 'react';

interface GradientTextProps {
  text: string;
  size: "large" | "small";
  className?: string;
  fontClass: string;
}

export const GradientText = ({ text, size, className = "", fontClass }: GradientTextProps) => {
  const baseStyle: CSSProperties = {
    background: `linear-gradient(90deg, #FF9500 0%, #D85EFF 50%, #AE79FF 75%, #5271FF 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    transform: 'perspective(500px) rotateX(10deg)',
  };

  const sizeStyles = {
    large: {
      ...baseStyle,
      filter: 'drop-shadow(8px 8px 2px #000000)',
    },
    small: {
      ...baseStyle,
      filter: 'drop-shadow(6px 6px 2px #000000)',
    },
  };

  return (
    <div className={`${fontClass} whitespace-nowrap overflow-x-auto hide-scrollbar ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`
            ${size === 'large' ? 'text-4xl md:text-6xl lg:text-8xl' : 'text-xl md:text-2xl lg:text-4xl'}
            tracking-wider relative inline-block
          `}
          style={sizeStyles[size]}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}; 