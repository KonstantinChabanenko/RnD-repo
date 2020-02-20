import React from 'react';
import Categories from './Categories';
import Colors from './Colors';
import NewArrival from './NewArrival';
import Sizes from './Sizes';
import Prices from './Prices';
import { useSelector } from 'react-redux';

const RefinementBar = () => {
  const refinements = useSelector(state => state.productsReducer.refinements);

  return (
    <div className="refinements">
      {refinements.map(refinement => {
        switch(refinement.attribute_id) {
          case "cgid":
            return <Categories key={refinement.attribute_id} categories={refinement} />;
          case "c_refinementColor":
            return <Colors key={refinement.attribute_id} colors={refinement} />;
          case "c_isNew":
            return <NewArrival key={refinement.attribute_id} isNew={refinement} />
          case "c_size":
            return <Sizes key={refinement.attribute_id} sizes={refinement} />
          case "price":
            return <Prices key={refinement.attribute_id} prices={refinement} />
          default:
            return null;
        }
      })}
    </div>
  )
}

export default RefinementBar;
