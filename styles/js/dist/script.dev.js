"use strict";

var a = '';
var b = '';
var num = [];
var ans; // All the numbers and operators input will be stored in an array "num" using function "sendValues()"

function sendValues(digit) {
  num.push(digit);
  console.log("Input nos:" + digit);

  if (num.length != 1) {
    // a = '';
    document.getElementById('result').innerHTML = a; // clearing the screen.
  }

  if (num[0] == "*" || num[0] == "/" || num[0] == "%") {
    alert("Invalid Element in first place");
  }

  for (i = 0; i < num.length; i++) {
    console.log("String to do" + num[i]);
    a = a + num[i]; // concatenate the elements of the array "num" into a single string, which will be displayed on the screen

    console.log("String to do" + a);
  }

  document.getElementById('result').innerHTML = a; // displaying the concatenated string
} // when the user presses "=", function "equalTo()" is called 


function equalTo() {
  document.getElementById('result').innerHTML = '';

  for (i = 0; i < num.length; i++) {
    console.log("New:" + result);
    var plus = b.indexOf("+");
    console.log("Plus " + plus);

    if (num[i] == "+") {
      ans = Number(num[i - 1]) + Number(num[i + 1]);
      console.log(ans);
    } else {
      if (num[i] == "-") {
        console.log(ans = Number(num[i - 1]) - Number(num[i + 1]));
      } else if (num[i] == "*") {
        console.log(ans = Number(num[i - 1]) * Number(num[i + 1]));
      } else if (num[i] == "/") {
        console.log(ans = Number(num[i - 1]) / Number(num[i + 1]));
      }
    }

    b += num[i];
    console.log("After receiving HTML Div element" + b); // concatenating the array "num" into a single string
  }

  console.log(b.indexOf("+"));
  console.log("Before eval func output" + b); //   ans = eval(b);
  // console.log("String equal" + isNaN(ans));

  document.getElementById('result').innerHTML = ans; // result display

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }

  num.push(ans.toString()); // console.log("Final ans" + num.push(ans.toString()));
} // When user presses "AC", function "clearScr()" is called


function clearDisp() {
  document.getElementById('result').innerHTML = '';
  console.log("String clear" + result);

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }

  console.log("String clear" + result);
  a = '';
  b = '';
}