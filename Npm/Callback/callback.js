function async1(){
    return new Promise((reslove, reject)=>{
        console.log("Async 1 completed");
        reslove("Result from Async1")
    }, 1000)
}

function async2(){
    return new Promise((reslove, reject)=>{
        console.log("Async 2 completed");
        reslove("Result from Async2")
    }, 1000)
}
function async3(){
    return new Promise((reslove, reject)=>{
        console.log("Async 3 completed");
        reslove("Result from Async3")
    }, 1000)
}

async1().then(result1 => {
    console.log(result1);
    return async2();
}).then(result2 => {
    console.log(result2);
    return async3();
}).then(result3 => {
    console.log(result3);
    console.log("All async func completed")
}).catch(err => {
    console.log("Error occurred",err)
})