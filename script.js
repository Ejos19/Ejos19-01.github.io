const tablaMultiplicar = document
  .getElementById("tablaMultiplicar")
  .querySelector("tbody");
const inputMultiplicador = document.getElementById("multiplicador");

function generarTabla() {
  let multiplicador = parseInt(inputMultiplicador.value);

  tablaMultiplicar.innerHTML = ""; // Limpiar tabla anterior

  for (let i = 1; i <= 12; i++) {
    const fila = document.createElement("tr");

    const celdaMultiplicador = document.createElement("td");
    celdaMultiplicador.textContent = `${multiplicador} x ${i}`;
    -fila.appendChild(celdaMultiplicador);

    const celdaResultado = document.createElement("td");
    celdaResultado.textContent = multiplicador * i;
    fila.appendChild(celdaResultado);

    tablaMultiplicar.appendChild(fila);
  }
}

generarTabla(); // Generar tabla inicial al cargar la página
