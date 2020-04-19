
//step 1 
//complexity n
function calculateNGrams(text,n){

  if(text==null) return "ERROR text has to be NO null";
  if(n<1 || n > text.length) return "ERROR n has to be : 1< n <text_size";

  var result=[];

  for(var i=0; i<text.length-n +1; i++){
    result.push(text.substring(i,i+n));   // save the substring between i and i+n , the size of the substring is n
  }

  return result;
}

//step 2 
//complexity n
function mostFrecuentNGram(text, n){

  if(text==null) return "ERROR text has to be NO null";
  if(n<1 || n > text.length) return "ERROR n has to be : 1< n <text_size";

  var arr = calculateNGrams(text,n);     //array calculate in step 1

  var count = {};
  arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});    //regular expresion to count the number ofrepeticions  of every element of the array and return the mosr repeated 

  return Object.keys(count)[0];           //return the most repeated element of the array
}

console.log(calculateNGrams("slang",3));
console.log("the most repated item is "   +  mostFrecuentNGram("to be or not to be" , 2));



