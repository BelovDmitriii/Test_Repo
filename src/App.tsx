import React, { useState } from 'react';

function App() {
  const[count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello Test Page</h1>
      <button
        className='py-2 px-4 border'
        onClick={() => {
          setCount(count + 1)
          console.log(count);
        }}
      >
        Нажми меня
      </button>
    </div>
  );
}

export default App;
