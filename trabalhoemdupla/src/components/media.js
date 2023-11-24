import React, {useState} from 'react';

function CalcularMedia(){
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [numero3, setNumero3] = useState('');
    const [media, setMedia] = useState(null);

    const calcularMedia = () => {
        //Converter os valores para números e calcular a soma
        const resultado = (Number(numero1) + Number(numero2) + Number(numero3))/3;
        setMedia(resultado);

        if(resultado < 4){
            alert('O aluno foi reprovado ' + resultado)
        }else if(resultado > 4 && resultado < 6){
            alert('O aluno ficou de recuperação '+ resultado)
        }else{
            alert('O aluno foi aprovado ' + resultado)
        }
    };
    return(
        <div>
            <input
            type='number'
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder='Digite o primeiro número'
            />

            <input
            type='number'
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder='Digite o segundo número'
            />

            <input
            type='number'
            value={numero3}
            onChange={(e) => setNumero3(e.target.value)}
            placeholder='Digite o terceiro número'
            />

            <br></br>  
            <button onClick={calcularMedia}>Calcular Média</button>
            {media !== null && <p>Resultado: {media}</p>}
            <br></br>  
            </div>
    );
}export default CalcularMedia;