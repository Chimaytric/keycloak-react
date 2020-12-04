import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const initialState = {
    keycloak        : null,
    isAuthenticated : false,
}

const useKeycloak = () => {
    const [{ keycloak, isAuthenticated }, setKeycloakState] = useState(initialState);

    useEffect(() => {
        const keycloak = Keycloak('/keycloak.json');
        (async () => {
            const isAuthenticated = await keycloak.init({onLoad: 'login-required'});
            console.log(keycloak);
            setKeycloakState({ keycloak, isAuthenticated });
        })();
    }, []);

    return { keycloak, isAuthenticated };
};

export default useKeycloak;
