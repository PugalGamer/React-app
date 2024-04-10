import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from './component/Img';
import Btn from './component/Btn';
function App() {
  return (
    <div className="App">
      <h1>Hai New MERN stack </h1>
      <div>
        <Btn/>
      </div>
      <div className='mt-3'>
        <Img/>
      </div>
      <div className='mt-3'>
        <Btn/>
      </div>
    </div>
  );
}

export default App;
