import { useState } from 'react';

function CreateProduct() {

  const [value, setValue] = useState('');

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
  }

  const changeHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }

  return(
    <form
      onSubmit={submitHandler}>
      <input
        type="text"
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Введите название...'
        value={value}
        onChange = {changeHandler}
      />
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400 hover:text-white'
      >
        Create
      </button>
    </form>
  );
}

export default CreateProduct;