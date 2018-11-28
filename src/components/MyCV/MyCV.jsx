import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import PDF from '../../services/PDF';
import styles from './MyCVTheme';

class MyCV extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={this.props.classes.htmlFormatado} id="htmlFormatado">

                    <h1>nome do cara</h1>
                    <h3>Morador da cidade de sao colombo</h3>
                    <h3>email@servidordeemail.email</h3>
                    <p>huasdhuashduashduhasudhuh - teste</p>
                    <h1>vamos testar o espaçamento</h1>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Viva Forevis aptent taciti sociosqu ad litora torquent. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
                    Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                    A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
                    Mé faiz elementum girarzis, nisi eros vermeio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. In elementis mé pra quem é amistosis quis leo. Casamentiss faiz malandris se pirulitá.</p>

                    <Button className={this.props.classes.botaoFlutuante} variant="contained" color="primary" disableRipple
                        size="medium"
                        onClick={() => {
                            let arquivo = new PDF();
                            arquivo.print();
                        }}>
                        PDF teste
                    </Button>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(MyCV);