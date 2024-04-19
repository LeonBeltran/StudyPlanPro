//log in stuff
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



//temporary function
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



//DEMAND TABLE

function showinfo(courseCode, courseTitle, shortDescription, coursePreqreq, courseCoreq, nominalCourseDifficultyReview, courseDemand) {
    const courseInfo = document.getElementById("course_info");
    document.getElementById("course_info_code").textContent = `${courseCode} ${courseTitle}`;
    document.getElementById("course_info_description").textContent = shortDescription;
    document.getElementById("course_info_coreq").textContent = courseCoreq;
    courseInfo.style.visibility = "visible";
}

function exitinfo() {
    const courseInfo = document.getElementById("course_info");
    courseInfo.style.visibility = "hidden";

    const reviewInput = document.getElementById("review_input");
    reviewInput.value = "";
}

//temporary function
function demtableSearch(text) {
    if(event.key === 'Enter') {
        alert(`${text.value} does not exist`);        
    }
}