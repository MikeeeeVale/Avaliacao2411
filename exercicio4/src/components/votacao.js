import React, { useState } from 'react';

const Votacao = () => {
  const opcoes = ['Flocos', 'Chocolate', 'Morango', 'Napolitano']; 
  const [votos, setVotos] = useState(Array(opcoes.length).fill(0));

  const Voto = (index) => {
    const novosVotos = [...votos];
    novosVotos[index]++;
    setVotos(novosVotos);
  };

  return (
    <div>
      <h2>Qual desses sabores de sorvete você mais gosta?</h2>
      <ul>

    {opcoes.map((opcao, index) => (
        
    <li item={index}>
    <button onClick={() => Voto(index)}>{opcao}</button>
    <span>{votos[index]}</span>
    </li>

        ))}
      </ul>
    </div>
  );
};

export default Votacao;
