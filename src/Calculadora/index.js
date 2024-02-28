import { useState } from 'react'
import styles from './Calculadora.module.css'

function Calculadora () {
    const [num, setNum] = useState('0');
    const [numDividendo, setNumDividendo] = useState(null);
    const [numPrimarioSoma, setNumPrimarioSoma] = useState(null);
    const [numPrimarioSubtraçao, setNumPrimarioSubtraçao] = useState(null);
    const [numMultiplica, setNumMultiplica] = useState(null);

    const HandlerClick = (value) => {

      if (value === 'AC') {
        setNum('0');
        setNumDividendo(null);
        setNumPrimarioSoma(null);
      } else if (value === '=') {
        
        if (numDividendo !== null) {
          
            const resultado = parseFloat(numDividendo) / parseFloat(num);
            setNum(resultado.toFixed(6))
            setNumDividendo(null);

        } else if ( numPrimarioSoma !== null) {

            const resultadoSoma = parseFloat(numPrimarioSoma) + parseFloat(num);
            setNum(resultadoSoma.toString())
            setNumPrimarioSoma(null);

        } else if ( numPrimarioSubtraçao !== null ) {

            const resultadoSub = parseFloat(numPrimarioSubtraçao) - parseFloat(num);
            setNum(resultadoSub.toString());
            setNumPrimarioSubtraçao(null)

        } else if ( numMultiplica !== null ) {

            const resultadoMult = parseFloat(numMultiplica) * parseFloat(num)
            setNum(resultadoMult.toFixed())
            setNumMultiplica(null)

        }

      } else if (value === '/') {
        setNumDividendo(num);
        setNum('0');
      } else {
        setNum((prevNum) => {
          if(prevNum === '0' || prevNum === 'Error') {
            return value
          } else {
            return prevNum + value
          }
        })
      } 
      
      if (  value === '+' ) {

        setNumPrimarioSoma(num);
        setNum('0');

      } else if ( value === '-' ) {

        setNumPrimarioSubtraçao(num);
        setNum('0');

      } else if ( value === '%' ) {

        const resultadoPorc = parseFloat(num) / 100;
        setNum(resultadoPorc.toString());

      } else if (value === 'X') {

        setNumMultiplica(num);
        setNum('0')
      }
      
      
    }


    return (
        <>
        <section className={styles.sessao}>
            <div className={styles.tela}><h1>{num}</h1> </div>
            <div className={styles.botoes}>
                <button className={styles.ButtonO} onClick={() => HandlerClick('AC')}>AC</button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('-/+')}>-/+</button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('%')}>%</button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('/')}>/</button>
            </div>

            <div className={styles.botoes}>
                <button className={styles.Button} onClick={() => HandlerClick('7')}>7</button>
                <button className={styles.Button} onClick={() => HandlerClick('8')}>8</button>
                <button className={styles.Button} onClick={() => HandlerClick('9')}>9</button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('X')}>X</button>
            </div>

            <div className={styles.botoes}>
                <button className={styles.Button} onClick={() => HandlerClick('4')}>4</button>
                <button className={styles.Button} onClick={() => HandlerClick('5')}>5</button>
                <button className={styles.Button} onClick={() => HandlerClick('6')}>6</button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('-')}>-</button>
            </div>

            <div className={styles.botoes}>
                <button className={styles.Button} onClick={() => HandlerClick('1')}>1</button>
                <button className={styles.Button} onClick={() => HandlerClick('2')}>2</button>
                <button className={styles.Button} onClick={() => HandlerClick('3')}>3</button>
                <button className={styles.ButtonO}onClick={() => HandlerClick('+')}>+</button>
            </div>

            <div className={styles.botoes}>
                <button className={styles.Button} onClick={() => HandlerClick('0')}>0</button>
                <button className={styles.Button} onClick={() => HandlerClick(',')}>,</button>
                <button className={styles.ButtonI} onClick={() => HandlerClick('0')}></button>
                <button className={styles.ButtonO} onClick={() => HandlerClick('=')} >=</button>
            </div>
            <div></div>
        </section>
        </>
    )
};

export default Calculadora;