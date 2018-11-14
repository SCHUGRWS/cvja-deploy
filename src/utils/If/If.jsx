import React from 'react';

const If = (props) => {
    if (props.isDisplayed)
        return props.children;
    else
        return null;
}

export default If;