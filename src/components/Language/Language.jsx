import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './LanguageTheme';
import LanguageEntity from '../../assets/classes/entities/Language';

const idiomaNiveis = [
    {
        label:''
    },
    {
        value: 'Basico',
        label: 'Basico',
    },
    {
        value: 'Medio',
        label: 'Medio',
    },
    {
        value: 'Avançado',
        label: 'Avançado',
    },

]

class Language extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idioma: '',
            instituicao: '',
            nivelLinguagem: ''
        };

        this.Language = new LanguageEntity()
        this.Language.idCurriculum = sessionStorage.getItem('idCurriculum')

        this.Language.getFirst()
            .then((response) => {
                this.setState(Object.assign({}, this.state, response));
                this.Language = Object.assign({}, this.Language, response)
            })
            .catch((err) => { })

    }

    handleChange(propertie, event) {
        this.setState(Object.assign({}, this.state, { [propertie]: event.target.value }));
        this.Language = Object.assign(new LanguageEntity(), this.Language, { [propertie]: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.Language.create()
            .then((data) => {
                alert("Linguagem criado")
                this.Language.idInfo = data.data;
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
                                id="outlined-idioma"
                                label="Idioma"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{width:"36%"}}
                                value={this.state.idioma}
                                onChange={e => this.handleChange('idioma', e)}
                            />

                            <TextField
                                id="outlined-instituicao"
                                label="Instituição"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{width:"36%"}}
                                value={this.state.instituicao}
                                onChange={e => this.handleChange('instituicao', e)}
                            />

                            <TextField
                                id="outlined-nivelLinguagem"
                                label="Nível"
                                select
                                className={classes.textField}
                                style={{width:"21%"}}
                                margin="normal"
                                variant="outlined"
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                      className: classes.menu,
                                    },
                                  }}
                                  value={this.state.nivelLinguagem}
                                onChange={e => this.handleChange('nivelLinguagem', e)}
                            >
                            {idiomaNiveis.map(option => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                            </TextField>

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

Language.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Language);