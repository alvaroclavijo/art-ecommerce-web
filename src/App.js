import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createContext, useEffect, useState } from 'react';
import './App.scss';
import DayPicture from './components/DayPicture';
import Header from './components/Header';
import { Photographs } from './components/Photographs';

export const globalContext = createContext({});

export const client = new ApolloClient({
  uri: "https://pro-fish-59.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ApolloProvider client={client}>
      <globalContext.Provider 
      value={{
        isCartVisible,
        setIsCartVisible,
        cartProducts,
        setCartProducts,
        isLoading,
        setIsLoading
      }}>
        <div className='fixed-width'>
          <Header/>
          <DayPicture/>
          <hr className='dividing-line'/>
          <Photographs/>
        </div>
      </globalContext.Provider>
    </ApolloProvider>
    
  );
}

export default App;
