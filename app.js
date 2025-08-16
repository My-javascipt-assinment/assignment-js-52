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

    
const myPromise = new Promise((resolve,reject)=>{
    let color = ['red','blue','green'];
let random = Math.random()*color.length;
    random = Math.floor(random);
    let result = color[random];
    if(result === 'blue')resolve('ok')
        else reject('not ok')
})
myPromise 
.then((resolve)=>{console.log(resolve)})
.catch((reject)=>{console.log(reject)})
.finally(()=>{console.log('operation completed')})





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