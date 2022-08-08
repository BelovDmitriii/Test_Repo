import Product from './components/product/product';
import useProducts from './hooks/products';
import LoadingComponent from './components/loading/loading';
import ErrorMessage from './components/errorMessage/errorMessage';


function App() {

  const { error, loading, products } = useProducts();

  return (
    <>
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <LoadingComponent />}
        {error && <ErrorMessage error= {error} />}
        {products.map(product => <Product product={product} key={product.id}/>)}
      </div>
    </>
  );
}

export default App;
