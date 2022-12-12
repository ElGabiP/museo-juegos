import './App.css';
import PresentacionJuegos from './Components/presentacionJuegos';
import DescripcionJuego from './Components/descripcionJuego';
import Cabecera from './Components/cabecera';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route exact path='/' element={<PresentacionJuegos />} />
          <Route path='/juego/:identificador' element={<DescripcionJuego />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
