import React, { useState , useEffect } from 'react';
import '../page/main.css';

const ToggleSwitch = (props)=>{
  const [isOn, setIsOn] = useState(0);

  useEffect(() => {
    setIsOn(props.isOn);
  }, [props.isOn]);

  console.log(props.isOn)
  const handleToggle = () => {
    setIsOn(isOn ? 0 : 1);
    props.handleToggle(isOn ? 0 : 1);
  };

  return (
    <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="switch-handle" />
    </div>
  );
}

export default ToggleSwitch;
