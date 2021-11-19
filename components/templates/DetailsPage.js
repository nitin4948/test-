import React, { useEffect, } from "react";
import { DetailsPageMain } from '../UI/orgasm/DetailsPageMain';
import { DetailsPageHeader } from '../UI/orgasm/DetailsPageHeader';
export const DetailsPage = function(props){
    return(
        <>  
            <DetailsPageMain {...props} /> 
        </>
    )
}