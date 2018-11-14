import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';

import {
    FormControl, Input, InputLabel, Paper, Avatar, Typography, FormControlLabel, Checkbox, Button, withStyles
} from '@material-ui/core';

import LoginStyle from './loginStyle';
import If from '../../utils/If/If';
import TextLink from '../TextLink/TextLink';


class LoginFormContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CssBaseLine />
                <Paper>
<<<<<<< HEAD
                    <form onSubmit={e => this.props.onSubmit(e)} type='POST' className={this.props.classes.form}>
=======
                    <form onSubmit={e => props.onSubmit(e)} type='POST' className={this.props.classes.form}>
>>>>>>> 6763903d958a2afdd6ca007cfe4c732304c9c936
                        <div className={this.props.classes.loginIcon}>
                            <Avatar>
                                <LockIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5'>
                                Sign in
                            </Typography>
                        </div>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Digite seu email</InputLabel>
                            <Input id='emailSignIn' name='email' autoComplete='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Digite sua senha</InputLabel>
                            <Input name='password' type='password' id='passwordSignIn' autoComplete='current-password' />
                        </FormControl>
                        <If isDisplayed={!this.props.isLogin}>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='password'>Digite sua senha novamente</InputLabel>
                                <Input name='passwordVerify' type='password' id='passwordVerify' autoComplete='current-password' />
                            </FormControl>
                        </If>
                        <div className={this.props.classes.linkContainer}>
                            <TextLink linkClass={this.props.classes.linkStyle} text={(this.props.isLogin) ? 'Cadastre uma nova conta' : 'Entre com sua conta'} 
                                onLinkClick={this.props.onLinkClick}/>
                        </div>
                        <Button type='submit' fullWidth variant='contained' color='primary'>
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withStyles(LoginStyle)(LoginFormContent)