// Global variable declaration
var storageArray = [];
var currentHour = moment().format("HH");

// Ensure entire html is loaded before running js
$(document).ready(function () {
  // Run function to update live date time at an interval
  setInterval(function () {
    var mainDateTime = moment().format("dddd, MMMM Do YYYY HH:mm");
    $("#currentDay").html(mainDateTime);
  }, 1000);

  // For loop creates each of the input fields, hour labels, cave buttons for 9 am to 5 pm
  for (let i = 8; i < 19; i++) {
    var hourInt = i;
    var hourStr = hourInt.toString();
    var momentHour = moment(hourStr, "H").format("HH:mm");

    // Create parent input group element - this element is highlighted with a red box if it is the current hour
    if (parseInt(currentHour) === hourInt) {
      var inputGroup = $(
        "<div id=iG" + i + " class='input-group border border-danger'></div>"
      );
    } else {
      var inputGroup = $("<div id=iG" + i + " class='input-group'></div>");
    }

    //Create element to prepend the space to display time slot of the day
    var inputGroupPrepend = $(
      "<div id=iGP" + i + " class='input-group-prepend'></div>"
    );
    // Create input text element for user to write down tasks
    var inputGroupInput = $(
      "<textarea id=iGI" + i + " type='text' class='form-control'></textarea>"
    );

    // Format input text fields based on past, present or future time block
    if (hourInt < parseInt(currentHour)) {
      inputGroupInput.attr("style", "background-color: lightgray");
    } else if (hourInt > parseInt(currentHour)) {
      inputGroupInput.attr("style", "background-color: lightgreen");
    }

    // Create text for element displaying time slot of the day
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

  // Retrieve previously stored data from local storage if it is present and render it into the form

  if (localStorage.getItem("storageData") !== null) {
    storageArray = JSON.parse(localStorage.getItem("storageData"));
    for (let i = 0; i < storageArray.length; i++) {
      var myElementName = storageArray[i].inputID;
      var myText = storageArray[i].text;
      var myElement = $("#" + myElementName);
      myElement[0].value = myText;
    }
  }

  // Listen for click event on any of the save buttons and create a function to push new entries and
  // changes to the storageData item in local storage

  var listEl = document.querySelector("#sub-container");

  listEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
      var buttonId = event.target.id;
      var inputID = buttonId.replace("iGB", "iGI");
      var textElement = document.getElementById(inputID);
      var textValue = textElement.value;
      if (textValue) {
        var localData = { inputID: inputID, text: textValue };
        storageArray.push(localData);
        localStorage.setItem("storageData", JSON.stringify(storageArray));
      }
    }
  });

  // Add functionality for the 'Clear Schedule' button
  // This will clear the form when the user chooses
  var clearSched = document.querySelector("#clear-button");
  clearSched.addEventListener("click", function (event) {
    localStorage.clear();
    location.reload();
  });
});

// Refresh page at the start of every every hour to re-render time based formatting
setInterval(function () {
  var currentMinute = parseFloat(moment().format("mm"));
  var currentSecond = parseFloat(moment().format("ss"));
  if (currentMinute === 0 && currentSecond < 10) {
    location.reload();
  }
}, 10000);


// Create readme

