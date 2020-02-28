import React from 'react'
import axios from 'axios'
import {api} from '../../api'


class Delete extends React.Component{
    componentWillMount(){
        api.post('contact_delete?id='+this.props.match.params.id)
        .then(function (response) {
            console.log(response);
            if(response.status == 204){
                alert("Contact successfully deleted")
                window.location.href = '/contact/contactlist'
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render(){
        return(
            <div className="container">
                <h3> Contact successfully deleted</h3>
                <button path="/home" className="btn btn-success">Home</button>
            </div>
        );
    }
}


export default Delete