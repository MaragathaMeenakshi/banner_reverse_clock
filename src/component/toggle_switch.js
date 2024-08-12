import React, { useState } from 'react';
import '../page/main.css';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="switch-handle" />
    </div>
  );
}

export default ToggleSwitch;
