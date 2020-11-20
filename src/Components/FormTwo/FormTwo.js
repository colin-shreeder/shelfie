import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          price: 0,
          imgurl: ""
        };
        this.baseState = {
            name: "",
            price: 0,
            imgurl: ""
        }
      }

    
    
    render() {
      return (
        <div className="Home">
          <h1>Form</h1>
          <form onSubmit={this.props.handleSubmit}>
              <label>
                  Image URL:
                  <br></br>
                  <input type="text" onChange={(e) => this.props.formChange(e)} name="url"/>
              </label>
              <br></br>
              <label>
                  Product Name:
                  <br></br>
                  <input type="text" onChange={(e) => this.props.formChange(e)} name="name"/>
              </label>
              <br></br>
              <label>
                  Price:
                  <br></br>
                  <input type="number" onChange={(e) => this.props.formChange(e)} name="price"/>
              </label>
          </form>
            
          <button onClick={this.resetForm} type="button">Cancel</button>
          <button type="submit"
            onClick={()=>{
            //this.props.putRequest();
            //reset form values function
            this.props.handleSubmit();
            this.props.componentDidMount();}}>
              Save Changes 
              </button>
        </div>
      );
    }
  }

export default Form;