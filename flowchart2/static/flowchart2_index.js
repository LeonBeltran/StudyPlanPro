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



// dropdown function
function dropdownClick() {
    const dropdownItems = document.getElementById("dropdown_items");

    if (dropdownItems.style.visibility === "visible") {
        dropdownItems.style.visibility = "hidden";
    } else {
        dropdownItems.style.visibility = "visible";
    }
}



// course flowchart
var isChecker = false;
var courses = {
    "eee 111": {
        "prereqs": 0,
        "needed for": ["eee 121", "coe 161"],
        "button": document.getElementById("eee 111"),
        "passed": false
    },
    "eee 113": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("eee 113"),
        "passed": false
    },
    "eee 118": {
        "prereqs": 0,
        "needed for": ["eee 128"],
        "button": document.getElementById("eee 118"),
        "passed": false
    },
    "eee 121": {
        "prereqs": 1,
        "needed for": ["coe 163", "coe 167"],
        "button": document.getElementById("eee 121"),
        "passed": false
    },
    "eee 123": {
        "prereqs": 0,
        "needed for": ["eee 131", "eee 133", "eee 155"],
        "button": document.getElementById("eee 123"),
        "passed": false
    },
    "eee 128": {
        "prereqs": 1,
        "needed for": ["eee 138", "eee 148", "eee 158"],
        "button": document.getElementById("eee 128"),
        "passed": false
    },
    "eee 131": {
        "prereqs": 2,
        "needed for": ["eee 141"],
        "button": document.getElementById("eee 131"),
        "passed": false
    },
    "eee 133": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 133"),
        "passed": false
    },
    "eee 135": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 135"),
        "passed": false
    },
    "eee 137": {
        "prereqs": 1,
        "needed for": ["coe 161"],
        "button": document.getElementById("eee 137"),
        "passed": false
    },
    "eee 138": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 138"),
        "passed": false
    },
    "eee 141": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 141"),
        "passed": false
    },
    "eee 143": {
        "prereqs": 0,
        "needed for": ["eee 153"],
        "button": document.getElementById("eee 143"),
        "passed": false
    },
    "eee 145": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 145"),
        "passed": false
    },
    "eee 147": {
        "prereqs": 1,
        "needed for": ["eee 151", "eee 157", "eee 158"],
        "button": document.getElementById("eee 147"),
        "passed": false
    },
    "eee 148": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 148"),
        "passed": false
    },
    "eee 151": {
        "prereqs": 2,
        "needed for": [],
        "button": document.getElementById("eee 151"),
        "passed": false
    },
    "eee 153": {
        "prereqs": 1,
        "needed for": ["coe 163", "coe 165"],
        "button": document.getElementById("eee 153"),
        "passed": false
    },
    "eee 155": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("eee 155"),
        "passed": false
    },
    "eee 157": {
        "prereqs": 1,
        "needed for": ["coe 167"],
        "button": document.getElementById("eee 157"),
        "passed": false
    },
    "eee 158": {
        "prereqs": 2,
        "needed for": ["eee 192"],
        "button": document.getElementById("eee 158"),
        "passed": false
    },
    "eee 192": {
        "prereqs": 1,
        "needed for": ["eee 196"],
        "button": document.getElementById("eee 192"),
        "passed": false
    },
    "eee 196": {
        "prereqs": 1,
        "needed for": ["coe 199"],
        "button": document.getElementById("eee 196"),
        "passed": false
    },
    "coe 161": {
        "prereqs": 2,
        "needed for": [],
        "button": document.getElementById("coe 161"),
        "passed": false
    },
    "coe 163": {
        "prereqs": 3,
        "needed for": ["coe 165", "coe 167"],
        "button": document.getElementById("coe 163"),
        "passed": false
    },
    "coe 164": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("coe 164"),
        "passed": false
    },
    "coe 165": {
        "prereqs": 2,
        "needed for": [],
        "button": document.getElementById("coe 165"),
        "passed": false
    },
    "coe 167": {
        "prereqs": 3,
        "needed for": [],
        "button": document.getElementById("coe 167"),
        "passed": false
    },
    "coe 168": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("coe 168"),
        "passed": false
    },
    "coe 199": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("coe 199"),
        "passed": false
    },
    "math 21": {
        "prereqs": 0,
        "needed for": ["math 22"],
        "button": document.getElementById("math 21"),
        "passed": false
    },
    "math 22": {
        "prereqs": 1,
        "needed for": ["eee 137", "math 23", "math 40", "eee 147", "es 101"],
        "button": document.getElementById("math 22"),
        "passed": false
    },
    "math 23": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("math 23"),
        "passed": false
    },
    "math 40": {
        "prereqs": 1,
        "needed for": ["coe 163"],
        "button": document.getElementById("math 40"),
        "passed": false
    },
    "phy 71": {
        "prereqs": 0,
        "needed for": ["phy 72"],
        "button": document.getElementById("phy 71"),
        "passed": false
    },
    "phy 72": {
        "prereqs": 1,
        "needed for": ["eee 131", "eee 145", "eee 135", "phy 73"],
        "button": document.getElementById("phy 72"),
        "passed": false
    },
    "phy 73": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("phy 73"),
        "passed": false
    },
    "es 101": {
        "prereqs": 1,
        "needed for": ["eee 151"],
        "button": document.getElementById("es 101"),
        "passed": false
    },
}
    
