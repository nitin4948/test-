import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export const HyperLink  = function({
    style,
    child,
    to,
}){

    return(
        <Link 
            style={style}
            to={to}
        >
            {child}
        </Link>
    )
}