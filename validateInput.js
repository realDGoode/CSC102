//This is the function that the strings page refers to check if the strings are valid
function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById('nameF').value;
    console.log(firstName);
    let lastName = document.getElementById('nameL').value;
    console.log(lastName);
    let zip = document.getElementById('zip').value;
    console.log(zip);
    //Combines the First and Last names as one variable
    let firstLast = firstName + " " + lastName;
    console.log(firstLast);
    //Uses the combined length of the First and Last name to use for comparison
    if(firstLast.length < 20){
        alert("The length of your name is insufficient, the total length must exceed 20 characters.");
        return false;
    }
    //This is the regular expression that checks if the zipcode is 5 numbers
    const ZipReg = /^\d{5}$/;

    //Checks if the zipcode is 5 characters and if all 5 are numbers, if not rejects the input and stops the program
    if(zip.length != 5 || !ZipReg.test(zip)) {
        alert("Invalid zipcode, zipcodes must consist of 5 numbers exactly");
        console.log(typeof zip)
        return false;
    }
    //This message should only print if both conditions are validated
    console.log("Validation successful.");
    alert("All your information are belong to us.")
}

//This is the function that drives the palindrome checker on the strings page
function palindrome(str){
    let Drome = document.getElementById("drome")
    // This is a regular expression that takes the given string and lowercases the input for comparison
    var DromeReg = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace;

    var strLength = str.length;

    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[strLength - 1 - i]) {
            //This will trigger if the given input is not a palindrome or is an invalid input
            console.log("No palindrome!")
            alert("This word is not a palindrome or is not a word.")
            return false;
        }
    }
    //This should only trigger if the given input is a palindrome
    console.log("Palindrome!");
    alert("This word is a palindrome.")
    return true;
}

//This waits for all content to be loaded and then adds the submit button functionality
window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById('nameForm','palindromeForm');
    if (form) {
        form.addEventListener('submit', validateInput);
    }
});