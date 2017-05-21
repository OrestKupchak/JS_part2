


//document.querySelector('h1').addEventListener('click', remembering);

/*task 1-2*/
(function () {

 function sum(start, end){
     if (typeof(start) !== 'number' || typeof(end) !== 'number') {
    return 'Please, enter a proper number'
  } 
    var result = end;
      for (var i = end; i > start;--i){
        result = result + (i-1);
    }
    return result;
 }

})();


 /*task 3*/
(function () {

  function evenNums (start, end){
     if (typeof(start) !== 'number' || typeof(end) !== 'number') {
    return 'Please, enter a proper number'
  } 
    var result = [];
      for (var i = start; i <= end; i++){
        if ( i % 2 === 0) {
             result.push(i);
          }
 }
  return result;
}

})();


/*task 4*/

 function oddNums (start, end){
     if (typeof(start) !== 'number' || typeof(end) !== 'number') {
    return 'Please, enter a proper number'
  } 
    var result = [];
    var i = start;
     while (i <= end){
        if ( i % 2 === 1) {
             result.push(i);
          }
          i++;
 }
  return result;
}


/*task 5*/
 function displayNumbers (start, end, birth){
     if (typeof(start) !== 'number' || typeof(end) !== 'number') {
    return 'Please, enter a proper number'
  } 
    var result = [];
      for (var i = start; i <= birth; i++){
             result.push(i);
 }
  return result;
}



/* task 6*/
 function displayNumbers (start, end, birth){
     if (typeof(start) !== 'number' || typeof(end) !== 'number') {
    return 'Please, enter a proper number'
  } 
    var result = [];
    var i = start;
      while ( i <= birth && i <= end){ //додаємо перевірку через логічний AND, щоб уникнути випадків 
      																//коли кінцеве значення, є меншим аніж значення задане як термінальне
             result.push(i);
              i++;
 }
  return result;
}

/*task 7*/
function display(input) {
input = prompt('Enter number greater than 100');
debugger;
console.log(typeof(input));
debugger;
  while (isNaN(input) || typeof(parseInt(input)) !== 'number') { input = prompt('What\'s that? Give me some numbers, bro!')
  } 
console.log(typeof(input));
  while (parseInt(input) < 100) {
   input = prompt('Your number is too small, enter a new one');
  }
alert(`Your result is ${input}`)
}


/*task 8*/
 function hashes (num){
     if (typeof(num) !== 'number'){
    return 'Please, enter a proper number'
  } 
    var result = '';
    for (var i = 0; i <= num; i++){
       result += '#';
       console.log(result);
      }
}

  

___________________________________

function display(input) {
    input = prompt('Enter number greater than 100');
    debugger;
    do {
        input = prompt('What\'s that? Give me some numbers, bro!')
    } while (isNaN(input) || typeof(parseInt(input)) !== 'number');

    do {
        input = prompt('Your number is too small, enter a new one');
    } while (parseInt(input) < 100);

    alert(`Your result is ${input}`)
}