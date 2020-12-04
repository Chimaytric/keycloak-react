import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Title, Paragraph } from '../../components';

import { Logout } from './styles';

const Authenticated = ({ keycloak }) => {
    const [{ email, firstName, isSet, name, userName }, setUserInfo] = useState({ isSet : false});

    useEffect(() => {
        if (!isSet) {
            keycloak.loadUserInfo().then(({ email, given_name, name, preferred_username }) => {
                setUserInfo({ email, firstName : given_name, isSet : true, name, userName : preferred_username });
            })
        }
    });

    const history = useHistory();

    const logout = () => {
        history.push('/');
        keycloak.logout();
    };

    return (
        <>
            <Title>Welcome {firstName}</Title>
                <ul>
                    <li>name : {name}</li>
                    <li>username : {userName}</li>
                    <li>email : {email}</li>
                </ul>
            <Paragraph>This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've authenticated with Keycloak.</Paragraph>
            <Logout onClick={logout}>Disconnect</Logout>
        </>
    )
};

export default Authenticated;
