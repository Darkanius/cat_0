"use strict";

// cat object expression
var cat = {
    node: document.querySelector("#cat"),
    bgOffset: 0,
    step: 0,
    
    // cat functions
    
    // blueprint for cat's moving ( 1 - check for absolute positioning; 2 - change position accordingly to the direction. ) 
    move: function(cat) {
    
        cat.bgOffset = parseInt(cat.bgOffset) + 32;
        if ( ++cat.step == 2 ) {
            cat.bgOffset = parseInt(cat.bgOffset) + 32;
            cat.step = 0;
        }
        
        if ( cat.bgOffset >= 256 ) cat.bgOffset = 0;
        
        cat.node.style.backgroundPosition = cat.bgOffset + "px 0px";
        //
        //move(document.querySelector("#cat"));
        // logging for debug
        console.log(cat.node.style.backgroundPosition + "\n" + cat.node.offsetTop);

        // if ( cat.node.style.position != "absolute" ) {
            // cat.node.style.position = "absolute";
        // }
    
        //  cat.node.setAttribute(offsetTop, offsetTop + 10); 

    }
};
    ///////////////////////////////////////////////////////////////////////////////////
