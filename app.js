/*==================================== Question No 1 =========================================
check given number is of power of 2 or not
======================================= Answer =====================================*/
// function check(num){
//     let op = false;
//     for(let i = 1;i < num;i++){if(2**i === num){op = true}}
//     return op;
// }
// let ans = check(16);
// console.log(ans)

/*==================================== Question No 2 =========================================

======================================= Answer =====================================*/

// This runs when the page loads
// window.onload = function() {
//     let savedName = localStorage.getItem("username"); // Check localStorage
//     if (savedName) {
//         document.getElementById("greeting").textContent = `Welcome back, ${savedName}!`;
//         document.getElementById("nameInput").value = savedName;
//     }
// }

// // Function to save name in localStorage
// function saveName() {
//     let name = document.getElementById("nameInput").value;
//     if (name.trim() === "") {
//         alert("Please enter your name");
//         return;
//     }
//     localStorage.setItem("username", name); // Save to localStorage
//     document.getElementById("greeting").textContent = `Welcome back, ${name}!`;
//     alert("Name saved!");
// }

// // Function to clear name from localStorage
// function clearName() {
//     localStorage.removeItem("username");
//     document.getElementById("greeting").textContent = "Welcome!";
//     document.getElementById("nameInput").value = "";
//     alert("Name removed!");
// }




/*==================================== Question No 2 =========================================
local storage example
======================================= Answer =====================================*/

// // this function runs when the page loads
// window.onload = function(){let savedName = localStorage.getItem('username');
//     if(savedName){document.getElementById('greeting').textContent = `welcomebak,${savedName}`;
// document.getElementById('nameInput').value = savedName;}
// }

// // this function is used for save name in local storage
// function saveName(){let name = document.getElementById('nameInput').value;
//     if(name.trim()=== ''){alert('plz enter your name');
//         return;
//     }
//     localStorage.setItem('username',name);
//     document.getElementById('greeting').textContent = `welcome back, ${name}`;
//     alert('Name saved!')
// }
// // this function is used for remove name from local storage
// function clearName(){localStorage.removeItem('username');
//     document.getElementById('greeting').textContent = 'welcome';
//     document.getElementById('nameInput').value = '';
//     alert('name removed')
// }


/*==================================== Question No 3 =========================================
local storage
======================================= Answer =====================================*/
// window.onload = function(){let getName = localStorage.getItem('username');
//     let getGreeting = document.getElementById('greeting');
//     getGreeting.textContent = `welcome ${getName}`
// }


// function saveName(){let getName = document.getElementById('nameInput').value;
//     if(getName === ''){alert('plz enter name')}
//     localStorage.setItem('username',getName);
//     alert('name saved successfully')
// }

// function remove(){localStorage.removeItem('username');
//     document.getElementById('greeting').textContent = '';

// }





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/
// // apply color onload
// window.onload = function(){let getColorFromLocalStorage = localStorage.getItem('color');
//     if(getColorFromLocalStorage === ''){alert('Local storage is empty')}
//     else{document.body.style.background = getColorFromLocalStorage}
// }

// // save color in localstorage
// function save(){let getColor = document.getElementById('colorInput').value;
//     if(getColor === ''){alert('plz enter color name')}
//     localStorage.setItem('color',getColor);
//     alert('color saved in local storage successfully')
// }

// // remove color from localstorage
// function remove(){localStorage.removeItem('color');
//     document.body.style.background = '';
//     alert('color has been removed from localstorage successfully')
// }

/*==================================== Question No 5 =========================================
name , email, message submission in local storage
======================================= Answer =====================================*/
// function submission(){let getName = document.getElementById('nameInput').value;
//     let getEmail = document.getElementById('emailInput').value;
//     let getMessage = document.getElementById('messageInput').value;
//     localStorage.setItem('name',getName);
//     localStorage.setItem('email',getEmail);
//     localStorage.setItem('message',getMessage)
// }

