var EmployeeName;
var Role;
var StartDate;
var mounthsWork;
var MonthlyRate;
var TotalBilled;

// We will need this
// use .push({}) to add and not change database.ref().on("child_added", function(snapshot) {  
        // Capture Button Click
        // $("#add-user").on("click", function(event) {
        //     event.preventDefault();
      
        //     // Grabbed values from text boxes
        //     name = $("#name-input").val().trim();
        //     email = $("#email-input").val().trim();
        //     age = $("#age-input").val().trim();
        //     comment = $("#comment-input").val().trim();
      
        //     // Code for handling the push
        //     database.ref().push({
        //       name: name,
        //       email: email,
        //       age: age,
        //       comment: comment,
        //       dateAdded: firebase.database.ServerValue.TIMESTAMP
        //     });
      
        //   });


$(document).on("click", ".jumbotron", function(){
    tableRow = $("<tr>");
    tableData1 = $("<td>");
    tableData2 = $("<td>");
    tableData3 = $("<td>");
    tableData4 = $("<td>");
    tableData5 = $("<td>");
    tableData6 = $("<td>");
    tableRow.text("employer");
    tableData.text("something");

    tableRow.append(tableData);
    $(tbody).append(tableData);
    
});