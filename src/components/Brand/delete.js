import React from 'react'
import axios from 'axios'
import {  NavLink } from "react-router-dom";


class Delete extends React.Component{
    componentDidMount(){
        axios.post('http://localhost:3000/brand_delete?id='+this.props.match.params.id)
        .then(function (response) {
            console.log(response);
            if(response.status == 204){
                alert("Brand successfully deleted")
                window.location.href = '/brand/brandlist'
            }
          })
          .catch(function (error) {
            console.log(error);
            if(error){
                alert(error.response.data.error)
            }
          });
      }

      render(){
        return(
            <div className="container">
                <h3> Brand successfully deleted</h3>
                <NavLink to={"/home/"} className="btn btn-success">Home</NavLink>
            </div>
        );
    }
}


export default Delete