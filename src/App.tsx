import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />}/>
      <Route path='about' element={<AboutPage />}/>
    </Routes>
  )
}

export default App;
