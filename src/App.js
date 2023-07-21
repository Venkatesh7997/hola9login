import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import UserLogin from './components/login/UserLogin';

import AdminDashboard from './components/Dashboard/AdminDashboard';
import ProjectDetails from './components/Dashboard/ProjectDetails';
import UesrDashboard from './components/Userdashboard/UesrDashboard';


// import UserDashboard from './components/Userdashboard/UserDashboard';

function App() {
  return (


    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      
        <Route path='/UserLogin' exact element={<UserLogin/>}/>
        <Route path='/AdminDashboard' exact element={<AdminDashboard/>}/>
        <Route path='/ProjectDetails' exact element={<ProjectDetails/>}/>
        <Route path='/ UesrDashboard' exact element={<UesrDashboard/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
