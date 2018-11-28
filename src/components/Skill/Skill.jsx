import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './SkillTheme';
import SkillsEntity from '../../assets/classes/entities/Skill';

class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            descricao: '',
            nome: ''
        };

        this.skill = new SkillsEntity()
        this.skill.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.skill.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.skill = Object.assign({}, this.skill, response)
            })
            .catch((err) => { })

    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.skill = Object.assign(new SkillsEntity(), this.skill, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.skill.create()
            .then((data) => {
                alert("Skill criado")
                this.skill.idInfo = data.data;
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
                                label="Descricao"
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

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);