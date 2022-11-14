let button = document.getElementById('button'); 
let buttonCircle = document.getElementById('button-circle'); 
let githubProfile = document.getElementById('github-profile'); 
let body = document.querySelector('body');
let lightmode = false


const changeTheme = () => {
    if(lightmode) {

        body.style.backgroundColor = "#fff";
        button.classList.remove('darkmode-button');
        buttonCircle.classList.remove('darkmode-button-circle');
        githubProfile.classList.remove('darkmode-github');        
        
        button.classList.add('lightmode-button');
        buttonCircle.classList.add('lightmode-button-circle');
        githubProfile.classList.add('lightmode-github');

        lightmode = false;
    } else {

        body.style.backgroundColor = "#191721";
        button.classList.remove('lightmode-button');
        buttonCircle.classList.remove('lightmode-button-circle');
        githubProfile.classList.remove('lightmode-github');
        
        button.classList.add('darkmode-button');
        buttonCircle.classList.add('darkmode-button-circle');
        githubProfile.classList.add('darkmode-github');        

        lightmode = true;
    }
}