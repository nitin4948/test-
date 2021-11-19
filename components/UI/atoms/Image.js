import React, { useEffect, Link} from "react";

export const Image  = function({
    style,
    child,
    src
}){

    return(
        <img 
            style={style}
            src={src}
        />
    )
}