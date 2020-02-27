import React from 'react'
import axios from 'axios'


class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    componentDidMount(){
        axios.post('http://localhost:3000/product_delete?id='+this.props.match.params.id)
        window.location.href = '/home'
      }
    render(){
        return(
            <div className="container">
                <h3> Product successfully deleted</h3>
                <button path="/home" className="btn btn-success">Home</button>
            </div>
        );
    }
}


export default Delete