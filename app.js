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

    tableRow = $("<tr>");
    tableData1 = $("<td>");
    tableData1.text(EmployeeName);
    tableData2 = $("<td>");
    tableData2.text(roleInput);
    tableData3 = $("<td>");
    tableData3.text(StartDate);
    tableData4 = $("<td>");
    tableData5 = $("<td>");
    tableData5.text(MonthlyRate);
    tableData6 = $("<td>");

    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    $(".table").append(tableRow);

    database.ref().push({
        name: EmployeeName,
        title: Role,
        date: StartDate,
        rate: MonthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

});

database.ref().on("child_added", function(snapshot){
    var sv = snapshot.val();

    console.log(sv.EmployeeName);
    console.log(sv.Role);
    console.log(sv.StartDate);
    console.log(sv.MonthlyRate);

    $("#nameInput").text(sv.EmployeeName);
    $("#roleInput").text(sv.Role);
    $("#startDateInput").text(sv.StartDate);
    $("#monthlyRateInput").text(sv.MonthlyRate);
}, function(error){
    console.log("Errors: " + error);
    
});