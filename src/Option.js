import React from 'react';
import currencyFormat from './currencyFormat';

export default class Option extends React.Component
{
    render()
    {
        const {featureHash,feature,selectedOption} = this.props;
        return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {currencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
    }
}