import React, { useState } from 'react';
import './App.css';

function App() {
  const [ valor, setValor ] = useState([]);

  function calculate(){
    const qtdImg = document.querySelector('input');

    if(qtdImg.value == ''){
      alert('CAMPO VAZIO');

      return;
    }

    setValor([Math.floor(Math.random() * qtdImg.value + 1)]);
  }

  function clear(){
    const qtdImg = document.querySelector('input');

    qtdImg.value = ''

    setValor('');
  }

  return (
    <div className='center'>
      <div className='mainText'>
        <h1>Digite um numero</h1>
        <h2>Resultado: {valor}</h2>
      </div>
      <div className='inputs'>
        <input className='inputContent' type='text' placeholder='Digite um numero ?'/>

        <div className='buttons' >
          <button
            onClick={calculate}
            >Clique Para calcular</button>
          <button 
            onClick={clear}
            >Limpar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
