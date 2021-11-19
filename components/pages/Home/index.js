import React, { useEffect, } from "react";
import { HomePage } from "../../templates/HomePage";
import _ from "lodash";

export const Home = function(){
    const searchField = React.useRef(null);
    const [bookDetails, setBookDetails] = React.useState(null);
    const [selectedPagination, setSelectedPagination] = React.useState(1);
    const [filterValue, setFilterValue] = React.useState(null);

    const recorPerPage = 10;

    useEffect(()=>{
        let apiresult = sessionStorage.getItem("apiresult");
        if(apiresult){
            apiresult = JSON.parse(apiresult);
            setBookDetails(apiresult);   
            return;        
        };
        if(!bookDetails){
            fetch("https://fakerapi.it/api/v1/books?_quantity=100")
              .then(res => res.json())
              .then(
                (result) => {
                    setBookDetails(result); 
                    sessionStorage.setItem("apiresult", JSON.stringify(result))
                },
                (error) => {

                }
              );
        }
    }, []);

    function checkForFilterResult(){
        let bookDetailsArr = [...bookDetails.data];
        if(filterValue && filterValue != ""){
            bookDetailsArr = [];
            const reg = new RegExp(filterValue, "i")
            bookDetails.data.map(bookDetail =>{
                if(bookDetail.title.search(reg) > -1){
                    bookDetailsArr.push(bookDetail);
                }
            });
        }
        return bookDetailsArr;
    }
    
    function applyFilter(){
        if(_.has(searchField, "current.value") && searchField.current.value !=""){
            setFilterValue(searchField.current.value);
            setSelectedPagination(1);
        }
    }

    function removeFilter(){
        searchField.current.value = "";
        setFilterValue("");
        setSelectedPagination(1);
    }


    return(
        <div>
            <HomePage
                fieldRef={searchField}
                applyFilterClick={applyFilter}
                applyFilterValue={'Apply Filter'}
                clearFilterClick={removeFilter}
                clearFilterValue={'Remove Filter'}
                paginationResult={_.has(bookDetails, "data.length") && checkForFilterResult()}
                selectedPagination={selectedPagination}
                recorPerPage={recorPerPage}
                setSelectedPagination={setSelectedPagination}
            />
        </div>
    )
} 