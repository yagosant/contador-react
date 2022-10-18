import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  //criando o estado, onde sempre é um array
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState({
    input1:'',
    input2:''
  });

  //const inputRef = useRef(0);
  
  function funcaoContador(tipo: 'aumentar' | 'diminuir') {
    if(tipo === 'aumentar') setContador(contador + 1);
    if(tipo === 'diminuir' && contador > 0) setContador(contador - 1);
    
  }

  function handleInput(event:ChangeEvent, key: string) {
    //... values - spread, traz os valores q já existiam antes 
    setInput(values => ({...values, [key]:(event.target as HTMLInputElement).value}));
    
  }

  //efeitos colaterais, função de callback, array de dependencias
  useEffect(()=>{
    if(contador === 10) alert("clicou 10 vezes, vc é o bixão heim");
   // if(input.input1.length === 4) inputRef.current?.focus();
  }, [contador]);


  return (
    <div className="App">

     <h1>Contador de vezes do Yago</h1>
     <input type="text"  onChange={(event) => handleInput(event, 'input1')} value = {input.input1}/>
     <input type="text"  onChange={(event) => handleInput(event, 'input2')} value = {input.input2} />
      <p>{input.input1}</p>
      <p>{input.input2}</p>


     <p>{contador}</p>
     {/* ()=>funcaoContador('aumentar') programação funcional evita q o codigo execute sempre q mudar o estado*/}
     <button onClick={()=>funcaoContador('aumentar')}>Aumentar</button>
     <button onClick={()=>funcaoContador('diminuir')}>Diminuir</button>
    </div>
  );
}

export default App;
