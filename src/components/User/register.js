import React from 'react';
import axios from 'axios';

class Register extends React.Component{
    constructor(props) {
      super(props);
      this.onChangename           = this.onChangename.bind(this);
      this.onChangeemail          = this.onChangeemail.bind(this);
      this.onChangepassword       = this.onChangepassword.bind(this);
      this.onSubmit               = this.onSubmit.bind(this);
      this.state = {
          name: '',
          email: '',
          password:''
      }
  }
  
  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    if(this.validateForm() == ""){
    }
    else{
      axios.post('http://localhost:3000/users/', obj)
      .then(function (response) {
        console.log(response);
        if (response.status == 201){
          alert("User registered successfully")
          window.location.href = '/login'
        }
        else{
          alert("User is not registered")
          window.location.href = '/user/register/'
        }
      })
      }
  }

  validateForm() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var username = document.forms["myForm"]["username"].value;
    if(username === ""){  
      alert("Name can't be empty");  
      return false;  
      }
    else if (email === "") {
      alert("Email can't be empty");
      return false;
    }
    else if(password === ""){  
      alert("Password can't be empty");  
      return false;  
      }

  }
  
  
  render(){
      return(
    <div className="container">
    <div className="row">
          <div className='col-md-3'></div>
          <div className='col-md-6'>
          <div style={{marginTop: 10}}>
          <h3>Register as a new user</h3>
              <form onSubmit={this.onSubmit} name="myForm">
                  <div className="form-group">
                      <label>Name  </label>
                      <input type="text" className="form-control" name="username" value={this.state.name}
                      onChange={this.onChangename} />
                  </div>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control"  name="email" value={this.state.email}
                      onChange={this.onChangeemail} />
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" value={this.state.password}
                      onChange={this.onChangepassword} />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register" className="btn btn-primary"/>
                  </div>
              </form>
           </div>
          </div>
          <div className='col-md-3'></div>
        </div>
        </div>
  
      )
  }
  }
  
  
  export default Register;