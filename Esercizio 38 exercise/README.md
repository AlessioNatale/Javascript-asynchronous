# Promise chaining

Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

Tips:

- If in doubt, watch the lesson
- To understand how they work, you can try adding `setTimeout` to the promise functions

Scrivi una prima `promise` che prenda come parametro la variabile `isLogged` trovata nel file `exercise.js`.
Se la variabile è vera, restituiamo un numero casuale dalla risoluzione, altrimenti inviamo un errore.
Scriviamo una seconda "promessa" che accetta una variabile di tipo numero come parametro. Se il parametro di input è maggiore di 0,5, nella risoluzione dobbiamo restituire i seguenti dati: `{nome: "John", età: 24}`, altrimenti dobbiamo inviare un `error`.
Fatto ciò, prova a concatenare le promesse per restituire eventualmente l'oggetto finale `{name: "John", age: 24}`

Suggerimenti:

- In caso di dubbi, guarda la lezione
- Per capire come funzionano, puoi provare ad aggiungere `setTimeout` alle funzioni di promessa
