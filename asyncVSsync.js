// Synchronious
console.log("Synchronious :")
console.log("task 1")
console.log("task 2")
console.log("task 3")

// Asynchronious
console.log("Asynchronious :")
console.log("task 1")
setTimeout(()=>{
    console.log("task 2")
},2000)
console.log("task 3")