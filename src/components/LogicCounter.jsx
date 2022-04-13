import { useState } from "react";
import { Button } from "./Button";
import { CounterScreen } from "./CounterScreen";
import  ButtonStyle  from  '../styles/ButtonStyle.css';
import CounterScreenStyle from '../styles/CounterScreenStyle.css';

export const LogicCounter = () => {
const [ numClicks, setnumClicks ] = useState(0);

  const handlerClick = () => {
    setnumClicks(numClicks + 1);
  };
  const resetCounter = () => {
    setnumClicks(0);
  };

  return (
    <>
      <h1>COUNTER CLICK</h1>
    <div className="main-container">
    <CounterScreen
      numClicks={numClicks}
    />
      <Button 
      texto="Click" 
      isBotonClick={true} 
      handlerClick={handlerClick} />
      <Button
        texto="Reiniciar"
        isBotonClick={false}
        handlerClick={resetCounter} />
    </div>
    
    </>
  );
};
