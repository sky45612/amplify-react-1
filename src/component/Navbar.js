import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as  AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { NavbarNavigation } from './NavbarNavigation';
import './Navbar.css';


// use for maintaining Navigation bar
function Navbar() {
        
    // const showSideBar = () => setSidebar(!sidebar);

    const [sidebar, setSidebar] = useState(false);
    const iconStyle = {marginLeft: '1rem'};
    function showSideBar() {
        
        setSidebar(!sidebar);   
        // console.log(sidebar);                
        if (!sidebar) {
            // console.log(sidebar);
            document.getElementById("navMenuItemList-id").style.display="block";
        }
        else {
            document.getElementById("navMenuItemList-id").style.display="none";
        }
        return sidebar;
    }  
    

    return (
        <>
            <div className='navBar'>
                <Link to='#' className='menuBar'>
                    <FaIcons.FaBars className='navBarIcon' onClick={showSideBar}/>
                </Link>
            </div>
            <div id='navMenuDiv-id' className='navMenuDiv'>
                <nav className={sidebar ? 'navMenu-open' : 'navMenu-closed'}>                
                    <ul id='navMenuItemList-id' className='navMenuItemList'>
                        {/* <li className='navMenuItem'>
                            <Link to="#" className='navMenu'>
                                <AiIcons.AiOutlineClose className='navText'/>
                            </Link>
                        </li> */}
                        {/* <li className='navMenuItem'>
                            <Link to="/" className="navText"><AiIcons.AiFillHome /><span style={iconStyle}>Home</span></Link>
                        </li>
                        <li className='navMenuItem'>
                            <Link to="/bingo" className="navText"><IoIcons.IoMdCloseCircleOutline /><span style={iconStyle}>Bingo</span></Link>
                        </li> */}
                        {NavbarNavigation.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link className="navText" to={item.path}>
                                        {item.icon}
                                        <span style={iconStyle}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>        
        </>
        
        
    );
}

export default Navbar;