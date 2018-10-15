import React from 'react';

const ValidationComponent=(props)=>{
    let validationMessage = "Text is too short";

    if (props.length > 5) {
        validationMessage = "Text is long enough";
    }
    return(
        
        <div>
            { validationMessage }
        </div>
    );

}

export default ValidationComponent;