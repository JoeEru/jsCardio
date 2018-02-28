

let longestWord = (str) => {
     let longestWordArr = str.split(' ').reduce((longest,word) => {
        if(word.length>longest[longest.length-1].length){
          longest[longest.length-1] = word;
        }
        else if(word.length === longest[longest.length-1].length ){
          longest[longest.length] = word;
        }

        return longest;
    },['']);

    return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;

}
//console.log(longestWord("hello there pal!!"))

let chunkArray = (arr,len) => {
  let chunkedArr = [];
  for (var i = 0; i < arr.length; i+=len) {
    chunkedArr.push(arr.slice(i,len+i));
  }

  return chunkedArr;
}



//console.log(chunkArray([1,3,4,5,6,7],1));


let flattenArray = (arr) => {
  // return arr.reduce((curr,next) => {
  //   return curr.concat(next);
  // });
  return [].concat(...arr);
}

//console.log(flattenArray([[1,3,4],[11,22,55,5],[7]]));

let isAnagram = (str1,str2) => {
    // console.log(strFormat(str1));
    // console.log(strFormat(str2));
    return strFormat(str1) === strFormat(str2);
}

let strFormat = (str) =>{
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

//
// console.log(isAnagram("elbow","below"));
// console.log(isAnagram("Dormitory","dirty room /|^ "));

//function that takes a string and change ever letter to the one that follows it alphabetically and capitalize the vowels.
let changeLetters = (str) => {
  return str.toLowerCase().replace(/[a-z]/gi,(char) => {
    if(char === 'z'){
      return 'a';
    }else{
      return String.fromCharCode(char.charCodeAt()+1);
    }
  })
  .replace(/[aeiou]/g,(char) => char.toUpperCase());


}

//console.log(changeLetters("heLLo dd z n  there"));
