class Pila {
    constructor() {
      this.items = [];
    }
  
    // Agregar un elemento a la pila
    push(element) {
      this.items.push(element);
    }
  
    // Sacar el elemento superior de la pila
    pop() {
      if (this.items.length === 0) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    // Ver el elemento superior de la pila sin sacarlo
    peek() {
      if (this.items.length === 0) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    // Obtener el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Imprimir los elementos de la pila
    print() {
      console.log(this.items);
    }
  }
  
  // Ejemplo de uso
  const miPila = new Pila();
  miPila.push(10);
  miPila.push(20);
  miPila.push(30);
  
  miPila.print(); // Salida: [10, 20, 30]
  console.log("Tamaño de la pila:", miPila.size()); // Salida: Tamaño de la pila: 3
  console.log("Elemento superior:", miPila.peek()); // Salida: Elemento superior: 30
  
  miPila.pop();
  miPila.print(); // Salida: [10, 20]
  