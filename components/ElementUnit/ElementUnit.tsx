import React from 'react'
import { ElementUnitProps } from '../../redux/types';

interface Props {
    C: React.FC<ElementUnitProps>
    w?: number;
    h?: number;
    color?: string;
}

const ElementUnit:React.FC<Props> = ({C, w, h, color}) => {
    return(
        <svg height={h||94} width={w||94}>
            <C w={w||94} h={h||94} color={color||"red"} />
        </svg>
    )
}
export default ElementUnit;