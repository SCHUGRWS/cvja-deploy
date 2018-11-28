import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ExperienceTheme';
import ExperienceEntity from '../../assets/classes/entities/Experience';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            funcao: '',
            dataInicio: '',
            dataFim: '',
            empresa: '',
            conhecimentos: ''
        };

        this.experience = new ExperienceEntity()
        this.experience.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.experience.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.experience = Object.assign({}, this.experience, response)
            })
            .catch((err) => { })

    }
    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.experience = Object.assign(new ExperienceEntity(), this.experience, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.experience.create()
            .then((data) => {
                alert("Experiencia criado")
                this.experience.idExperience = data.data;
            })
            .catch((err) => {
                alert(err.data.errMessage)
            })
    }
    render() {
        const { classes } = this.props;

        return (
            <div id="inicio" className={classes.centraliza}>
                <Card className={classes.card}>
                    <CardContent id="testando" t>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={e => this.onSubmit(e)}>
                            <TextField
                                id="outlined-funcao"
                                label="Função"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.funcao}
                                style={{ width: 320 }}
                                onChange={e => this.handleChange('funcao', e)}
                            />

                            <TextField
                                id="outlined-dataInicio"
                                label="Data de Admissão"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                variant="outlined"
                                value={this.state.dataInicio}
                                style={{ width: 181 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => this.handleChange('dataInicio', e)}
                            />

                            <TextField
                                id="outlined-dataFim"
                                label="Data de Demissão"
                                type="date"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.dataFim}
                                style={{ width: 181 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => this.handleChange('dataFim', e)}
                            />

                            <TextField
                                id="outlined-empresa"
                                label="Empresa"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.empresa}
                                fullWidth
                                onChange={e => this.handleChange('empresa', e)}
                            />

                            <TextField
                                id="outlined-conhecimentos"
                                label="Descrição da Função"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.conhecimentos}
                                fullWidth
                                multiline
                                rows="10"
                                onChange={e => this.handleChange('conhecimentos', e)}
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

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);