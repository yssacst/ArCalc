import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>
          <form>
              <label> Horas/dia
                <input/>
              </label>
              <label>Dias/mês
                <input/>
              </label>
              <label>Consumo do aparelho (kW/h por mês)
                <input/>
              </label>
              <label>Preço da energia (R$ por kW/h)
                <input/>
              </label>
              <button type="submit">Calcular</button>
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
