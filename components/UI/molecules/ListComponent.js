import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { HyperLink } from "../atoms/HyperLink";
import styled from "styled-components";

export const ListComponent = function({
    title,
    author,
    src,
    isbn
}){

    return(
        <ListComponentStyle>
          <Image
            src={src}
            style={{width: "100px"}}
          />
          <div>
            <Text
              child={
                <HyperLink 
                  to={{pathname: 'details/'+isbn, state:{ asd: "asdasd"}}}
                  child={title}
                  style={{fontSize: "20px", color: "#000"}}
                />
              }
            />
            <Text
              child={author}
              style={{marginTop: "20px"}}
            />          
          </div>
        </ListComponentStyle>
    )
}


const ListComponentStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;  
`;
