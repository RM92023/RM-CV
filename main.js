import './style.css'

let menuVisible = false;
//function that hidden or visible the menu
function showHiddenMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selection(){
    //Hidden the menu after the selection an option
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//animation of the skills
function skillsEfects(){
    var skills = document.getElementById("skills");
    var skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillDistance >= 300){
        let skillMe = document.getElementsByClassName("progress");
        skillMe[0].classList.add("javascript");
        skillMe[1].classList.add("htmlCss");
        skillMe[2].classList.add("python");
        skillMe[3].classList.add("c");
        skillMe[4].classList.add("gitGithub");
        skillMe[5].classList.add("teamWork");
        skillMe[6].classList.add("comunication");
        skillMe[7].classList.add("creativity");
        skillMe[8].classList.add("dedication");
        skillMe[9].classList.add("projectManagement");
    }
}


//scroll for the application for activate the functions skills
window.onscroll = function(){
    skillsEfects();
} 