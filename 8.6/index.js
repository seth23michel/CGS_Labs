function parseScores(scoresString) {
   return scoresString.split(" ");
 }
 
 function buildDistributionArray(scoresArray) {
   let distributionArray = [0, 0, 0, 0, 0];
   for (let i = 0; i < scoresArray.length; i++) {
     const score = Number(scoresArray[i]);
     if (score >= 90) {
       distributionArray[0]++;
     } else if (score >= 80) {
       distributionArray[1]++;
     } else if (score >= 70) {
       distributionArray[2]++;
     } else if (score >= 60) {
       distributionArray[3]++;
     } else {
       distributionArray[4]++;
     }
   }
   return distributionArray;
 }
 
 function setTableContent(userInput) {
   const scoresArray = parseScores(userInput);
   const distributionArray = buildDistributionArray(scoresArray);
 
   const firstRow = document.getElementById("firstRow");
   for (let i = 0; i < distributionArray.length; i++) {
     const barHeight = distributionArray[i] * 10;
     const barDiv = document.createElement("div");
     barDiv.style.height = `${barHeight}px`;
     barDiv.className = `bar${i}`;
     const barTd = document.createElement("td");
     barTd.appendChild(barDiv);
     firstRow.appendChild(barTd);
   }
 
   const thirdRow = document.getElementById("thirdRow");
   for (let i = 0; i < distributionArray.length; i++) {
     const countTd = document.createElement("td");
     countTd.textContent = distributionArray[i];
     thirdRow.appendChild(countTd);
   }
 }
 