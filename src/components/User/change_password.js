import React from 'react'
import axios from 'axios'

class ChangePassword extends React.Component{
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangenew_password = this.onChangenew_password.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            new_password: null,
            password: null,
            email: null
        }
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
            });
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
            
            componentDidMount()
            {
                this.setState({
                    token : window.location.href
                    });
            }


      validateForm() {
        var email = document.forms["myForm"]["email"].value;
        var password = document.forms["myForm"]["password"].value;
        var new_password = document.forms["myForm"]["new_password"].value;
        if(email === ""){  
            alert("Email can't be empty");  
            return false;  
            }
        else if(password === ""){  
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
            email: this.state.email,
            password: this.state.password,
            new_password: this.state.new_password,
            token: this.state.token.split('/')[5]
        }
            if(this.validateForm() == ""){
                return false
            }
          else{
          axios.post('http://localhost:3000/password/reset',obj)
          .then(function (response) {
            console.log("mari");
            if (response.status == 200){
                alert("Password updated successfully")
                window.location.href = '/user/change_password'
            }
            })
            .catch(function (error) {
                console.log(error);
                if(error){
                    alert(error.response.data.error)
                }
              });
        }
        }

    render(){
        return(
            <div className="container">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2>Change Password</h2>
                <form onSubmit={this.onSubmit} name="myForm">
                <div className="form-group">
                    <label>Email  </label>
                    <input type="text" className="form-control" name="email" 
                    onChange={this.onChangeEmail} />
                </div>
                <div className="form-group">
                    <label>New Password  </label>
                    <input type="text" className="form-control" name="password" 
                    onChange={this.onChangepassword} />
                </div>
                <div className="form-group">
                    <label>Re-Enter your new Password  </label>
                    <input type="text" className="form-control" name="new_password" 
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