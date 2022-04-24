import "./App.css";
import lupa from "./assets/lupa.png";
import nuvem from "./assets/nuvem.png";
function App() {
  return (
    <header>
      <div className="search">
        <img src={lupa} />
        <input type="text" placeholder="Procure o Clima da Sua Cidade" />
      </div>
      <div className="mainContent">
        <h1>Lages, Santa Catarina - Brazil</h1>
        <div className="column">
          <h2 className="temp">23º</h2>
          <div className="weather">
            <img className="nuvemImg" src={nuvem} />
            <p className="textTemp">Parcialmente Nublado</p>
          </div>
        </div>
        <div className="informationWeather">
          <div>
            <p>Longitude: 27 . 8</p>
            <p>Latitude: -58 . 32</p>
          </div>

          <div>
            <p>Sensação de 22º</p>
            <p>Umidade: 61</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
