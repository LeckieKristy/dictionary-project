import React from "react";

export default function Meaning(props){

    console.log(props.meaning)
    return (
        <div className="Meannig">
        <h3>
            {props.meaning.partOfSpeech}
</h3>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                    {definition.definition}
                    <br />
                    {definition.example}
                    </div>
                )
            })}
        
    
        </div>
    )
}