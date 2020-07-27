import React from 'react';
import Option from './Option';

export default class Summary extends React.Component
{
    render()
    {
        const {selected, USCurrencyFormat} = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return <Option key={idx} featureHash={featureHash} feature={feature} selectedOption={selectedOption} USCurrencyFormat={USCurrencyFormat}/>
          });

          return summary;
    }
}