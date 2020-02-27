import React from 'react'
import axios from 'axios'

class Edit extends React.Component{
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

      componentDidMount(){
        axios.get('http://localhost:3000/find_contact?id='+this.props.match.params.id)
        .then(response => {
              console.log(response);
              this.setState({ 
                  name: response.data.name,
                  address: response.data.address,
                  city: response.data.city,
                  mobile: response.data.mobile,
                  pincode: response.data.pincode,
                  description: response.data.description
                });
            })
            .catch(function (error) {
                console.log(error);
            })
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          mobile: this.state.mobile,
          pincode: this.state.pincode,
          description: this.state.description
        };
          axios.post('http://localhost:3000/contact_update/?id='+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
            alert("contact updated successfully")
            window.location.href = '/contact/contactlist'
      }




    render(){
        return(
<div className="container">
  <div className="row">
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <div style={{marginTop: 10}}>
        <h3>Edit Contact</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                        <label>Name  </label>
                        <input type="text" className="form-control" name="fname" value={this.state.name}
                        onChange={this.onChangename} />
                    </div>
                    <div className="form-group">
                        <label>address  </label>
                        <input type="text" className="form-control" name="faddress" value={this.state.address}
                        onChange={this.onChangeaddress} />
                    </div>
                    <div className="form-group">
                        <label>city  </label>
                        <input type="text" className="form-control" name="fcity" value={this.state.city}
                        onChange={this.onChangecity} />
                    </div>
                    <div className="form-group">
                        <label>mobile  </label>
                        <input type="text" className="form-control" name="fmobile" value={this.state.mobile}
                        onChange={this.onChangemobile} />
                    </div>
                    <div className="form-group">
                        <label>pincode  </label>
                        <input type="text" className="form-control" name="fpincode" value={this.state.pincode}
                        onChange={this.onChangepincode} />
                    </div>
                    <div className="form-group">
                        <label>Description  </label>
                        <input type="text" className="form-control"  value={this.state.description}
                        onChange={this.onChangedescription} />
                    </div>
                <div className="form-group">
                    <input type="submit" value="submit" className="btn btn-primary"/>
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

export default Edit;