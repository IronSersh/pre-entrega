import React from 'react';
import List from './ItemLIst'

const Item = ()=>{

    const[counter, setCounter] = UseState(0)
    const creciente = () =>{
        setCounter(counter + 1)
    }
    const decreciente = () =>{
        setCounter(counter - 1)
    };
    <div>

    <h1>cantidad</h1>
    <List/>
    <h2>{counter}</h2>
    <button onClick={decreciente}>decrecer</button>
    <button onClick={creciente}>crecer</button>
    <p>precio:{}</p>
    </div>
}
export default Item