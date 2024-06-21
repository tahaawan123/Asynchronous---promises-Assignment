

// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.




function fetchGreeting(){
    return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Hello World!")
            }, 2000);
    });
}
  fetchGreeting().then((message)=>console.log(message));
  
  
  










// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

let simulateTask = ()=>{
    console.log("Task started");
    setTimeout(()=> {
          console.log("Task completed");
          
    }, 1000);
    
}
simulateTask()






// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

   let fetchData =()=>{
         return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Data fetched successfully!")
            }, 1000);
         });
   }
            
          fetchData().then((data)=>console.log(data));
          



// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch



let fetchWithError = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const randomlySuccess = Math.random() < 0.5;  
            if(randomlySuccess){
            resolve("Data fetched successfully!")
            }
            else{
                reject ("Data fetch failed!")
            }
        }, 1000)  //  delay with setTimeout
        
    })
}
fetchWithError().then((success)=>console.log(success)).catch((error)=>console.log(error))







// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
 
let fetchData2 = () => {
      return new Promise((resolve, reject) => {
        resolve("Data fetch successfully!")
      })
}
let processData = () => {
    return new Promise((resolve, reject) => {
        reject("Data processing failed!");
    })
}
function executeSequentially(){
      fetchData2().then((success)=>console.log(success));
      processData().catch((error)=>console.log(error));
      
};
executeSequentially()





