import { Link } from 'react-router-dom';

export function Navigation() {
  return(
    <nav className='h-[50px] flex justify-around px-5 bg-gray-500 items-center text-white'>
      <span className='font-bold'>Logo</span>

      <span>
        <Link to='/' className='mr-2'>Products</Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  );
}