import React from 'react'
import axios from 'axios'

class ChangePassword extends React.Component{
    constructor(props){
        super(props);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangenew_password = this.onChangenew_password.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            new_password: null,
            password: null
        }
    }

        onChangepassword(e) {
            this.setState({
                password: e.target.value
                });
            }    
        
            onChangenew_password(e) {
                this.setState({
                    new_password: e.target.value
                    });
                }    
            



      validateForm() {
        var password = document.forms["myForm"]["password"].value;
        var new_password = document.forms["myForm"]["new_password"].value;
        if(password === ""){  
          alert("New Password can't be empty");  
          return false;  
          }
          else if(new_password === ""){
              alert("Re-enter password can't be empty");
              return false;
          }
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
            user_id : localStorage.getItem('user_id'),
            password: this.state.password,
            new_password: this.state.new_password
        }
        if(this.validateForm() == ""){
            return false
          }
          else{
          axios.post('http://localhost:3000/change_password',obj)
          .then(function (response) {
            console.log(response);
            if (response.status == 200){
                alert("Password updated successfully")
                window.location.href = '/user/change_password'
            }
            else{
                alert("New password and Re-enter password doesn't match")
            }
        })}
        }

    render(){
        return(
            <div className="container">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2>Change Password</h2>
                <form onSubmit={this.onSubmit} name="myForm">
                <div className="form-group">
                    <label>New Password  </label>
                    <input type="text" className="form-control" name="password" value={this.state.password}
                    onChange={this.onChangepassword} />
                </div>
                <div className="form-group">
                    <label>Re-Enter your new Password  </label>
                    <input type="text" className="form-control" name="new_password" value={this.state.new_password}
                    onChange={this.onChangenew_password} />
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

export default ChangePassword