// import Nav from './components/Nav'
import Landing from './components/Landing';
// import Empform from './components/Empform';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <>
    <Router>
          <Routes>

            <Route exact path="/" element={<Landing/>}></Route>
            <Route exact path="/Signup" element={<Signup/>}></Route>
            <Route exact path="/Login" element={<Login/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
