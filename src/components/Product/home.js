import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from "react-router-dom";
import {api} from '../../api';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        product_list: [],
        user_id:''
        };
      }

      componentDidMount(){
        api.get('user_products?id='+localStorage.getItem('user_id'))
        .then(response => {
          console.log(response)
            this.setState({ product_list: response.data,user_id: localStorage.getItem('user_id') });
          })
          .catch(function (error) {
            console.log(error);
            localStorage.clear()
            window.location.href = '/login/'
          })
      }


        renderTableData() {
          return this.state.product_list.map((product_list, index) => {
              const { id,name,price,quantity,size,discount,selling_price,color,gender,specification,brand} = product_list 
              return (
                  <tr key={id} id="myTable">
                    <td>{name}</td>
                     <td>{price}</td>
                     <td>{quantity}</td>
                     <td>{size}</td>
                     <td>{discount}</td>
                     <td>{quantity >= 300 ? "Stock available": "Stock not available"}</td>
                     <td>{selling_price}</td>
                     <td>{color}</td>
                     <td>{gender}</td>
                     <td>{specification}</td>
                     <td>{brand.name}</td>
                     <td><NavLink to={"/product/edit/"+id} className="btn btn-success">Edit</NavLink></td>
                     <td><NavLink to={"/product/delete/"+id} className="btn btn-primary">Delete</NavLink></td>
                    </tr>
               )
            })
         }

        myFunction() {
          var input,filter,table,tr,td1,td,i;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            td1 = tr[i].getElementsByTagName("td")[8];
            if (td || td1) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td1.innerHTML.toUpperCase().indexOf(filter) > -1 ) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }

    render(){
        return(
            <div className="container">
              <h3 className="title_header">Products  </h3>
              <NavLink to={"/product/create/"} className="btn btn-primary">Create</NavLink>
                
                <input type="text" id="myInput" onKeyUp={this.myFunction} style={{float: "right"}} placeholder="Search ..." title="Type in a name"></input>
                <table className="table table-striped" style={{ marginTop: 20 }} id="myTable">
                <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Discount</th>
                <th>Stock</th>
                <th>Selling Price</th>
                <th>Color</th>
                <th>Gender</th>
                <th>Specification</th>
                <th>Brand</th>       
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


export default Home;