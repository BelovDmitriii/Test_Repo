import Product from './components/product/product';
import useProducts from './hooks/products';
import LoadingComponent from './components/loading/loading';
import ErrorMessage from './components/errorMessage/errorMessage';
import Modal from './components/modal-component/modal';
import CreateProduct from './components/create-product/createProduct';


function App() {

  const { error, loading, products } = useProducts();

  return (
    <>
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <LoadingComponent />}
        {error && <ErrorMessage error= {error} />}
        {products.map(product => <Product product={product} key={product.id}/>)}

        <Modal>
          <CreateProduct />
        </Modal>
      </div>
    </>
  );
}

export default App;
