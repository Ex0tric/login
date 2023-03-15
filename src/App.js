import './App.css';
import Login from './Components/Login';
import SuperAdmin from './Components/SuperAdminDashboard';
import Partner from './Components/PartnerDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { useReducer } from 'react';

  // reducer( state, action){
  //   return state;
  // }

function App() {

  

  // const [ state, dispatch] = useReducer(reducer, '');

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path='/superadmin' element={<SuperAdmin/>}></Route>
          <Route path='partner' element={<Partner/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
