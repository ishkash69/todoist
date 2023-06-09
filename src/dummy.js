export default {
    title: 'Components/Button',
    name: 'kashish'
}
function generateNumbers() {
  var numbers = [];
  
  // Loop through all possible combinations of digits
  for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
      for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) {
          for (var m = 0; m <= 9; m++) {
            for (var n = 0; n <= 9; n++) {
              // Create the 6-digit number
              var number = "" + i + j + k + l + m + n;
              numbers.push(number);
            }
          }
        }
      }
    }
  }
  
  // Display the generated numbers
  console.log(numbers);
}

// Call the function to generate and display the numbers
generateNumbers();