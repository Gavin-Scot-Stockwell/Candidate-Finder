/*
import React, { useState } from 'react';

interface HoverProps {
  children: React.ReactNode;
  hoverStyle: React.CSSProperties;
  defaultStyle: React.CSSProperties;
  tooltipText?: string;
  tooltipStyle?: React.CSSProperties;
}

const Hover: React.FC<HoverProps> = ({ children, hoverStyle, defaultStyle, tooltipText, tooltipStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? hoverStyle : defaultStyle}
    >
      {children}
      {isHovered && tooltipText && (
        <div style={tooltipStyle}>
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Hover;
*/