// function show(){let name = localStorage.getItem('name');
//     let email = localStorage.getItem('email');
//     let message = localStorage.getItem('message');
//     let ul = document.getElementById('display');
//     ul.innerHTML = `<li>${name}</li>
//     <li>${email}</li>
//     <li>${message}</li>`
//     ul.style.listStyle = 'none'
   
// }



/*==================================== Question No 6 =========================================
show day on dom by setinterval()
======================================= Answer =====================================*/

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let display =  document.getElementById('dayDisplay');
// let index = 0;
// setInterval(function(){display.innerText = days[index];
  
//     index++;
//     if(index>=days.length){index = 0;}
// },1000)



/*==================================== Question No 7 =========================================
promise()
======================================= Answer =====================================*/
// success
// reject 
// pending 
// executor function (resolve, reject)
// then success callback
// catch failure call back

// const learningPromise = new Promise((resolve,reject)=>{
//     const userInput = prompt('enter any number');
//     if(userInput % 2 === 0)resolve('promise resolved');
//     else reject('promise rejected')
// });
// // console.log(learningPromise)
// learningPromise
// .then((success)=>{console.log('promise success : ',success)})
// .catch((err)=>{console.log('promise err : ',err)})

// example two 
// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if(!success){
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });

// myPromise
//     .then(result => console.log(result))   // if resolved
//     .catch(error => console.log(error))   // if rejected
//     .finally(() => console.log("Done!"));


/*==================================== Question No 8 =========================================
Create a promise that always resolves with "Hello, World!" and log it using .then().
======================================= Answer =====================================*/
// const prom = new Promise((resolve,reject)=>{resolve('Hello world')})
// prom 
// .then((sucess)=>{console.log('sucessful : ' ,sucess)})

/*==================================== Question No 9 =========================================
Make a promise that randomly resolves or rejects (use Math.random()), then handle both outcomes.
======================================= Answer =====================================*/


// const myPromise = new Promise((resolve,reject)=>{let random = Math.floor((Math.random()*2)+1);
//     if(random === 1)resolve('target achieved')
//         else reject('target not achieved')
// })
// myPromise 
// .then((resolve)=>{console.log(resolve)})
// .catch((reject)=>{console.log(reject)})
// .finally(()=>{console.log('promise completed his operation')})

/*==================================== Question No 10 =========================================
promise()
======================================= Answer =====================================*/
// const myPromise = new Promise((resolve,reject)=>{let enterName = prompt('enter your name').toLowerCase();
//     if(enterName === 'aziz'){resolve('You told correct name')}
//     else{reject('sorry try again')}
// })
// myPromise 
// .then((resolve)=>{console.log(resolve)})
// .catch((reject)=>{console.log(reject)})
// .finally(()=>{console.log('operation successful')})


/*==================================== Question No 11 =========================================
promise()
======================================= Answer =====================================*/

    
// const myPromise = new Promise((resolve,reject)=>{
//     let color = ['red','blue','green'];
// let random = Math.random()*color.length;
//     random = Math.floor(random);
//     let result = color[random];
//     if(result === 'blue')resolve('ok')
//         else reject('not ok')
// })
// myPromise 
// .then((resolve)=>{console.log(resolve)})
// .catch((reject)=>{console.log(reject)})
// .finally(()=>{console.log('operation completed')})



/*==================================== Question No 12 =========================================
.reverse()
======================================= Answer =====================================*/
// let num = [2,3,4,5,6,8,9];
// num.reverse();
// console.log(num)

/*==================================== Question No 13 =========================================
leap year
======================================= Answer =====================================*/
// let year = 2001;
// if((year%4 === 0 && year % 100 !== 0)|| year % 400 === 0){console.log('leap year')}
// else{console.log('not leap year')}

