import React from 'react';
import Categories from './Categories';
import Colors from './Colors';

const RefinementBar = ({ filters, ...props }) => (
  <div className="refinements">
    {filters.map(filter => {
      switch(filter.attribute_id) {
        case "cgid":
          return <Categories key={filter.attribute_id} categories={filter} {...props} />;
        case "c_refinementColor":
          return <Colors key={filter.attribute_id} colors={ filter } {...props} />;
        default:
          return null;
      }
    })}
  </div>
)

export default RefinementBar;
