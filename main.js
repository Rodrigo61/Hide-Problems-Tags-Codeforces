// import { hideProblemTags } from './problem_tags.js'
// import { hideProblemsetTags } from './problemset_tags.js'

// Hide page until be fully modified
var blankScreen = document.createElement("div");
blankScreen.style.width = "100%";
blankScreen.style.height = "100%";
blankScreen.style.position = "absolute";
blankScreen.style.background = "white";
blankScreen.style.top = 0;
blankScreen.style.left = 0;
blankScreen.style.zIndex = 999999999;

document.getElementsByTagName("html")[0].appendChild(blankScreen);

window.onload = function(){

    hideProblemsetTags();
    hideProblemTags();

    // Show full page
    blankScreen.style.display = "none";
}