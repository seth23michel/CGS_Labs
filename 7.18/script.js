function calcWordFrequencies() {
    let wordFreq = new Map();
    let inputWords = prompt("Enter words separated by spaces:");
  
    // Split the input string by spaces and loop through the words
    inputWords.split(" ").forEach(function(word) {
      // If the word is already in the map, increment its count
      if (wordFreq.has(word)) {
        wordFreq.set(word, wordFreq.get(word) + 1);
      }
      // Otherwise, add the word to the map with a count of 1
      else {
        wordFreq.set(word, 1);
      }
    });
  
    // Loop through the map and output each word and its frequency
    wordFreq.forEach(function(value, key) {
      console.log(key + " " + value);
    });
}