/*==================================== Question No 14 =========================================
age finder
======================================= Answer =====================================*/
// let current = new Date();
// let required = new Date('09 09 1992');
// console.log(current);
// console.log(required);
// let currentInMillisecods = current.getTime();
// console.log(currentInMillisecods);
// let requiredInMilliseconds = required.getTime();
// console.log(requiredInMilliseconds);
// let age = currentInMillisecods - requiredInMilliseconds;
// console.log(age);
// let finalResult = age/(1000*60*60*24*30*12);
// console.log(finalResult)




/*==================================== Question No 15 =========================================
object length
======================================= Answer =====================================*/
// let student = {name : 'Aziz',
//     age : 23,
//     course : 'web development'
// }
// console.log(Object.keys(student).length)

/*==================================== Question No 16 =========================================
get data of object by  for loop
======================================= Answer =====================================*/
// let student = {name : 'Aziz',
//     age : 23,
//     course : 'web development'
// }
// for(let key in student){console.log(`${key} : ${student[key]}`)}



/*==================================== Question No 17 =========================================
itrators of/in 
======================================= Answer =====================================*/
// let fruits = ['apple','mango','bnanaana'];
// for(let element of fruits){console.log(element)}
// for(let ind in fruits){console.log(ind)}
// object example 
// const student = {name : 'Aziz',
//     age : 30,
//     course : 'web development'
// }
// for(let value in student){console.log(`${value} : ${student[value]}`)}


/*==================================== Question No 18 =========================================
array destructuring
======================================= Answer =====================================*/
// let [name,age,course,designation] = ['Aziz',30,'Webdevelopment','software engineer'];
// console.log(name);
// console.log(age);
// console.log(course);
// console.log(designation)

/*==================================== Question No 19 =========================================
object destructuring
======================================= Answer =====================================*/
// let student = {name : 'sndleeb',
//     color : 'white',
//     age : 22
// }
// // console.log(student.name);
// // console.log(student.color);
// // console.log(student.age);
// let {name,color,age} = student;
// console.log(name);
// console.log(color);
// console.log(age)

/*==================================== Question No 20 =========================================
Enhanced object literals
======================================= Answer =====================================*/
// let name = 'sndleeb';
// let age = 23;
// let course = 'web development';
// const details = {name,
//     age ,
//     course
// }
// console.log(details)
/*==================================== Question No 21 =========================================
sum array each value sqare of array
======================================= Answer =====================================*/
// let num = [1,2,3];
// // let need = num.map((element)=>{return element*element;});
// // console.log(need);
// // let sum = 0;
// // for(let i = 0;i <need.length;i++){sum = sum + need[i]
    
// // }
// // console.log(sum)
// let arr = [];
// for(let i = 0;i < num.length;i++){arr.push(num[i]*num[i])};
// console.log(arr);
// let sum = 0;
// for(let i = 0;i < arr.length;i++){sum = sum + arr[i]};
// console.log(sum)

/*==================================== Question No 22 =========================================
find minimum value
======================================= Answer =====================================*/
// function processing(){let getValue = document.getElementById('input').value;
   
//     // first we convert getValues in array by split
//     getValue = getValue.split(' ');
//     console.log(getValue);
//     let minimum = getValue[0];
//     for(let i = 0;i < getValue.length; i++){if(getValue[i] < minimum){minimum = getValue[i]}}
//     document.getElementById('display').innerHTML = minimum;
// }




/*==================================== Question No 23 =========================================
convert camelcase
======================================= Answer =====================================*/
// function camelcasing(){let getInput = document.getElementById('userinput').value;
//     getInput = getInput.toLowerCase();
//    getInput = getInput.split(' ');
//   const toCamelCase = getInput.map((item, index)=>{if(index === 0){return item;}
// else{return item.charAt(0).toUpperCase()+item.slice(1)}})
// let finalResult = toCamelCase.join('');
// document.getElementById('result').innerHTML = finalResult;
    
// }




/*==================================== Question No 24 =========================================
check whether string is uppercase or lowercase
======================================= Answer =====================================*/

// let str = prompt('enter word')
// if(str === str.toUpperCase()){console.log('uppercs')}
// else{console.log('lower')}


