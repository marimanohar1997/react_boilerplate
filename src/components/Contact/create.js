import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class BrandCreate extends React.Component{
    constructor(props){
        super(props);
        this.onChangename           = this.onChangename.bind(this);
        this.onChangeaddress           = this.onChangeaddress.bind(this);
        this.onChangecity           = this.onChangecity.bind(this);
        this.onChangemobile           = this.onChangemobile.bind(this);
        this.onChangedescription           = this.onChangedescription.bind(this);
        this.onChangepincode           = this.onChangepincode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            address: '',
            city: '',
            mobile: '',
            description: '',
            pincode: ''
        }
    }
    onChangename(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeaddress(e) {
        this.setState({
          address: e.target.value
        });
      }
      onChangecity(e) {
        this.setState({
          city: e.target.value
        });
      }
      onChangemobile(e) {
        this.setState({
          mobile: e.target.value
        });
      }
      onChangedescription(e) {
        this.setState({
          description: e.target.value
        });
      }
      onChangepincode(e) {
        this.setState({
          pincode: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.state.name,
          address: this.state.address,
          mobile: this.state.mobile,
          city: this.state.city,
          pincode: this.state.pincode,
          description: this.state.description
        };
        if(this.validateForm() == ""){
        }
        else{
          api.post('contact_create',obj)
          .then(function (response) {
            console.log(response);
            if(response.status == 200){
              alert("Contact created successfully")
              window.location.href = "/contact/contactlist"
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

      validateForm() {
        var name = document.forms["myForm"]["fname"].value;
        if(name === ""){  
          alert("Name can't be empty");  
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
            <h3>Add New Contact</h3>
                <form onSubmit={this.onSubmit} name="myForm">
                    <div className="form-group">
                        <label>Name  </label>
                        <input type="text" className="form-control" name="fname" value={this.state.name}
                        onChange={this.onChangename} />
                    </div>
                    <div className="form-group">
                        <label>Address  </label>
                        <input type="text" className="form-control" name="faddress" value={this.state.address}
                        onChange={this.onChangeaddress} />
                    </div>
                    <div className="form-group">
                        <label>City  </label>
                        <input type="text" className="form-control" name="fcity" value={this.state.city}
                        onChange={this.onChangecity} />
                    </div>
                    <div className="form-group">
                        <label>Mobile  </label>
                        <input type="number" className="form-control" name="fmobile" value={this.state.mobile}
                        onChange={this.onChangemobile} />
                    </div>
                    <div className="form-group">
                        <label>Pincode  </label>
                        <input type="number" className="form-control" name="fpincode" value={this.state.pincode}
                        onChange={this.onChangepincode} />
                    </div>
                    <div className="form-group">
                        <label>Remarks  </label>
                        <input type="text" className="form-control"  value={this.state.description}
                        onChange={this.onChangedescription} />
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
        );
    }
}


export default BrandCreate