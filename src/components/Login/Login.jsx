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
        this.setState(Object.assign({}, this.state, {isLogin: isLogin}))
    }

    onSubmit(e) {
        e.preventDefault();
        const user = new User(e.target.email.value, null);
        if (this.state.isLogin) {
            signInService(user, e.target.password.value)
            .then(res => this.props.toggleSidebar())
            .catch(err => this.props.toggleSidebar())
        } else {
            // TODO: signUpService();
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