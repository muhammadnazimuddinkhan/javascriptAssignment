var a = 10;

console.log("Result:<br>");
console.log("The value of a is: " + a + "<br>");
console.log(".................................<br><br>");

console.log("The value of ++a is: " + ++a + "<br>");
console.log("Now the value of a is: " + a + "<br><br>");
console.log("The value of a++ is: " + a++ + "<br>");
console.log("Now the value of a is: " + a + "<br><br>");

console.log("The value of --a is: " + --a + "<br>");
console.log("Now the value of a is: " + a + "<br><br>");

console.log("The value of a-- is: " + a-- + "<br>");
console.log("Now the value of a is: " + a);







  // a) Take three subjects name
  var sub1 = prompt("Enter first subject name:");
  var sub2 = prompt("Enter second subject name:");
  var sub3 = prompt("Enter third subject name:");

  // b) Total marks for each subject
  var totalMarks = 100;

  // c & d) Take obtained marks
  var marks1 = +prompt("Enter obtained marks for " + sub1);
  var marks2 = +prompt("Enter obtained marks for " + sub2);
  var marks3 = +prompt("Enter obtained marks for " + sub3);

  // e) Calculations
  var totalObtained = marks1 + marks2 + marks3;
  var percentage = (totalObtained / 300) * 100;

  // Display result using table
  console.log("<table border='1' cellpadding='10'>");
  console.log("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

  console.log("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + (marks1) + "%</td></tr>");
  console.log("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + (marks2) + "%</td></tr>");
  console.log("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + (marks3) + "%</td></tr>");

  console.log("<tr><th></th><th>300</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  console.log("</table>");
