// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

// Wrap the entire code in an IIFE
(function () {
    // Array of names
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Loop through the names array
    for (var i = 0; i < names.length; i++) {
      // Get the first letter of the current name and convert it to lowercase
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      // Check if the first letter is 'j'
      if (firstLetter === 'j') {
        // Use byeSpeaker to say "Good Bye"
        byeSpeaker.speak(names[i]);
      } else {
        // Use helloSpeaker to say "Hello"
        helloSpeaker.speak(names[i]);
      }
    }
  })();