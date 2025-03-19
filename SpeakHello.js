// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function () {
    // STEP 3: Create the 'helloSpeaker' object
    var helloSpeaker = {};
  
    // DO NOT attach the speakWord variable to the 'helloSpeaker' object
    var speakWord = "Hello";
  
    // STEP 4: Attach the 'speak' method to the 'helloSpeaker' object
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // STEP 5: Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;
  })();