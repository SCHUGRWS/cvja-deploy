import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ReferenceTheme';
import ReferenceEntity from '../../assets/classes/entities/Reference';

class Reference extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            descricao: ''
        };

        this.reference = new ReferenceEntity()
        this.reference.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.reference.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.reference = Object.assign({}, this.reference, response)
            })
            .catch((err) => { })

    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.reference = Object.assign(new ReferenceEntity(), this.reference, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.reference.create()
            .then((data) => {
                alert("Referencia criado")
                this.reference.idInfo = data.data;
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
                                label="Referencias de Trabalhos"
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

Reference.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reference);