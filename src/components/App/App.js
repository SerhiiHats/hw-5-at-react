import './App.css';
import {Component} from "react";
import Header from "../Header/Header";
import FormFeedback from "../FormFeedback/FormFeedback";
import ParagraphRequest from "../ParagraphRequest/ParagraphRequest";
import ComponentConvert from "../ComponentConvert/ComponentConvert";
import {connect} from "react-redux";

class App extends Component {

  render() {
    const {dataHeader, dataRequest} = this.props;
    return (<div className="App">
      <Header nameTask={dataHeader.task1} descriptionTask={dataHeader.description1}/>
      <FormFeedback/>
      <ParagraphRequest requestForm={dataRequest}/>
      <Header nameTask={dataHeader.task2} descriptionTask={dataHeader.description2}/>
      <ComponentConvert/>
    </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    dataHeader: store.dataTask,
    dataRequest: store.dataRequest,
  }
}

export default connect(mapStateToProps)(App);
