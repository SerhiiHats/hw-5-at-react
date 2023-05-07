import "./FormFeedback.css"
import {Component} from "react";
import {addAC} from "./formAction";

class FormFeedback extends Component {

  state = {
    valueName: "",
    valueEmail: "",
    valueComment: "",
  }

  handlerValue(e, key = 1) {
    switch (key) {
      case 1:
        this.setState({valueName: e.target.value});
        break;
      case 2:
        this.setState({valueEmail: e.target.value});
        break;
      case 3:
        this.setState({valueComment: e.target.value});
        break;
      default:
        return;
    }
  }

  handlerButton(e) {
    e.preventDefault();
  }

  cleanForm() {
    this.setState({
      valueName: "",
      valueEmail: "",
      valueComment: "",
    })
  }

  render() {

    // const {handlerForm, dispatch} = this.props;
    const {dispatch} = this.props;

    return (
      <div className={"ContainerForm"}>
        <form className={"FormFeedback"}>
          <div className={"Row"}>
            <label>ім'я
              <input type={"text"} name={"name"} id={"name"} placeholder={"Enter your name..."}
                     onChange={(e) => {
                       this.handlerValue(e)
                     }} value={this.state.valueName}/>
            </label>
            <label>E-mail
              <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your e-mail..."}
                     onChange={(e) => {
                       this.handlerValue(e, 2)
                     }} value={this.state.valueEmail}/>
            </label>
          </div>
          <div className={"Row"}>
            <label>Відзив:
              <textarea className={"Comment"} placeholder={"Enter your comment..."}
                        onChange={(e) => {
                          this.handlerValue(e, 3)
                        }}
                        value={this.state.valueComment}></textarea>
            </label>
          </div>
          <div className={"Row"}>
            <input className={"BtnSubmit"} type={"submit"} value={"Додати відзив"}
                   onClick={(e) => {
                     this.handlerButton(e);
                     // handlerForm(this.state);
                     dispatch(addAC(this.state));
                     this.cleanForm();
                   }}/>
          </div>
        </form>

      </div>
    );
  }
}


export default FormFeedback;