import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./components/LogIn-component"
import SignUp from "./components/SignUp-component"
// import StudentData from "./components/StudentData-component"
// import StudentList from "./components/StudentList-component"
import HeaderComponent from './components/header-component';

function App() {
  return (
    <Router>
    <HeaderComponent/>
    <br/>
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
