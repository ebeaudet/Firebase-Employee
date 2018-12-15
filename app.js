var EmployeeName = "";
var Role = "";
var StartDate = "";
var monthsWork = "";
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
    // monthsWork =$("#")
    // TotalBilled

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

    database.ref().push({
        name: EmployeeName,
        title: roleInput,
        date: StartDate,
        rate: MonthlyRate,
        totalMonth: monthsWork,
        pay: TotalBilled,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();

    console.log(sv.name);
    console.log(sv.title);
    console.log(sv.date);
    console.log(sv.rate);

    var tableRow = $("<tr>");
    var tableData1 = $("<td>");
    tableData1.text(sv.name);
    var tableData2 = $("<td>");
    tableData2.text(sv.title);
    var tableData3 = $("<td>");
    tableData3.text(sv.date);
    var tableData4 = $("<td>");
    tableData4.text(sv.totalMonth);
    var tableData5 = $("<td>");
    tableData5.text(sv.rate);
    var tableData6 = $("<td>");
    tableData6.text(sv.pay);

    monthsWork = moment.diff(date, 'months');
    console.log(monthsWork);

    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    $(".table").append(tableRow);
}, function (error) {
    console.log("Errors: " + error);

});


