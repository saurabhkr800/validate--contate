let contacts = [];
window.submitContact = () => {
    let formData = document.getElementById("feedbackForm");
    let events = Object.fromEntries(new FormData(formData))
        // console.log(event);
    let result = submitContacts(events);
    console.log(result);
    // sendData(events);
    return result;
}


// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.

const submitContacts = (eventss) => {
    // console.log("error");
    let errors = {
        firstNameError: validateFirstName(eventss.firstname),
        lastNameError: validateLastName(eventss.lastname),
        emailError: validateEmail(eventss.email),
        homeNoError: validateContactNo(eventss.homeNo),
        workNoError: validateworkContactNo(eventss.workNo),
        birthdateError: validateBirthDate(eventss.birthdate),
        companyError: validateCompany(eventss.company),
        jobTitleError: validateJobtitle(eventss.jobTitle),
        notesError: validatenotes(eventss.notes)
    }

    //filter out empty error messages
    let errorMessages = Object.values(errors).filter(e => e !== '');


    //if no errors, push the feedback to feedbacks array
    if (errorMessages.length === 0) {
        contacts.push(contacts);
        // console.log("Error");
        return true;
    } else {
        //display validation summary with error messages
        displayValidationSummary(errorMessages);

        //display error messages alongside the input fields
        displayIndividualErrorMessages(errors)

        return false;
    }

}

//function to display validation summary with error messages provided
function displayValidationSummary(errorMessages) {

    let list = '';
    errorMessages.map(e => `<li>${e}</li>`).forEach(item => {
        list += item;
    });
    document.getElementsByTagName('ul')[0].innerHTML = list;
}

//function to display error messages alongside the input fields
function displayIndividualErrorMessages(errorMessages) {

    document.getElementById('firstNameError').innerText = errorMessages.firstNameError;
    document.getElementById('lastNameError').innerText = errorMessages.lastNameError;

    document.getElementById('emailError').innerText = errorMessages.emailError;

    document.getElementById('homeNoError').innerText = errorMessages.homeNoError;
    document.getElementById('workNoError').innerText = errorMessages.workNoError;

    document.getElementById('birthdateError').innerText = errorMessages.birthdateError;
    document.getElementById('companyError').innerText = errorMessages.companyError;
    document.getElementById('jobTitleError').innerText = errorMessages.jobTitleError;
    document.getElementById('notesError').innerText = errorMessages.notesError;


    // document.getElementById('purchaseDateError').innerText = errorMessages.purchaseDateError;
}

//function to validate username
const validateFirstName = (firstName) => {
    if (firstName === '' || firstName === undefined || firstName === null)
        return "Username cannot be left blank";
    else
        return "";
}
const validateLastName = (lastName) => {
    if (lastName === '' || lastName === undefined || lastName === null)
        return "Username cannot be left blank";
    else
        return "";
}

//function to validate email
function validateEmail(email) {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$";

    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";

    else if (!email.match(validRegex))
        emailError += 'Invalid Email';

    return emailError;

}

//function to validate contact no
const validateContactNo = (contactNo) => {
    let homeNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = "^(\\+91)?[\\s]?[(]?[0-9]{3}[)]?[-]?[.]?[\\s]?[0-9]{3}[-]?[\\s]?[.]?[0-9]{4}$";

    if (contactNo === '' || contactNo === undefined || contactNo === null)
        homeNoError += "ContactNo cannot be left blank";

    else if (!contactNo.match(validRegex))
        homeNoError += 'Invalid ContactNo';

    return homeNoError;
}
const validateworkContactNo = (workcontactNo) => {
    let workNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = "^(\\+91)?[\\s]?[(]?[0-9]{3}[)]?[-]?[.]?[\\s]?[0-9]{3}[-]?[\\s]?[.]?[0-9]{4}$";

    if (workcontactNo === '' || workcontactNo === undefined || workcontactNo === null)
        workNoError += "ContactNo cannot be left blank";

    else if (!workcontactNo.match(validRegex))
        workNoError += 'Invalid ContactNo';

    return workNoError;
}
const validateAddContact = (contactNo) => {
    let validRegex = "^(\\+91)?[\\s]?[(]?[0-9]{3}[)]?[-]?[.]?[\\s]?[0-9]{3}[-]?[\\s]?[.]?[0-9]{4}$";
    if (!contactNo.match(validRegex)) {
        return "Additional Contact 1's Format Not Valid!";
    }
    return "";
}
const validateCompany = (company) => {
    if (company === '' || company === undefined || company === null)
        return "Company cannot be left blank";
    else
        return "";
}

const validateJobtitle = (title) => {
    if (title === '' || title === undefined || title === null)
        return "Title cannot be left blank";
    else
        return "";
}

//function to validate comments
const validatenotes = (notes) => {
    let notesError = '';
    if (notes === '' || notes === undefined || notes === null)
        notesError += "notes cannot be left blank";
    else if (notes.length > 200)
        notesError = 'notes should contain maximum of 200 characters';
    return notesError;
}

//function to validate purchase-date
const validateBirthDate = (BirthDate) => {
    let BirthDateError = '';
    if (BirthDate === '' || BirthDate === undefined || BirthDate === null)
        BirthDateError = "Birth Date cannot be left blank";

    return BirthDateError;
}

//disable all future dates for purchase date input
// let birthdate = document.getElementById('birthdate');

// birthdate!==null ? birthdate.setAttribute('max', new Date().toISOString().split('T')[0]):birthdate;
let birthdate = document.getElementById("birthdate");
birthdate !== null ? birthdate.setAttribute("max", "2003-12-21") : birthdate;