import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    border-bottom: 1px solid black;
`;

export const NavItem = styled.div`
    padding: 5px 10px;
    background-color: ${ ({ isActive }) => isActive ? 'black' : 'white'};
    cursor: pointer;
    a {
        text-decoration: none;
        color: ${ ({ isActive }) => isActive ? 'white' : 'black'};
    }
`;

