import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import { Navigation } from './components/navigation/navigation';
import Reddit from './pages/posts';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='posts' element={<Reddit />}/>
    </Routes>
    </>
  )
}

export default App;
