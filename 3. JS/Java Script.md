# JS

# A. Basic

- Basically JS is a Light Weight, Interpreted and Just In Time (JIT) Complied Prog Language
- It is Not a OOP language, it supports only few features of OOP
    - Interpreted : Refers to line by line translation
    - Complied : Translating entire code in one go

- JIT - So basically JIT Converts the Bytecode into native machine code at runtime for faster execution
    - for ex- if we run any JS Code on a browser, so what happens our code get compiled, run and deployed on a same time within the browser
    
- AOT- It is Ahead of Time used in current java Script Engines
    - so in this the process of load and compile is not done in browser it is done in application
    - means compiling byte code into native machine code before the program runs

### Use of Java Script

It is used as - 

- Client side : Using HTML
- Server side : Using Node JS
- Database : Using MongoDB

So this makes a JS programming language

- so we use JS as
    - For basic calculations like other programming lang (java)
    - For DOM Manipulation
    - Client side Validation
    - Server- Side
        - For Request
        - response
    
    ### How to Link JS in HTML
    
    ![image.png](../Images/JS/image.png)
    
- Load JavaScript at the end of the body
It is Most preferable because it helps to load site faster comparatively to head

# B. Declaration

- In JS Instead of sout we use **console.log()**
- It is not compoulsory to use semicolon after declaration
we can use or can not use it

- console.warn() - It is used to Print Warning in the console
- console.error()- It is used to print error in the console

![image.png](../Images/JS/image%201.png)

- windows.alert() - Used to Pop and Alert
    
                                  - It is a Functionality of Browser not of JS
    
    - we can also Apply alert as alert()
    - This is only one way communication
    
    ![image.png](../Images/JS/image%202.png)
    

- windows.prompt() -It is Similar to alert but instead of showing message it take the input from user
    
                                       - It is also functionality of Browser not of JS
    
                                - we can also implement prompt using prompt()
    
                          - we can  also process the input which the input gave us with the help of Variables 
    

![image.png](../Images/JS/image%203.png)

# C. Data-Types

- There are 2 types of container Var and Let
- While using VAR we do not need to define type of the variables
because JS decides it automatically on the basis of what we define in the var block

- Both Var and let used as containers for declaration of variables
- values of var and let can be changed after declaration of values 
but values of const cannot be changed after declaration

- Var - Don’t use it until you will not have legacy code
- Var is also accessible outside the block
- let- Let is Reassignable
means if we assigned it once, then we can also change it’s value

![image.png](../Images/JS/image%204.png)

![image.png](../Images/JS/image%205.png)

## i) Classification of Data-Types

![download.png](../Images/JS/download.png)

### **1. Primitive-**

- String-

```python
let name = "Atharva";
```

- Number- using Var and Let

```jsx
//number using- var
var a=10
a=50;
console.log(a)
var is accessible outside the block

//number using let
let b=10
b=30
console.log(b);

//number using const
const k=10;
console.log(k);
onces a const is defined it cannot be changed
```

- Boolean using Boolean

```python
let isStudent = true;
```

- Null= assigning null to that variable
- Null is also a value, occur when Something Not Found

```python
let data = null;
```

- undefined- defining variable but do not give that variable any value
- Undefined Occur when we didn’t assign any values to variable

```jsx
var u;
console.log(u);
```

![image.png](../Images/JS/image%206.png)

![image.png](../Images/JS/image%207.png)

- **Big num-**

```python
Let bignum=123456n;
```

- **Symbol-**

```
let uniquekey=symbol(”UserId”)
```

### **2. Non Primitive-**

- Object - similar to java

```jsx
let student = {
  name: "Atharva",
  age: 20
};
```

- Array- Similar to java

```python
let numbers = [10, 20, 30];
```

- Function- Similar to java

```jsx
function greet() {
  console.log("Hello!");
}
```

**#NOTE-** How to find any declared variable is which type

```
console.log(typeof username)   // user name is a name of a variable
```

### **3. Reference Data Type-**

