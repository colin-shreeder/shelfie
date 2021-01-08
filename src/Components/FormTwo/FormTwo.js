import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';


class FormTwo extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        img: '',
        name: '',
        price: '',
        product: []
    }
}

componentDidMount() {
  this.getPost();
}

getPost () {
  let id = this.props.match.params.postid;
  console.log(id);
  axios
    .get(`/api/getproduct/${id}`)
    .then(res => {
        const product = res.data[0]
      this.setState({ 
          img: product.img,
          name: product.name,
          price: product.price,
       });
    })
    .catch(err => console.log(err));
}
  
  
handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
    })
}

handleSubmit(e){
  e.preventDefault()
}

editById(img, name, price) {
  let id = this.props.match.params.postid;
  axios
    .put(`/api/editproduct/${id}`, { img, name, price})
    .then(res => {
      console.log(res.data);
      this.setState({ products: res.data });
    })
    .catch(err => console.log(err));
}

    render() {
      let id = this.props.match.params.postid
      let {img, name, price}=this.state
      return (
        <div className="Form">
          <h1>Edit</h1>
          <form onSubmit={this.handleSubmit}>
              <label>
                  Image URL:
                  <br></br>
                  <input type="text" defaultValue={img} onChange={(e) => this.handleChange(e)} name="img"/>
              </label>

              <br></br>
              <label>
                  Product Name:
                  <br></br>
                  <input type="text" defaultValue={name} onChange={(e) => this.handleChange(e)} name="name"/>
              </label>
              <br></br>
              <label>
                  Price:
                  <br></br>
                  <input type="text" defaultValue={price} onChange={(e) => this.handleChange(e)} name="price"/>
              </label>
          </form>


          <Link to='/dashboard' className="links">
            <button>Cancel</button>
            </Link>
         
            <Link to='/dashboard' className="links">
              <button type="submit"
                onClick={(e)=>{
                this.editById(img, name, price);
                }}>
                  Save
              </button> 
            </Link>

            
            
        </div>
      );
    }
  }

  export default FormTwo;