import React, { useEffect, } from "react";

import { SearchComponent } from '../molecules/SearchComponent';
export const HomePageHeader = function(
    props
){
    
    return(
        <header>
            <SearchComponent
                {...props}
            />            
        </header>
    )
}