// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const nombres = [];
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    window.agregarAmigo = function () {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        if (nombres.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSeleccionado = nombres[indiceAleatorio];
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSeleccionado}</strong></li>`;
    };
});
