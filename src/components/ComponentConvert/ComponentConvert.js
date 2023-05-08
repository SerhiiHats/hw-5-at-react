import "./ComponentConvert.scss";
import {Component} from "react";

class ComponentConvert extends Component {

  state = {
    euro: 1,
    uan: 40.72,
  }

  handlerValue(e, nameValue) {
    nameValue === "euro" ? this.setState({euro: e.target.value, uan: e.target.value * 40.72}) :
      this.setState({euro: (e.target.value / 40.72), uan: e.target.value})
  }


  render() {
    return (
      <div className={"ComponentConvert"}>
        <div className={"wrap-convert"}>
          <p>Конвертер онлайн:</p>
          <p><span>1</span> Евро дорівнює</p>
          <p><span>40,72</span> Українська гривня</p>
          <p><input type={"number"} name={"euro-cur"} id={"euro"} placeholder={"Enter your money..."}
                    onChange={(e) => {
                      this.handlerValue(e, "euro")
                    }} value={this.state.euro}/>
            <span className={"label"}>Евро</span>
          </p>
          <p>
            <input type={"number"} name={"uan-cur"} id={"uan"} placeholder={"Enter your money..."}
                   onChange={(e) => {
                     this.handlerValue(e, "uan")
                   }} value={this.state.uan}/>
            <span className={"label"}>Українська гривня</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentConvert;