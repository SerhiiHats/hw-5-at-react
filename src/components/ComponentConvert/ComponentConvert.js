import {connect} from "react-redux";
import "./ComponentConvert.scss";
import {Component} from "react";
import {convertACAddEuro, convertACAddUan} from "./convertAction";

class ComponentConvert extends Component {

  render() {
    const {dataConvert, dispatch} = this.props;

    return (
      <div className={"ComponentConvert"}>
        <div className={"wrap-convert"}>
          <p>Конвертер онлайн:</p>
          <p><span>1</span> Евро дорівнює</p>
          <p><span>40,72</span> Українська гривня</p>
          <p><input type={"number"} name={"euro-cur"} id={"euro"} placeholder={"Enter your money..."}
                    onChange={(e) => {
                      dispatch(convertACAddEuro(Number(e.target.value)));
                    }} value={dataConvert.euro}/>
            <span className={"label"}>Евро</span>
          </p>
          <p>
            <input type={"number"} name={"uan-cur"} id={"uan"} placeholder={"Enter your money..."}
                   onChange={(e) => {
                     dispatch(convertACAddUan(Number(e.target.value)));
                   }} value={dataConvert.uan}/>
            <span className={"label"}>Українська гривня</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    dataConvert: store.dataConvert

  }
}

export default connect(mapStateToProps)(ComponentConvert);