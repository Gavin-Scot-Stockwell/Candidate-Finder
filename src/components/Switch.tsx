import React, { useState } from 'react';
//import userTemp from '../styles/userTemp';

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={handleToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      //style={isHovered ? userTemp.switchHover : userTemp.switch}
    >
      <div style={{
        width: '40px',
        height: '20px',
        background: isOn ? 'green' : 'grey',
        borderRadius: '20px',
        position: 'relative',
        transition: 'background 0.3s'
      }}>
        <div style={{
          width: '18px',
          height: '18px',
          background: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: '1px',
          left: isOn ? '20px' : '2px',
          transition: 'left 0.3s'
        }} />
      </div>
      {isHovered && (
        <div >
          {isOn ? 'Switch is ON' : 'Switch is OFF'}
        </div>
      )}
    </div>
  );
};
//style={userTemp.tooltip}
export default Switch;