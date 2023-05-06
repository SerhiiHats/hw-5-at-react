import {Component} from "react";
import "./Header.css"
import store from "../../redux/configStore";
import {connect} from "react-redux";

class Header extends Component {
  render() {

    const {task1, description1} = this.props;
    // const { nameTask, descriptionTask } = this.props;
    return (
      <header className="App-header">
        <h1>{task1}</h1>
        <p>{description1}</p>
      </header>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    task1: store.task1,
    description1: store.description1,
  }
}

export default connect(mapStateToProps)(Header);