import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            user_id:''
        };   
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    handleClick(){
        window.location.href="/user/register";
    }
 

    submit(e){
        e.preventDefault();
        if(this.validateForm() == ""){
        }
        else{
        axios.post('http://localhost:3000/auth/login',this.state)
          .then((response) => {
            console.log(response);
            if(response.status == 200){
                alert("You have login successfully")
                window.location.href = '/home'
            }
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_id',response.data.user_id)
          })
          .catch(function (error) {
            console.log(error);
            if(error){
                alert(error.response.data.error)
            }
          })}
    }

    validateForm() {
        var email = document.forms["myForm"]["email"].value;
        var password = document.forms["myForm"]["password"].value;
        if (email === "") {
          alert("Email can't be empty");
          return false;
        }
        else if(password === ""){  
          alert("Password can't be empty");
          return false;  
          }
      }

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                        <form onSubmit={this.submit} name="myForm">
                            <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={this.handleChange} required/>
                            </div>
                            <button className="btn btn-primary" onClick={this.submit}>Sign in</button><br/><br/>              
                        </form>
                        
                        <NavLink to={"/user/forgot_password"} className="btn btn-warning">Forgot Password ?</NavLink>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>

 
            );
        }
    



}

export default Login;