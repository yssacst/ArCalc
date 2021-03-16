import React, { useState } from 'react';
import './App.css';

function App() {
  const [horas, setHoras] = useState();
  const [dias, setDias] = useState();
  const [consumo, setConsumo] = useState();
  const [preco, setPreco] = useState();
  
  const [resultado, setResultado] = useState();

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setResultado(consumo/30*horas*dias*preco);
  }
  
  const handleChangeHoras = ({target}) => {
    setHoras(target.value)
  }
  const handleChangeDias = ({target}) => {
    setDias(target.value)
  }
  const handleChangeConsumo = ({target}) => {
    setConsumo(target.value)
  }
  const handleChangePreco = ({target}) => {    
    setPreco(target.value)
  }
  
  const [moveX, setMoveX] = useState();
  const [moveY, setMoveY] = useState();

  const handleCursor = () => {
    window.addEventListener("mousemove", (e) =>{
      setMoveX(e.pageX * -1 / 40);
      setMoveY(e.pageY * -1 / 40);
    });
  };

  return (
    <div className="container" onMouseMove={ handleCursor } style={{ backgroundPosition:`${moveX}px ${moveY}px` }}>
      <div className="bx-principal">
        <div>
            <form className="frm-calc">
                <label htmlFor="horas"> Horas/dia</label>
                <input type="number" step="0.1" id="horas" onChange={handleChangeHoras} required/>
                
                <label htmlFor="dias">Dias/mês</label>
                <input type="number" step="0.1" id="dias" onChange={handleChangeDias} required/>
                
                <label htmlFor="consumo">Consumo do aparelho (kW/h por mês)</label>
                <input type="number" step="0.1" id="consumo" onChange={handleChangeConsumo} required/>
                
                <label htmlFor="preco">Preço da energia (R$ por kW/h)</label>
                <input type="number" step="0.1" id="preco" onChange={handleChangePreco} required/>
                
                <button onClick={handleSubmit} type="submit" className="btn">Calcular</button>
            </form>
        </div>
        <div className="bx-resultado">
          { !resultado ? <p>Preencha os Campos</p>: 
            <label>
              O valor aproximado de consumo é
              <p>{resultado}</p>
            </label>
            }
        </div>
      </div>
      <div className="bx-explicacao">
        Como esse cálculo é feito?
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>
        <p>w</p>

      </div>
    </div>
  );
}

export default App;
