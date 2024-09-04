
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Userlist from './Userlist';
import UserCreate from './UserCreate';
import EditUser from './EditUser';

function App() {
  return (
<>
<BrowserRouter>
<div className="container">
   <div className="row">
    
    <Routes>
      
      <Route path='/' element={<Userlist/>}/>
      <Route path='/createuser' element={<UserCreate/>}/>
       <Route path='/edituser/:id' element={<EditUser/>}/>
  
    </Routes>
   </div>
    </div>
</BrowserRouter>
</>
  );
}

export default App;
