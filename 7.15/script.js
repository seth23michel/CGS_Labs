function drawTriangle(size) {
   for (let i = 1; i <= size; i++) { // iterate through each line
      let line = ''; // initialize an empty string for the line
      for (let j = 0; j < i; j++) { // add asterisks to the line
        line += '*';
      }
      console.log(line); // output the line to the console
    }
}