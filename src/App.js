import './App.scss';
import DayPicture from './components/DayPicture';
import Header from './components/Header';
import { Photographs } from './components/Photographs';

function App() {
  return (
    <div className='fixed-width'>
      <Header/>
      <DayPicture/>
      <hr className='dividing-line'/>
      <Photographs/>
    </div>
    
  );
}

export default App;
