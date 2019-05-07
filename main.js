function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}



function pigLatin(word){

  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";

  for(let i=0; i<word.length; i++){
    for(let j=0; j<vowels.length; j++){

    if(word[i] != vowels[j]){

      console.log(vowels[j]);
    }
      {
    }


    }
  }

  return newWord;
}

pigLatin("banana");
