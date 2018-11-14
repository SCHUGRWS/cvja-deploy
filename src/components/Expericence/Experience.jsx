import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing.unit,
        width: '150px',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    card: {
        minWidth: 275,
        width: '780px',
        margin: '100px 0 0 450px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    bootstrapRoot: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#2999c4',
        borderColor: '#007bff',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#56cde8',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    margin: {
        margin: theme.spacing.unit,
    },

});

class Experience extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div id="inicio">
                <Card className={classes.card}>
                    <CardContent id="testando" t>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-funcao"
                                label="Função"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 225 }}
                            />

                            <TextField
                                id="outlined-empresa"
                                label="Empresa"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 203 }}
                            />

                            <TextField
                                id="outlined-dataEntrada"
                                label="Data de Admissão"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                variant="outlined"
                                style={{ width: 120 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="outlined-dataSaida"
                                label="Data de Demissão"
                                type="date"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 120 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="outlined-descricao"
                                label="Descrição da Função"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows="10"

                            />

                        </form>

                        <center>
                            <Button variant="contained" color="primary" disableRipple
                                className={classNames(classes.margin, classes.bootstrapRoot, classes.button)} size="medium">
                                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                                Salvar
                            </Button>
                        </center>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);