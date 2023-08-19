
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

const as = async() =>{
    try {
        const resultado = await division(x,y); //promesa con los parametros que queremos
        console.log(resultado);
    }catch(error){
        console.error(error);
    }
}

as(); //llamamos la segunda funcion