import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello Test Page</h1>
      <button
        className='py-2 px-4 border'
        onClick={() => {console.log('Click')}}
        >
          Нажми меня
      </button>
    </div>
  );
}

export default App;
