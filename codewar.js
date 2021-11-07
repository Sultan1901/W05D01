const war = isPalindrome((s)=> {
    let reverse = s.toLowerCase().split(' ').reverse();
    if(s.toLowerCase()==reverse.join(' ')){
      return true;
    } else {
        return false;
    }
  })


isPalindrome('Abba');