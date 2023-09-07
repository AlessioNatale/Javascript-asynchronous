const number = 15;

const promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("ok")
    }
    reject("error")
})

promise
    .then((risul) => {
        console.log(risul)
    })
    .catch((err) => {
        console.log(err)
    });