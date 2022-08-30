import HomePage from './components/HomePage'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
           <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
