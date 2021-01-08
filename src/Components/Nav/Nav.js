import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../Nav/Nav.css'

class Nav extends Component {
    render (){
        return (
        <div> 
            <Link to='/dashboard' className="links"><button>Dashboard</button></Link>
            <Link to='/' className="links"><button>Add Inventory</button></Link>
        </div>
        )
    }
}

export default Nav;