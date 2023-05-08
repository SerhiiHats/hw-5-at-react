import { connect } from "react-redux";
import "./ComponentConvert.scss";
import { Component } from "react";
import { ADD_UAN, ADD_EURO } from "./convertAction";


class ComponentConvert extends Component {

  state = {
    euro: 0,
    uan: 0,
  }

  handlerValue(e, nameValue) {
    nameValue === "euro" ? this.setState({ euro: e.target.value, uan: e.target.value * 40.72 }) :
      this.setState({ euro: (e.target.value / 40.72), uan: e.target.value })
  }


  render() {
    const {dataConvert, dispatch} = this.props;
    console.log(this.props);
    console.log(this.props.dataConvert);
    console.log(this.props.dataConvert.currency);
    console.log(this.props.dataConvert.currency.euro);
    console.log(this.props.dataConvert.currency.uan);
    console.log(dataConvert.currency.uan);
    console.log(dataConvert.currency.euro);


    return (
      <div className={"ComponentConvert"}>
        <div className={"wrap-convert"}>
          <p>Конвертер онлайн:</p>
          <p><span>1</span> Евро дорівнює</p>
          <p><span>40,72</span> Українська гривня</p>
          <p><input type={"number"} name={"euro-cur"} id={"euro"} placeholder={"Enter your money..."}
            onChange={(e) => {
              // this.handlerValue(e, "euro")
              dispatch(convertACAddEuro(ADD_EURO));

            }} 
            // value={this.state.euro} 
            value={dataConvert.currency.euro} 
            
            />
            <span className={"label"}>Евро</span>
          </p>
          <p>
            <input type={"number"} name={"uan-cur"} id={"uan"} placeholder={"Enter your money..."}
              onChange={(e) => {
                // this.handlerValue(e, "uan")
                dispatch(convertACAddUan(ADD_UAN));
              }} 
              // value={this.state.uan} 
              value={dataConvert.currency.uan} 
              />
            <span className={"label"}>Українська гривня</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store); 
  return {
    dataConvert: store.dataConvert

  }
}

export default connect(mapStateToProps)(ComponentConvert);