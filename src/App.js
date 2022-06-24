import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createContext, useEffect, useState } from 'react';
import './App.scss';
import DayPicture from './components/DayPicture';
import Header from './components/Header';
import { Photographs } from './components/Photographs';

export const globalContext = createContext({});
const HASURA_SECRET = 'FgyDVl7D60FUInq9WArM9XkE15dOBDlHXj1YPJFQ09smzwjv7LAxR2dagMiZnMvy'; 
export const client = new ApolloClient({
  uri: "https://grown-crawdad-81.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret': HASURA_SECRET
  },
  cache: new InMemoryCache(),
});

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ApolloProvider client={client}>
      <globalContext.Provider 
      value={{
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
