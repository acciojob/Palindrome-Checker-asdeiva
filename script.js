// complete the given function

function palindrome(str){
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let str2 = reverseArray.join("");
	let message = false;
	if(str == str2){
		message = true;
	}
	return message;
}
module.exports = palindrome
