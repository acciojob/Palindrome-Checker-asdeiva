// complete the given function

function palindrome(str){
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let str2 = reverseArray.join("");
	let flag = false;
	if(str == str2){
		flag = true;
	}
	return flag;
}
module.exports = palindrome
