import './App.css';
import {Component} from "react";
import Header from "../Header/Header";
import FormFeedback from "../FormFeedback/FormFeedback";
import ParagraphRequest from "../ParagraphRequest/ParagraphRequest";
import ComponentConvert from "../ComponentConvert/ComponentConvert";
import {connect} from "react-redux";

class App extends Component {

  state = {
    // task1: "React: Домашнє завдання 5. Завдання 2",
    // task2: "React: Домашнє завдання 5. Завдання 3",
    // description1: "Створити компонент форми з трьома контрольованими вводами. Після відправки форми – сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно перевести в рядок).",
    // description2: "Створіть компонент із двома контрольованими компонентами, які рендерять. Вони повинні приймати тільки числа. Після того, як користувач вводить число до input, його вміст виводиться в блоці під ним з конвертацією - number * 0,5 та number * 0,05 відповідно.",
    // requestForm: false,
  }

  handlerForm(obj) {
    this.setState({requestForm: obj})
  }

  render() {
    const {dataHeader, dataRequest, dispatch} = this.props;

    return (
      <div className="App">
        <Header nameTask={dataHeader.task1} descriptionTask={dataHeader.description1}/>
        {/*<FormFeedback handlerForm={(obj) => {*/}
        {/*  this.handlerForm(obj)*/}
        {/*}}/>*/}
        <FormFeedback dispatch={dispatch}/>
        <ParagraphRequest requestForm={dataRequest}/>
        <Header nameTask={dataHeader.task2} descriptionTask={dataHeader.description2}/>
        <ComponentConvert/>

      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    dataHeader: store.dataTask,
    dataRequest: store.dataRequest,
  }
}

export default connect(mapStateToProps)(App);
