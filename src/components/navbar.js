import React from 'react'
import { BrowserRouter as Router,Link,Switch, Route,Redirect } from 'react-router-dom'
import ForgotPassword from './User/forgot_password'
import Login from './User/login';
import ChangePassword from './User/change_password'
import Register from './User/register'
import ProductHome from './Product/home'
import ProductEdit from './Product/edit'
import ProductCreate from './Product/create'
import ProductDelete from './Product/delete'
import BrandEdit from './Brand/edit'
import BrandDelete from './Brand/delete'
import Brandlist from './Brand/brandlist'
import BrandCreate from './Brand/create'
import Contactlist from './Contact/contactlist'
import ContactCreate from './Contact/create'
import ContactEdit from './Contact/edit'
import ContactDelete from './Contact/delete'


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
               <button onClick={this.logout} className="btn btn-danger" style={{position: "absolute",right: "10px"}}>Logout</button>
             </ul>
           </div>
         </nav> <br/>
         <Switch>
             <Route exact path='/home' component={ ProductHome } />
             <Route path='/user/register/' component={ Register } />
             <Route path='/product/create' component={ ProductCreate } />
             <Route path='/product/edit/:id' component={ ProductEdit } />
             <Route path='/product/delete/:id' component={ ProductDelete } />
             <Route path='/brand/brandlist' component={ Brandlist } />
             <Route path='/brand/create/' component={ BrandCreate } />
             <Route path='/brand/edit/:id' component={ BrandEdit }/>
             <Route path='/brand/delete/:id' component={ BrandDelete }/>
             <Route path='/contact/contactlist' component={ Contactlist } />
             <Route path='/contact/create/' component={ ContactCreate } />
             <Route path='/contact/edit/:id' component={ ContactEdit }/>
             <Route path='/contact/delete/:id' component={ ContactDelete }/>  
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
        <Route path='/User/forgot_password' component={ ForgotPassword } />
        <Route path='/User/change_password' component={ ChangePassword } />
      </Switch>
      </div>
      </Router>
        );
    }
}


export default Navbar