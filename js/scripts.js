var vowels = ["a","e","i","o","u"];

var translator = function(input){
  inputArray = input.split("");
  var ayWord;
  var trucatedArray;

  if (inputArray[0] === "a"||inputArray[0] ===  "e" ||inputArray[0] === "i" ||inputArray[0] === "o" ||inputArray[0] === "u") {//handles single letter words and words that start with vowels
      ayWord = input + "ay";
   } else if{ 












   }else  { //ends if for starting with vowel begin words beginning consonants //last arguement

     firstLetter = inputArray.splice(0,1).toString();
     ayWord = inputArray.join("") + firstLetter + "ay";


  }//end if
  return ayWord;
};//end translator



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputString = $("#user-input").val();
    var translatedString = translator(inputString);

    $("#translated-output h4").text(translatedString);
  });

});
