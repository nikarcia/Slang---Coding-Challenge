
//step 1 
//complexity n2
function calculateNGrams(text,n){

  if(text==null) return "ERROR text has to be NO null";
  if(n<1 || n > text.length) return "ERROR n has to be : 1< n <text_size";

  var array = text.split("");   //convert string to array
  var result=[];
  //console.log(array);
  var aux="";                   

  for (var i =0 ; i< array.length+1-n ; i++){   //loop over the array until the max-n 
      for(var j=0;j < n; j++){                  //loop from position i until i+n
        aux+=array[i+j];                        //aux contains the n-gram
      }
      result.push(aux);                         //save the n-gram in the result array
      aux="";                                   
  }
  //console.log(result);
  return result;
}

//step 2 
//complexity n
function mostFrecuentNGram(text, n){

  if(text==null) return "ERROR text has to be NO null";
    if(n<1 || n > text.length) return "ERROR n has to be : 1< n <text_size";

    var arr = calculateNGrams(text,n);     //array calculate in step 1

  var count = {};
  arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});    //regular expresion to count the number os repeticions  of every element of the array and return the mosr repeated 

  return Object.keys(count)[0];
}

console.log(calculateNGrams("slang",15));
console.log("the most repated item is "   +  mostFrecuentNGram("to be or not to be" , 565));



//step 2    second option 
//complexity n2
function mostFrecuentNGram2(text, n){

  if(text==null) return "ERROR text has to be NO null";
  if(n<1) return "ERROR n has to be greater than 1";

    var arr = calculateNGrams(text,n);     //array calculate in step 1
  var mostfrecuent = 1;                 
    var frecuent= 0;
    var item;

    for (var i = 0; i < arr.length; i++) {    
      for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]) frecuent++;
        if (mostfrecuent < frecuent) {        //if there a element more repeated
            mostfrecuent = frecuent;         //change the most repeated element 
            item = arr[i];                    //keep the element 
        }
      }
          frecuent = 0;                   //
    }

  //console.log( "most repeated one is " + item  + " "  + mostfrecuent +" times" );
  return item;
}