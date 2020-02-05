import React from 'react';
import Categories from './Categories';
import Colors from './Colors';
import NewArrival from './NewArrival';
import Sizes from './Sizes';

const RefinementBar = ({ filters, ...props }) => (
  <div className="refinements">
    {filters.map(filter => {
      switch(filter.attribute_id) {
        case "cgid":
          return <Categories key={filter.attribute_id} categories={filter} {...props} />;
        case "c_refinementColor":
          return <Colors key={filter.attribute_id} colors={filter} {...props} />;
        case "c_isNew":
          return <NewArrival key={filter.attribute_id} filter={filter} {...props} />
        case "c_size":
          return <Sizes key={filter.attribute_id} sizes={filter} {...props} />
        default:
          return null;
      }
    })}
  </div>
)

export default RefinementBar;
