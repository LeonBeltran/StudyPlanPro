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
    "cs 11": {
        "prereqs": 0,
        "needed for": ["cs 12"],
        "button": document.getElementById("cs 11"),
        "passed": false
    },
    "cs 30": {
        "prereqs": 0,
        "needed for": ["cs 31", "cs 133"],
        "button": document.getElementById("cs 30"),
        "passed": false
    },
    "math 21": {
        "prereqs": 0,
        "needed for": ["math 22"],
        "button": document.getElementById("math 21"),
        "passed": false
    },
    "cs 10": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("cs 10"),
        "passed": false
    },

    "cs 12": {
        "prereqs": 1,
        "needed for": ["cs 20", "cs 32"],
        "button": document.getElementById("cs 12"),
        "passed": false
    },
    "cs 31": {
        "prereqs": 1,
        "needed for": ["cs 32", "cs 136", "cs 132"],
        "button": document.getElementById("cs 31"),
        "passed": false
    },
    "math 22": {
        "prereqs": 1,
        "needed for": ["math 23", "math 40"],
        "button": document.getElementById("math 22"),
        "passed": false
    },
    "phy 71": {
        "prereqs": 0,
        "needed for": ["phy 72"],
        "button": document.getElementById("phy 71"),
        "passed": false
    },

    "cs 20": {
        "prereqs": 1,
        "needed for": ["cs 21"],
        "button": document.getElementById("cs 20"),
        "passed": false
    },
    "cs 32": {
        "prereqs": 2,
        "needed for": ["cs 33", "cs 140"],
        "button": document.getElementById("cs 32"),
        "passed": false
    },
    "math 23": {
        "prereqs": 1,
        "needed for": ["cs 136", "cs 132"],
        "button": document.getElementById("math 23"),
        "passed": false
    },
    "phy 72": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("phy 72"),
        "passed": false
    },

    "cs 21": {
        "prereqs": 1,
        "needed for": ["cs 140", "cs 155"],
        "button": document.getElementById("cs 21"),
        "passed": false
    },
    "cs 33": {
        "prereqs": 1,
        "needed for": ["cs 150", "cs 165", "cs 191", "cs 180"],
        "button": document.getElementById("cs 33"),
        "passed": false
    },
    "cs 136": {
        "prereqs": 2,
        "needed for": ["cs 138"],
        "button": document.getElementById("cs 136"),
        "passed": false
    },
    "math 40": {
        "prereqs": 1,
        "needed for": ["cs 138", "cs 132"],
        "button": document.getElementById("math 40"),
        "passed": false
    },

    "cs 140": {
        "prereqs": 2,
        "needed for": ["cs 145", "cs 153"],
        "button": document.getElementById("cs 140"),
        "passed": false
    },
    "cs 150": {
        "prereqs": 1,
        "needed for": ["cs 155"],
        "button": document.getElementById("cs 150"),
        "passed": false
    },
    "cs 165": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 165"),
        "passed": false
    },
    "cs 191": {
        "prereqs": 1,
        "needed for": ["cs 192"],
        "button": document.getElementById("cs 191"),
        "passed": false
    },
    "cs 138": {
        "prereqs": 2,
        "needed for": [],
        "button": document.getElementById("cs 138"),
        "passed": false
    },

    "cs 145": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 145"),
        "passed": false
    },
    "cs 153": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 153"),
        "passed": false
    },
    "cs 180": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 180"),
        "passed": false
    },
    "cs 192": {
        "prereqs": 1,
        "needed for": ["cs 195"],
        "button": document.getElementById("cs 192"),
        "passed": false
    },
    "cs 194": {
        "prereqs": 0,
        "needed for": ["cs 198"],
        "button": document.getElementById("cs 194"),
        "passed": false
    },

    "cs 195": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 195"),
        "passed": false
    },

    "cs 133": {
        "prereqs": 1,
        "needed for": ["cs 155"],
        "button": document.getElementById("cs 133"),
        "passed": false
    },
    "cs 198": {
        "prereqs": 1,
        "needed for": ["cs 199"],
        "button": document.getElementById("cs 198"),
        "passed": false
    },

    "cs 155": {
        "prereqs": 3,
        "needed for": [],
        "button": document.getElementById("cs 155"),
        "passed": false
    },
    "cs 132": {
        "prereqs": 3,
        "needed for": [],
        "button": document.getElementById("cs 132"),
        "passed": false
    },
    "cs 196": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("cs 196"),
        "passed": false
    },
    "cs 199": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("cs 199"),
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
    console.log(electiveButton.className);
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