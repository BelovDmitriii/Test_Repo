import React, { useState } from 'react';
import Product from './components/product/product';
import { products } from './components/data/products';

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
        <Product product={products[0]}/>
        <Product product={products[1]}/>
      </div>
    </>
  );
}

export default App;
