const isLogged = true;


function promiseOne(){
    return new Promise((resolve, reject) => {
    if(isLogged){
        resolve(Math.random())
    }
        reject(new Error("error"))
})
};

function promiseTwo(num) {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
            resolve(`{nome: "John", età: 24}`)
        }
            reject(new Error("error"))
    })
};

promiseOne()
.then((resultOne) => {
    console.log(resultOne)
    return promiseTwo(resultOne)
})
.then((resultTwo) => {
    console.log(resultTwo);
})
.catch((err) => {
    console.error(err);
})
.finally(() =>{
    console.log("finally!");
});
