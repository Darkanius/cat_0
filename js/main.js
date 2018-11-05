"use strict";

var prevButt = document.querySelector("#prev");
var nextButt = document.querySelector("#next");
var image = document.querySelector(".wrapper #image");
var imgArr = [
            "http://www.avratech.org.il/wp-content/uploads/2017/12/chrome-logo-200x200.png", 
            "https://vignette.wikia.nocookie.net/cityville/images/5/58/Viral_basketballcomplex_basketball_200x200.png/revision/latest?cb=20130613014636",
            "http://punkerslut.com/graphics-library-of-revolution-and-social-justice/anonymous-and-anonymous-movement/vectorportal---1/vectorportal---1__200x200.jpg",
            "http://davidnaylor.org/temp/firefox-logo-200x200.png"
];

    ///////////////////////////////////////////////////////////////////////////////////
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


window.onload = setInterval(cat.move, 500, cat);

cat.node.onclick = cat.move(cat);



// Slider functions
var i = 0; // This isn't a function. But who gives a fuck?

image.onclick = function() {
    if ( ++i >= imgArr.length ) {
        i = 0;
    }
    image.src = imgArr[i];
}

nextButt.onclick = function() {
    if ( ++i >= imgArr.length ) {
        i = 0;
    }
    image.src = imgArr[i];
}

prevButt.onclick = function() {
    if ( --i <= 0 ) {
        i = ( imgArr.length - 1 );
    }
    image.src = imgArr[i];
}



//////////////////////////////////////////////////////
// for ( var i in document.querySelector("#cat") ) {
//    console.log(document.querySelector("#cat").setAttribute);
// }