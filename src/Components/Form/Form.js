import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';


class Form extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        img: '',
        name: '',
        price: ''
    }
}

addProduct(img, name, price) {
   axios
     .post(`/api/addproduct`, {img, name, price})
     .then(res => {
       this.setState({ products: res.data });
     })
     .then(() => {
       this.setState({
         redirect: true
       });
     })
     .catch(err => console.log(err));
     this.props.history.push('/dashboard')
 }
  
  
handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
    })
}

handleSubmit(e){
  e.preventDefault()
}

    render() {
      let {img, name, price}=this.state
      return (
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
              <label>
                  Image URL:
                  <br></br>
                  <input type="text" placeholder="Image URL" onChange={(e) => this.handleChange(e)} name="img"/>
              </label>

              <br></br>
              <label>
                  Product Name:
                  <br></br>
                  <input type="text" placeholder="Product Name" onChange={(e) => this.handleChange(e)} name="name"/>
              </label>
              <br></br>
              <label>
                  Price:
                  <br></br>
                  <input type="text" placeholder="Product Price" onChange={(e) => this.handleChange(e)} name="price"/>
              </label>
          </form>


            <button>Cancel</button>
         
            <Link to='/dashboard' className="links"> 
              <button type="submit"
                onClick={(e)=>{
                this.addProduct(img, name, price);
                this.handleSubmit(e);}}>
                  Add to Inventory
              </button> 
            </Link>

            
            
        </div>
      );
    }
  }

  export default Form;