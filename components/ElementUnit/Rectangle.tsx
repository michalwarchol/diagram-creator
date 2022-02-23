import React from 'react'
import { ElementUnitProps } from '../../redux/types';

const Rectangle:React.FC<ElementUnitProps> = ({h, w, color}) => {
    return(
        <rect x="0" y="0" height={h} width={w} fill={color} />
    )
}
export default Rectangle;