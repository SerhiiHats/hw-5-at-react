import './App.css';
import {Component} from "react";
import Header from "../Header/Header";
import FormFeedback from "../FormFeedback/FormFeedback";
import ParagraphRequest from "../ParagraphRequest/ParagraphRequest";
import ComponentConvert from "../ComponentConvert/ComponentConvert";
import {connect} from "react-redux";
import ComponentOffer from "../ComponentOffer/ComponentOffer";

class App extends Component {

  render() {
    const {dataHeader, dataRequest} = this.props;
    return (<div className="App">
      <Header nameTask={dataHeader.task1} descriptionTask={dataHeader.description1}/>
      <FormFeedback/>
      <ParagraphRequest/>
      <Header nameTask={dataHeader.task2} descriptionTask={dataHeader.description2}/>
      <ComponentConvert/>
      <ComponentOffer/>
    </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    dataHeader: store.dataTask,   
  }
}

export default connect(mapStateToProps)(App);
