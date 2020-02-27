import React from 'react'
import { BrowserRouter as Router,Link,Switch, Route,Redirect } from 'react-router-dom'
import Brandlist from './Brand/brandlist';
import BrandCreate from './Brand/create';
import Login from './login';
import Home from './home'
import BrandEdit from './Brand/edit'
import Edit from './Product/edit';
import Create from './Product/create'
import Delete from './Product/delete'
import BrandDelete from './Brand/delete'
import Register from './User/register'
import Contactlist from './Contact/contactlist'
import ContactCreate from './Contact/create'
import ContactEdit from './Contact/edit'
import ContactDelete from './Contact/delete'
import ForgotPassword from './User/forgot_password'
import ChangePassword from './User/change_password'


const isLoggedIn = ()=>{
    const token =  localStorage.getItem('token');
    return token ? true : false;
  }

class Navbar extends React.Component{

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
  
  render(){
        return(
       isLoggedIn() ? 
       <Router>
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
             <li className="nav-item">
                 <Link to={'/home'} className="nav-link">Product</Link>
               </li>
               <li className="nav-item">
                 <Link to={'/brand/brandlist'} className="nav-link">Brands</Link>
               </li>
               <li className="nav-item">
                 <Link to={'/contact/contactlist'} className="nav-link">Contact</Link>
               </li>
               <li className="nav-item">
                 <Link to={'/user/change_password'} className="nav-link">Change Password</Link>
               </li>
               <i class="fa fa-sign-out" onClick={this.logout} style={{fontSize:"24px",position: "absolute",right: "40px",bottom: "20px"}}></i>
             </ul>
           </div>
         </nav> <br/>
         <Switch>
             <Route exact path='/home' component={ Home } />
             <Route path='/user/register/' component={ Register } />
             <Route path='/product/create' component={ Create } />
             <Route path='/edit/:id' component={ Edit } />
             <Route path='/delete/:id' component={ Delete } />
             <Route path='/brand/brandlist' component={ Brandlist } />
             <Route path='/brand/create/' component={ BrandCreate } />
             <Route path='/brand/edit/:id' component={ BrandEdit }/>
             <Route path='/brand/delete/:id' component={ BrandDelete }/>
             <Route path='/contact/contactlist' component={ Contactlist } />
             <Route path='/contact/create/' component={ ContactCreate } />
             <Route path='/contact/edit/:id' component={ ContactEdit }/>
             <Route path='/contact/delete/:id' component={ ContactDelete }/>
             <Route path='/user/change_password' component={ ChangePassword }/>
             <Route path="*" to="" />
         </Switch>
       </div>
     </Router>
      :
      <Router>
        <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
             <li className="nav-item">
                 <Link to={'/user/register'} className="nav-link">Register</Link>
               </li>
               <li className="nav-item">
                 <Link to={'/login'} className="nav-link">Login</Link>
               </li>
             </ul>
           </div>
         </nav> <br/>
      <Switch>
        <Route path='/user/register/' component={ Register } />
        <Route path='/login/' component={ Login } />
        <Route path='/user/forgot_password/' component={ ForgotPassword } />
      </Switch>
      </div>
      </Router>
        );
    }
}


export default Navbar