- [ ] - It is a Reference of a Array
        Happens when we define and array and do not initilize it
- ( ) - It is a reference of Method/ Function
    
           Happens when we do not define any thing under a function
    
- { }- It is a Reference of Object 
        Happens When we define an object and inside it we didn’t declare anything

```jsx
//Reference
//Array Reference
let arr=[];
console.log(arr)

//Function Reference
function gre(){
}
console.log(gre);

//object Reference
let obj={}
console.log(obj)
```

![image.png](../Images/JS/image%208.png)

## ii) Difference Between Reference and Primitive types

### 1. In case of Primitive types

```jsx
var x=10;
var y=x;

y=y+2;

//x=10
//y=12

x=x+2

//x=12
//y=10
```

Primitive Data Types get Copied

- What happen here is exact copy of a x is created and it is assigned to y

### **2. In case of Reference (Array)-**

```jsx
var ex=[1,2,3,4,5];
arr1=ex 

arr1.pop()
console.log(ex)
console.log(arr1)

//output
[1,2,3,4]
[1,2,3,4]
```

- What Happens here when we Assigned a array to another array at that no other array is created instead of it give that array as a reference
- So when we change form one array it also get change from another array because that array is passed as a reference

**How to Avoid These (using Spread)-** 

- Use Spread
- When we Append one array to another array
inside a [… arr]
- using these we can avoid the change in the first array that is our original array when we change the element form the 2nd array
- So instead of passing Reference it make another obj and pass that object

```jsx
var ex=[1,2,3,4,5];
arr1=[...ex]

arr1.pop()
console.log(ex);
console.log(arr1);

//output
[1,2,3,4,5]
[1,2,3,4]
```

# D. Operators in Java-Script

```jsx
//Arithmetic operator
	+
	-
	*
	/
	%
	** - 10**4 (a to the power b) exponential 10^4
	
//Assignmnet Operator
	=
	+=
	-=
	/=
	%=
	
//Comparision Operator
	==   - it do not check type (10=="10")- gives true
	===  - it also checks the type (10==="10") - gives false
	!=
	!==
	(use === and !== insted of == & !=)
	<
	>
	<=
	>=

//Logical Operator
	&&
	||
	
//Unary Operator
	typeof
	!
	++
	--
	
//Ternary Operator
	? true: false   - let canvote=(age>18) ? "Yes" : "No";

//Bitwise Operator
	&
	
//String Concatenation
	+
	+=
	
//hardcoded
	let s=`Hello ${fname} welcome to the class`
```

# E. Conditionals in Java-Script

## i. If-Else-

- It is similar to java but the difference is js consider many of the things as true 
so in if condition instead of passing true statements passe the conditions which is false

```jsx
//if else

    if(null){
        console.log("Hi");
    }
    else{
        console.log("Hello");
    }

    //What are the things js consider as False
    null
    undefined
    0
    NAN- //not a number
    '' - //any thing in single quote
    " "- //Any thing in double quote
    document.all 
```

## ii. Switch

```jsx
//Switch
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}
```

## iii. Ternary Operator

```jsx
//Ternary Operator

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);  // Adult

let marks = 80;
let grade = 
    marks >= 90 ? "A" :
    marks >= 75 ? "B" :
    "C";
console.log(grade);
```

# F. Loops

## i. For Loop

```jsx
for(let i = 1; i <= 5; i++){
    console.log(i);
}
// Output: 1 2 3 4 5
```

## ii. While Loop

```jsx
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// Output: 1 2 3 4 5
```

## iii. Do-While Loop

```jsx
let num = 1;
do{
    console.log(num);
    num++;
}
while(num <= 5);

// Output: 1 2 3 4 5
```

## iv. For-Each Loop

```jsx
//forEach loop
let arr = [10, 20, 30];
arr.forEach(
    data=>{ console.log(data);
    }
)
// Output:
10
20
30
```

