let input = window.prompt("type a number");
console.log(evenDash(input));
// the function accept a number (as a string), and return the number with dashes (-) between each two even numbers.
function evenDash(num) {
   let dashedNum = num[0];
   for (let i = 1; i < num.length; i++) {
      if (num[i-1] % 2 === 0 && num[i] % 2 === 0) {
        dashedNum += "-" + num[i];
      } else {
        dashedNum += num[i];
      }
   }
   return dashedNum;
}

