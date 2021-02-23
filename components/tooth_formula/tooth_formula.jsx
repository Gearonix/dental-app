import React from 'react';
import {App} from "../../styles";
import {Image,Title} from "./tooth_formula.styles";
import {useSelector} from "react-redux";
const ToothFormula = () =>  {
    const teeth = useSelector((state) => state.main.current.appointment)
        .map(item => item.dent_number).join(', ')
    return <App>
        <Image source={require('./../../images/teeth_formula.png')} />
        {teeth && <Title>Diseased teeth: {teeth}</Title>}
    </App>
}


export default ToothFormula