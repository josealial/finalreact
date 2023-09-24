import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a React-Shirts'} />} />
            <Route path='/products/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2>ERROR 404</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App



//function App() {
//return (
//<>
//<BrowserRouter>
//{ <CarritoProvider>}
// <NavBar />
//<Routes>
//<Route path='/' element={<ItemListContainer greeting={'Bienvenidos a HeroSystems'} />} />
//<Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
//<Route path='/item/:idItem' element={<ItemDetailContainer />} />
//<Route path='/cart' element={<Cart/>} />
//<Route path='/checkout' element={<Checkout/>} />
//<Route path='*' element={<h2>Sitio en Construcción</h2>} />
// </Routes>
//{</CarritoProvider>}
//</BrowserRouter>
//</>
// )
//}