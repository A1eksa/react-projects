import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    ///parseInt to turn string to number
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = amount.length;
    }
    setText(data.slice(0, amount));
    console.log(typeof amount);
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraps:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
