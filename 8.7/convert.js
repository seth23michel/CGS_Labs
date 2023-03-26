function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
 }
 
 function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
 }
 
 function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const errorMessage = document.getElementById("errorMessage");
   const weatherImage = document.getElementById("weatherImage");
   
   cInput.addEventListener("input", function() {
     fInput.value = "";
     errorMessage.innerHTML = "";
   });
 
   fInput.addEventListener("input", function() {
     cInput.value = "";
     errorMessage.innerHTML = "";
   });
 
   const convertButton = document.getElementById("convertButton");
   convertButton.addEventListener("click", function() {
     const cValue = parseFloat(cInput.value);
     const fValue = parseFloat(fInput.value);
 
     if (isNaN(cValue) && isNaN(fValue)) {
       errorMessage.innerHTML = "Please enter a temperature value.";
       return;
     }
 
     if (!isNaN(cValue)) {
       const fResult = convertCtoF(cValue);
       fInput.value = fResult.toFixed(2);
       if (fResult <= 32) {
         weatherImage.src = "cold.png";
         weatherImage.alt = "Cold";
       } else if (fResult <= 50) {
         weatherImage.src = "cool.png";
         weatherImage.alt = "Cool";
       } else {
         weatherImage.src = "warm.png";
         weatherImage.alt = "Warm";
       }
       errorMessage.innerHTML = "";
     } else if (!isNaN(fValue)) {
       const cResult = convertFtoC(fValue);
       cInput.value = cResult.toFixed(2);
       if (fValue <= 32) {
         weatherImage.src = "cold.png";
         weatherImage.alt = "Cold";
       } else if (fValue <= 50) {
         weatherImage.src = "cool.png";
         weatherImage.alt = "Cool";
       } else {
         weatherImage.src = "warm.png";
         weatherImage.alt = "Warm";
       }
       errorMessage.innerHTML = "";
     }
   });
 }
 
 window.addEventListener("DOMContentLoaded", domLoaded);
 