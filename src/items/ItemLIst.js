import React ,{ UseState } from 'react';
import {Mouse} from 'mouse.jpg'
import {teclado} from 'teclado.jpg'
import {monitor} from 'monitor.jpg'

const list = (producto)=>{
    const[counter, setCounter] = UseState(0)
    const creciente = () =>{
        setCounter(counter + 1)
    }
    const decreciente = () =>{
        setCounter(counter - 1)
    };
    return(
        <>
        <Link to={{pathname:`/${producto.id}`}}>
        
              <div className="lista">
        <img src={Mouse}/>
        <p>mause</p>
        <h1>cantidad</h1>
        <h2>{counter}</h2>
        <button onClick={decreciente}>decrecer</button>
        <button onClick={creciente}>crecer</button>
    </div>;
    </Link>
    <Link to={{pathname:`/${producto.id}`}}>
    <div className="lista">
        <img src={teclado}/>
        <p>teclado</p>
        <h1>cantidad</h1>
        <h2>{counter}</h2>
        <button onClick={decreciente}>decrecer</button>
        <button onClick={creciente}>crecer</button>
    </div>;
    </Link>
    <Link to={{pathname:`/${producto.id}`}}>
    <div className="lista">
        <img src={monitor}/>
        <p>monitor</p>
        <h1>cantidad</h1>
        <h2>{counter}</h2>
        <button onClick={decreciente}>decrecer</button>
        <button onClick={creciente}>crecer</button>
    </div>
    </Link>
        </>
    );
}

export default list