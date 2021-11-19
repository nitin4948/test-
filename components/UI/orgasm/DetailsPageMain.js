import React, { useEffect, } from "react";
import { AllDetails } from '../molecules/AllDetails';
import styled from "styled-components";

export const DetailsPageMain = function(props){
    console.log(props);
    return(
        <Main>
            <AllDetails
                {...props}
            />          
        </Main>
    )
}

const Main = styled.main`
    padding: 20px;
    height: calc(100vh - 170px);
    overflow: auto;  
`;