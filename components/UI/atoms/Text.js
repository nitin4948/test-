import React, { useEffect, } from "react";
import styled from "styled-components";

export const Text  = function({
    style,
    child,
    onClick
}){

    return(
        <TextStyle 
            style={style}
            onClick={onClick}
        >
            {child}
        </TextStyle>
    )
}

const TextStyle = styled.div`
    font-size: 16px;
`;