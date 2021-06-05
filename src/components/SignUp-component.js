import React from "react";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css"

export default class SignUp extends React.Component{
    render(){
        return(
            <div class="container">
                <form>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type='text'/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <label>Date Of Birth:</label>
                        <DatePicker/>
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
