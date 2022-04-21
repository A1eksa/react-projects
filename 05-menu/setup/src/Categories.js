import React from 'react';

const Categories = ({ filterItems, categories, id }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            key={index}
            className='filter-btn'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

{
  /* <button className='filter-btn' onClick={() => filterItems('all')}>
        All
      </button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        Breakfast
      </button>
      <button className='filter-btn' onClick={() => filterItems('lunch')}>
        Lunch
      </button>
      <button className='filter-btn' onClick={() => filterItems('shakes')}>
        Shakes
      </button> */
}

///this was in the return but instead we will map trough categories and not hard code it
