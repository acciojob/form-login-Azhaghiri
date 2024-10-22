function getFormvalue() {
    //Write your code here
 event.preventDefault();

    // Access the form element using document.forms
    let form = document.forms["form1"];

    // Get the values of the input fields
    let firstName = form["fname"].value;
    let lastName = form["lname"].value;

    // Display the combined first and last name in an alert
    alert(firstName + " " + lastName);
}
