import React from 'react';
import slugify from 'slugify';




export default class Item extends React.Component
{
    render()
    {
        const {itemHash, feature, item, selected, updateFeature, USCurrencyFormat} = this.props;
        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={e => updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
    }
}