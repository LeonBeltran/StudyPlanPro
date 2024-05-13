// AJAX shit
$(document).ready(function() {
    $('.course_item').click(function() {
        var button = $(this);
        var courseCode = button.attr('id').toUpperCase();
        console.log(button.attr('id'));

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

                    var text = "";
                    if (course.coursePrereq.length == 0) {
                        document.getElementById("course_info_prereq").textContent = "None"
                    } else{
                        for (prereq of course.coursePrereq) {
                            text += "• " + prereq + " \n";
                            document.getElementById("course_info_prereq").textContent = text;
                        }
                    }

                    text = "";
                    if (course.courseCoreq.length == 0) {
                        document.getElementById("course_info_coreq").textContent = "None"
                    } else {
                        for (coreq of course.courseCoreq) {
                            text += "• " + coreq + " \n";
                            document.getElementById("course_info_coreq").textContent = text;
                        }
                    }

                    text = "";
                    if (course.neededFor.length == 0) {
                        document.getElementById("course_info_needed").textContent = "None"
                    } else {
                        for (needed of course.neededFor) {
                            text += "• " + needed + " \n";
                            document.getElementById("course_info_needed").textContent = text;
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
function showinfo() {
    const courseInfo = document.getElementById("course_info");
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