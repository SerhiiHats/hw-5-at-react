import './App.css';
import {Component} from "react";
import Header from "../Header/Header";

class App extends Component {

  state = {
    task1: "React: Домашнє завдання 5. Завдання 2",
    description1: "Створити компонент форми з трьома контрольованими вводами. Після відправки форми – сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно перевести в рядок).",
  }

  render() {

    return (
      <div className="App">
        <Header nameTask={this.state.task1} descriptionTask={this.state.description1}/>

      </div>
    );
  }
}

export default App;
