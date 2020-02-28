import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {api} from '../../api'

class BrandCreate extends React.Component{
    constructor(props){
        super(props);
        this.onChangename           = this.onChangename.bind(this);
        this.onChangebrandtype      = this.onChangebrandtype.bind(this);
        this.onChangedescription    = this.onChangedescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            brandtype: '',
            description: ''
        }
    }
    onChangename(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangebrandtype(e) {
        this.setState({
          brandtype: e.target.value
        });
      }
      onChangedescription(e) {
        this.setState({
          description: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.state.name,
          brand_type: this.state.brandtype,
          description: this.state.description
        };
        if(this.validateForm() == ""){
        }
        else{
          api.post('brand_create',obj)
          .then(function (response) {
            console.log(response);
            if(response.status == 200){
              alert("Brand Created")
              window.location.href = '/brand/brandlist'
            }
          })
          .catch(function (error) {
            console.log(error);
            if(error){
              alert("Brand not created")
            }
          });
          }
        }

      validateForm() {
        var name = document.forms["myForm"]["fname"].value;
        var brand_type = document.forms["myForm"]["fbrand_type"].value;
        if(name === ""){  
          alert("Name can't be empty");  
          return false;  
          }
        else if (brand_type === "") {
          alert("Brand Type can't be empty");
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
        <h3>Add New brand</h3>
            <form onSubmit={this.onSubmit} name="myForm">
                <div className="form-group">
                    <label>Name  </label>
                    <input type="text" className="form-control" name="fname" value={this.state.name}
                    onChange={this.onChangename} />
                </div>
                <div className="form-group">
                    <label>brandtype  </label>
                    <input type="text" className="form-control" name="fbrand_type" value={this.state.brandtype}
                    onChange={this.onChangebrandtype} />
                </div>
                <div className="form-group">
                    <label>description  </label>
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