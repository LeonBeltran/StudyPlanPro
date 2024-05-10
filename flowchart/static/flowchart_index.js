// AJAX shit
$(document).ready(function() {
    $('.course_button').click(function() {
        var button = $(this);
        var courseCode = button.attr('id').toUpperCase();

        $.ajax({
            type: "GET",
            url: 'course_description',
            dataType: 'json',
            data: {
                code: courseCode
            },
            success: function(data) {
                if (data.error) {
                    console.error(data);
                } else {
                    console.log(data)
                    const course = data

                    document.getElementById("course_info_code").textContent = `${course.courseCode} ${course.courseTitle}`;
                    if (course.shortDescription != "") {
                        document.getElementById("course_info_description").textContent = course.shortDescription;
                    } else {
                        document.getElementById("course_info_description").textContent = "No Description";
                    }
                }
            },
            error: function(error) {
                console.error(error);
            }
        });
    })
})

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
        if (courses[course]["button"].disabled) {
            courses[course]["button"].disabled = True;
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
        var code = courseName.toUpperCase();
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
                document.getElementById("course_info_coreq").textContent = 'None';
                document.getElementById("course_info_prereq").textContent = 'None';
                document.getElementById("course_info_needed").textContent = 'None';
                break;
        }
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