import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
function App() {
  const [checkSession, setCheckSession] = useState(false);
  const [userName, setUserName] = useState('empty');
  console.log(userName);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin sessionUpdate={setCheckSession} getUserName={setUserName} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={ <Dashboard  getUserName={setUserName} checkSession={checkSession} sessionUpdate={setCheckSession} activeUserName={userName} /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
