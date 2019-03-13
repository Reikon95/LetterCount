let quoteSample = "The five boxing wizards jump quickly."; //change this string accordingly
let alphabetRegexV2 = /\w/g; // w covers all letters in the alphabet (and underscore), and w is the global flag
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); //prints result into console
