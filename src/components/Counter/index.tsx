import React from 'react';
import style from "./style.module.css";

interface Props {
  nameCounter: string,
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>> | VoidFunction
}

const Counter = (props:Props) => {
  return (
    <div className={style.counter} >
      <p>{props.counter}</p>
      <p>{props.nameCounter}</p>
      <div className={style.buttonsBlock}>
        <button onClick={() => props.setCounter(props.counter + 1)}>+</button>
        <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
      </div>
    </div>
  )
} 

export default React.memo(Counter)