
//main dropdownButtons ID
const dropdownButtonID= document.getElementById('dropdown-button-id');

//dropDownList ID
const dropdownListID = document.getElementById('dropdown-list-id');

//dropdownButton SVG
const dropdownSVG = document.getElementById('dropdown-button-svg');

//Sorting Function
var options = {
    valueNames: ['star-value', 'average-value','student-value', 'class-code-value', 'class-label-names'] 
};

var classesList = new List('Classes', options);

function participantNumber(){
    //button id
    const svg = document.getElementById('dropdown-button-svg');
    const button = document.getElementById('dropdown-button-id');
    const dropdownList = document.getElementById('dropdown-list-id');


    //if the hover background is activated, deactivate else activate
    if (button.style.backgroundColor == "rgba(0, 118, 255, 0.1)"){
        button.style.backgroundColor = "transparent";
        dropdownList.style.opacity = "0";
        dropdownList.style.visibility = "hidden";
        svg.style.transform = "rotate(0.5turn)";
    }
    else{
        button.style.backgroundColor = "rgba(0, 118, 255, 0.1)"; 
        dropdownList.style.opacity = "1";
        dropdownList.style.visibility = "visible";
        svg.style.transform = "rotate(0turn)";
    }
}

function dropdownButton(clicked_id){
    const btn = document.getElementById(clicked_id);
    const svg = document.getElementById('dropdown-button-svg');
    const button = document.getElementById('dropdown-button-id');
    const dropdownList = document.getElementById('dropdown-list-id');

    document.getElementById('participant-number').innerHTML = btn.textContent || btn.innerText;
    dropdownList.style.opacity = "0";
    dropdownList.style.visibility = "hidden";
    svg.style.transform = "rotate(0.5turn)";
    button.style.backgroundColor = "transparent";
}
