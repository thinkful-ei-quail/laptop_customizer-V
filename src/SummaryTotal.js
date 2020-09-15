import React from 'react';
import Total from './Total';
import currencyFormat from './currencyFormat'
export default class SummaryTotal extends React.Component
{

    render()
    {
        const {selected} = this.props;
        
        return(<div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {currencyFormat.format(Total(selected))}
        </div>
      </div>)
    }
}