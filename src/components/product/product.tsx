import { useState } from 'react';
import { IProduct } from '../../types/types';

interface ProductProps {
    product: IProduct;
}

function Product({ product }: ProductProps){
    const [details, setDetails] = useState(false);
    return (
        <div className='border py-2 px-4 rounded flex  flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.title} />
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button 
                className='py-2 px-4 border bg-green-400'
                onClick={() => setDetails(prev => !prev)}
            >
                Show Details
            </button>
            {details && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    );
}

export default Product;