// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");


// Step 5: Use d3 to update each cell's text with
// UFO values
tableData.forEach(function(ufo_sighting) {
  console.log(ufo_sighting);
  var row = tbody.append("tr");
  Object.entries(ufo_sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO object
    var cell = row.append("td");
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

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    d3.select("tbody").html("");

    filteredData.forEach(function(ufo_sighting) {
        console.log(ufo_sighting);
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the UFO object
          var cell = row.append("td");
          cell.text(value);
        });
});
}
