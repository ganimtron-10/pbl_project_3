import React from "react"

export default class StudentList extends React.Component{
    render(){
        return(
            <div class='container'>
                <table border='2' cellpadding='15'> 
                    <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Branch</th>
                        <th>Username</th>
                        

                    </tr>
                    <tr>
                        <td>Roll No.</td>
                        <td>Name</td>
                        <td>Date of Birth</td>
                        <td>Contact</td>
                        <td>Gender</td>
                        <td>E-mail</td>
                        <td>Branch</td>
                        <td>Username</td>
                    </tr>
                </table>
            </div>
        )

    }
}

