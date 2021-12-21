// Array de Ingredientes
let ingredientes = [
  { nombre: "Pan de Potato", precio: 50 },
  { nombre: "Pan Canario", precio: 50 },
  { nombre: "Lechuga", precio: 20 },
  { nombre: "Tomate", precio: 20 },
  { nombre: "Cebolla", precio: 20 },
  { nombre: "Mostaza", precio: 10 },
  { nombre: "Ketchup", precio: 10 },
  { nombre: "Salsa Especial", precio: 20 },
];

console.log(ingredientes[0]);

// Llamo las variantes que requiero

let uno = document.querySelector("#uno");
let dos = document.querySelector("#dos");
let tres = document.querySelector("#tres");
let cuatro = document.querySelector("#cuatro");
let cinco = document.querySelector("#cinco");
let seis = document.querySelector("#seis");
let siete = document.querySelector("#siete");
let ocho = document.querySelector("#ocho");
let listaUl = document.querySelector(".listaUl");

// Producto 1
uno.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[0].nombre + ": Precio: " + ingredientes[0].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let uno = carrito.push(ingredientes[0].precio);
});

// Producto 2
dos.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[1].nombre + ": Precio: " + ingredientes[1].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let dos = carrito.push(ingredientes[1].precio);
});

// Producto 3
tres.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[2].nombre + ": Precio: " + ingredientes[2].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let tres = carrito.push(ingredientes[2].precio);
});

// Producto 4
cuatro.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[3].nombre + ": Precio: " + ingredientes[3].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let cuatro = carrito.push(ingredientes[3].precio);
});

// Producto 5
cinco.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[4].nombre + ": Precio: " + ingredientes[4].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let cinco = carrito.push(ingredientes[4].precio);
});

// Producto 6
seis.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[5].nombre + ": Precio: " + ingredientes[5].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let seis = carrito.push(ingredientes[5].precio);
});

// Producto 7
siete.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[6].nombre + ": Precio: " + ingredientes[6].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let siete = carrito.push(ingredientes[6].precio);
});

// Producto 8
ocho.addEventListener("click", function () {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      ingredientes[7].nombre + ": Precio: " + ingredientes[7].precio + "$"
    )
  );
  listaUl.appendChild(li);
  let ocho = carrito.push(ingredientes[7].precio);
});

// Creando Array "Carrito" con el Total.
let carrito = [100, 100];
console.log(carrito);

// =========== BOTONES ===================

function comprar() {
  alert("Gracias por su compra. Rellene los siguientes datos:");
  let nombre = prompt("¿Cual es su Nombre y Apellido?");
  let direccion = prompt("Calle/s donde desea recibir su pedido.");
  alert("Perfecto " + nombre + ", tu pedido saldra pronto");
}

function total() {
  let total = carrito.reduce((a, b) => a + b, 0);

  console.log(total);

  let suma = 0;

  for (let i = 0; i < carrito.length; i++) {
    suma += carrito[i];
  }
  console.log(suma);

  totalTexto.innerHTML = suma + " $";
}
