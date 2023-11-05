import React, { useState, useEffect } from 'react';
import './NameTypeAnimation.css';

const NameTypeAnimation = () => {
  const [name, setName] = useState('');
  const [showCircle, setShowCircle] = useState(false);
  const [circleSize, setCircleSize] = useState(10);
  const [backgroundColor, setBackgroundColor] = useState('1a1a1a'); // Initial background color

  const fullName = 'Pedro Marques'; // Replace with your name

  useEffect(() => {
    const interval = setInterval(() => {
      const len = name.length;
      if (len < fullName.length) {
        setName(fullName.slice(0, len + 1));
      } else {
        setShowCircle(true);
        clearInterval(interval);

        setTimeout(() => {
          // Expand the circle and change the background color
          setCircleSize(900); // Adjust the final size as needed
          setBackgroundColor('#1a1a1a'); // Replace with the desired color
          clearInterval(interval);
        }, 1000); // Adjust the delay as needed
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [name, fullName]);

  return (
    <div
      className="name-typing-loader"
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
      {showCircle && (
        <div
          className="circle"
          style={{
            width: circleSize + 'px',
            height: circleSize + 'px',
          }}
        ></div>
      )}
    </div>
  );
};

export default NameTypeAnimation;
