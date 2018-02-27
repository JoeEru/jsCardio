//challenge 1

let reverseString = (str) => {
  // let newStr = '';
  // for(var i = str.length-1; i >= 0 ; i--) {
  //   newStr += str.charAt(i);
  // }
  //  return newStr;
  // return str.split('').reverse().join('')

  return str.split('').reduce((newStr, char) => char + newStr, '')
}

//console.log(reverseString("youssef"));

let isPalindrom = (str) => {
  return str.split('').reverse().join('') === str;
}

//console.log(isPalindrom("racecar"));

let reverseInt = (int) => {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}

//console.log(reverseInt(-621));

let capitalizeStr = (str) => {
  //return str.toLowerCase().split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.substr(1) ).join(' ');
  return str.replace(/\b[a-z]/gi, (char) => {
    return char.toUpperCase();
  });
}

//console.log(capitalizeStr('i love js'))

let maxCharacter = (str) => {
  // let charMap = {};
  // str.split('').forEach((char) => {
  //   if (charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // })
  // max = 0;
  // maxChar = '';
  // for (var char in charMap) {
  //   if (max < charMap[char]) {
  //     max = charMap[char]
  //     maxChar = char;
  //   }
  // }
  //
  // return {char: maxChar, recurring: max};

  return  str.split('').reduce((maxChar,char) => {
      if(maxChar.num < str.split(char).length){
        maxChar.num = str.split(char).length;
        maxChar.char = char;
      }
      return maxChar;
  },{char : '',num : 0})

//  return maxChar;

}

console.log(maxCharacter("javascripttttttt"));

let fizzBizz = () => {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//fizzBizz();
