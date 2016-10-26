var input = "pear";
var vowels = ["a","e","i","o","u"];

var translator = function(input){
  inputArray = input.split("");
  var ayWord;
  vowels.forEach(function(vowel) {
    if (inputArray[0] === vowel) {//handles single letter words and words that start with vowels
     ayWord = input + "ay";
   };//end if
 });//end vowel forEach
  return ayWord;
};//end translator


var translatedString = translator(input);
console.log(translatedString);





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputString = $("#user-input").val();

    var translatedString = tranlator(inputString);

    $("#translated-output h4").text(translatedString);
  });

});
