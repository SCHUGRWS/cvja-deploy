import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: 'white',
        color: '#2999c4',
        cursor: 'default',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#2999c4',

    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },

    list: {
        backgroundColor: '#2999c4',
    },

    primary: {
        color: 'white',
    }

});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function AppNav(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h3" color="inherit" noWrap>
                        Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav">
                    <ListItemLink button href="inicio">
                        <ListItemText primary="Inicio" />
                    </ListItemLink>
                    <ListItemLink button href="informacoes">
                        <ListItemText primary="Informações Pessoais" />
                    </ListItemLink>
                    <ListItemLink button href="experiencia">
                        <ListItemText primary="Experiencia" />
                    </ListItemLink>
                </List>
            </Drawer>
        </div>
    );
}

AppNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNav);