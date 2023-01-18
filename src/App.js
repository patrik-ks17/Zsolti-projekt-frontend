import './App.css';
import Header from './Header.js';
import Markak from './Markak.js';
import Tipusok from './Tipusok';

function App() {
  return (

    <div>
      <Header/>
      <Markak/>
      <Tipusok/>
    </div>
  );
}

function onClick() {
  const navigate = document.getElementsByClassName('select')
  console.log(navigate);
}


export default App;
