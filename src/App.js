import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Header from "./components/Layout/Header"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import NotFound from "./components/Pages/NoPageFound"
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/users/add" element={<AddUser/>} />
          <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/users/:id" element={<User/>} />
          <Route path="*" element={<NotFound/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
