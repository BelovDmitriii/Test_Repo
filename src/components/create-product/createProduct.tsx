import { useState } from 'react';
import { IProduct } from '../../types/types';
import ErrorMessage from '../errorMessage/errorMessage';
import axios from 'axios';

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 44,
    count: 5546
  }
};

function CreateProduct() {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (evt: React.FormEvent) => {
    evt.preventDefault();
    setError('');

    if(value.trim().length === 0) {
      setError('Please enter valid value!');
      return;
    }

    productData.title = value;

    await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
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

      {error && <ErrorMessage error={error}/>}

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