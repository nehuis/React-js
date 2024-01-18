import './components/Item/Item.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/cart'
import { CartProvider } from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route exact path='/product/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
