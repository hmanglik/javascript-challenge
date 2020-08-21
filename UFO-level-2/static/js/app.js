// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `tableData` and console.log each ufo object
tableData.forEach(function(ufo_sighting) {
    console.log(ufo_sighting);

  // Use d3 to append one table row `tr` for each ufo object
  var row = tbody.append("tr");

  // Use `Object.entries` to console.log each ufo value
  Object.entries(ufo_sighting).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value
    // in the ufo object
    var cell = row.append("td");

    // Use d3 to update each cell's text with ufo values
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var dateTime = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var country = d3.select("#country");
    var shape = d3.select("#shape");

    // Get the value property of the input elements
    var inputDate = dateTime.property("value");
    var inputCity = city.property("value");
    var inputState = state.property("value");
    var inputCountry = country.property("value");
    var inputShape = shape.property("value");

    // Filter the data for the input values
    if (inputDate != "") {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);}
    if (inputCity != "") {
        var filteredData = tableData.filter(ufo => ufo.city === inputCity);}
    if (inputState != "") {
        var filteredData = tableData.filter(ufo => ufo.state === inputState);}
    if (inputCountry != "") {
        var filteredData = tableData.filter(ufo => ufo.country === inputCountry);}
    if (inputShape != "") {
        var filteredData = tableData.filter(ufo => ufo.shape === inputShape);}

    // Clear the tbody
    d3.select("tbody").html("");

    // Loop through `filteredData` and console.log each ufo object
    filteredData.forEach(function(ufo_sighting) {
        console.log(ufo_sighting);

        // Use d3 to append one table row `tr` for each ufo object
        var row = tbody.append("tr");

        // Use `Object.entries` to console.log each ufo value
        Object.entries(ufo_sighting).forEach(function([key, value]) {
          console.log(key, value);

          // Append a cell to the row for each value
          // in the UFO object

          var cell = row.append("td");

          // Use d3 to update each cell's text with ufo values
          cell.text(value);
        });
});
}