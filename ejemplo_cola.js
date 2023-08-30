class Fila {
    constructor() {
      this.items = [];
    }
  
    // Agregar un elemento al final de la fila
    enqueue(element) {
      this.items.push(element);
    }
  
    // Sacar el primer elemento de la fila
    dequeue() {
      if (this.items.length === 0) {
        return "La fila está vacía";
      }
      return this.items.shift();
    }
  
    // Ver el primer elemento de la fila sin sacarlo
    front() {
      if (this.items.length === 0) {
        return "La fila está vacía";
      }
      return this.items[0];
    }
  
    // Obtener el tamaño de la fila
    size() {
      return this.items.length;
    }
  
    // Imprimir los elementos de la fila
    print() {
      console.log(this.items);
    }
  }
  
  // Ejemplo de uso
  const miFila = new Fila();
  miFila.enqueue(5);
  miFila.enqueue(10);
  miFila.enqueue(15);
  
  miFila.print(); // Salida: [5, 10, 15]
  console.log("Tamaño de la fila:", miFila.size()); // Salida: Tamaño de la fila: 3
  console.log("Primer elemento:", miFila.front()); // Salida: Primer elemento: 5
  
  miFila.dequeue();
  miFila.print(); // Salida: [10, 15]
  