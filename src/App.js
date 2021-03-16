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

  return (
    <div className="App">
      <div>
          <form>
              <label> Horas/dia
                <input type="number" id="horas" onChange={handleChangeHoras} required/>
              </label>
              <label>Dias/mês
                <input type="number" id="dias" onChange={handleChangeDias} required/>
              </label>
              <label>Consumo do aparelho (kW/h por mês)
                <input type="number" id="consumo" onChange={handleChangeConsumo} required/>
              </label>
              <label>Preço da energia (R$ por kW/h)
                <input type="number" id="preco" onChange={handleChangePreco} required/>
              </label>
              <button onClick={handleSubmit} type="submit" >Calcular</button>
          </form>
          <label>
            Resultado
            <p>{resultado}</p>
          </label>
      </div>
    </div>
  );
}

export default App;
