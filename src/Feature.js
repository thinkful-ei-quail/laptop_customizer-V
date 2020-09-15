import React from 'react';
import Item from './Item';
import slugify from 'slugify';
export default class Feature extends React.Component
{
    render()
    {
        const {feature, featureHash, updateFeature, selected, options = []} = this.props;
        console.log(options)
        const opts = options.map(item => {
          const itemHash = slugify(JSON.stringify(item));
          
          return <Item key={itemHash} itemHash={itemHash} feature={feature} item={item} selected={selected} updateFeature={updateFeature}/>;
          
        });
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {opts}
            </fieldset>
          );
    }
}