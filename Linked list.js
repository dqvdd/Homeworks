//Es un conjunto de vagones que esta conectado entre ellos   
//conjunto de nodos enlazados

//HEAD: el vagon principal o el nodo principal es la cabina/cabeza
//NODO: cada vago/nodo tiene un dato
//POINTER: tambien tenemos un apuntador, que es el que enlaza los vagones/nodos
//TAIL: la cola es el ultimo nodo, en algun momento la cola puede estar vacia ej: cual solo hay cabeza

//Metodos

//append: se puede agregar donde quiera, hasta como cabeza
//peek: buscar/ontemer un nodo que este dentro de la lista
//size: cuantos nodos tiene la lista
//remove: se puede eliminar cualquier, pero toca hacer de nuevo el enlace
//print: imprimir la lista

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

//lo importante de la lista son los nodos y hacia donde apunta
//el valor del nodo puede ser lo que quiera, hasta un obj()
//el nodo siempre debe tener un valor y un siguiente
//el siguiente de ese nodo es nulo

node = {
    valor:'x',
    siguiente: null
}

///////////////////////////////////////////////////////////////

class List{
    constructor(nodo){}
    peek(nodo, pos_actual){} //peek(nodo, current = this.head){}
    append(nodo, pos_actual){}
    remove(nodo, pos_actual){}
    size(total, pos_actual){}
    print(nodo){}
}

class LinkedList{
    constructor(){
        this.head =null;
        this.tail = null;
    }

    append(node){
        const newNode = new Node(node)

        if(!this.head){ //si no hay cabeza, se crea la cabeza
            this.head = newNode;
        }else{ //sino, se agrega cola
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    peek(value, current = this.head){
        if(this.head === null){ //si la lista esta vacia, no busque
            return false
        }

        if(current !== null){ //si el valor no es nulo
            if(current.value === value){ //si tiene el valor retorn verdadero
                return true
            } else {
                return this.peek(value, current.next) //busque en el siguiente nodo
            }
           
        }
        return false;
    }

    size(current = this.head, acum = 1){
        if (this.head === null) {
            return 0
        }

        if (current.next !== null){ //si el siguiente es diferente de nulo, acumule
            return this.size(current.next, acum = acum +1)
        }

        return acum
    }

    remove(value, current = this.head){
        if(this.head === null){
            return false;
        }

        if (this.head.value === value){ // si el valor es la cabeza, entonces el siguiente nodo se vuelve la cabeza
            return this.head = this.head.next
        }

        if (current.next !== null){ //si el valor es el del siguiente, entonces se vuelve el valor del siguiente del siguiente, es decir, se salta el valor que eliminó
            if(current.next.value === value){
            current.next = current.next.next;
            return true;
            }else{ //si no, recursivo con el siguiente nodo
                return this.remove(value, current.next)
            }
        }
    }

    print(){
        let node = this.head;
        while (node != null){ //mientras los nodos no sean nulos, hace
            console.log(`valor ${node.value} | Next: ${node.next?.value || null}`)
            node = node.next
        }
    }


}