function toggleDetails() {
    const toggle_details = document.getElementById("toggle_details");
    
    if (isChecker) {
        toggle_details.textContent = "Details Mode";
        isChecker = false;
        makeDetailButtons();
    } else {
        toggle_details.textContent = "Checker Mode";
        isChecker = true;
        makeCheckerButtons();
    }
}

function makeDetailButtons() {
    for (const course in courses) {
        courses[course]["button"].style.background = "#ffffff";
        
        if (courses[course]["button"].disabled) {
            courses[course]["button"].disabled = false;
            
        }
    }
}

function makeCheckerButtons() {
    for (const course in courses) {
        if (courses[course]["prereqs"] > 0) {
            courses[course]["button"].disabled = true;
        } else if (courses[course]["passed"]) {
            courses[course]["button"].style.background = "#a2ff93";
        }
    }
}

//temporary function for elective buttons; toggle lang muna sila
function electiveButtonPressed(electiveButton) {
    //console.log(electiveButton.className);
    if (electiveButton.className === "course_button") {
        electiveButton.className = "passed_elective_button";
    } else if (electiveButton.className === "dropdown_button") {
        electiveButton.className = "passed_dropdown";
    } else if (electiveButton.className === "passed_elective_button") {
        electiveButton.className = "course_button";
    } else {
        electiveButton.className = "dropdown_button";
    }
}



function showFeedbackPopup() {
    const feedbackPopup = document.getElementById("feedback_popup");
    feedbackPopup.style.visibility = "visible";

    const flowchartButton = document.getElementById("flowchart_button");
    const feedbackLink = document.getElementById("feedback_link");
    flowchartButton.style.pointerEvents = "none";
    feedbackLink.style.pointerEvents = "none";
}

function exitFeedbackPopup() {
    const feedbackPopup = document.getElementById("feedback_popup");
    feedbackPopup.style.visibility = "hidden";

    const flowchartButton = document.getElementById("flowchart_button");
    const feedbackLink = document.getElementById("feedback_link");
    flowchartButton.style.pointerEvents = "auto";
    feedbackLink.style.pointerEvents = "auto";
}



//temporary function for course info
function showinfo(courseName) {
    if (!isChecker) {
        const courseInfo = document.getElementById("course_info");
        courseInfo.style.visibility = "visible";
    } else {
        //checker mode function merged

        if (courses[courseName]["passed"]) {
            for (nextSub of courses[courseName]["needed for"]) {
                if (courses[nextSub]["passed"]) {
                    alert("one or more subjects it is prerequisite for is/are already passed");
                    return;
                }
            } 

            courses[courseName]["passed"] = false;
            courses[courseName]["button"].style.background = "#ffffff";
            
            for (nextSub of courses[courseName]["needed for"]) {
                courses[nextSub]["prereqs"]++;

                if (courses[nextSub]["prereqs"] > 0) {
                    courses[nextSub]["button"].disabled = true;
                }
            }
        } else {
            courses[courseName]["passed"] = true;
            courses[courseName]["button"].style.background = "#a2ff93"; 
            
            for (nextSub of courses[courseName]["needed for"]) {
                courses[nextSub]["prereqs"]--;
                
                if (courses[nextSub]["prereqs"] === 0) {
                    courses[nextSub]["button"].disabled = false;
                }
            } 
        }
    }
}

function exitinfo() {
    const courseInfo = document.getElementById("course_info");
    courseInfo.style.visibility = "hidden";

    const reviewInput = document.getElementById("review_input");
    reviewInput.value = "";
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