import React from "react";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css"

export default class SignUp extends React.Component{
    render(){
        return(
            <div class='container'>
                <form>
                <div class="form-group">
                    <label>Name : </label>
                    <input type='text'/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Date Of Birth : </label>
                    <DatePicker/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Contact : </label>
                    <input type='text'/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Gender : </label>
                    <select>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                    <br/>
                <div class="form-group">
                    <label>E-mail : </label>
                    <input type='text'/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Branch : </label>
                    <input type='text'/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Username : </label>
                    <input type='text'/>
                </div>
                    <br/>
                <div class="form-group">
                    <label>Password : </label>
                    <input type='text'/>
                </div>
                    <br/><br/>
                    <input class='btn btn-primary' type='submit' value='Submit'/>
                    <input class='btn btn-danger' type='reset'/>
                </form>
            </div>
        )
    }
}
