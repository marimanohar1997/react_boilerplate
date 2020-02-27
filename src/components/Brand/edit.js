import React from 'react'
import axios from 'axios'

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.onChangename           = this.onChangename.bind(this);
        this.onChangebrandtype          = this.onChangebrandtype.bind(this);
        this.onChangedescription           = this.onChangedescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            brand_type: '',
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
          brand_type: e.target.value
        });
      }
      onChangedescription(e) {
        this.setState({
          description: e.target.value
        });
      }
      componentDidMount(){
        axios.get('http://localhost:3000/brand_list?id='+this.props.match.params.id)
        .then(response => {
              console.log(response);
              this.setState({ 
                  name: response.data.name,
                  brand_type: response.data.brand_type,
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
          brand_type: this.state.brand_type,
          description: this.state.description
        };
          axios.post('http://localhost:3000/brand_update/?id='+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
            alert("brand updated successfully")
            window.location.href = '/brand/brandlist'
      }




    render(){
        return(
<div className="container">
  <div className="row">
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <div style={{marginTop: 10}}>
        <h3>Edit brand</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name  </label>
                    <input type="text" className="form-control" value={this.state.name}
                    onChange={this.onChangename} />
                </div>
                <div className="form-group">
                    <label>Brand Type  </label>
                    <input type="text" className="form-control" value={this.state.brand_type}
                    onChange={this.onChangebrandtype} />
                </div>
                <div className="form-group">
                    <label>Description  </label>
                    <input type="text" className="form-control" value={this.state.description}
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