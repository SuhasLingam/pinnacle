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
    transform: 'perspective(1000px) rotateX(20deg)',
  };

  const sizeStyles = {
    large: {
      ...baseStyle,
      filter: 'drop-shadow(0 10px 0px #000)',
    },
    small: {
      ...baseStyle,
      filter: 'drop-shadow(0 5px 0px #000)',
    },
  };

  return (
    <div className={`${fontClass} whitespace-nowrap overflow-x-auto hide-scrollbar ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`
            ${size === 'large' ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-2xl md:text-3xl lg:text-4xl'}
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