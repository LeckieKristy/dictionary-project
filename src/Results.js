import React from "react";
import Meaning from "./Meaning"
import Phonetic from "./Phonetic"
import "./Result.css"

export default function Results(props){
   
           
    if(props.results) {
        return <div className="Results"> 
      <section>
          <h1>{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
           
          })}
          </section>
       
        
        {props.results.meanings.map (function(meaning, index){
            return (
                <div key={index}>
                    <Meaning meaning={meaning}/>
                    </div>
            )
            })}
        </div>
    }
    else{
       return null; 
    }
}


