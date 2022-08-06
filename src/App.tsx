import React, { useState } from 'react';
import Product from './components/product/product';

function App() {
  const[count, setCount] = useState(0);
  return (
    <>
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1>Hello Test Page</h1>
      <h2 className='font-bold'>{`Test JSX ${count}`}</h2>
      <button
        className='py-2 px-4 border'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Нажми меня
      </button>
    </div>
    <Product />
    </>
  );
}

export default App;
