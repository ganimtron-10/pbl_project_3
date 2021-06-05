import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/bootstrap.min.css"
import StudentList from "./components/StudentList-component"
import LogIn from "./components/LogIn-component"
import SignUp from "./components/SignUp-component"
import HeaderComponent from './components/header-component';

function App() {
  return (
    <Router>
    <HeaderComponent/>
    <br/>
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    <br/><br/>
    <StudentList/>
    </Router>
  );
}

export default App;
