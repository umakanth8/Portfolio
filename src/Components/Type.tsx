import React from "react";
import TypewriterComponent from "typewriter-effect";
export default function Type(){
    return(
        <TypewriterComponent  options={{strings:["Software Engineer"]
            ,autoStart:true,loop:true,deleteSpeed:50}} />
    );
}