import React, { useEffect, } from "react";
import styled from "styled-components";

export const Button  = function(props){

    return(
        <ButtonStyle 
            onClick={props.clickEvent} 
            {...props}
        >
            {props.value}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    cursor: pointer;
`;