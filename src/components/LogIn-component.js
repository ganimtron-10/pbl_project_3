import React from "react";

export default class LogIn extends React.Component{
    render(){
        return(
            <div class="container">
                <form>
                    <div class="form-group">
                        <label>Username:</label>
                        <input type='text'/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <label>Password:</label>
                        <input type='password'/>
                    </div>
                    <br/><br/>
                    <div class="form-group">
                        <input class='btn btn-primary' type='submit' value='Submit'/>
                        <input class='btn btn-danger' type='reset'/>
                    </div>
                </form>
            </div>
        )
    }
}