/*==================================== Question No 25 =========================================
find average
======================================= Answer =====================================*/
// function process(){let getValue = document.getElementById('input').value;
//   getValue = getValue.split(' ');
//   let length = getValue.length;
//   let sum = 0;
//   for(let key of getValue){sum = sum + Number(key);}
//   let mean = sum/length;
//   document.getElementById('display').innerHTML = mean;
// }


/*==================================== Question No 26 =========================================
find medean numbers
======================================= Answer =====================================*/
// function processing() {
//   let get = document.getElementById('input').value;

//   // Convert input into array of numbers
//   let arr = get.trim().split(' ').map(Number);

//   // Sort numbers
//   arr.sort((a, b) => a - b);
//   console.log("Sorted:", arr);

//   let median;

//   if (arr.length % 2 !== 0) {
//     // Odd → middle element
//     let ind = Math.floor(arr.length / 2);
//     median = arr[ind];
//   } else {
//     // Even → average of middle two
//     let index1 = arr.length / 2 - 1;
//     let index2 = arr.length / 2;
//     median = (arr[index1] + arr[index2]) / 2;
//   }

//   console.log("Median:", median);
// }


/*==================================== Question No 27 =========================================
rest parameter
======================================= Answer =====================================*/
// function showData(user1,user2,...rest){console.log(rest);
//     console.log(user1);
//     console.log(user2)
// }
// showData('apple','mango','banana','grapes','orange')

/*==================================== Question No 28 =========================================
default parameter
======================================= Answer =====================================*/
// function calculation(a,b=5){let ans = a + b;
//     console.log(ans)
// }
// calculation(2,2)



/*==================================== Question No 29 =========================================
promise
======================================= Answer =====================================*/
// const myPromise = new Promise((resolve, reject)=>{let num = prompt('enter num');
//     if(num % 2 === 0){resolve('Number is even')}
//     else{reject('No is not even')}
// })

// myPromise 
// .then((resolve)=>{console.log(resolve)})
// .catch((reject)=>{console.log(reject)})


/*==================================== Question No 30 =========================================

======================================= Answer =====================================*/
// const numbers = [1,2,2,3,1,4,2];
// let num1 = numbers.filter((item)=>{return item === 1})
// console.log(num1)
// let num2 = numbers.filter((item)=>{return item === 2})
// console.log(num2)
// let num3 = numbers.filter((item)=>{return item === 3})
// console.log(num3)
// let num4 = numbers.filter((item)=>{return item === 4})
// console.log(num4)
// let a = num1.at(0);
// let aValue = num1.length;
// let b = num2.at(0);
// let bValue = num2.length;
// let c = num3.at(0);
// let cValue = num3.length;
// let d = num4.at(0);
// let dValue = num1.length;
// let obj = {'a': aValue,
//     'b': bValue,
//     'c': cValue,
//     'd': dValue
// }
// console.log(obj)
// const numbers = ['apple','mango','apple','mango','bnanan','apple'];
// let counts ={}
// for(let element of numbers){counts[element] = (counts[element]|| 0)+1;}
// console.log(counts)

/*==================================== Question No 1 =========================================
find mode
======================================= Answer =====================================*/

// function findMode(numbers) {
//   let counts = {};
//   let maxCount = 0;
//   let mode = []; // Use an array to store all modes, in case of a tie

//   for (let item of numbers) {
//     counts[item] = (counts[item] || 0) + 1;
    
//     // If the current item's count is higher than the max, it's the new mode
//     if (counts[item] > maxCount) {
//       maxCount = counts[item];
//       mode = [item]; // Reset mode array with this new item
      
//     // If the count is equal to the max, it's a tie, so add it to the list
//     } else if (counts[item] === maxCount) {
//       mode.push(item);
//     }
//   }

//   // Return the result
//   return mode;
// }

// let ans = findMode([1,2,6,2,7,6]);
// console.log(ans); // This will correctly log [2, 5]
/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/