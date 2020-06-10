$( document ).ready(function() {


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

})