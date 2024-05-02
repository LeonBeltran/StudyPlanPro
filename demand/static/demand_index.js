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
function showinfo(code, title, desc) {
    const courseInfo = document.getElementById("course_info");
    courseInfo.style.visibility = "visible";
    document.getElementById("course_info_code").textContent = `${code} ${title}`;
    if (desc != "") {
        document.getElementById("course_info_description").textContent = desc;
    } else {
        document.getElementById("course_info_description").textContent = "No Description";
    }
    switch(code) {
        case "CS 10":
            document.getElementById("course_info_coreq").textContent = 'None';
            document.getElementById("course_info_prereq").textContent = 'None';
            document.getElementById("course_info_needed").textContent = 'None';
            break;
        case "CS 11":
            document.getElementById("course_info_coreq").textContent = 'None';
            document.getElementById("course_info_prereq").textContent = 'None';
            document.getElementById("course_info_needed").textContent = '• CS 12';
            break;
        case "CS 12":
            document.getElementById("course_info_coreq").textContent = 'None';
            document.getElementById("course_info_prereq").textContent = '• CS 11';
            document.getElementById("course_info_needed").textContent = '• CS 20 \
                                                                        • CS 32 \
                                                                        • CS 131';
            break;
        case "CS 20":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 12";
            document.getElementById("course_info_needed").textContent = "• CS 21";
            break;
        case "CS 21":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 20";
            document.getElementById("course_info_needed").textContent = '• CS 140 \
                                                                        • CS 155';
            break;
        case "CS 30":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = '• CS 31 \
                                                                        • CS 133';
            break;
        case "CS 31":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 30";
            document.getElementById("course_info_needed").textContent = '• CS 32 \
                                                                        • CS 132 \
                                                                        • CS 136';
            break;
        case "CS 32":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 12 \
                                                                        • CS 31';
            document.getElementById("course_info_needed").textContent = '• CS 33 \
                                                                        • CS 120 \
                                                                        • CS 135 \
                                                                        • CS 140 \
                                                                        • CS 160';
            break;
        case "CS 33":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 32';
            document.getElementById("course_info_needed").textContent = '• CS 150 \
                                                                        • CS 165 \
                                                                        • CS 180 \
                                                                        • CS 191';
            break;
        case "CS 120":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 32";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 130":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• Math 55";
            document.getElementById("course_info_needed").textContent = "• CS 131";
            break;
        case "CS 131":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 12 \
                                                                        • CS 130';
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 132":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 31 \
                                                                        • Math 23 \
                                                                        • Math 40';
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 133":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 30';
            document.getElementById("course_info_needed").textContent = '• CS 134 \
                                                                        • CS 155';
            break;
        case "CS 134":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 133";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 135":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 32';
            document.getElementById("course_info_needed").textContent = "• CS 137";
            break;
        case "CS 136":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 31 \
                                                                        • Math 23';
            document.getElementById("course_info_needed").textContent = '• CS 138';
            break;
        case "CS 137":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 135';
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 138":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 136";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 140":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 21 \
                                                                        • CS 32';
            document.getElementById("course_info_needed").textContent = '• CS 145 \
                                                                        • CS 153';
            break;
        case "CS 145":
            document.getElementById("course_info_coreq").textContent = "• CS 153";
            document.getElementById("course_info_prereq").textContent = "• CS 140";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 150":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 33";
            document.getElementById("course_info_needed").textContent = '• CS 155 \
                                                                        • CS 191';
            break;
        case "CS 160":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 32";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 165":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 33";
            document.getElementById("course_info_needed").textContent = '• CS 191';
            break;
        case "CS 171":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 172":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 173":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 174":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 175":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 176":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 180":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 33";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 191":
            document.getElementById("course_info_coreq").textContent = '• CS 150 \
                                                                        • CS 165';
            document.getElementById("course_info_prereq").textContent = '• CS 33';
            document.getElementById("course_info_needed").textContent = "• CS 192";
            break;
        case "CS 192":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 191";
            document.getElementById("course_info_needed").textContent = "• CS 195";
            break;
        case "CS 194":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "• CS 198";
            break;
        case "CS 195":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = '• CS 192';
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 196":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 197":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "None";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 198":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 194";
            document.getElementById("course_info_needed").textContent = '• CS 199 \
                                                                        • CS 200';
            break;
        case "CS 199":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 198";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        case "CS 200":
            document.getElementById("course_info_coreq").textContent = "None";
            document.getElementById("course_info_prereq").textContent = "• CS 198";
            document.getElementById("course_info_needed").textContent = "None";
            break;
        default:
            break;

    }
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