import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // const { id, name, image, age } = person;
        return (
          <article key={person.id} className='person'>
            <img src={person.image} />
            <div>
              <h2>{person.name}</h2>
              <h3>{person.age}</h3>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
