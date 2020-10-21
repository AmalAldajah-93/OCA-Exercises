/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

// prompt(a, b)
document.write("<p> 1. Write a JavaScript program that accept two integers and</p>");
document.write("<br>");



let ans1 = (a, b) => (a > b) ? parseInt(a) : parseInt(b);
document.write(ans1(2, 3)) // output : 3

document.write("<br>");
document.write("<hr>");
document.write("<br>");



/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

document.write("<p> 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor Sample numbers : 3, -7, 2 Output : The sign is -</p>");
document.write("<br>");
document.write("<br>");


var app2 = (a, b, c) => {
    var listSign = [a, b, c].reduce((a, b) => a * b, 1);
    return (listSign > 0) ? "The sign is -" : "The sign is -";
}
document.write(app2(3, 4, -1));

document.write("<br>");
document.write("<hr>");
document.write("<br>");
/******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 

document.write("<p> 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor < /p >");
document.write("<br>");
document.write("<br>");

Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/
// var app3 = (arr) => {
//     alert(arr.sort((a, b) => b - a));
//     return (arr.sort((a, b) => b - a));

// };
// // document.write(app3([3, 4, -1]));

document.write("<br>");
document.write("<hr>");
document.write("<br>");

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
document.write("<p>4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor Sample numbers : -5, -2, -6, 0, -1 Output : 0-</p>");
document.write("<br>");
document.write("<br>");

/******* Start Your Code *********/

var app4 = (arr) => {

    return Math.max(arr);

};
document.write(app4(-5, -2, -6, 0, -1));

document.write("<br>");
document.write("<hr>");
document.write("<br>");
/******* End Your Code ********* */


/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

document.write("<p> 5.Write the if statement to display Hello World  if x is greater than y, otherwise alert Goodbye .-</p>");

/******* Start Your Code *********/
// var app5 = (x, y) => {

//     return (x >= y) ? "Hello World" : alert("Goodbye");

// };
// document.write(app5(1, -2));

// document.write("<br>");
// document.write("<br>");

/******* End Your Code ********* */
// Create a nested array, reverse an array, and print both

document.write("<p> 6.Create a nested array, reverse an array, and print both.-</p>");
var v = [
    [1, 1, 1],
    [2, 2, 2]
];
document.write(v);
document.write("<br>");

document.write(v.reverse());
document.write("<br>");
document.write("<hr>");
document.write("<br>");


document.write("<p> 7-Main Task Write a program to calculate the marks of a student, the program should has the following: Math, English, Arabic, Bio, Computer, Religion and for example the markList = [80, 60, 80, 90, 70, 54]; </p>");

// Main Task
// Write a program to calculate the marks of a student, the program should has the following:// - 6 variables for each subject (Math, English, Arabic, Bio, Computer, Religion)
// - a constant of the subjects number
// The program work flow should be as follow:
// 1. Ask student to enter his/her name
// 2. Ask student to enter the mark of each subject one by one (mark of 100).



// 3. the program will calculate the sum of all subjects marks
// 4. the program will calculate the average mark of the subjects

var markList = [80, 60, 80, 90, 70, 54]; //Math, English, Arabic, Bio, Computer, Religion

var person = prompt("Please enter your name");

// var subjectsSum = (arr) => {

//     return ' The total  of ' + person + ' marks is ' + arr.reduce((a, b) => a + b, 0) + ' of ' + arr.length * 100 + "  points ";

// };
// document.write(subjectsSum(markList));

// document.write("<br>");
// document.write("<hr>");
// document.write("<br>");

// var subjectsAverage = (arr) => {

//     return ' The average   of ' + person + ' marks is ' + parseInt(arr.reduce((a, b) => a + b, 0) / (arr.length)) + " %  ! !";

// };
// document.write(subjectsAverage(markList));

document.write("<br>");
document.write("<hr>");
document.write("<br>");

var degree = (markList) => {

    var subjectsSum = (arr) => {

        return person + ' total of marks  is ' + arr.reduce((a, b) => a + b, 0) + ' of ' + arr.length * 100 + "  points ";

    };

    var subjectsAverage = (arr) => {

        return parseInt(arr.reduce((a, b) => a + b) / arr.length);

    };
    var av = subjectsAverage(markList);
    var d;
    (av >= 90) ?
    d = "Excellent": (av >= 80) ?
        d = "very good" : (av >= 70) ?
        d = "good" : (av >= 60) ?
        d = "average" : (av >= 50) ?
        d = "Pass" : d = 'you failed -____-';


    return subjectsSum(markList) + '\n ,' + 'and the Av is ' + av + '% \n ,' + person + ' degree is  \n ' + d + '.';


};
document.write(degree(markList));


// 5. the program will print out the result average as follow:
// a. 50 to 60 will print (Pass)
// b. 60 to 70 will print (average)