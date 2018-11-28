import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },

    inicio:{
        marginLeft:'240px',
        marginTop:'64px',
    }
});

class Start extends React.Component {
    
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.inicio}>
                <Typography>
                    testesadwadawda
                    dawdadaawda
                    awdawdawd
                    awdawdaw
                </Typography>
            </div>
        )
    }
}

Start.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);