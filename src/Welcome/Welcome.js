import React from 'react';

import { Paragraph, Title, Wrapper } from '../components';

const Welcome = () => (
    <Wrapper>
        <Title>Welcome !</Title>
        <Paragraph>This project demonstrates how to secure a react app using third-party Keycloak login.</Paragraph>
        <Paragraph>This is a public page accessible to everyone.</Paragraph>
    </Wrapper>
);

export default Welcome;
