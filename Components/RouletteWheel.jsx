import React, { useState } from 'react';

const RouletteWheel = ({ data, selectedIndex, setSelectedIndex }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = (index) => {
    if (!isSpinning) {
      setIsSpinning(true);
      const count = data.length;
      const newIndex = index !== undefined ? index : Math.floor(Math.random() * count);
      
      const degrees = newIndex * (360 / count) + 90; // Add additional rotations for smoother animation
      
      const spinnerElement = document.querySelector('.spinner');
      if (spinnerElement) {
        spinnerElement.style.transition = 'transform 3s cubic-bezier(0.02, 0.75, 0.78, 0.95) 0s';
        spinnerElement.style.transform = `rotate(${degrees}deg)`;
      }
      setIsSpinning(false);
      
      setTimeout(() => {
        setSelectedIndex(newIndex);
      }, 3000); // Adjust the duration as needed
    }
  };

  const renderItems = () => {
    return data.map((item, index) => (
      <div
        key={index}
        className="item"
        style={{
          transform: `rotate(${index * (360 / data.length)}deg)`,
          borderTopColor: item.color,
          backgroundColor: item.color,
          backgroundImage: `url(${item.img})`, 
          zIndex: selectedIndex == index ? 100 : 0,
          opacity: selectedIndex == index ? 1 : 0.6,
          boxShadow: selectedIndex == index ? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" : 0,
        }}
      >
      </div>
    ));
  };

  return (
    <div className="roulette">
      <div className="shadow"></div>
      <div className="spinner">{renderItems()}</div>
      <div className="button" onClick={() => spin()}>
        <span>GIRAR</span>
      </div>
    </div>
  );
};

export default RouletteWheel;
