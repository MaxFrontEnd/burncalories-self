import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      today: 0
    };
  }
  render() {
    return (
      <div>
        <div className="input">
          <span>
            <label htmlFor="calories">
              <div>Введите количество шагов</div>
            </label>
          </span>
          <span className="input-button">
            <input type="number" name="calories" id="calories" />
            <button className="buttons">Cжечь</button>
          </span>
        </div>
        <div className="results">
          <div>
            <div className="total-today">
              <p>Вы сожгли {this.state.today} каллорий за сегодня</p>
            </div>
            <div className="total-text">
              <p>
                Вы сожгли всего
                {this.state.total} каллорий{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
