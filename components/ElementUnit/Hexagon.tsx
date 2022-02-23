import React from 'react'
import { ElementUnitProps } from '../../redux/types';


const Hexagon:React.FC<ElementUnitProps> = ({h, w, color}) => {
    let hh = w*0.86;
    let points = "";
    points+=(2*w/8)+",0";
    points+=" "+(6*w/8)+",0";
    points+=" "+w+","+(hh/2);
    points+=" "+(6*w/8)+","+hh;
    points+=" "+(2*w/8)+","+hh;
    points+=" 0,"+(hh/2);
    return(
        <polygon points={points} fill={color} />
    )
}
export default Hexagon;