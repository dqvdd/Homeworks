//MODO 1
const promesa = new Promise ((resolve, reject ) => {
    //TODO
    resolve();// if promse is OK
    reject();//if promise is fail
});

promesa.then((data) =>{
    console.log(data)
}).catch(err => {
    console.log(err)
})


//MODO 2
const getPromesa = () => {
    return new Promise((resolve, reject) => {
        resolve('Hello World');
    })
}

getPromesa()
.then(data => {
    console.log(data)
})
.catch( error => {
   console.log(error) 
});

//MODO 3
const getPromesa1 = () => {
    return new Promise((resolve, reject) => {
        reject('Internal Error in Angie´s eye');
    })
}

getPromesa1()
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
});

//ejercicio modo 1
function division(x,y) {
    return new Promise((resolve, reject) => {
        if (y===0){
            reject('No se puede dividir entre 0');
        }
        else {
            resolve(x/y)
        }
    })
}

division(x,y)
.then(resultado => {
    console.log(resultado)
})
.catch(error => {
    console.error(error)
});

//ejercicio modo 2
const division = (x,y) => {
    return new Promise((resolve, reject) => {
        if (y===0){
            reject('No se puede dividir entre 0');
        }
        else {
            resolve(x/y)
        }
    })
}

division(x,y)
.then(resultado => {
    console.log(resultado)
})
.catch(error => {
    console.error(error)
});



