//Tenemos el while, do while, for each y for in como ciclos  
//Ejemplo
obj ={a:1,b:2,c:3} 

for (let k in obj){
    console.log(k)
}
//va a imprimir las llaves de del obj en cada posicion donde este K
// cuando K tenga el valor 'a', el objeto es obj['a']
obj.a === obj['a']

k | obj[k]
__________
'a'|obj['a']
'b'|obj['b']
'c'|obj['c']