import React, {useState} from 'react';

function Converter(){
    const [numero1, setNumero1] = useState('');
    const [converter, setConver] = useState(null);

    const converterValor = () => {
        const resultado = Number(numero1) * 4.93;
        setConver(resultado);
    };
    return(
        <div>
            <input
            type='number'
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder='Digite um valor'
            />


            <br></br>  
            <button onClick={converterValor}>Converter Dólar</button>
            {converter !== null && <p>Resultado: {converter}</p>}
            <br></br>  
            </div>
    );
}export default Converter;