```jsx
let arr1 = [10, 20, 30];
arr1.forEach(function(value, index){
    console.log("Index:", index, "Value:", value);
});

// Output:
// Index: 0 Value: 10
// Index: 1 Value: 20
// Index: 2 Value: 30

```

# G. Functions

- Function in JS are different form java here we don’t need to give return type and a parameter type (We can pass anything in it)

```jsx
//in java
String print(String a){
    sout
}

//in JS
function print(a){
    console.log(a);
}
print(); //calling
```

**Note-**

- In JS we consider function as a value

- In ES5 (Older version) we have 3 types of Function
    - Function Statement (Normal Function)
    - Function expression
    - Anonymous Function
    
- In ES6 (Newer Version) we can write same function in 3 types
    - Fat Arrow Function
        - basic fat arrow
        - fat arrow with one param
        - fat arrow with implicit return

#Note- In JS function with no return is actually return undefined

## 1. Function in ES5

### i) Function Statement (Normal Function)

---

```jsx
function print(){
    console.log("Hello");
}
print()

function printa(name){
    console.log("Hello :"+name);
    return "Hello jii";
}
var a=printa("Atharva");
console.log(a);

//output
Hello
Hello :Atharva
Hello ji
```

- In these upper ex 2 if we didn’t return any thing and still holds the obj in a 
and print a 
then output of a will be undefined
- In Industry we use majorly

### ii) Function Expression

---

```jsx
var func=function(){
    console.log("Hello");
}
func()
```

- In these type we hold the function in one variable and that variable is also used as name for that function
- In these function type we do not give function name in right side, instead we consider the name which is given in left side as our function name

### iii) Anonymous Function

---

```jsx
var add = function(x, y) {
    return x + y;
	};

console.log(add(5, 3)); // Output: 8
```

- This is a Type of Function without any name

## 2. Functions in ES6

### i) Basic Fat Arrow Function

```jsx
var fun= ()=>{
    console.log("This is basic fat arrow Function");
    
}
fun()// calling
```

### ii) Fat Arrow with one param

```jsx
var fun1= (parameter)=>{
    console.log(parameter);
    
}
fun1(20);
```

### iii) Fat Arrow with implicit Return

```jsx
var fun2= ()=>{
    return "Atharva"
}
var ret=fun2();
console.log("hello "+ret);

var fun3= ()=> "Atharva"
var ret1=fun3();
console.log("Hello "+ret1);
```

### iv) Call back Function

- It is a Function which is passed as an argument to another function
- It is a function which is pass in another function, so another function can call it later
- so basically call back function is a function is a just a function that you can pass to another function

- Parameter- when we Define

```jsx
function add(a, b){
console.log(a + b);
}
```

- Argument- when we call
    
    ```jsx
    add(10, 20);  
    ```
    

```jsx
function hello(name){
    console.log(`Hello, ${name} welcome to coffee shop`    );
    
}
function getCustomer(callback){
    const name="Atharva";
    callback(name);  //calling the passed function
}
getCustomer(hello);

//output
Hello, Atharva welcome to coffee shop
```

### v) Nested Function

- Function inside a function

```jsx
function outerFunction() {

    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log("Inner Function Running");
        console.log(outerVar);   // inner function can access outer variable
    }

    innerFunction(); // calling inner function
}

outerFunction();

//output
Inner Function Running
I am from outer function
```

# H. Array in JS

- In JS, Array is a Collection of data, but in JS we can store Homogenous values in array
i.e it is of strong type

```jsx
//define
var arr=[1,2,"Atharva", function(){}];

//acess
console.log(arr[2]);

//replace
arr[0]=20;

//length
console.log(arr.length);
```

### i) Methods in Array

```jsx
	//push()- add element to end of the aary
	
	//pop()- remove element from last
	
	//shift()- remove first element from the array 
	
	//indexOf() - get index of the number
	
	//join()- join all elements into string
	
	//slice() - Extract part
	
	//Splice()- it remove, replace and add elelment to array
	
```

### ii) Shopping cart mini Project using Array in JS

