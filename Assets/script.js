// Main time at top of page
var mainDateTime = (mainDateTime = moment().format("dddd, MMMM Do YYYY"));
$("#currentDay").html(mainDateTime);

// get current hour - used to format table by past, current, future hour
var currentHour = moment().format("HH");

// for loop creates each of the input fields, hour labels, cave buttons for 9 am to 5 pm
for (let i = 9; i < 18; i++) {
  var hourInt = i;
  var hourStr = hourInt.toString();
  var momentHour = moment(hourStr, "H").format("HH:mm");

  // create parent input group element - this element is highlighted with a red box if it is the current hour
  if (parseInt(currentHour) === hourInt) {
    var inputGroup = $(
      "<div id=iG" + i + " class='input-group border border-danger'></div>"
    );
  } else {
    var inputGroup = $("<div id=iG" + i + " class='input-group'></div>");
  }

  //Prepend the space to display time slot of the day
  var inputGroupPrepend = $(
    "<div id=iGP" + i + " class='input-group-prepend'></div>"
  );
// Create input text element for user to write down tasks
  var inputGroupInput = $(
    "<input id=iGI" + i + " type='text' class='form-control'></input>"
  );

// Format input text fields based on past, present or future time block
  if (hourInt < parseInt(currentHour)) {
    inputGroupInput.attr("style", "background-color: lightgray");
  } else if (hourInt > parseInt(currentHour)) {
    inputGroupInput.attr("style", "background-color: lightgreen");
  }

// Add text to element displaying time slot of the day
  var inputGroupText = $(
    "<span id=iGT" + i + " class='input-group-text'></span>"
  ).text(momentHour);
// Add save button parent
  var inputGroupApnd = $(
    "<span id=iGA" + i + " class='input-group-append'></span>"
  );
// Add save button
  var inputGroupBtn = $(
    "<button id=iGB" +
      i +
      " class='btn btn-light far fa-save' type='submit'></button>"
  );
// Set save button color to same as time slot background color
  inputGroupBtn.attr("style", "background-color:  rgb(233, 236, 239)");

 // Append elements in proper order 
  $("#sub-container").append(
    inputGroup
      .append(inputGroupPrepend.append(inputGroupText))
      .append(inputGroupInput)
      .append(inputGroupApnd.append(inputGroupBtn))
  );
}





































// var inputGroup = $("<p class='input-group'>i</p>").text("Text.")

/* <div id="sub-container" class="col-sm-12 col-md-8 offset-md-2">

<div class="input-group">

  <div class="input-group-prepend">

    <span class="input-group-text" id="">1 AM</span>

  </div>


  <input type="text" class="form-control" />



</div>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">2 AM</span>
  </div>
  <input type="text" class="form-control" />
</div>
</div> */

// $(document).ready(function() {

//     // Make our variables global to the runtime of our application
//     var firstNumber = 0;
//     var secondNumber = 0;
//     var operator = "";
//     var result = 0;
//     var isOperatorChosen = false;
//     var isCalculated = false;

//     // Use a function to initialize our calculator.
//     // This way when the user hits clear, we can guarantee a reset of the app.
//     function initializeCalculator() {
//       firstNumber = "";
//       secondNumber = "";
//       operator = "";
//       isOperatorChosen = false;
//       isCalculated = false;

//       $("#first-number, #second-number, #operator, #result").empty();
//     }

//     $(".number").on("click", function() {

//       // Check if we've already run a calculation, if so... we'll just.
//       if (isCalculated) {
//         return false;
//       }

//       // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
//       if (isOperatorChosen) {
//         secondNumber += $(this).val();
//         $("#second-number").text(secondNumber);

//       }
//       else {
//         firstNumber += $(this).val();
//         $("#first-number").text(firstNumber);
//       }

//     });
//     $(".operator").on("click", function() {

//       // Check if a first number has already been selected
//       // Or we've already run a calculation, if so we just exit.
//       if (!firstNumber || isCalculated) {
//         return false;
//       }

//       // Set isOperatorChosen to true so we start writing to secondNumber
//       isOperatorChosen = true;

//       // Store off the operator
//       operator = $(this).val();

//       // Set the HTML of the #operator to the text of what was clicked
//       $("#operator").text($(this).text());

//     });
//     $(".equal").on("click", function() {

//       // If we already clicked equal, don't do the calculation again
//       if (isCalculated) {
//         return false;
//       }

//       // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
//       isCalculated = true;

//       // Use parseInt to convert our string representation of numbers into actual integers
//       firstNumber = parseInt(firstNumber);
//       secondNumber = parseInt(secondNumber);

//       // Based on the operator that was chosen.
//       // Then run the operation and set the HTML of the result of that operation
//       if (operator === "plus") {
//         result = firstNumber + secondNumber;
//       }

//       else if (operator === "minus") {
//         result = firstNumber - secondNumber;
//       }

//       else if (operator === "times") {
//         result = firstNumber * secondNumber;
//       }

//       else if (operator === "divide") {
//         result = firstNumber / secondNumber;
//       }

//       else if (operator === "power") {
//         result = Math.pow(firstNumber, secondNumber);
//       }

//       $("#result").text(result);

//     });
//     $(".clear").on("click", function() {

//       // Call initializeCalculater so we can reset the state of our app
//       initializeCalculator();

//     });

//     // Call initializeCalculater so we can set the state of our app
//     initializeCalculator();
//   });
