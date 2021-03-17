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
      setMoveX(e.pageX * -0.9 / 100);
      setMoveY(e.pageY * -1 / 8);
    });
  };

  return (
    <div className="container" onMouseMove={ handleCursor } style={{ backgroundPosition:`${moveX}px ${moveY}px` }}>
      <div className="bx-principal">
        <div className="bx-aux">
            <label className="lbl-titulo">Informe os dados</label>
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
        <div className="bx-aux">
          <label className="lbl-titulo">Resultado</label>
          <div className="bx-resultado">
            { !resultado ? <p>Preencha os campos anteriores para saber o consumo</p>: 
              <label>
                O valor aproximado de consumo é
                <p>{resultado}</p>
              </label>
              }
          </div>
        </div>
      </div>
      <div className="bx-explicacao">
        <h3>Ajuda</h3>
        <div className="bx-ajuda">
          <p className="txt-explicacao"><strong>Horas/dia</strong>: Nesse campo você deverá informar quantas <strong>horas por dia</strong> você irá usar o ar condicionado. </p>
          <p className="txt-explicacao"><strong>Dias/mês</strong>: Nesse campo você deverá informar quantos <strong>dias no mês</strong> você irá usar o ar condicionado. </p>
          <p className="txt-explicacao"><strong>Consumo do aparelho</strong>: 
            Nesse campo você deverá informar qual o  <strong>consumo por mês </strong> do seu ar condicionado. 
            Essa informação vem em uma etiqueta no próprio aparelho 
          </p>
          <p className="txt-explicacao"><strong>Preço do kW/h</strong>: Nesse campo você deverá informar <strong>quanto custa o kW/h na sua região</strong>. Você consegue encontrar essa informação na sua conta de luz.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
