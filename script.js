//------------------------------------------//
// task 1
function ageInDays() {
  let birthYear = prompt("What's your Birth Year?");
  let daysOfAge = (2021 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + daysOfAge + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result-1").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
//------------------------------------------//