```jsx
//Initilization of empty array
let cart=[];

//add items
	cart.push("T-Shirts");
	cart.push("Shoes");
	cart.push("Watch");
	
console.log("cart item: ", cart);

//removing item
let popItem=cart.pop();
console.log("pop Item", popItem);
console.log("cart Item", cart);

//index wise cart
cart.foreach((item,index)=>{
	console.log(`${index+1}....${item}`);
});

//check if specif item is present or not
if(cart.includes("shoes")){
	console.log("yes");
}
else{
console.log("No");
}

//write a function to remove value which passes in parameter 
function removeItem(itemName){
	item=cart.filter(function(item){
		return item!==itemName;
	})
}
removeItem("Shoes");
console.log(cart);
```

# I. Strings in JS

```jsx
//Dynamic String - Define 

let name="Atharva";
let msg=`Hello Mr ${name}`;
console.log(msg);

//get the specific index
let a="Hii I am Atharva";
console.log(a[1]);
//output - i
```

### i) Methods in Strings

```jsx
.length

.toUpperCase()

.toLowerCase()

.includes()

.indexOf()

.trim()

.slice(start, end)
```

## ii) Updation in String

- Strings are mutable
- you can not change char directly in string, only reassignment of whole string is possible

```jsx
let name="Atharva"

name[2]="a"; // Not possible

name="Diya" // Possible
//here new string will be created insted of changing the existing string 
```

### iii) Type Conversion

```jsx
let s=1000;
let t=String(s);

let num=Number("77")  // converted into number 77

	let bool=Boolean("Hello")  // true 
```

### iv) String mini Project

```jsx
let fullname="     AtHArVA mAhUlKAr    ";

//remove spaces
fullname=fullname.trim();  //remove extra spaces

//to lower and split
let nameSlipt= fullname.toLowerCase().split(/\s+/);   //converting to array
//[atharva, mahulkar]  / we write our conding in this block  /       \s+ : define split from space

//capatilize each part
function toTitleCase(s){
return s[0].toUpperCase()+s.slice(1);
}

let fname=toTitleCase(nameSlipt[0]);
let lname=toTitleCase(nameSlipt[1]);

```

# J. Objects in JS

- An object is a collection of key-value pair
- It is a Group of related data

### i) Defining and Accessing, Updating, Deleting

```jsx
var obj={};
var obj1=new Object();

var obj={
    name: "Atharva",
    age: 20,
    email:"atharvamahulkar12@gmail.com",
    contact:" 8600511467"
}
//Dot Notation
console.log(obj.contact);

//Bracket Notation
console.log(obj["age"])

//Updation
obj.name="Raj";

//Add
obj.adder="Pune;"

//delete
delete obj.adder;
```

- There are these 3 methods by which we can make the Object

### ii) Nested Object

```jsx
const user={
    name: "Raj",
    adder:{
            city:"Pune",
            state: "Maharashtra"
    }
};

console.log(user.adder.city);
```

### iii) Function inside Object - Method

```jsx
var obj3={
    name:function(){
        console.log(this);  //This.age
    }, 
    age: 25
}
obj3.name();
```

### iv) For loop for Accessing object

```jsx
//1
for(let key in user){
    console.log(`${key}: ${user[key]}`);
    
}
//2
Object.keys(user).forEach(key)=>{
    console.log(`${key}: ${obj[key]}`);
}
//3
Object.values(user).forEach(v=>{
    console.log(v);
    
})

```

# K. This Keyword in JS

- In java this refers to the current object instance
- But in JS this value is different at different places
- Because in JS Current instance is not define 
because this is going to load in browser so according to condition, current instance changes
    - In Global - Window will be the scope
    - In Function - Window will be the Scope
    - In method- object will be the scope
    - function inside method (ES5)- Window is a Scope
    - function inside the method (ES6)- Object will be the scope
    - Constructor- new Blank object
    - Event Listener - That Element jispe Listener laga hai

### 1. Inside Global

```jsx
console.log(this);

//output
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

### 2. Inside Function

```jsx
function print(){
    console.log(this);
    
}
print();

