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



window.onload = function() {
    setInterval(cat.move, 500, cat);
    document.getElementsByTagName("body")[0].style.cursor = "url(\"res/cursors/mouse_0.png\"), default";
};

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
// for ( var i in document ) {
   // console.log(i);
// }