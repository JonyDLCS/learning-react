

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className="App relative min-h-screen" >
      
        
        <BrowserRouter>
          <Header/>
          <Routes >

            <Route exact path='/' 
              element={<Home/>}
            />

            <Route path='/about' 
              element={<About/>}
            />

            <Route path='/products/:id' 
              element={<Product/>}
            />

          </Routes>
          <Footer/>
        </BrowserRouter>
       
      
    </div>
  );
}

export default App;
