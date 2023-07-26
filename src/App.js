// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/Nav';
import { Home, Contact, Help, User } from './pages/Nav';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/help' element={<Help />} />
          <Route path='/user/:id' element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
