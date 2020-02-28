import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

class Create extends React.Component{
  constructor(props) {
    super(props);
    this.onChangename               = this.onChangename.bind(this);
    this.onChangequantity           = this.onChangequantity.bind(this);
    this.onChangeprice              = this.onChangeprice.bind(this);
    this.onChangesize               = this.onChangesize.bind(this);
    this.onChangecolor              = this.onChangecolor.bind(this);
    this.onChangegender             = this.onChangegender.bind(this);
    this.onChangespecification      = this.onChangespecification.bind(this);
    this.onChangediscount           = this.onChangediscount.bind(this);
    this.onChangecategory           = this.onChangecategory.bind(this);
    this.onChangeoriginal_price     = this.onChangeoriginal_price.bind(this);
    this.onChangeselling_price      = this.onChangeselling_price.bind(this);
    this.onChangebrand_id           = this.onChangebrand_id.bind(this);
    this.onChangeuser_id            = this.onChangeuser_id.bind(this);
    this.onSubmit                   = this.onSubmit.bind(this);
    this.state = {
        name: '',
        quantity: '',
        price: '',
        size: '',
        color: '',
        gender: '',
        selectedOption: '',
        options:[],
        specification: '',
        discount: '',
        category: '',
        original_price: '',
        selling_price: '',
        brand_id:'',
        user_id: localStorage.getItem("user_id"),
        stock:''
    }
}

onChangesize(e) {
  this.setState({
    size: e.target.value
  });
}


onChangeuser_id(e) {
  this.setState({
    user_id: e.target.value
  });
}

onChangename(e) {
  this.setState({
    name: e.target.value
  });
}
onChangequantity(e) {
  this.setState({
    quantity: e.target.value
  })
}
onChangeprice(e) {
  this.setState({
    price: e.target.value
  })
}

onChangecolor(e) {
  this.setState({
    color: e.target.value
  })
}
onChangegender(e) {
  this.setState({
    gender: e.target.value
  })
}
onChangespecification(e) {
  this.setState({
    specification: e.target.value
  })
}
onChangediscount(e) {
  this.setState({
    discount: e.target.value
  })
}
onChangecategory(e) {
  this.setState({
    category: e.target.value
  })
}
onChangeoriginal_price(e) {
  this.setState({
    original_price: e.target.value
  })
}
onChangeselling_price(e) {
  this.setState({
    selling_price: e.target.value
  })
}
onChangebrand_id(e) {
  this.setState({
    brand_id: e.target.value
  })
}

handleChange = selectedOption => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
};

validateForm() {
  var name = document.forms["myForm"]["fname"].value;
  var brand = document.forms["myForm"]["fbrand"].value;
  var quantity = document.forms["myForm"]["fquantity"].value;
  var price = document.forms["myForm"]["fprice"].value;
  if (name === "") {
    alert("Name can't be blank");
    return false;
  }
  else if(brand === ""){  
    alert("You must select any one of the brand");  
    return false;  
  }
  else if(quantity === ""){  
      alert("Quantity can't be blank");  
      return false;  
  }
  else if(price === ""){  
    alert("Price can't be blank");  
    return false;  
  } 
}


onSubmit(e) {
  e.preventDefault();
  const obj = {
    name: this.state.name,
    price: this.state.price,
    size: this.state.size,
    color: this.state.color,
    gender: this.state.gender,
    specification: this.state.specification,
    user_id: this.state.user_id,
    brand_id: this.state.selectedOption.value,
    discount: this.state.discount,
    selling_price: this.state.selling_price,
    category: this.state.category,
    quantity: this.state.quantity
  };
  if(this.validateForm() == ""){
    return false
  }
  else{
    axios.post('http://localhost:3000/product_create/', obj)
    .then((response) => {
      console.log(response);
      if(response.status == 200){
          alert("Product created successfully")
          window.location.href = '/home'
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

componentDidMount(){
  let tempOptions = []
  const token = localStorage.getItem('token')
  axios.get("http://localhost:3000/brands/?id="+localStorage.getItem('user_id'),{
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
    .then(res => {
      console.log(res)
      res.data.map(i => tempOptions.push({"value":i.id, "label":i.name}))
      this.setState({ options: tempOptions })
    })
}


render(){
    return(
  <div className="container">
  <div className="row">
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <div style={{marginTop: 10}}>
        <h3>Add New Product</h3>
            <form onSubmit={this.onSubmit} name="myForm">
                <div className="form-group">
                    <label>Name  </label>
                    <input type="text" name="fname" className="form-control" value={this.state.name}
                    onChange={this.onChangename} />
                </div>
                <div className="form-group">
                <label>Quantity</label>
                <input type="number" name="fquantity" className="form-control" value={this.state.quantity}
                    onChange={this.onChangequantity} />
                </div>
                <div className="form-group">
                <label>Size</label>
                  <select id="dropdown" onChange={this.onChangesize}>
                    <option>Select Your Size</option>
                    <option value="28">28</option>
                    <option value="30">30</option>
                    <option value="32">32</option>
                    <option value="34">34</option>
                  </select>
                </div>
                <div className="form-group">
                    <label>price</label>
                    <input type="number" name="fprice" className="form-control" value={this.state.price}
                    onChange={this.onChangeprice} />
                </div>
                <div className="form-group">
                    <label>discount</label>
                    <input type="number" className="form-control" value={this.state.discount}
                    onChange={this.onChangediscount} />
                </div>
                <div className="form-group">
                    <label>color</label>
                    <input type="text" className="form-control" value={this.state.color}
                    onChange={this.onChangecolor} />
                </div>
                <div className="form-group">
                    <label>selling_price</label>
                    <input type="number" className="form-control" value={this.state.selling_price}
                    onChange={this.onChangeselling_price} />
                </div>
                <div className="form-group">
                <label>gender</label>
                  <select id="dropdown" onChange={this.onChangegender} value={this.state.gender}>
                    <option>Select gender</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="kids">kids</option>
                  </select>
                </div>
                <div className="form-group">
                <label>specification</label>
                  <select id="dropdown" onChange={this.onChangespecification} value={this.state.specification}>
                    <option>Select specification</option>
                    <option value="regular fit">regular fit</option>
                    <option value="slim fit">slim fit</option>
                    <option value="normal">normal</option>
                  </select>
                </div>
                <div className="form-group">
                    <label>Brand name</label>
                    <Select value={this.state.selectedOption} name="fbrand" onChange={this.handleChange}
                      options={this.state.options} />
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


export default Create;