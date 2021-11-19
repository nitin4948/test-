import React, { useEffect, } from "react";
import styled from "styled-components";

export const TextField = function(props){
    
    return(
        <InputStyle 
            type="text" 
            ref={props.fieldRef} 
            {...props}
        />
    )
}

const InputStyle = styled.input`
    padding: 10px;
`;


