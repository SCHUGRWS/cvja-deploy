import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import TextLinkStyle from './TextLinkStyle';

const TextLink = props => (
    <div className={props.classes.linkContainer}>
        <a className={props.linkClass} href={props.href} onClick={props.onLinkClick}>
            <Typography>{props.text}</Typography>
        </a>
    </div>
);

export default withStyles(TextLinkStyle)(TextLink);