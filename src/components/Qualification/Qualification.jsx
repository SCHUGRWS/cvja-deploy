import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './QualificationTheme';
import QualificationEntity from '../../assets/classes/entities/Qualification';

class Qualification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            descricao: ''
        };

        this.qualification = new QualificationEntity()
        this.qualification.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.qualification.getFirst()
            .then((response) => {
                console.log(response)
                this.setState(Object.assign({}, this.state, response));
                this.qualification = Object.assign({}, this.qualification, response)
            })
            .catch((err) => { })

    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.qualification = Object.assign(new QualificationEntity(), this.qualification, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.qualification.create()
            .then((data) => {
                alert("Qualificação criado")
                this.qualification.idQualification = data.data;
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
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={e => this.onSubmit(e)}>

                            <TextField
                                id="outlined-nome"
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
                                id="outlined-descricao"
                                label="Descrição"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows="5"
                                value={this.state.descricao}
                                onChange={e => this.handleChange('descricao', e)}
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

Qualification.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qualification);