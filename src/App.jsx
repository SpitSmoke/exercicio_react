import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (event) => {
    event.preventDefault();
    const alturaEmMetros = altura / 100; 
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2));


    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Cálculo do IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>
            Altura (cm):
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

