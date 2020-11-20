import React, { Component } from "react";
import Product from '../Product/Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
      return (
        <div className="App">
            <h1>Dashboard</h1>
            <Product mapInventory = {this.props.mapInventory} />
            
        </div>
      );
    }
  }

export default Dashboard;