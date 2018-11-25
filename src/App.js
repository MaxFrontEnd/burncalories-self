import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burn: 0,
      km: 0,
      burned: 0,
      value: ""
    };
  }

  addCalories = () => {
    let km = 0;
    let burn = 0;
    if (this.state.value == 0 || this.state.value === null) {
      alert("Нечего сжечь");
    } else {
      km = Math.round((+this.state.value * 0.5) / 1000);
      burn = Math.round(km * 0.5 * 75);
      this.setState({ km, burn, value: "", burned: burn });
      this.setState(state => {
        return {
          total: +state.burned + +state.burn
        };
      });
    }
  };

  inputNum = event => {
    if (event.target.value) {
      this.setState({ value: event.target.value });
    }
  };
  render() {
    return (
      <div>
        <div className="input">
          <label htmlFor="calories">
            <div>Введите количество шагов</div>
            <span className="input-button">
              <input
                type="number"
                name="calories"
                id="calories"
                onChange={this.inputNum}
                value={this.state.value}
              />
              <button className="buttons" onClick={this.addCalories}>
                Cжечь
              </button>
            </span>
          </label>
        </div>
        <div className="results">
          <div>
            <div className="total-today">
              <p>
                Вы прошли <span className="num">{this.state.km}</span>{" "}
                километра/ров
              </p>
            </div>
            <div className="total-text">
              <p>
                Вы сожгли всего <span className="num">{this.state.total}</span>{" "}
                каллорий{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
