import React, { useEffect, useState } from "react";
import { Text } from "../atoms/Text";
import { TextField } from "../atoms/TextField";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";
import { DetailsPageHeader } from "../orgasm/DetailsPageHeader";


export const AllDetails = function(props){

    const [edit, setEdit] = useState(false);
    const [ formData, setFormData ] = useState({
        title: props.title,
        description: props.description,
        author: props.author,
        publisher: props.publisher,
        published: props.published
    });

    return(
        <>
            { !edit && <DetailsPageHeader title={formData.title} />}
            <Button data-testid="test-button" style={customStyle.edit} onClick={()=> setEdit(!edit)} value={edit ? "Cancel" : "Edit" } />
            <div style={customStyle.mainContainer}>
            <div>
                <Image 
                    src={props.image}
                    style={customStyle.bannerImage}
                />               
            </div>
            {
                edit ?
                <div>
                    <div>
                        <Text
                            child={"Title"}
                        />
                        <TextField 
                            value={formData.title}
                            onChange={(val) => setFormData({...formData, title: val.target.value})}

                        />
                    </div>                    
                    <div>
                        <Text
                            child={"Description"}
                        />
                        <textarea 
                            style={{width: "188px", height: "60px"}} 
                            value={formData.description} 
                            onChange={(val) => setFormData({...formData, description: val.target.value})}
                        ></textarea>
                    </div>
                    <div>
                        <Text
                            child={"Author"}
                        />
                        <TextField 
                            value={formData.author}
                            onChange={(val) => setFormData({...formData, author: val.target.value})}

                        />
                    </div>
                    <div>
                        <Text
                            child={"Publisher"}
                        />
                        <TextField 
                            value={formData.publisher}
                            onChange={(val) => setFormData({...formData, publisher: val.target.value})}

                        />
                    </div>
                    <div>    
                        <Text
                            child={"Published on"}
                        />
                        <TextField 
                            value={formData.published}
                            onChange={(val) => setFormData({...formData, published: val.target.value})}

                        />                        
                    </div>     
                    <div>
                        <Button 
                            value="Update"
                            style={{margin: "20px 0 0 0 ", display: "block"}}
                            onClick={()=> {
                                props.updateValue(formData);
                                setEdit(false);
                            }}
                        />
                    </div>                                   
                </div>
                :
                <div>
                    <Text
                        child={formData.description}
                    />
                    <div style={customStyle.flex}>
                        <Text
                            child={"Author: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={formData.author}
                        />
                    </div>
                    <div style={customStyle.flex}>
                        <Text
                            child={"Publisher: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={formData.publisher}
                        />
                    </div> 
                    <div style={customStyle.flex}>
                        <Text
                            child={"Published on: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={formData.published}
                        />
                    </div>                        
                </div>        

            }
        </div>
    </>    
    )
}

export const customStyle = {
    heading: {
        fontWeight: 600,
        marginRight: "10px"
    },
    flex:{
        display: "flex",
        margin: "10px 0"
    },
    mainContainer:{
        display: "flex",
        gap: "30px",
        maxWidth: "500px",
        position: "relative"
    },
    bannerImage:{
        width: "200px"
    },
    edit: {
        fontWeight: 600,
        width: "100px",
        marginLeft: "430px",
        cursor: "pointer",
        fontSize: "18px",
        border: 0,
        background: "transparent"
    }
}