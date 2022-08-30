import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function SideMenu(props) {
    return (
        <Menu>
            <a className='menu-item' href='/pages/home'>Home</a>
            <a className='menu-item' href='/pages/players'>Players</a>
            <a className='menu-item' href='/pages/teams'>Teams</a>
        </Menu>
    );
};

export default SideMenu;