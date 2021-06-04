import React from "react";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css"

export default class SignUp extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>Name:</label>
                    <input type='text'/>
                    <br/>
                    <label>Date Of Birth:</label>
                    <DatePicker/>
                    <br/><br/>
                    <input class='btn btn-primary' type='submit' value='Submit'/>
                    <input class='btn btn-danger' type='reset'/>
                </form>
            </div>
        )
    }
}
