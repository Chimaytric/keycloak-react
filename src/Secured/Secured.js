import React from 'react';

import { Wrapper, Paragraph } from '../components';

import useKeycloak from './useKeycloak';
import Authenticated from './Authenticated';

const Secured = () => {
    const { keycloak, isAuthenticated } = useKeycloak();

    let result = <Paragraph>Checking session</Paragraph>;

    if (keycloak) {
        if (isAuthenticated) {
            result = <Authenticated keycloak={keycloak} />
        }
        else {
            result = <Paragraph>Unable to authenticate.</Paragraph>;
        }
    }

    return (
        <Wrapper>{result}</Wrapper>
    );
};

export default Secured;
