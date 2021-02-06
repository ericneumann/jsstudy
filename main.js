let Phrase = require("eneumann-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`The phrase ${phrase.content} is a palindrome.`)
} else {
  alert(`The phrase ${phrase.content} is most certainly not a palindrome.`)
}
// alert(phrase.palindrome());