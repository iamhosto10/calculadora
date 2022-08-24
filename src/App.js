import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './Componentes/Boton'
import Pantalla from './Componentes/Pantalla'
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {


  const [input, setInput] = useState('');

  const agregarInput = valor => { 
    setInput(input + valor);
  };

  const clearInput = () => {
    setInput("")
  };
  
  const resultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert(" no deje la cadena vacia");
    }
    
  };



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='Logo de Mcdonalds' 
        />

      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input={input}></Pantalla>
        <div className='fila'>
          <Boton manejarClic={ agregarInput }>1</Boton>
          <Boton manejarClic={ agregarInput }>2</Boton>
          <Boton manejarClic={ agregarInput }>3</Boton>
          <Boton manejarClic={ agregarInput }>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ agregarInput }>4</Boton>
          <Boton manejarClic={ agregarInput }>5</Boton>
          <Boton manejarClic={ agregarInput }>6</Boton>
          <Boton manejarClic={ agregarInput }>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ agregarInput }>7</Boton>
          <Boton manejarClic={ agregarInput }>8</Boton>
          <Boton manejarClic={ agregarInput }>9</Boton>
          <Boton manejarClic={ agregarInput }>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ resultado }>=</Boton>
          <Boton manejarClic={ agregarInput }>0</Boton>
          <Boton manejarClic={ agregarInput }>.</Boton>
          <Boton manejarClic={ agregarInput }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={clearInput}>Clear</BotonClear>
          {// <BotonClear manejarClic={aqui se puede colocar una funcion pequeña tipo flecha ejemplo ()=>setInput('')}>Clear</BotonClear>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
