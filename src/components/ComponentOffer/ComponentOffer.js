import "./ComponentOffer.scss";
import React, {Component} from 'react';

class ComponentOffer extends Component {
  render() {
    return (
      <div className={"ComponentOffer"}>
        <div className={"wrap-offer"}>
          <section>
            <h2>Найкраща пропозиція</h2>
            <h3>Мій кредит Евро</h3>
            <div className={"wrap-cost"}>
              <p>Ставка по кредиту</p>
              <p>50%</p>
              <p>Повертаєте після строку</p>
              <p><span>40521.83</span> euro</p>
            </div>
            <h3>Мій депозит Евро</h3>
            <div className={"wrap-cost"}>
              <p>Ставка по депозиту</p>
              <p>5%</p>
              <p>Отримуєте після оподаткування</p>
              <p><span>1021.45</span> euro</p>
            </div>
            <button>надіслати заявку</button>
          </section>
          <section>
            <h2>Найкраща пропозиція</h2>
            <h3>Мій кредит Гривня</h3>
            <div className={"wrap-cost"}>
              <p>Ставка по кредиту</p>
              <p>50%</p>
              <p>Повертаєте після строку</p>
              <p><span>75414.77</span> uan</p>
            </div>
            <h3>Мій депозит Гривня</h3>
            <div className={"wrap-cost"}>
              <p>Ставка по депозиту</p>
              <p>5%</p>
              <p>Отримуєте після оподаткування</p>
              <p><span>52352.88</span> uan</p>
            </div>
            <button>надіслати заявку</button>
          </section>

        </div>

      </div>
    );
  }
}

export default ComponentOffer;
