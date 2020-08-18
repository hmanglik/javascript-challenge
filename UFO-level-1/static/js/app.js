// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 5: Use d3 to update each cell's text with
// UFO values
tableData.forEach(function(ufo_sighting) {
  console.log(ufo_sighting);
  var row = tbody.append("tr");
  Object.entries(ufo_sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.bloodType === inputValue);

  console.log(filteredData);
  
function handleClick() {
  tableData.filter
}
  // We can use the `on` function in d3 to attach an event to the handler function
  button.on("click", handleClick);
  
  // You can also define the click handler inline
  button.on("click", function() {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
  });
