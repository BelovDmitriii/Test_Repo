import Product from './components/product/product';
import useProducts from './hooks/products';
import LoadingComponent from './components/loading/loading';
import ErrorMessage from './components/errorMessage/errorMessage';
import Modal from './components/modal-component/modal';
import CreateProduct from './components/create-product/createProduct';
import { useState } from 'react';
import { IProduct } from './types/types';


function App() {

  const { error, loading, products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }

  return (
    <>
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <LoadingComponent />}
        {error && <ErrorMessage error= {error} />}
        {products.map(product => <Product product={product} key={product.id}/>)}

        {modal && <Modal title={'Create new product'} onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>}

        <button
          className='fixed bottom-5 right-5 rounded-full bg-red-500 text-white text-2l px-6 py-3'
          onClick={() => setModal(true)}
        >
          Open Redactor
        </button>
      </div>
    </>
  );
}

export default App;
