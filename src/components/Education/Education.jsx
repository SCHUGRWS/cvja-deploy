import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './EducationTheme';
import EducationEntity from '../../assets/classes/entities/Education';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formacao: '',
            instituicao: '',
            curso: '',
            status: '',
            dataInicio: '',
            dataFim: '',
            conhecimentos: ''
        };

        this.education = new EducationEntity();
        this.education.idCurriculum = sessionStorage.getItem('idCurriculum')
        this.education.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.education = Object.assign({}, this.education, response)
            })
            .catch((err) => { });
    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.education = Object.assign(new EducationEntity(), this.education, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.education.create()
            .then((data) => {
                alert("Education criado")
                this.education.idEducation = data.data;
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
                                id="outlined-formacao"
                                label="Formação"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.formacao}
                                onChange={e => this.handleChange('formacao', e)}
                                fullWidth
                            />

                            <TextField
                                id="outlined-instituicao"
                                label="Instituição"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.instituicao}
                                onChange={e => this.handleChange('instituicao', e)}
                                fullWidth
                            />

                            <TextField
                                id="outlined-curso"
                                label="Curso"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.curso}
                                onChange={e => this.handleChange('curso', e)}
                                fullWidth
                            />

                            <TextField
                                id="outlined-status"
                                select
                                style={{ margin: "0 auto", width: "30%" }}
                                label="Status"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.status}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                onChange={e => this.handleChange('status', e)}
                            >
                                <option value="" selected={true}></option>
                                <option value="Cursando">
                                    Cursando
                                </option>
                                <option value="Concluído">
                                    Concluído
                                </option>
                            </TextField>

                            <TextField
                                id="outlined-dataInicio"
                                label="Data de Inicio"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.dataInicio}
                                onChange={e => this.handleChange('dataInicio', e)}
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ margin: "0 auto", width: "30%" }}
                            />

                            <TextField
                                id="outlined-dataConclusao"
                                label="Data de Conclusão"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.dataFim}
                                onChange={e => this.handleChange('dataFim', e)}
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ margin: "0 auto", width: "30%" }}
                            />

                            <TextField
                                id="outlined-conhecimentos"
                                label="Conhecimentos"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={this.state.conhecimentos}
                                onChange={e => this.handleChange('conhecimentos', e)}
                                fullWidth
                                multiline
                                rows="6"
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

Education.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);