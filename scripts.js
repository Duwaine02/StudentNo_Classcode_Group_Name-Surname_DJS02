const form = document.querySelector("[data-form]");//this means you telling the browser to find the form
const result = document.querySelector("[data-result]");//this means you tell the browser to find the box where the result will appear in

form.addEventListener("submit", (event) => {
  event.preventDefault();// this just means you stopping the page from refreshing after you enter the submit button
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const num1 = Number(dividend);
  const num2 = Number(divider);

  if (isNaN(num1) || isNaN(num2)) {
    result.innerText = "Please enter valid numbers";// what this means if someone tries to enter anything besides a value it will give a message to say please enter valid numbers
    return;
  }

  if(num2 === 0) {
    result.innerText ="Cannot divide by zero";// so what this means that you are not able to divider by zero if you do it will give you a message to say that you cannot divide with zero
    return;
  }
  result.innerText = num1 / num2;//this is where you are able to see your results of the two values that has been divided
});