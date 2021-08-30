import React, { useState } from "react";
import data from'./data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World')
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="text" name='amount' id='amount' value={count}
          onChange={(e)=> setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, eius. </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, eius.</p>
      </article>
    </section>
  );
}

export default App;
