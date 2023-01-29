const feet = 199

function scuberGreetingForFeet(feet){
  let reply
  if (feet <= 400) {
    reply = "This one is on me!";
  }
  else if (feet <= 2000) {
    reply = "That will be twenty bucks.";
  }
  else if (feet <= 2500) {
    reply = "I will gladly take your thirty bucks.";
  }
  else {
    reply = "No can do.";
  }
  return reply;
}

const city = "NYC"
function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  
}

// let tip 
function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}