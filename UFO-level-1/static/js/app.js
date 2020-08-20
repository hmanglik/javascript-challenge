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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter the data for the date value
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // Clear the tbody
    d3.select("tbody").html("");

    // Loop Through `filteredData` and console.log each ufo object
    filteredData.forEach(function(ufo_sighting) {
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
}
