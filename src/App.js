import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.scss';
import Header from './components/Header';
import { Route, Navigate, Routes } from "react-router-dom";
import ItemDetail from './pages/ItemDetail'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { homePath, productsPath } from './utils/routePaths';
const HASURA_SECRET = 'FgyDVl7D60FUInq9WArM9XkE15dOBDlHXj1YPJFQ09smzwjv7LAxR2dagMiZnMvy'; 
export const client = new ApolloClient({
  uri: "https://grown-crawdad-81.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret': HASURA_SECRET
  },
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className='fixed-width'>
        <Header/>
        <Routes>
            <Route path="/" element={<Navigate to={`${homePath}`}/>}/>
            <Route path={`${homePath}`} element={<Home/>}/>
            <Route path={`${productsPath}/:itemId`} element={<ItemDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </div>
    </ApolloProvider>
    
  );
}

export default App;
