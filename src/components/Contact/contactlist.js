import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from "react-router-dom";

class Brandlist extends React.Component{
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
        product_list: [],
        user_id: ''
        };
      }

      componentDidMount(){
        axios.get('http://localhost:3000/contact_list')
        .then(response => {
          console.log(response)
            this.setState({ product_list: response.data});
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      delete() {
        axios.post('http://localhost:3000/contact_delete/?id='+this.state.product_list[0].id)
        window.location.href = "/brand/brandlist";
      }

      myFunction(){
        var input, filter, table, tr, td,td1,td2, i, txtValue,txtValue1,txtValue2;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          td1 = tr[i].getElementsByTagName("td")[1];
          td2 = tr[i].getElementsByTagName("td")[2];
          if (td || td1 || td2) {
            txtValue = td.textContent || td.innerText;
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 ) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
       }
        renderTableData() {
            return this.state.product_list.map((product_list, index) => {
              const { id,name,address,city,pincode,mobile,description} = product_list 
               return (
                  <tr key={id}>
                      <td>{name}</td>
                     <td>{address}</td>
                     <td>{city}</td>
                     <td>{mobile}</td>
                     <td>{description}</td>
                     <td>{pincode}</td>
                     <td><NavLink to={"/contact/edit/"+id} className="btn btn-success">Edit</NavLink></td>
                     <td><NavLink to={"/contact/delete/"+id} className="btn btn-primary">Delete</NavLink></td>
                    </tr>
               )
            })
         }


    render(){
        return(
            <div className="container">
                <NavLink to={"/contact/create/"} className="btn btn-primary">Create</NavLink>
                <input type="text" id="myInput" onKeyUp={this.myFunction} placeholder="Search for names.." title="Type in a name"></input>
                  <h3>Contacts</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} id="myTable">
                <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>   
                <th>Mobile</th>
                <th>Description</th>
                <th>Pincode</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                  {this.renderTableData()}
            </tbody>
         </table>   
       </div>
        );
    }
}


export default Brandlist;
