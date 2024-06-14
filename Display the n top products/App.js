
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import GetData from './components/GetData';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Products/>}></Route> 
   <Route path='/get' element={<GetData/>}></Route> 
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