//output
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

### 3. Inside Method

#Difference Btwn Function and Method

**Function-** 

```jsx
function print(){
    console.log(this);
    
}
```

**Method-** In JS We can say method which is inside object

```jsx
var obj3={
    name:function(){
        console.log(this);  //This.age
    }, 
    age: 25
}
obj3.name();
```

### 4. Function Inside Method ES5

```jsx
var obj1={
    parent:function(){
        function child(){
            console.log(this);
        }
        child();
    }
}
obj1.parent()

//output
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

### 5. Function Inside method ES6

```jsx
var obje={
    name: function(){
        var child=()=>{
            console.log(this);
            
        }
       child() 
    }
}
obje.name();

//output
*{name: ƒ}*
```

### 6. Constructor

```jsx
function pair(){
    console.log(this);
    
}
var objec=new pair();
console.log(objec);

//Output
pair {}
	pair {}
```

- If we place new inform of method name while calling that methods then at that time this inside the method will refer that new object which is created

### 7. Even Listener

```jsx
//in html
 <button>click</button>
 
 //in Js
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
    
})
//in Event Listner this points to that on which this is applied 

//output
```

![image.png](../Images/JS/image%209.png)

# L. Call- Apply - Bind

**Call-**Through Call we can change ‘this’ value in function
             means whatever the values are coming like window, obj of this we can change that  

```jsx
var objx={
    name:"Atharva"
}
function printf(){
    console.log(this);
    
}
printf.call(objx);

//output
{name: 'Atharva'}
```

- so using call we can change the value of this
- Print ko call kro object ko pass kr ke

**Apply-** In Apply we can also pass the parameters

- It is Kind of Similar to call we can change the value of this 
but in apply we can pass parameters also

```jsx
var obx={
    name:"Atharva"
}
function prx(x,y,z){
    console.log(this, x, y, z);

}
prx.apply(obx, [1,2,5]);

//output
{name: 'Atharva'} i 1 2 5
```

**Bind-** It is also exact similar as call
            but the major difference is we will store that value in the variable 

```jsx
var ox={
    name:"Atharva"
}
function px(){
    console.log(this);
    
}
var func=px.bind(ox);
func();

//output
{name: 'Atharva'}
```

- Print ko bind kr do function se object pass kr ke aur function me hold kr lo
    
    ## i) Closures in JS
    
- A function which return one function using some value of it’s parent is called closure
- A function which runs after the execution of return statement

```jsx
function prnt(){
    var p=10;
    return function child(){
        p++;
        console.log(p);
        
    }
}
var func=prnt();
func()

//output
11
```

# M. Async-await

- In java we use thread to achieve/perform multiple tasks at a same time
and JS is not a multi threaded language
- In JS what happens is Main() thread is performing all tasks and one task is appear which take 10 min to complete
then it analyze that before 10min can it complete another task
- If it can complete then, it will complete that task before that 10 min task 
and send that 10 min task to background
- and at the end , it join that 10min task form the background
- For That purpose we have **Async-Await**

![WhatsApp Image 2025-11-19 at 18.53.45_3c5940f7.jpg](../Images/JS/WhatsApp_Image_2025-11-19_at_18.53.45_3c5940f7.jpg)

```jsx
async function demo(){
	return "Hello"
}

//so this Async will not return string it returns the object of promise
//which ensures that it will give response/object in future when ever needed

//that Response will be resolve or reject
```

- **Promise-**  promise means it is an object which will give response in future
for a reference we will use callable interface of LOCK in multithreading
it will also give response after the completion of time, gives future object

- Same here promise also gives response of future object after completion of main thread

```jsx
async function demo(){
	return "Hello";  // when we apply async before any fuction then it will convert that function response/ output to promise's response

	//return new Promise.resolve("Hello");   -- This happens Internally
}

console.log("Start");
demo();
console.log("End")
//means JS convert that response into promise response
```

- **Async-Await**

```jsx
asynch function wait3sec(){
	console.log("Waiting 3 sec..");
	await new Promise(resolve=> setTimeout(resolve, 3000));
	console.log("Done Waiting");
}

