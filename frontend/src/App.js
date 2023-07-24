import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import { Protector } from './helpers';

import './styling/App.scss'

function App() {
  return(
  <div className='app-container'>
      <Routes>
        <Route path='/' element={<Protector Component={Home}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Protector Component={Products}/>} />
      </Routes>
  </div>
  )
}

export default App;
