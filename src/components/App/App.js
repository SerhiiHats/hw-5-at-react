import './App.css';
import {Component} from "react";
import Header from "../Header/Header";
import FormFeedback from "../FormFeedback/FormFeedback";
import ParagraphRequest from "../ParagraphRequest/ParagraphRequest";

class App extends Component {

  state = {
    task1: "React: Домашнє завдання 5. Завдання 2",
    description1: "Створити компонент форми з трьома контрольованими вводами. Після відправки форми – сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно перевести в рядок).",
    requestForm: false,
  }

  handlerForm(obj) {
    this.setState({requestForm: obj})
  }

  render() {

    return (
      <div className="App">
        <Header nameTask={this.state.task1} descriptionTask={this.state.description1}/>
        <FormFeedback handlerForm={(obj) => {
          this.handlerForm(obj)
        }}/>
        <ParagraphRequest requestForm={this.state.requestForm}/>

      </div>
    );
  }
}

export default App;
