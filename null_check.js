

var myObjet = {
    key: "first"
}

var result = false;
if(myObjet.key2){
    result= true; //falso porque no existe la Key2
}

//NULLCHECK
//modo 1
const result = obj.key2 ? true: false

//modo 2
const result = obj.key2 || false

//modo 3
car = {
    model: 'fiat',
    latlng:{
        lat: 3,
        lng: 4
    }
}

const result = car.latlng.altitud || '0.0' //como no existe esa clave, se le agrega el valor '0.0'
var result2 = car.pais.depto.ciudad //da error, porque el car no tiene estas claves
//solucion resultado 2
var result2 = car.pais?.depto?.ciudad || 'sin pais'
