import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"

export default class HeaderComponent extends React.Component{
    render(){
        return(
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={logo} alt=""/>
                    </a>

                    <div class="navbar-brand"><h1>Student Management System</h1></div>

                    <div class="col-md-3 text-end">
                        <Link to='/login' className='btn-primary'>LogIn</Link>
                        <Link to='/signup' className='btn-primary'>SignUp</Link>
                    </div>
                    </div>
                </nav>
        )
    }
}