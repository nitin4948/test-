import React from "react";
import { useLocation,useParams } from 'react-router-dom'
import { DetailsPage } from "../../templates/DetailsPage";
import _ from "lodash"
export  const Details = function(){
    
    const params = useParams(); console.log(params);
    let apiresult = sessionStorage.getItem("apiresult");
    apiresult = JSON.parse(apiresult);
    const detailsObj = _.has(apiresult, "data.length") && apiresult.data.filter(value => value.isbn == params.isbn);

    function updateValue(formData){
        console.log(formData);
        let _apiresult = sessionStorage.getItem("apiresult");
        _apiresult = JSON.parse(_apiresult);
        _apiresult.data.map((value, index) => {
            if(value.isbn == params.isbn){
                _apiresult.data[index].description= formData.description;
                _apiresult.data[index].author= formData.author;
                _apiresult.data[index].publisher= formData.publisher;
                _apiresult.data[index].published= formData.published;
                _apiresult.data[index].title= formData.title;
            }
        });
        sessionStorage.setItem("apiresult", JSON.stringify(_apiresult));
    }

    return(
        <div className={'detail-page'}>
            {
                detailsObj ? 
                <DetailsPage {...detailsObj[0]} updateValue={updateValue}     /> :
                <div>Something went wrong</div>
            }
            
        </div>
    )
} 