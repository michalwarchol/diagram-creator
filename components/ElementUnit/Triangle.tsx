import React from 'react'
import { ElementUnitProps } from '../../redux/types';

const Triangle:React.FC<ElementUnitProps> = ({h, w, color}) => {

    let points = "";
    points+="0,"+h;
    points+=" "+(w/2)+",0";
    points+=" "+h+","+w;

    return(
        <polygon points={points} fill={color} />
    )
}
export default Triangle;