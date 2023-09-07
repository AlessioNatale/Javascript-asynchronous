function repeatHello(callback) {
    setInterval(() => {
        console.log(callback);
    }, 1000);;
}


repeatHello("hello");

// si usano le arrow fuction perchè hanno una sintassi più corta
// e semplice da leggere ma si potrebbero fare anche con le normali 
