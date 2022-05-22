import { createContext, useState } from 'react';
import './App.scss';
import DayPicture from './components/DayPicture';
import Header from './components/Header';
import { Photographs } from './components/Photographs';

export const globalContext = createContext({});

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <globalContext.Provider 
    value={{
      isCartVisible,
      setIsCartVisible,
      cartProducts,
      setCartProducts
    }}>
      <div className='fixed-width'>
        <Header/>
        <DayPicture/>
        <hr className='dividing-line'/>
        <Photographs/>
      </div>
    </globalContext.Provider>
    
  );
}

export default App;
