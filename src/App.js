import './App.scss';
import DayPicture from './components/DayPicture';
import Header from './components/Header';

function App() {
  return (
    <div className='fixed-width'>
      <Header/>
      <DayPicture/>
    </div>
    
  );
}

export default App;
