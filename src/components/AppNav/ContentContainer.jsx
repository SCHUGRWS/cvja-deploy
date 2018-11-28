import React from 'react';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Info from '../Info/Info';
import Language from '../Language/Language';
import MyCV from '../MyCV/MyCV';
import Qualification from '../Qualification/Qualification';
import Reference from '../Reference/Reference';
import Skill from '../Skill/Skill';

const Conteudo = (props) => {
    if (props.route=="Info"){
        return <Info></Info>
    }else if (props.route=="Experience"){
        return <Experience></Experience>
    }else if (props.route=="Education"){
        return <Education></Education>
    } else if(props.route=="Qualification"){
        return <Qualification></Qualification>
    }else if (props.route=="Skill"){
        return <Skill></Skill>
    }else if (props.route=="Language"){
        return <Language></Language>
    }else if(props.route=="Reference"){
        return <Reference></Reference>
    } else if (props.route=="MyCV") {
        return <MyCV></MyCV>
    }
    else
        return null;
}

export default Conteudo;