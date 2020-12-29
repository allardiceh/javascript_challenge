
// from data.js
var Data = data;


// Select the button
var button = d3.select("#button");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of info) {
      let th = document.createElement("th");
      let text = document.createTextNode(key)
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  let table = document.querySelector("table");
  let info = Object.keys(data[0]);
  generateTableHead(table);

  function generateTable(table, info) {
     d3.select("table").html("");
    for (let element of info) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  generateTable(table, data)
};



  var button_1 = d3.select("#button_1");

  // Select the form
  var form = d3.select("#form");

  // Create event handlers 
  // button_1.on("click", runEnter2);
  // form.on("submit", runEnter2);

  // Complete the event handler function for the form
  button_1.on("click", function () {


    // function runEnter2() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = Data.filter(Data => Data.Date=== inputValue);


    let table = document.querySelector("table");
    let data_1 = Object.keys(filteredData[0]);
    
    function generateTableHead(table) {
      let thead = table.createTHead();
      let row = thead.insertRow();
      for (let key of data_1) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }

    function generateTable(table, info) {
      d3.select("table").html("");
      for (let element of info) {
        let row = table.insertRow();
        for (key in element) {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  

    generateTableHead(table); 
    generateTable(table, filteredData);  

    

  })
