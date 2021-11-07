function isPalindrome(x) {
    let wars = x.toLowerCase().split('').reverse();
    if(x.toLowerCase()!==wars.join('')){
      return false;
    } else {
        return true;
    }
  }


isPalindrome('Abba');