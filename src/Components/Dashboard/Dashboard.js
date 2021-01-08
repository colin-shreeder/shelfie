import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Dashboard/Dashboard.css';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    axios.get(`/api/getproducts`).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  };

  deleteRequest(id) {
    axios
    .delete(`/api/deleteproduct/${ id }`).then( res => {
      this.setState({ inventory: res.data });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const displayProducts = this.state.products.map((e) => {
      return (
        <div className='unknowntwo' key={e.id}>

          
          <div className='container'>



            <div className='image'>
                    <img src={e.img} width="750" height="auto" />
                </div>
            
            <div className='postbody'>
              <div className='community'>
                {e.name}
                  <br></br>
                {e.price}
                  <br></br>
                  <button onClick={()=>{
                      this.deleteRequest(e.id);
                      this.componentDidMount()}}>
                    Delete
                  </button>
                  <Link to={`/edit/${e.id}`}><button>Edit</button></Link>
              </div>
                
                
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="dashboard">
        
        <br></br>

        {displayProducts}

      </div>
    );
  }
}

const mapStatetoProps = (state) => state;

export default Dashboard;
