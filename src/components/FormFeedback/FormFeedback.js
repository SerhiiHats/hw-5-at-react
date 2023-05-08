import "./FormFeedback.css"
import {Component} from "react";
import {addAC} from "./formAction";
import {connect} from "react-redux";

class FormFeedback extends Component {
  state = {
    userName: "",
    userEmail: "",
    userComment: "",
  }

  handlerValue(e, valueName) {
    this.setState({[valueName]: e.target.value})
  }

  cleanForm() {
    this.setState({
      userName: "",
      userEmail: "",
      userComment: "",
    })
  }

  render() {

    const {dispatch} = this.props;

    return (<div className={"ContainerForm"}>
        <form className={"FormFeedback"}>
          <div className={"Row"}>
            <label>ім'я
              <input type={"text"} name={"name"} id={"name"} placeholder={"Enter your name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userName")
                     }} value={this.state.userName}/>
            </label>
            <label>E-mail
              <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your e-mail..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userEmail")
                     }} value={this.state.userEmail}/>
            </label>
          </div>
          <div className={"Row"}>
            <label>Відзив:
              <textarea className={"Comment"} placeholder={"Enter your comment..."}
                        onChange={(e) => {
                          this.handlerValue(e, "userComment")
                        }} value={this.state.userComment}></textarea>
            </label>
          </div>
          <div className={"Row"}>
            <input className={"BtnSubmit"} type={"submit"} value={"Додати відзив"}
                   onClick={(e) => {
                     e.preventDefault();
                     dispatch(addAC(this.state));
                     this.cleanForm();
                   }}/>
          </div>
        </form>

      </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    dataRequest: store.dataRequest
  }
}

export default connect(mapStateToProps)(FormFeedback);