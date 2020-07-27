import React from 'react';
//{USCurrencyFormat.format(item.cost)}

export default class Option extends React.Component
{
    render()
    {
        const {featureHash,feature,selectedOption,USCurrencyFormat} = this.props;
        return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
    }
}