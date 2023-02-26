// complete the given function

function palindrome(str){
let n= str.length;
	for(let i=0; i<(Math.floor(n/2));i++){
		if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
	}

module.exports = palindrome
