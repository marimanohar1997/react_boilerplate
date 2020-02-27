import React from 'react'
import axios from 'axios'


class Delete extends React.Component{
    componentDidMount(){
        axios.post('http://localhost:3000/brand_delete?id='+this.props.match.params.id)
        alert("Brand successfully deleted")
        window.location.href = '/brand/brandlist'
      }
    render(){
        return(
            <div className="container">
                <h3> Brand successfully deleted</h3>
                <button path="/home" className="btn btn-success">Home</button>
            </div>
        );
    }
}


export default Delete