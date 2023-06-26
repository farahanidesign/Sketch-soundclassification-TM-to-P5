//Test for connecting TM to P5


let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;


// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oJbFZDRLu/model.json');
}


function setup() {
  createCanvas(640, 520);

// STEP 2: Start classifying
  classifyAudio();
}

// classify the videeo!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);


  // textSize(32);
  textAlign(CENTER, CENTER);


  // Pick an emoji for the trained Vocal and Setar
  let emoji = "🎵";
  if (label == "Vocal") {
     emoji = "🎤";
     } else if (label == "Setar") {
    emoji = "🪕";
 
  } 

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  
}
