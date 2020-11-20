import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Product extends Component {
    render (){
        return <div>
            <h1>Product</h1>
            <h2>{this.props.mapInventory}
            </h2> 
            </div>
    }
}

export default Product;