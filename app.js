var EmployeeName = "";
var Role = "";
var StartDate = "";
var mounthsWork = "";
var MonthlyRate = "";
var TotalBilled = "";

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

$(document).on("click", "#btnSubmit", function (event) {

    event.preventDefault();
    // values from text-boxes
    EmployeeName = $("#nameInput").val().trim();
    roleInput = $("#roleInput").val().trim();
    StartDate = $("#startDateInput").val().trim();
    MonthlyRate = $("#monthlyRateInput").val().trim();

    var tableRow = $("<tr>");
    var tableData1 = $("<td>");
    tableData1.text(EmployeeName);
    var tableData2 = $("<td>");
    tableData2.text(roleInput);
    var tableData3 = $("<td>");
    tableData3.text(StartDate);
    var tableData4 = $("<td>");
    var tableData5 = $("<td>");
    tableData5.text(MonthlyRate);
    var tableData6 = $("<td>");

    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    $(".table").append(tableRow);

    database.ref().push({
        name: EmployeeName,
        title: roleInput,
        date: StartDate,
        rate: MonthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

});

database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();

    console.log(sv.name);
    console.log(sv.title);
    console.log(sv.date);
    console.log(sv.rate);

    // $("#nameInput").text(sv.EmployeeName);
    // $("#roleInput").text(sv.Role);
    // $("#startDateInput").text(sv.StartDate);
    // $("#monthlyRateInput").text(sv.MonthlyRate);

    var tableRow = $("<tr>");
    var tableData1 = $("<td>");
    tableData1.text(sv.name);
    var tableData2 = $("<td>");
    tableData2.text(sv.title);
    var tableData3 = $("<td>");
    tableData3.text(sv.date);
    var tableData4 = $("<td>");
    var tableData5 = $("<td>");
    tableData5.text(sv.rate);
    var tableData6 = $("<td>");

    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    $(".table").append(tableRow);
}, function (error) {
    console.log("Errors: " + error);

});

// var tableRow = $("<tr>");
// var tableData1 = $("<td>");
// tableData1.text(database.ref().EmployeeName);
// var tableData2 = $("<td>");
// tableData2.text(Role);
// var tableData3 = $("<td>");
// tableData3.text(StartDate);
// var tableData4 = $("<td>");
// var tableData5 = $("<td>");
// tableData5.text(MonthlyRate);
// var tableData6 = $("<td>");