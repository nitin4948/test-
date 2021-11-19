import React, { useEffect, } from "react";
import { Text } from '../atoms/Text';
import styled from "styled-components";
import _ from "lodash";

export const HomePageFooter = function({
    paginationResult,
    selectedPagination,
    recorPerPage,
    setSelectedPagination
}){

    function getResult(){ 
        const result = [];
        let bookDetailsArr = paginationResult;

        if(_.has(bookDetailsArr, "length")){
            const pages = Math.ceil(bookDetailsArr.length / recorPerPage);
            for(let i = 1; i <= pages; i++){
                result.push(
                    <Text 
                        style={
                            i == selectedPagination ? 
                            {  fontWeight: 600, fontSize: "20px", padding: "10px", cursor: "pointer", margin: "0 5px" } :
                            {  fontSize: "18px", padding: "10px", cursor: "pointer", margin: "0 5px" }
                        } 
                        onClick={() =>{setSelectedPagination(i)}}
                        child={i}
                    />
                );
            }
        }
        return result;
    }
    
    return(
        <Footer>
            { getResult() }           
        </Footer>
    )
}

const Footer = styled.footer`
    padding: 20px;
    overflow: auto;  
    display: flex;
    justify-content: center;
`;