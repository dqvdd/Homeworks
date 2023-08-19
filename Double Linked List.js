class DoubleLinkedList{ 
    constructor(){  
        this.head =null;
        this.tail = null;
    }

    append(node){
        const newNode = new Node(node)

        if(!this.head){ //si no hay cabeza, se crea la cabeza
            this.head = newNode;
        }else{ //sino, se agrega cola, es decir el siguiente de la cola, es el nuevo nodo y el nuevo nodo tiene un anterior que es la cola
            this.tail.next = newNode;
            newNode.prev = this.tail
        }
        this.tail = newNode;
    }


    remove(value, current = this.head){
        if(this.head === null){
            return false;
        }

        if (this.head.value === value){ // si el valor es la cabeza, entonces el siguiente nodo se vuelve la cabeza y el anterior es null
            this.head = this.head.next
            this.head.prev = null
            return this.head;

        }

        if (current.next !== null){ //si el siguiente nodo tiene valor
            if(current.next.value === value){ // si el siguiente nodo es el valor, entonces se vuelve el valor del siguiente del siguiente
            current.next = current.next.next; //entonces el valor del siguiente es el valor del siguiente al siguiente, es decir, se salta el valor eliminado
            current.next.prev = current; //y el 
            return true;
            }else{ //si no, recursivo con el siguiente nodo
                return this.remove(value, current.next)
            }
        }
    }




}