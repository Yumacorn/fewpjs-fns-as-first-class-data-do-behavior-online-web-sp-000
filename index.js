/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let hour = timeString.split(':')[0];
  if (hour <= 12) {
    return "Good Morning";
  }  else if (hour <= 17) {
    return "Good Afternoon";
  }  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(s) {
  console.log(s);
  document.write(s);
  // alert(greet());
  let element = document.getElementById('greeting');
  console.log(element);
  element.innerText = s;
  
  // document.addElementById("greeting").innerHTML = greet();
}