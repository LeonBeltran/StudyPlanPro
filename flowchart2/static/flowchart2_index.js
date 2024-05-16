// AJAX
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

                    document.getElementById("review_course").value = course.courseCode
                    document.getElementById("course_info_code").textContent = `${course.courseCode} ${course.courseTitle}`;
                    if (course.shortDescription != "") {
                        document.getElementById("course_info_description").textContent = course.shortDescription;
                    } else {
                        document.getElementById("course_info_description").textContent = "No Description";
                    }

                    var text = "";
                    if (course.coursePrereq.length == 0) {
                        document.getElementById("course_info_prereq").textContent = "None"
                    } else{
                        for (prereq of course.coursePrereq) {
                            text += "• " + prereq + "\r\n";
                            document.getElementById("course_info_prereq").textContent = text;
                        }
                    }

                    text = "";
                    if (course.courseCoreq.length == 0) {
                        document.getElementById("course_info_coreq").textContent = "None"
                    } else {
                        for (coreq of course.courseCoreq) {
                            text += "• " + coreq + "\r\n";
                            document.getElementById("course_info_coreq").textContent = text;
                        }
                    }

                    text = "";
                    if (course.neededFor.length == 0) {
                        document.getElementById("course_info_needed").textContent = "None"
                    } else {
                        for (needed of course.neededFor) {
                            text += "• " + needed + "\r\n";
                            document.getElementById("course_info_needed").textContent = text;
                        }
                    }
                    
                    text = "";
                    if (course.courseReview.length == 0) {
                        document.getElementById("course_info_review").textContent = "No Reviews"
                    } else {
                        for (review of course.courseReview) {
                            text += "• " + review + "\r\n";
                            document.getElementById("course_info_review").textContent = text;
                        }
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
    "physics 71": {
        "prereqs": 0,
        "needed for": ["physics 72"],
        "button": document.getElementById("physics 71"),
        "passed": false
    },
    "physics 72": {
        "prereqs": 1,
        "needed for": ["eee 131", "eee 145", "eee 135", "physics 73"],
        "button": document.getElementById("physics 72"),
        "passed": false
    },
    "physics 73": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("physics 73"),
        "passed": false
    },
    "es 101": {
        "prereqs": 1,
        "needed for": ["eee 151"],
        "button": document.getElementById("es 101"),
        "passed": false
    },

    //electives
    "kas 1": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("kas 1"),
        "passed": false
    },
    "philo 1": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("philo 1"),
        "passed": false
    },
    "soc sci 2": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("soc sci 2"),
        "passed": false
    },
    "speech 30": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("speech 30"),
        "passed": false
    },
    "fil 40": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("fil 40"),
        "passed": false
    },
    "drmaps": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("drmaps"),
        "passed": false
    },
    "arts 1": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("arts 1"),
        "passed": false
    },
    "pi 100": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("pi 100"),
        "passed": false
    },
    "ge elective": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("ge elective"),
        "passed": false
    },
    "engg elective": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("engg elective"),
        "passed": false
    },
    "eee elective": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("eee elective"),
        "passed": false
    },
    "free elective": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("free elective"),
        "passed": false
    },
    "pe 1": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("pe 1"),
        "passed": false
    },
    "pe 2": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("pe 2"),
        "passed": false
    },
    "pe 3": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("pe 3"),
        "passed": false
    },
    "pe 4": {
        "prereqs": 0,
        "needed for": [],
        "button": document.getElementById("pe 4"),
        "passed": false
    },
    "nstp 1": {
        "prereqs": 0,
        "needed for": ["nstp 2"],
        "button": document.getElementById("nstp 1"),
        "passed": false
    },
    "nstp 2": {
        "prereqs": 1,
        "needed for": [],
        "button": document.getElementById("nstp 2"),
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
        courses[course]["button"].disabled = true;
        
        if (courses[course]["prereqs"] === 0) {
            const checkbox = (courses[course]["button"].children)[0];
            checkbox.disabled = false;
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
        document.getElementById("course_info_prereq").setAttribute('style', 'white-space: pre;');
        document.getElementById("course_info_coreq").setAttribute('style', 'white-space: pre;');
        document.getElementById("course_info_needed").setAttribute('style', 'white-space: pre;');
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



function checkTheBox(courseName) {
    courseName = courseName.toLowerCase();
    console.log(courseName);

    if (courses[courseName]["passed"]) {
        for (nextSub of courses[courseName]["needed for"]) {
            if (courses[nextSub]["passed"]) {
                alert("one or more subjects it is prerequisite for is/are already passed");
                (courses[courseName]["button"].children)[0].checked = true;
                return;
            }
        } 

        courses[courseName]["passed"] = false;
        
        for (nextSub of courses[courseName]["needed for"]) {
            courses[nextSub]["prereqs"]++;

            if (courses[nextSub]["prereqs"] > 0) {
                (courses[nextSub]["button"].children)[0].disabled = true;
            }
        }

    } else {
        courses[courseName]["passed"] = true;
        
        for (nextSub of courses[courseName]["needed for"]) {
            courses[nextSub]["prereqs"]--;
            
            if (courses[nextSub]["prereqs"] === 0) {
                (courses[nextSub]["button"].children)[0].disabled = false;
            }
        } 
    }
}