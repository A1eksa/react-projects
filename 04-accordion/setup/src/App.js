import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestion] = useState(data);
  const [toggle, settoggle] = useState(false);
  console.log(data);

  return (
    <main>
      <div className='container'>
        <h3>Questions and answers abouth login</h3>
        <section>
          {questions.map((question) => {
            const { title, info, id } = question;
            return <SingleQuestion key={id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

///iterate trough data in App, and for every item display the single question

// {
//   data.map((question) => {
//     const { title, info } = data;
//     return (
//       <container>
//         <h3>{title}</h3>
//         <p>{info}</p>
//       </container>
//     );
//   });
// }
