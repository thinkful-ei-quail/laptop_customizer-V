import React from 'react';
import Option from './Option';
import SummaryTotal from './SummaryTotal';

export default class Summary extends React.Component
{
    render()
    {
        const {selected} = this.props;
        console.log(selected);
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return <Option key={idx} featureHash={featureHash} feature={feature} selectedOption={selectedOption}/>
          });

          return (
          <>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal selected={selected}/>
          </section>
        </>);
    }
}