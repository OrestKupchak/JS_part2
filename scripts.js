
/*Script for task 1: Finding the sum in defined range*/

document.getElementById('btn').addEventListener('click', sum, false) 


  function sum(start,end) {
  var start = parseInt(document.getElementById('startNum').value);
  var end = parseInt(document.getElementById('endNum').value);
  //debugger;
     if (start < end) {
         var result = end;
         for (var i = end; i > start; --i) {
             result = result + (i - 1);
         }
     } else if (start === end) {
         var result = start;
     } else {
         result = end;
         for (var i = end; i < start; ++i) {
          var result = result + (i + 1);
         }
    }    
     document.getElementById('someresult').innerHTML = "Your result is: " + result; 
}

/*----------------------------------------------------------------------------------*/

/*Script for task 3: Display the even numbers in defined range*/

document.getElementById('btnEven').addEventListener('click', evenNums, false) 

  //debugger;
 function evenNums(start, end){
var start = parseInt(document.getElementById('startEven').value);
  var end = parseInt(document.getElementById('endEven').value);
  //debugger;
     if (start < end) {
    var result = [];
    for (var i = start; i <= end; i++) {if (i % 2 === 0) { result.push(i); } }
                      } 

   else if (start === end) {
      if (start % 2 === 0) { var result = start; } 
      else { var result = "This number is odd" }
                            }
   else {
      var result = [];
for (var i = start; i >= end; i--) { if ( i % 2 === 0) { result.unshift(i); }  }
  }    
     document.getElementById('evenNumsResult').innerHTML =  result; 
}

/*----------------------------------------------------------------------------------*/

/*Script for task 4: Display odd numbers in defined range.*/

document.getElementById('btnOdd').addEventListener('click', oddNums, false) 

  //debugger;
 function oddNums (start, end){
var start = parseInt(document.getElementById('startOdd').value);
  var end = parseInt(document.getElementById('endOdd').value);
  debugger;
     if (start < end) {

        var result = [];
        var i = start;
while (i <= end) {        if ( i % 2 === 1) { result.push(i); }   i++  }
                      }              
   else if (start === end) {

      if (start % 2 === 1) { var result = start; }  else { var result = "This number is even" }

                          }
   else {
      var result = [];
      var i = start;
     while (i >= end){ if ( i % 2 === 1 || i % 2 === -1 ) {  result.unshift(i);  }  i--; }
     } 
     document.getElementById('oddNumsResult').innerHTML =  result; 
}

/*----------------------------------------------------------------------------------*/

/*Kata 5-6: Display all number till stop condition (for && while)*/
document.getElementById('btnStop').addEventListener('click', displayNumbers, false) 

function displayNumbers (start, end, birth){
var start = parseInt(document.getElementById('startIter').value);
var end = parseInt(document.getElementById('endIter').value);
var birth = parseInt(document.getElementById('stopIter').value);
//  debugger;

var result = [];
if (start < -100 || start > 100) {var result = "Let's count only between -100 and 100"}
else if (end < -100 || end > 100) { var result = "Let's count only between -100 and 100"}
else if (birth < 1 || birth > 12) {var result = "There's only twelve months, mate :)"}
else if ((end - start) < birth ) { var result = "Nope, can not iterate more times, than we have in range"}
else {
   result = []; for (var i = 0; i < birth; i++) { result.push(start++); }

           }
document.getElementById('iterationResults').innerHTML =  result; 
}

/*
document.getElementById('btnStop').addEventListener('click', displayNumbers, false) 


function displayNumbers (start, end, birth){
var start = parseInt(document.getElementById('startIter').value);
var end = parseInt(document.getElementById('endIter').value);
var birth = parseInt(document.getElementById('stopIter').value);
  debugger;

var result = [];
if (start < -100 || start > 100) {var result = "Let's count only between -100 and 100"}
else if (end < -100 || end > 100) { var result = "Let's count only between -100 and 100"}
else if (birth < 1 || birth > 12) {var result = "There's only twelve months, mate :)"}
else {

if (birth < start) { 
    if (start < end) {
      var result = []; for (var i = start; i <= birth; i++) { while(result.length <= birth) { result.push(start++); } }
  } else if (start > end) {
      var result = []; for (var i = start; i > birth; i--) { while(result.length < birth) {result.push(start--); } }
  } else { var result = 'Are U seriuos? Gimme some different numbers :)'; }
 }


else if (birth > end) { 
  if (start < end) {
    var result = []; for (var i = start; i <= end; i++) {  result.push(start++); }
  } else if (start > end) {
      var result = []; for (var i = start; i > end; i--) {  result.push(start--); }
  } else { var result = 'Are U seriuos? Gimme some different numbers :)'; }
      }


else if (birth === start || birth === end) {
        if (birth === start) { var result = []; for (var i = start; i <= birth; i++) {  while(result.length <= birth) { result.push(start++); } } } 
        else if (birth === end) {   var result = []; for (var i = start; i <= birth; i++) {  while(result.length <= birth) { result.push(start++); } }  } 
                  }   
else {
        if (start < end) { var result = []; for (var i = start; i < birth; i++) {  while(result.length < birth) { result.push(start++); } } } 

        else if (start === end) { var result = 'Are U seriuos? Gimme some different numbers :)'; }

        else { var result = []; for (var i = start; i > birth; i--) {   while(result.length < birth) { result.push(start--); } }  } 
             }

           }
document.getElementById('iterationResults').innerHTML =  result; 
}
*/

/*----------------------------------------------------------------------------------*/

/*Script for task 7: "Prompt" him to death (while / do...while)*/

document.getElementById('promptBtn').addEventListener('click', promptimg, false) 


function promptimg(input) {
var result = '';
var input = prompt('Enter number greater than 100');
var spacesPattern = /^[\s]+$/ ;  // RegEx pattern to review if text contains no chars, only spaces

if (spacesPattern.test(input)) {
var input = prompt ('You entered nothing, only spaces. Try again');
    }
else {
//  debugger;
    while (isNaN(input) || typeof(parseInt(input)) !== 'number' || input.length === 0 || (spacesPattern.test(input))) { 
     var input = prompt('What\'s that? Give me some numbers, bro!')
    } 

    
  while (parseInt(input) < 100) {
    if (isNaN(input)) {prompt('What\'s that? Give me some numbers, bro!')}
   var input = prompt('Your number is too small, enter a new one');
      }
 }
document.getElementById('promptResult').innerHTML =  result;
alert(`Your result is ${input}`)
}

/*----------------------------------------------------------------------------------*/

/*Script for task 8: King of the Hill*/

document.getElementById('createHill').addEventListener('click', hashes, false) 

//debugger;
 function hashes (num){
   var num = parseInt(document.getElementById('bottom').value);
    var result = '';
if (num > 25) {
  result = 'Nope, thats too much. Don\'t go more than 25';
       document.getElementById('hashHill').innerHTML = result;
} else {

    for (var i = 1; i <= num; i++){
        result += '#'.repeat(i) + '\r\n';
       document.getElementById('hashHill').innerHTML = result;
      }
  }
}

/*----------------------------------------------------------------------------------*/
