//Definimos datos
const graficoB = document.querySelector("#graficoBarras");
const etiquetasB = ["Estamos muertos", "Sweet Home", "El juego del calamar", "Kingdom", "El telefono", "Goedam:Cortos de terror ", "La Octaba noche", "Zombi detective", "Rumbo al infierno", "Mar de la tranquilidad", "La gloria", "Mi nombre"];
const datosVentas2020 = {
    label: "Ranking de Terror ",//leyenda
    data: [4.8, 4.87, 9.36, 8.33, 7.1, 5.4, 5.3, 4.8, 4.0, 4.5, 4.8, 6.8,],//datos
    backgroundColor: 'rgba(54,162,235,0.2)',
    borderColor: 'rgba(54,162,235,1)',
    borderWidth: 1,//ancho de linea
};
//Creamos el grafico
new Chart(graficoB, {
    type: 'bar',
    data: {
        labels: etiquetasB,
        datasets: [
            datosVentas2020
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
//------------------------GRAFICO DE PIE----------------------------
// Obtener una referencia al elemento canvas del DOM
const graficoP = document.querySelector("#graficoPie");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [1500, 400, 2000, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(160,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart(graficoP, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});