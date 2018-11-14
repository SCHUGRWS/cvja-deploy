import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from './components/Login/Login';
import './index.css';
import { sessionAuthenticate } from './services/AuthService';
import If from "./utils/If/If";
import AppNav from './components/AppNav/AppNav';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavDisplayed: false
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
        sessionAuthenticate().then(res => this.toggleSidebar(res))
    }

    toggleSidebar() {
        this.setState(Object.assign({}, this.state, { isNavDisplayed: sessionAuthenticate() }))
    }

    render() {
        const isAuthenticated = sessionAuthenticate();

        return (
            <Fragment>
                <If isDisplayed={!this.state.isNavDisplayed}>
                    <Login toggleSidebar={this.toggleSidebar} />
                </If>
                <If isDisplayed={this.state.isNavDisplayed}>
                    <AppNav />
                </If>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));