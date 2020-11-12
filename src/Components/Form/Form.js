import React, { Component } from "react";

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
    
    render() {
      return (
        <div className="Home">
          <h1>Form</h1>
          <form onSubmit={this.handleSubmit}>
              <label>
                  Image URL:
                  <br></br>
                  <input type="text" onChange={(e) => this.formChange(e)} name="imgurl"/>
              </label>
              <br></br>
              <label>
                  Product Name:
                  <br></br>
                  <input type="text" onChange={(e) => this.formChange(e)} name="name"/>
              </label>
              <br></br>
              <label>
                  Price:
                  <br></br>
                  <input type="number" onChange={(e) => this.formChange(e)} name="price"/>
              </label>
          </form>
            
          <button onClick={this.resetForm} type="button">Cancel</button>
          <button onClick={this.submitForm} type="submit">Add to Inventory</button>
          <input type="submit" value="Add to Inventory" />
        </div>
      );
    }
  }

export default Form;