import React from 'react'
import axios from 'axios'


class Delete extends React.Component{
    componentDidMount(){
        axios.post('http://localhost:3000/contact_delete?id='+this.props.match.params.id)
        alert("Contact successfully deleted")
        window.location.href = '/contact/contactlist'
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