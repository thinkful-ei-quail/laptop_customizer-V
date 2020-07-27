import React from 'react';
import Summary from './Summary';
import Features from './Features';


export default class Main extends React.Component
{
    render()
    {   
        const {features, selected, total, USCurrencyFormat , updateFeature} = this.props;
        return (
            <div className="App">
              <header>
                <h1>ELF Computing | Laptops</h1>
              </header>
              <main>
                <form className="main__form">
                  <h2>Customize your laptop</h2>
                  <Features selected={selected} USCurrencyFormat={USCurrencyFormat} updateFeature={updateFeature} />
                </form>
                <section className="main__summary">
                  <h2>Your cart</h2>
                  <Summary selected={selected} USCurrencyFormat={USCurrencyFormat}/>
                  <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                      {USCurrencyFormat.format(total)}
                    </div>
                  </div>
                </section>
              </main>
            </div>
          );
    }
}