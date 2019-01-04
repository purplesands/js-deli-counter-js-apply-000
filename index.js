var line = [];
var deliNumber = 20;
function takeANumber(line){
  deliNumber++
  line.push(deliNumber);
  return "Welcome,  you are number " + deliNumber + " in line."
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

var linesNamesNumbers = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  for(var i=0; i<line.length; i++) {
    linesNamesNumbers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + linesNamesNumbers.join(', ');
}


