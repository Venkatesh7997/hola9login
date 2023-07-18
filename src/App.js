import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import UserLogin from './components/login/UserLogin';
import Dashboard from './components/Dashboard/Dashboard';

// import UserDashboard from './components/Userdashboard/UserDashboard';

function App() {
  return (


    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Dashboard' exact element={<Dashboard/>}/>
        <Route path='/UserLogin' exact element={<UserLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
