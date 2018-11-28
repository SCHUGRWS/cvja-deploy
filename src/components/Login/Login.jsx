import React, { Component } from 'react';
import LoginFormContent from './LoginFormContent';
import { signInService, signUpService } from '../../services/AuthService';

import User from '../../assets/classes/entities/User';
import { withStyles } from '@material-ui/core';
import LoginStyle from './loginStyle';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick() {
        let isLogin = !this.state.isLogin;
        this.setState(Object.assign({}, this.state, { isLogin: isLogin }))
    }

    onSubmit(e) {
        e.preventDefault();
        const user = new User(e.target.email.value, null);
        if (this.state.isLogin) {
            signInService(user, e.target.password.value)
                .then(res => this.props.toggleSidebar())
                .catch(rej => {
                    if(rej.code === "UserNotFoundException"){
                        this.onLinkClick()
                    }
                })
        } else {
            if (e.target.passwordVerify.value === e.target.password.value) {
                signUpService(user, e.target.password.value)
                .then(() => this.onLinkClick())
                .catch(rej => {
                    if(err.code != "InvalidParameterException"&&err.code != "InvalidPasswordException"){
                        this.onLinkClick()
                    }
                })
            } else {
                alert("Senhas não são iguais!")
            }
        }
    }

    render() {
        return (
            <main className={this.props.classes.mainClass}>
                <LoginFormContent isLogin={this.state.isLogin} onLinkClick={this.onLinkClick} onSubmit={this.onSubmit} onSubmitNewUser={this.onSubmitNewUser} />
            </main>
        )
    }
}

export default withStyles(LoginStyle)(Login);