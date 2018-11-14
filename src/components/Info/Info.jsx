import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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

const estado = [
    {
        value: 'SC',
        label: 'SC',
    },
    {
        value: 'RS',
        label: 'RS',
    },
    {
        value: 'PR',
        label: 'PR',
    },
];


class Info extends React.Component {
    state = {
        estado: 'UF',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div id="inicio">
                <Card className={classes.card}>
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Nome"
                                defaultValue=""
                                fullWidth
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-date"
                                label="Data de Nascimento"
                                type="date"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="outlined-rg"
                                label="RG"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-cpf"
                                label="CPF"
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-CEP"
                                label="CEP"
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 172 }}
                            />

                            <TextField
                                id="outlined-estado"
                                select
                                style={{ width: 58 }}
                                label="UF"
                                className={classes.textField}
                                value={this.state.estado}
                                onChange={this.handleChange('estado')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                {estado.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                id="outlined-cidade"
                                label="Cidade"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 172 }}
                            />

                            <TextField
                                id="outlined-endereco"
                                label="Endereço"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 200 }}
                            />

                            <TextField
                                id="outlined-numero"
                                label="Nº"
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 80 }}
                            />

                            <TextField
                                id="outlined-bairro"
                                label="Bairro"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 215 }}
                            />

                            <TextField
                                id="outlined-email"
                                label="E-mail"
                                fullWidth
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-telefone"
                                label="Telefone"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-celular"
                                label="Celular"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-complemento"
                                label="Complemento"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 405 }}
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

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);