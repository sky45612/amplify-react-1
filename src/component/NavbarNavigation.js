import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

// use for maintaining long list of navigation data

export const NavbarNavigation = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Bingo',
        path: '/bingo',
        icon: <IoIcons.IoMdCloseCircleOutline />
    }
];