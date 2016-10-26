var input = "b";
var vowels = ["a","e","i","o","u"];



var translator = function(input){
  var blah;
  vowels.forEach(function(vowel) {
    if (input === vowel) {
      var blah = input + "ay";
    }
  });
return blah;
};
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
