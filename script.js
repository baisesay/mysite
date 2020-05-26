/*jquery*/
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');

        if ($('body').hasClass('over')) {
            $('body').removeClass('over');
        } else {
            $('body').addClass('over');
        }
    })
});

function signupbgView() {
    var signupbg = document.querySelector('.signup-bg');
    signupbg.classList.add('signup-bg-active');
    document.getElementById("fname").focus();

    if ($('body').hasClass('over')) {
        $('body').removeClass('over');
    } else {
        $('body').addClass('over');
    }
}

function loginbgView() {
    var loginbg = document.querySelector('.login-bg');
    loginbg.classList.add('login-bg-active');
    document.getElementById("mail").focus();

    if ($('body').hasClass('over')) {
        $('body').removeClass('over');
    } else {
        $('body').addClass('over');
    }
}


function btnClose() {
    var retVal = confirm("Do you want to exit");

    if (retVal == true) {

        document.querySelector(".signup-bg").style.visibility = "hidden";
        $('body').removeClass('over');

        return true;
    } else {
        return false;
    }

}

function btnLoginClose() {
    var retVal = confirm("Do you want to exit");

    if (retVal == true) {

        document.querySelector(".login-bg").style.display = "none";

        $('body').removeClass('over');

        return true;
    } else {
        return false;
    }

}

function switchlogin() {

    document.querySelector('.login-bg').classList.add('login-bg-active');

    document.querySelector(".signup-bg").style.display = "none";
}

function switchsignup() {
    document.querySelector('.signup-bg').classList.add('signup-bg-active');

    document.querySelector(".login-bg").style.display = "none";

}

function btnSubmit2() {
    alert("Login Successfull");
}

function btnSubmit() {
    ///getting all the input objects///
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var genderA = document.getElementById("male").checked;
    var genderB = document.getElementById("female").checked;
    var contact = document.getElementById("contact").value;
    var interest = document.getElementById("interest").value



    var error_fname = document.getElementById("error_fname");
    var error_lname = document.getElementById("error_lname");
    var error_interest = document.getElementById("error_interest");
    var error_contact = document.getElementById("error_contact");
    var error_gender = document.getElementById("error_gender");
    var error_email = document.getElementById("error_email");
    var error_pass = document.getElementById("error_pass");

    if (fname == "") {


        error_fname.innerHTML = "FirstName is Required**";
        document.getElementById("fname").focus();

        return false;
    }

    if (lname == "") {


        error_lname.innerHTML = "LastName is Required**";
        document.getElementById("lname").focus();

        return false;
    }

    if (email == "") {
        error_email.innerHTML = "Email is Required**";
        document.getElementById("email").focus();

        return false;
    }

    if (pass == "") {
        error_pass.innerHTML = "Password is Required**";
        document.getElementById("pass").focus();

        return false;
    }

    if (genderA == "" && genderB == "") {

        error_gender.innerHTML = "Select either Male or Female**";
        return false;
    }

    if (contact == "") {
        error_contact.innerHTML = "Phone Number is Required**";
        document.getElementById("contact").focus();

        return false;
    }

    if (interest == "space") {
        error_interest.innerHTML = "Interest is Required**";
        document.getElementById("interest").focus();

        return false;
    }

    alert("Sign Up Successfull");

    return true;
}



function Verifyfname() {

    var error_fname = document.getElementById("error_fname");
    var regex = /[^a-z]/gi;
    var letters = document.regform.fname.value = document.regform.fname.value.replace(regex, "");

    if (!letters) {

        document.regform.fname.style.border = "1px solid red";
        error_fname.innerHTML = "Accept only Text**";
    } else {

        document.regform.fname.style.border = "1px solid #e8491e";
        error_fname.innerHTML = "";
    }
}

function Verifylname() {

    var error_lname = document.getElementById("error_lname");
    var regex = /[^a-z]/gi;
    var letters = document.regform.lname.value = document.regform.lname.value.replace(regex, "");

    if (!letters) {

        document.regform.lname.style.border = "1px solid red";

        error_lname.innerHTML = "Accept only Text**";
    } else {

        document.regform.lname.style.border = "1px solid #e8491e";
        error_lname.innerHTML = "";
    }
}

function Verifyemail() {

    var error_email = document.getElementById("error_email");

    document.regform.email.style.border = "1px solid #e8491e";
    error_email.innerHTML = "";

}

function Verifypass() {

    var error_pass = document.getElementById("error_pass");

    document.regform.pass.style.border = "1px solid #e8491e";
    error_pass.innerHTML = "";

}

function Verifygender() {

    var error_gender = document.getElementById("error_gender");
    error_gender.innerHTML = "";

}


function Verifycontact() {

    var error_contact = document.getElementById("error_contact");
    var regex = /[^0-9]/g;
    var letters = document.regform.contact.value = document.regform.contact.value.replace(regex, "");

    if (!letters) {

        document.regform.contact.style.border = "1px solid red";
        error_contact.innerHTML = "Accept only Numbers**";
    } else {

        document.regform.contact.style.border = "1px solid #e8491e";
        error_contact.innerHTML = "";
    }
}


function Verifyinterest() {

    var error_interest = document.getElementById("error_interest");

    document.regform.interest.style.border = "1px solid #e8491e";
    error_interest.innerHTML = "";


}