import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  //criando o estado, onde sempre é um array
  const [contador, setContador] = useState(0);
  
  function funcaoContador(tipo: 'aumentar' | 'diminuir') {
    if(tipo === 'aumentar') setContador(contador + 1);
    if(tipo === 'diminuir' && contador > 0) setContador(contador - 1);
    
  }

  //efeitos colaterais, função de callback, array de dependencias
  useEffect(()=>{
    if(contador === 10) alert("clicou 10 vezes, vc é o bixão heim");
  }, [contador]);


  return (
    <div className="App">
     <h1>Contador de vezes do Yago</h1>
     <p>{contador}</p>
     {/* ()=>funcaoContador('aumentar') programação funcional evita q o codigo execute sempre q mudar o estado*/}
     <button onClick={()=>funcaoContador('aumentar')}>Aumentar</button>
     <button onClick={()=>funcaoContador('diminuir')}>Diminuir</button>
    </div>
  );
}

export default App;
