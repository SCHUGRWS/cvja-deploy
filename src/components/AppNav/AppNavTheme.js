const drawerWidth = 240;

const AppNavTheme = theme => ({
    botaoFlutuante: {
        position: 'absolute',
        bottom: '5px',
        right: '5px'
    },
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
        backgroundColor: '#2999c4'
    },

    toolbar: theme.mixins.toolbar,
    toolbarLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px'
    },
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
    },

    navlistitem: {
        color: '#FFF'
    },

    logo: {
        color: '#FFF'
    }

});

export default AppNavTheme;