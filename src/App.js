import React, { Component } from "react";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import FormTwo from './Components/FormTwo/FormTwo'
import Header from './Components/Header/Header'
import axios from 'axios'
import {Link} from 'react-router-dom';

class App extends Component {
  constructor() {
      super();
      this.state = {
        inventory: [],
        url: '',
        name: '',
        price: 0
        
      };
    
    this.formChange = this.formChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.postRequest = this.postRequest.bind(this)
    this.deleteRequest = this.deleteRequest.bind(this)
    }

  componentDidMount () {
    this.getRequest()
  }

  getRequest () {
    axios.get('/api/inventory')
    .then (res=>{
      this.setState({
        inventory: res.data
      })
    })
  }

  resetForm = () => {
      this.setState(this.baseState)
    }

  formChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit(e){
    e.preventDefault()
}

postRequest() {
  axios
    .post('/api/inventory', {
      url: this.state.url,
      name: this.state.name,
      price: this.state.price
    })
    .then((res) => {
      console.log(res.data);
      this.setState({
        inventory: [res.data, ...this.state.inventory],
      });
    })
    .catch((err) => console.log(err));
}

deleteRequest(id) {
  axios
  .delete(`/api/inventory/${ id }`).then( res => {
    this.setState({ inventory: res.data });
  });
}


  render() {
    let mapInventory = this.state.inventory.map((product) => (
      <div className="mapInventory">
        <li>{product.id}</li> 
        <li>{product.name}</li>
        <li>{product.price}</li> 
        <li>{product.url}</li>
        <button type="button"
        onClick={()=>{
          this.deleteRequest(product.id);
          this.getRequest()}}>
            Delete
            </button>
        <Link to='/savechanges'>Edit</Link>

      </div>
    ));
    return (
      <div className="App">
        <Header />
        <Dashboard 
        mapInventory={mapInventory}
        componentDidMount = {this.componentDidMount} />
        <Form
        formChange = {this.formChange}
        resetForm = {this.resetForm}
        handleSubmit = {this.handleSubmit}
        componentDidMount = {this.componentDidMount}
        postRequest = {this.postRequest}
        url = {this.state.url}
        name = {this.state.name}
        price = {this.state.price} />
        <FormTwo />
      </div>
    );
  }
}
export default App;