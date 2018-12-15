var EmployeeName = "";
var Role = "";
var StartDate = "";
var mounthsWork = "";
var MonthlyRate = "";
var TotalBilled = "";

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

var config = {
    apiKey: "AIzaSyCyOv9lPv3btckAveNO-HRpuIPrTvzi7QM",
    authDomain: "time-sheets-25e21.firebaseapp.com",
    databaseURL: "https://time-sheets-25e21.firebaseio.com",
    projectId: "time-sheets-25e21",
    storageBucket: "",
    messagingSenderId: "208307836815"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#btnSubmit", function () {
    tableRow = $("<tr>");
    tableData1 = $("<td>");
    tableData2 = $("<td>");
    tableData3 = $("<td>");
    tableData4 = $("<td>");
    tableData5 = $("<td>");
    tableData6 = $("<td>");
    tableRow.text("employer");
    tableData.text("something");

    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    $(tbody).append(tableData);

    // values from text-boxes
    EmployeeName = $("#nameInput").val().trim();
    roleInput = $("#roleInput").val().trim();
    StartDate = $("#startDateInput").val().trim();
    MonthlyRate = $("#monthlyRateInput").val().trim();

    database.ref().push({
        name: EmployeeName,
        title: Role,
        date: StartDate,
        rate: MonthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

});

database.ref().on("child_added", function(snapshot){
    
})