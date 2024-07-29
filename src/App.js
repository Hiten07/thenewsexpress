import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inshortnews from './components/news';
import Navbar from './components/navbar';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>            
          <Navbar/> 
          <Routes>
            <Route exact path='/' element={<Inshortnews    key="all" category="all" /> } />
            <Route exact path='/national' element={<Inshortnews   key="national" category="national"/> } />
            <Route exact path='/business' element={<Inshortnews   key="business" category="business"/> } />
            <Route exact path='/sports' element={<Inshortnews   key="sports" category="sports"/> } />
            <Route exact path='/world' element={<Inshortnews   key="world" category="world"/> } />
            <Route exact path='/politics' element={<Inshortnews   key="politics" category="politics"/> } />
            <Route exact path='/technology' element={<Inshortnews   key="technology" category="technology"/> } />
            <Route exact path='/startup' element={<Inshortnews   key="startup" category="startup"/> } />
            <Route exact path='/entertainment' element={<Inshortnews   key="entertainment" category="entertainment" /> } />
            <Route exact path='/miscellaneous' element={<Inshortnews   key="miscellaneous" category="miscellaneous" /> } />
            <Route exact path='/science' element={<Inshortnews   key="science" category="science"/> } />
            <Route exact path='/automobile' element={<Inshortnews   key="automobile" category="automobile"/> } />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
