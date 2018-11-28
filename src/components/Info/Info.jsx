import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import InfoClass from '../../assets/classes/entities/Info';
import styles from './InfoTheme';

const estados = [
    {
        label: ''
    },
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
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            dataNascimento: '',
            rg: '',
            cpf: '',
            cep: '',
            estado: '',
            cidade: '',
            cnh: '',
            endereco: '',
            numero: '',
            bairro: '',
            telefone: '',
            celular: '',
            complemento: ''
        };

        this.info = new InfoClass()
        this.info.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.info.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.info = Object.assign({}, this.info, response)
            })
            .catch((err) => { })

    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.info = Object.assign(new InfoClass(), this.info, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.info.create()
            .then((data) => {
                alert("Info criado")
                this.info.idInfo = data.data;
            })
            .catch((err) => {
                alert(err.data.errMessage)
            })
    }

    getOptions() {
        return (estados.map(option => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        )))
    }
    render() {
        const { classes } = this.props;

        return (
            <div id="Info" className={classes.centraliza}>
                <Card className={classes.card}>
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={e => this.onSubmit(e)}>
                            <TextField
                                id="outlined-name"
                                label="Nome"
                                defaultValue=""
                                fullWidth
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.nome}
                                onChange={e => this.handleChange('nome', e)}
                            />

                            <TextField
                                id="outlined-date"
                                label="Data de Nascimento"
                                type="date"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.dataNascimento}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => this.handleChange('dataNascimento', e)}
                            />

                            <TextField
                                id="outlined-rg"
                                label="RG"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.rg}
                                style={{ width: 245 }}
                                onChange={e => this.handleChange('rg', e)}
                            />

                            <TextField
                                id="outlined-cpf"
                                label="CPF"
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 245 }}
                                value={this.state.cpf}
                                onInput={e => e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)}
                                onChange={e => this.handleChange('cpf', e)}
                            />

                            <TextField
                                id="outlined-CEP"
                                label="CEP"
                                value={this.state.cep}
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 300 }}
                                onChange={e => this.handleChange('cep', e)}
                            />

                            <TextField
                                id="outlined-estado"
                                select
                                style={{ width: 80 }}
                                label="UF"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.estado}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                onChange={e => this.handleChange('estado', e)}
                            >
                                {this.getOptions()}
                            </TextField>

                            <TextField
                                id="outlined-cidade"
                                label="Cidade"
                                className={classes.textField}
                                value={this.state.cidade}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 300 }}
                                onChange={e => this.handleChange('cidade', e)}
                            />

                            <TextField
                                id="outlined-cnh"
                                label="CNH"
                                fullWidth
                                className={classes.textField}
                                value={this.state.cnh}
                                onChange={e => this.handleChange('cnh', e)}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-endereco"
                                label="Endereço"
                                className={classes.textField}
                                value={this.state.endereco}
                                margin="normal"
                                variant="outlined"
                                style={{ width: 302 }}
                                onChange={e => this.handleChange('endereco', e)}
                            />

                            <TextField
                                id="outlined-numero"
                                label="Nº"
                                type="number"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.numero}
                                style={{ width: 80 }}
                                onChange={e => this.handleChange('numero', e)}
                            />

                            <TextField
                                id="outlined-bairro"
                                label="Bairro"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.bairro}
                                style={{ width: 300 }}
                                onChange={e => this.handleChange('bairro', e)}
                            />

                            <TextField
                                id="outlined-telefone"
                                label="Telefone"
                                className={classes.textField}
                                margin="normal"
                                type="number"
                                variant="outlined"
                                style={{ width: 350 }}
                                value={this.state.telefone}
                                onInput={e => e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)}
                                onChange={e => this.handleChange('telefone', e)}
                            />

                            <TextField
                                id="outlined-celular"
                                label="Celular"
                                className={classes.textField}
                                type="number"
                                margin="normal"
                                variant="outlined"
                                style={{ width: 350 }}
                                value={this.state.celular}
                                onInput={e => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
                                }}
                                onChange={e => this.handleChange('celular', e)}
                            />

                            <TextField
                                id="outlined-complemento"
                                label="Complemento"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.complemento}
                                fullWidth
                                multiline
                                rows="6"
                                onChange={e => this.handleChange('complemento', e)}
                            />

                            <Button type="submit" variant="contained" color="primary" disableRipple
                                className={classNames(classes.margin, classes.bootstrapRoot, classes.button)} size="medium">
                                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                                Salvar
                            </Button>
                        </form>
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