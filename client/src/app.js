var displayPrimeTable = require("./models/prime_tables.js")

window.addEventListener("load", function() {
  var run = new displayPrimeTable()

  displayPrimeTable.prototype.render = function() {
    let button = document.getElementById("submit-button")

    button.addEventListener("click", function() {
      let userInputField = document.getElementById("user-input")
      let requestedNumber = parseInt(userInputField.value)
      // console.log("user input", requestedNumber)

      let table = run.makeGrid(requestedNumber)
      // console.log("table", table)

      let tableWrapper = document.getElementById("table-wrapper")
      let primesTable = document.createElement("table")

      for (let row of table) {
        let tableRow = document.createElement("tr")

        for (element of row) {
          let number = document.createElement("td")
          let value = document.createTextNode(element)
          
          number.appendChild(value)
          tableRow.appendChild(number)
          primesTable.appendChild(tableRow)
          tableWrapper.appendChild(primesTable)
        }

      }
    })
  }
  run.render()
})