console.log("Start Waiting");
wait3sec();
console.log("This will run While Waiting...");

//output
Start Waiting
Waiting for 3 sec..
This will run While Waiting...
Done Waiting

```

- Async- Return object of promise
- Promise- Gives object in future when task is completed otherwise task will be resolved or rejected
- Await- It Stops us
- Using These Async-Await JS becomes Non-Blocking Thread Language

- **Promise**
- use Promise when we want to use chaining

```jsx
function getUserData(){
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			const data = {name: "Atharva", age: 20};
			resolve(data);
		}, 2000);
	});
}

console.log("Start Fetching user data")

getUserData().then((data) => {
	console.log("User data fetched:", data);
	}).catch((error) =>{
		console.error("Error Fetching user data: ", error;)
	});
	
	//output
	Start Fetching user data...
	User data fetched: {name: 'Atharva', age: 20}
```

# tp

# N. Dom Manipulation

- Why we use DOM- When we need to represent the HTML page using object then we use DOM
- It is **Document Object Model- so we need to create obj of HTML page**
- So basically, here we represent the overall structure of HTML with the help of object
- If we want to HTML page **hierarchy** we can show it with the help of DOM by creating it’s object

- Consider we have created a html page which has heading, paragraph, button then we can access these all by using object of document  in JS

**#It is Method of Fetching**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="Main Heading" > Welcome to Course </h1>            //id denotes unique ness    
    <p class="description"> It is a Java Full stack Batch</p>    // //one class name have mutilple names
    <button id="btn">Click me </button> 

    <script>
//Method of fetching
        const heading=document.getElementById("Main Heading");     // jha pe id lagate hai wha pe sirf elemmnet ka object retunr hota hai
        console.log(heading.innerText);

        const para=document.getElementsByClassName("description")[0];  //jha pe class name aata hai waha pe collection return hota hai
        console.log(para.innerText);

         const btun=document.getElementById("btn");  
        console.log(btun.innerText);
       
    </script>
</body>
</html>
```

```jsx
const abc=document.getElementById("")
console.log(abc.innerText);

const para=document.getElementsByClassName("");  //jha pe class name aata hai waha pe collection return hota hai
 console.log(para.innerText);
 
 note :-
 yaha hum class return krr rha hai and class name multiple bhi ho sakte hai so
 [0]
 define get class name("Description") [0]- mltb 1st wala class jiska nam Description hai
```

#Method of using Selector

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="Main Heading" > Welcome to Course </h1>            
    <p class="description"> It is a Java Full stack Batch</p>  
    <p class="description">It is spark 4.0 java full stack batch</p>  

    <div>
        <h2 id="title">DSA</h2>
        <p class="content">DSA course</p>
    </div>

    <ul class="list">
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ul>

    <button id="btn">Click me </button> 

    <script>

        const heading=document.getElementById("Main Heading");     // jha pe id lagate hai wha pe sirf elemmnet ka object retunr hota hai
        console.log(heading.innerText);

        const para=document.getElementsByClassName("description");  //jha pe class name aata hai waha pe collection return hota hai
        console.log(para.length);

        console.log(para[0].innerHTML);
        console.log(para[1].innerHTML)
        

         const btun=document.getElementById("btn");  
        console.log(btun.innerText);
        
        //selct all list itrem using tag name
        //method of reading list
        const listitem=document.getElementsByTagName("list");
        for(let items of listitem){
            console.log(items.textContent);
            
        }

        //querry selector
        const des=document.querySelector(".description");
        description.forEach((p, index) =>{
            console.log(p.innerText);
            
        })
    </script>
