import "./ComponentOffer.scss";
import React, {Component} from 'react';
import {connect} from "react-redux";

class ComponentOffer extends Component {
  render() {

    const {euro, uan} = this.props.dataConvert;

    return (
      <div className={"ComponentOffer"}>
        <div className={"wrap-offer"}>
          <section>
            <h2>Найкраща пропозиція</h2>
            <h3>Мій кредит Евро</h3>
            <div className={"wrap-cost"}>
              <p>Взяти</p>
              <p><span>{euro.toFixed(2)}</span> euro</p>
              <p>Ставка по кредиту</p>
              <p>50%</p>
              <p>Повертаєте після строку</p>
              <p><span>{(euro * 0.5).toFixed(2)}</span> euro</p>
            </div>
            <h3>Мій депозит Евро</h3>
            <div className={"wrap-cost"}>
              <p>Покласти</p>
              <p><span>{euro.toFixed(2)}</span> euro</p>
              <p>Ставка по депозиту</p>
              <p>5%</p>
              <p>Отримуєте після оподаткування</p>
              <p><span>{(euro * 0.05).toFixed(2)}</span> euro</p>
            </div>
            <button>надіслати заявку</button>
          </section>
          <section>
            <h2>Найкраща пропозиція</h2>
            <h3>Мій кредит Гривня</h3>
            <div className={"wrap-cost"}>
              <p>Взяти</p>
              <p><span>{uan.toFixed(2)}</span> uan</p>
              <p>Ставка по кредиту</p>
              <p>50%</p>
              <p>Повертаєте після строку</p>
              <p><span>{(uan * 0.5).toFixed(2)}</span> uan</p>
            </div>
            <h3>Мій депозит Гривня</h3>
            <div className={"wrap-cost"}>
              <p>Покласти</p>
              <p><span>{uan.toFixed(2)}</span> uan</p>
              <p>Ставка по депозиту</p>
              <p>5%</p>
              <p>Отримуєте після оподаткування</p>
              <p><span>{(uan * 0.05).toFixed(2)}</span> uan</p>
            </div>
            <button>надіслати заявку</button>
          </section>

        </div>

      </div>
    );
  }
}

const stateToProps = (store) => {
  return {
    dataConvert: store.dataConvert
  }
}

export default connect(stateToProps)(ComponentOffer);
