
var translator = function(input){
  var ayWord;
  var trucatedArray;
  var inputArray;
  // if (/[/s]/i.test(input)){
  //   console.log("space");
  //   inputWords = input.split(" ");
  //
  //   // for (i = 0; i < inputWords.length; i++) {
  //   //   console.log(i);
  //   // }
  //
  // }
  // else {
  inputArray = input.split("");

    if (/[a-z]/i.test(inputArray[0]) === false){
      return inputArray.join("");
    }

    else if(/[aeiou]/i.test(inputArray[0])) {//handles single letter words and words that start with vowels
        ayWord = input + "ay";
     }

     else if(inputArray[0] === "q" && inputArray[1] === "u"){//handles words with qu
       firstLetter = inputArray.splice(0,2).join("");
       ayWord = inputArray.join("") + firstLetter + "ay";
     }

     else if ((/[^aeiou]/i.test(inputArray[0])) && (/[aeiou]/i.test(inputArray[1]))){
       firstLetter = inputArray.splice(0,1).join("");
       ayWord = inputArray.join("") + firstLetter + "ay";

     }
     else  { //ends if for starting with vowel begin words beginning consonants //last arguement
       for (var i = 0; i < inputArray.length; i++){
         if (/[aeiou]/i.test(inputArray[i])){

           firstLetter = inputArray.splice(0,i).join("");
           ayWord = inputArray.join("") + firstLetter + "ay";
           return ayWord;
         }
       }
    }//end if
    return ayWord;

  // }
};//end translator



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputString = $("#user-input").val();
    var translatedString = translator(inputString);

    $("#translated-output h4").text(translatedString);
  });

});