</body>
</html>
```

- innerText- Gives you only visible text inside the element (only gives text, ignores tags)
- innerHTML- GIves you entire HTML content (including Nested tag inside the element)- not just text

# O. Dom Manipulation Mini Project

### 1. Profile Edit

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <h2>Edit Profile</h2>
    <input type="text" id="nameInput" placeholder="Enter new Name" />
    <input type="text" id="bioInput" placeholder="Enter new bio" />
    <input type="text" id="imageInput" placeholder="Enter new image URL" />

    <button onclick="updateProfile()">Update Profile</button>

    <div id="profileCard" class="card">
        <img id="profilePic" src="data:image/jpeg;base64,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" 
        alt=""
        width="100"/>

        <h3 id="profileName">Atharva</h3>
        <p id="ProfileBio">I am a Full stack Developer</p>

    </div>

    <script>
       function updateProfile(){
        const name=document.getElementById("nameInput").value;
        const bio=document.getElementById("bioInput").value;
        const img=document.getElementById("imageInput").value;

        document.getElementById("profileName").innerText=name;
        document.getElementById("ProfileBio").innerText=bio;
        document.getElementById("profilePic").setAttribute("src",img);
      
       }

    </script>

    <style>
        .card{
            border: 20px solid #ccc;
            padding: 15px;
            width: 200px;
            margin-top: 20px;
            border-radius: 10px;
            text-align: center;
        }
    </style>
</body>
</html>
```

![image.png](../Images/JS/im.png)

![image.png](../Images/JS/img1.png)

### 2. Theme Change

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="toggleTheme()">Toggle Theme</button>

    <div id="app" class="lightTheme">
        <h1>Hello Buddy</h1>
        <p>This is Dynamic Changing</p>
    </div>

    <style>
        .lightTheme{
            background: white;
            color: black;
            padding: 20px;
        }
        .darkTheme{
            background: black;
            color: white;
            padding: 20px;
        }

    </style>

<script>
    function toggleTheme()
    {
        const app= document.getElementById("app");
        app.classList.toggle("darkTheme");
    }
</script>

</body>
</html>
```

- In classList- It is a part of CSS (DOM acess)
- It gives us capabailty that how much we properties in script file or css file 
or it is applied to page, we get access to all of them

![image.png](../Images/JS/img2.png)

![image.png](../Images/JS/img3git .png)

### 3. Mini Project

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .err{
            color: red;
        }
        .success{color: green;}
        .preview{margin-top: 20px; padding: 10px; border: 1px solid #ccc;}
    </style>
</head>
<body>
        
    <h2>User Registration</h2>
    <form id="userForm">
        <label>Name:</label>
        <input type="text" name="nameInput" id="nameInput">
        <br/> <br/>

         <label>
             <input type="checkbox" name="nameInput" id="subscribe">
             SubScribe to Atharva Content
         </label>
       
        <br/> <br/>

        <button type="submit">Submit</button>
    </form>

    <div id="Preview" class="Preview"></div>

    <script src="dom.js"></script>
</body>
</html>
```

```jsx
//EventListner- koi bhi button pe kisi bhi text pe app ne event lga diya jo click able hai
//means jaise hi yuss event pe click hoga  that methodd will start running 

document.addEventListener("DOMContentLoaded", ()=>{
const form=document.getElementById("userForm");
const nameInput=document.getElementById("nameInput");
const Subscriber=document.getElementById("subscribe");
const preview=document.getElementById("Preview");

form.addEventListener("submit", (e)=>{

        e.preventDefault();
        //preventDefault -Prevent page Reload na ho

        const name=nameInput.value.trim();
        const isSubs= Subscriber.ariaChecked;

        //clear
        preview.innerHTML="";
        if(name===""){
            const err= document.createElement("p");
            err.textContent="Name Cannot be Empty";

            err.classList.add("err");
            preview.appendChild(err);
        }
        else{
            const welcome=document.createElement("h3");
            welcome.textContent=`hell0, ${name}`;
            preview.appendChild(welcome);

            if(isSubs){
                 const msg=document.createElement("p");
                 msg.textContent="You are Subscriber of ATharva COntent";
                 msg.classList.add("success");
                 preview.appendChild(msg);

            }
        }
        form.reset();
});

})

```
