import React, { useEffect, useContext } from 'react';
import { initSocket, disconnectSocket, setBg, subscribeToBg } from './services';
import ColorContext from './context/ColorContext';
import ColorField from './components/ColorField/ColorField';
import ColorChanger from './components/ColorChanger/ColorChanger';
import styles from './App.module.css';



function App() {
  const { color, setColor } = useContext(ColorContext);
  useEffect(() => {
    initSocket();
    subscribeToBg(bg => {
      setColor(bg);
    })
    return () => disconnectSocket();
  }, [setColor]);

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
    setBg(e.target.value);
  }

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <ColorField color={color} />
      <ColorChanger colorChangeHandler={colorChangeHandler} color={color} />
    </div>
  );
}

export default App;
