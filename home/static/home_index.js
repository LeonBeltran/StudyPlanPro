function loginPopup() {
    const popUp = document.getElementById("popup");
    popUp.style.visibility = "visible";
}

function exitPopup() {
    const popUp = document.getElementById("popup");
    
    const textFields = document.getElementsByClassName("loginInput");
    const nicknameField = textFields[0];
    const emailField = textFields[1];

    popUp.style.visibility = "hidden";
    nicknameField.setAttribute("style", "");
    nicknameField.value = "";
    emailField.setAttribute("style", "");
    emailField.value = "";
}



// TEMPORARY FUNCTION TO SHOW UI WHEN ERROR IN INPUTS IS ENCOUNTERED //

function sendEmailPressed() {
    const textFields = document.getElementsByClassName("loginInput");
    const nickname = textFields[0].value.replace(/\s/g, '');
    const email = textFields[1].value.replace(/\s/g, '');

    //textFields[0].setAttribute("style", "border-color: red; border-style: solid;");
    textFields[1].setAttribute("style", "border-color: red; border-style: solid;");

    if (!nickname || !email) {
        alert("nickname and email fields can't be empty");
    } else {
        alert("Invalid UP email");
    }
}

////////////////////////////////////////////////////////////////////////