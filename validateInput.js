function validateInput(){
    console.log("test");
    return false;
}

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
    //Checks if the zipcode is 5 characters and if all 5 are numbers
    if(zip.length != 5 || parseInt(zip) < 9999) {
        alert("Invalid zipcode, zipcodes must consist of 5 numbers exactly");
        console.log(typeof zip)
        return false;
    }
    //This message should only print if both conditions are validated
    console.log("Validation successful.");
    alert("All your information are belong to us.")
}

window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById('nameForm');
    if (form) {
        form.addEventListener('submit', validateInput);
    }
});