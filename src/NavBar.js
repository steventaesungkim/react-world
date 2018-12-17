import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>{
    return(
        <div>
            <div><Link to = "/">Home</Link></div>
            <div><Link to = "/about">About</Link></div>
            <div><Link to ="/world">World</Link></div>
        </div>
    );
};

export default NavBar;
