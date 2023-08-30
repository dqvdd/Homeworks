//Clase Pilas y Colas
//ULTIMA EN PONERSE PRIMERA QUE SALE 

//METODOS//
//PUSH: agregar un nuevo valor, el elemento se agrega al final
//POP: Quita el ultimo elemento 
//PEEK: Va a el ultimo elemento sin removerlo
//SIZE: retorna el numero de elementos
//PRINT: imprime la lista


//USANDO ARREGLOS
class Stack{
    constructor(){
        this.Stack = [];
    }

    push(element){
        this.Stack.push(element);
        return this.Stack;
    }

    pop() {
        return this.Stack.pop ();
    }

    peek() {
        return this.stack[this.stack.length - 1];

    }

    size() {
        return this.stack.length;
        }

        print() {
         console.log(this.stack);    
        }

        }

const stack = new Stack();
console.log(stack.size()); //0
console.log(stack.push( 'John Cena')); // ['John Cena']
console.log(stack.push('The Rock')); //['John Cena', 'The Rock']
console.log(stack.size()); //2
stack.print(); // ['John Cena]


