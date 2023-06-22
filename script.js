// código JavaScript para el botón "Añadir al carrito"
var botones = document.querySelectorAll("#productos button");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    alert("¡Producto añadido al carrito!");
  });
}
