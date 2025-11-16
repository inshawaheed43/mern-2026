1. Variables 
let's see them as a box that stores data and values 
let, const, var
var is es5 feature while let, const are es6+ feature

2. Data Types 
String: "", written in duoble quotes
Number: numrical values 
Boolean: Truth and False values
Null: it's empty or 0
undefined: it's not defined or presented 
object: it's store values in key & value pairs 
array: surrounded in square brackets

3. string & string methods
var a = "Insha"
console.log(a)
here a string is being displayed in console
console.log(a.lenght()), it's tell the numbers of characters present in string
console.log(a.toUpperCase()), convert string to uppercase
console.log(a.toLowerCase()) convert string to lowercase
console.log(a.includes())
console.log(a.slice())
console.log(a.trim())

4. Arrays + Arrays Methods (push, pop, map, filter, find)
 ==> map, it takes an arr-> applies function -> return a new arr
const n= [1,2,3,4]
const mul = n.map((nums)=> nums*2)
console.log(mul)
==> filter, gives the new arr based on it's conditions if the condition is true then the values in arr will be shown 
const nums = [1, 2, 3, 4];
const evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
==> find(), it return only the first c=value that matches the conditions 
const nums = [1, 2, 3, 4];
const result = nums.find((n) => n > 2);
console.log(result); // 3
if nothing finds then it's undefined
==> reduce(), takes an arr -> reduce it to final one value 
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total); // 10

5. Objects 
it stores value in key value pair, like 
const arr = {
    name: "insha", 
    age: "23", 
    job: (()=>{
        //
    })
}
this is an example of method(a function written in an obj called method)

6. Functions + Arrow fat functions


7. Loops

for, while, do while, for each, Case or Switch, 

8. Conditionals
 if else, else if else


9. DOM basics (queryselector, addEventListener)
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("Button clicked");
});