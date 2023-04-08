import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as  AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavbarNavigation } from './NavbarNavigation';
import './Navbar.css';

// use for maintaining Navigation bar
function Navbar() {
        
    // const showSideBar = () => setSidebar(!sidebar);

    const [sidebar, setSidebar] = useState(false);
    function showSideBar() {
        // console.log(sidebar);
        setSidebar(!sidebar);

        return sidebar;
    }  
    

    return (
        <>
            <div className='navBar'>
                <Link to='#' className='menuBar'>
                    <FaIcons.FaBars className='navBarIcon' onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'navMenu-open' : 'navMenu-closed'}>
                <ul className='navMenuItemList' onClick={showSideBar}>
                    {/* <li className='navMenuItem'>
                        <Link to="#" className='navMenu'>
                            <AiIcons.AiOutlineClose className='navText'/>
                        </Link>
                    </li> */}
                    <li className='navMenuItem'>
                        <Link to="/" className="navText">Home</Link>
                    </li>
                    <li className='navMenuItem'>
                        <Link to="/bingo" className="navText">Bingo</Link>
                    </li>
                </ul>
            </nav>

        </>
        
        
    );
}

export default Navbar;