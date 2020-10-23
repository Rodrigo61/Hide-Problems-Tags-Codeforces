// import { hideProblemTags } from './problem_tags.js'
// import { hideProblemsetTags } from './problemset_tags.js'

// Hide page until be fully modified
document.getElementsByTagName("html")[0].style.display="none";

window.onload = function(){

    hideProblemsetTags();
    hideProblemTags();

    // Show full page
    document.getElementsByTagName("html")[0].style.display="block"; 
}