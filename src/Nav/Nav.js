import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { LOCATIONS } from '../constants';

import { NavContainer, NavItem } from './styles';

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <NavContainer>
          <NavItem isActive={pathname === LOCATIONS.HOME}><Link to={LOCATIONS.HOME}>Home (public)</Link></NavItem>
          <NavItem isActive={pathname === LOCATIONS.PRIVATE}><Link to={LOCATIONS.PRIVATE}>Private</Link></NavItem>
        </NavContainer>
    );
}

export default Nav;
