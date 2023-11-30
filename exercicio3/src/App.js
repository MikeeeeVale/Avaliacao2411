import React, {useState} from 'react';
import './App.css';
import '../src/simpleCounter.css'
 
function App() {
    const [contador, setContador] = useState(0);

  return (
    
    <div className="App">
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}> Somar</button>

      <br></br><br></br>
      <button onClick={() => setContador(contador - 1)}>Subtrair</button>
     
     
    </div>
  );
}
 
export default App;
 