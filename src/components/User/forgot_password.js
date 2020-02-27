import React from 'react'
import axios from 'axios'

class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: null
        }
    }

    onChangeemail(e) {
      this.setState({
          email: e.target.value
        });
      }

      validateForm() {
        var email = document.forms["myForm"]["email"].value;
        if(email === ""){  
          alert("Email can't be empty");  
          return false;  
          }
      }

      onSubmit(e) {
        e.preventDefault();
          axios.get('http://localhost:3000/forgot_password_link_send?email='+this.state.email)
          .then(function (response) {
            console.log(response);
            if (response.status == 200){
                alert("Email sending successfully")
            }
            else{
                alert("Email doesn't exist")
            }
        })
        }

    render(){
        return(
            <div className="container">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <form onSubmit={this.onSubmit} name="myForm">
                <div className="form-group">
                    <label>Enter your email  </label>
                    <input type="text" className="form-control" name="email" value={this.state.email}
                    onChange={this.onChangeemail} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
                </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

export default ForgotPassword