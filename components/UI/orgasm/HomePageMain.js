import React, { useEffect, } from "react";
import styled from "styled-components";
import _ from "lodash";

import { ListComponent } from "../molecules/ListComponent";
export const HomePageMain = function({
    paginationResult,
    selectedPagination,
    recorPerPage
}){

    function getResult(){ console.log(paginationResult);
        const paginationResultHtml = [];
        if(paginationResult && paginationResult.length){
            let bookDetailsArr = paginationResult;
            const sliceArrIndex = (selectedPagination * recorPerPage);
            const sliceArr = (bookDetailsArr.slice(sliceArrIndex - recorPerPage, sliceArrIndex));
    
            if(_.has(sliceArr, "length") &&  sliceArr.length > 0){
                sliceArr.map(arr =>{
                    paginationResultHtml.push(
                            <div>    
                                <ListComponent
                                    title={arr.title}
                                    author={arr.author}
                                    src={arr.image}
                                    isbn={arr.isbn}
                                />
                                {/* <div className={styles.list}> */}
                                    {/* <img src={arr.image} className={styles.image} />
                                    <div className={styles.bookDetails}>
                                        <div className={styles.heading}>{arr.title}</div>
                                        <div className={styles.author}>-{arr.author}</div>
                                    </div> */}
                                {/* </div>    */}
                            </div>    
                        )
                    })
            } else{
                paginationResultHtml.push(<div>No result found</div>)
            }
        }

        return paginationResultHtml;
    }
    
    return(
        <Main>
            { getResult() }           
        </Main>
    )
}

const Main = styled.main`
    padding: 20px;
    height: calc(100vh - 170px);
    overflow: auto;  
`;