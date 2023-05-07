import {Component} from "react";
import "./Header.css"
import store from "../../redux/configStore";
import {connect} from "react-redux";

class Header extends Component {
  render() {
    // console.log(this.props)
    const {nameTask, descriptionTask} = this.props;
    // const { nameTask, descriptionTask } = this.props;
    return (
      <header className="App-header">
        <h1>{nameTask}</h1>
        <p>{descriptionTask}</p>
      </header>
    );
  }
}

// const mapStateToProps = (store) => {
//   return {
//     task1: store.task1,
//     description1: store.description1,
//   }
// }

// export default connect(mapStateToProps)(Header);
export default Header;