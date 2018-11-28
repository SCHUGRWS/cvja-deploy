import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import axios from 'axios';
import { ConfigAPI, ConfigCognito } from '../assets/awsConfig';
import Curriculum from '../assets/classes/entities/Curriculum'

export const signInService = (user, password) => {

    return new Promise((res, rej) => {
        const configCognito = new ConfigCognito()
        let curriculum = new Curriculum(user.email)

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
                curriculum.getFirst()
                    .then((response) => {
                        sessionStorage.setItem('idCurriculum', response.idCurriculum);
                        res(true);
                    })
                    .catch((err) => {
                        curriculum.create()
                            .then((response) => {
                                sessionStorage.setItem('idCurriculum', response.data);
                                if (sessionStorage.getItem('idCurriculum') != null) {
                                    res(true);
                                } else {
                                    rej(false)
                                }
                            })
                            .catch((err) => {
                                rej(err)
                            })
                    })
            },
            onFailure: (err) => {

                if (err.code === "NotAuthorizedException") {
                    alert("Senha Incorreta!")
                } else if (err.code === "UserNotFoundException") {
                    alert("Usuário não cadastrado!")
                } else if (err.code === "UserNotConfirmedException") {
                    alert("Usuário não confirmou o email!")
                } else {
                    alert("Erro não tratado: " + err.code)
                }

                rej(err)
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

export const signUpService = (user, password) => {

    return new Promise((res, rej) => {

        const configCognito = new ConfigCognito()

        var poolData = configCognito.getUserPoolData();
        var userPool = new CognitoUserPool(poolData);

        let attributeList = [];

        let dataEmail = {
            Name: 'email',
            Value: user.email
        };

        let attributeEmail = new CognitoUserAttribute(dataEmail);

        attributeList.push(attributeEmail);

        userPool.signUp(user.email, password, attributeList, null, function (err, result) {
            if (err) {
                if (err.code === "UsernameExistsException") {
                    alert("O email já existe")
                } else if (err.code === "InvalidParameterException") {
                    alert("Informações inválidas")
                } else if (err.code === "InvalidPasswordException") {
                    alert("A senha precisa de no minimo 8 caracteres")
                } else {
                    alert("Erro não tratado: " + err.code)
                }

                rej(err);
            } else {
                alert("Um email foi enviado para validar a sua conta! Após validar a conta tente acessar novamente!");
                res(true);
            }
        })
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
            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'get',
                url: "https://cvjaapi.appjs.com.br/userdata/health"
            })
                .then(() => res(true))
                .catch(() => rej(false));
        }
    });

}