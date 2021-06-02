import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Tasks&BusinessTravels</h1>
        <div className="containerHeader">
        <ul className="navbarHeader">
            <li><NavLink id="NL" to="/help" activeClassName="is-active" >Help</NavLink></li>
            <li><NavLink id="NL" to="/contact" activeClassName="is-active">Contact</NavLink></li>
            <li><NavLink id="NL" to="/addbusinesstravel" activeClassName="is-active">Add Business Travel</NavLink></li>
            <li><NavLink id="NL" to="/addtask" activeClassName="is-active">Add Task</NavLink></li>
            <li><NavLink id="NL" to="/" activeClassName="is-active" exact={true}>Home Page</NavLink></li>
        </ul>
        </div>
        
    </header>
)


export default Header