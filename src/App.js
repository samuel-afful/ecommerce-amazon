
import {BrowserRouter,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

   
  return (
   
    <BrowserRouter>
  
    <div className="grid-container">
      <header className="row">
        <div>
          <a className ="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <Route component={ProductScreen} path='/product/:id' ></Route>
        <Route component={HomeScreen} path='/' exact ></Route>   
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  
    </BrowserRouter>
    
   
  );
}

export default App;
