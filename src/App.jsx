import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Item/Item.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Sections/cart';

const App = () => {
  return (
    <BrowserRouter>

    <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
