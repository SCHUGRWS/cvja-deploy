import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import ContentContainer from './ContentContainer';
import styles from './AppNavTheme';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class AppNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: "MyCV"
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>

                <Drawer
                    className={this.props.classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <CssBaseline />
                    <AppBar position="fixed" className={this.props.classes.appBar}>
                        <Toolbar>

                        </Toolbar>
                    </AppBar>
                    <div className={this.props.classes.toolbar}>
                        <div className={this.props.classes.toolbarLogo}>
                            <Typography variant="h3" color="inherit" noWrap className={this.props.classes.logo}>
                                CVjá!
                            </Typography>
                        </div>
                    </div>

                    <Divider />
                    <List component="nav">
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "MyCV" })) }}>Meu Curriculo</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Info" })) }}>Dados Pessoais</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Experience" })) }}>Experiencias</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Education" })) }}>Formação</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Qualification" })) }}>Qualificação</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Skill" })) }}>Habilidades</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Language" })) }}>Idiomas</ListItem>
                        </Typography>
                        <Typography className={this.props.classes.navlistitem}>
                            <ListItem button onClick={() => { this.setState(Object.assign({}, this.state, { route: "Reference" })) }}>Referencias</ListItem>
                        </Typography>
                    </List>
                </Drawer>
                <ContentContainer route={this.state.route}>
                </ContentContainer>
            </div>
        );
    }
}

AppNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNav);