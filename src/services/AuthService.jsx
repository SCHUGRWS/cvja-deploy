import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import { ConfigAPI, ConfigCognito } from '../assets/awsConfig';

export const signInService = (user, password) => {

    return new Promise((res, rej) => {
        const configCognito = new ConfigCognito()

        var authenticationData = {
            Username: user.email,
            Password: password
        };
        var authenticationDetails = new AuthenticationDetails(authenticationData);

        var poolData = configCognito.getUserPoolData();
        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: user.email,
            Pool: userPool
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                sessionStorage.setItem('sessionKey', result.idToken.jwtToken);
                res(true);
            },
            onFailure: (err) => {
                console.log(err.message);
                rej(false)
            },
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                // Get these details and call 
                let newPassword = password;
                let attributesData = "";
                cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this);
            }
        });
    });
}

export const signUpService = (user) => {
    const configApi = new ConfigAPI()

    return new Promise((res, rej) => {
        axios({
            method: 'post',
            url: configApi.getUserPersistenceUrl + 'users',
            data: {
                email: user.email
            }
        })
            .then(response => res(true))
            .catch((error) => {
                console.error(error.data);
                rej(false);
            });
    });
}

export const sessionAuthenticate = () => {

    return new Promise((res, rej) => {

        let configApi = new ConfigAPI();

        if (!sessionStorage.getItem('sessionKey')) {
            rej(false);
            return;
        }
        else if (sessionStorage.getItem('sessionKey') === '') {
            rej(false);
            return;
        }
        else {
            console.log(axios.defaults.headers)
            axios.get({
                url: `https://cvjaapi.appjs.com.br/userdata/userdata/heath`
            })
                .then(() => res(true))
                .catch(() => rej(false));
        }
    });

}