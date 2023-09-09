// import{Link,Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';


function App() {
  return (
    
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/empresa'>Empresa</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>

        </ul>

      </div>
      <Routes>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/empresa'>
          <Empresa/>
        </Route>
        <Route path='/contato'>
          <Contato/>
        </Route>
        
      </Routes>
      
      
      
      </BrowserRouter>
   
    
  );
}

export default App;
