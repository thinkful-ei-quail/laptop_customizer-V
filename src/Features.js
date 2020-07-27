import React from 'react';
import Item from './Item';
import Feature from './Feature';
import slugify from 'slugify';

export default class Features extends React.Component
{
    state = {features: {
        Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
          }
        ],
        "Operating System": [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          {
            name: 'Bodhi Linux',
            cost: 300
          }
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      }
    }
    render()
    {
        const features = this.state.features; 
        const {USCurrencyFormat, updateFeature, selected} = this.props;
        const html = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              
              return <Item key={itemHash} itemHash={itemHash} feature={feature} item={item} selected={selected} updateFeature={updateFeature} USCurrencyFormat={USCurrencyFormat}/>;
              
            });
      
            return <Feature key={featureHash} featureHash={featureHash} feature={feature} options={options}/>
          });
          return html;
    }
}