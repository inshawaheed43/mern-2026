function large(arr){
    let max = arr[0]
    for (let num of arr){
        if(num>max) max = num
    }
    return max
}

console.log(large([4,5,7,34,34,22,65,765,4]))

function sum (arr){
 return arr.reduce((acc,num) => acc+num,0)
}
console.log(sum ([3,4,5,6,7,8,9,10]))

let inp = document.querySelector("input")
const text = prompt("Enter text")
function countV(str){
    const vowels = "aeiouAEIOU"
    let count = 0
    for (let char of str){
        if(vowels.includes(char))
            count++
    }
    return count
}
console.log(countV(text))

const revText = prompt("enter text")

function reverseText (str){
    let reversed = ""
    for(let i = str.length -1; i>=0; i--)
    {
        reversed+=str[i]

    }
    return reversed

}
console.log(reverseText(revText))

let array = [3,2,4,5,6,6,7,10,4]
// let array = Number(prompt("Enter 5 numbers"));
function even(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(even(array));



function isPrime (num ) {
    if(num<=1)return false
    for(let i= 2; i<= Math.sqrt(num);i++)
    {
        if(num% i === 0) return false
    }
    return true
}
console.log(isPrime(4))
console.log(isPrime(9))


function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example:
console.log(capitalizeWords("hello world")); // "Hello World"



function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example:
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
