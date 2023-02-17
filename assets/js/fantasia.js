//Definimos datos
const graficoB = document.querySelector("#graficoBarras");
const etiquetasB = ["Temorrow", "Ghost doctor", "Island", "M.R Queen", "El rey: Eterno monarca", "Tale of the nine Tailed", "Abyss 2019", "Recuerdos de la Alhambra 2018", "Kiss sixth sense", "18 Again", "My roommate is a gumiho", "Bulgasal"];
const datosVentas2020 = {
  label: "Ranking de Series ",//leyenda
  data: [3.4, 5.482, 5.65, 12.581, 4.9, 5.286, 4.8, 8.434, 7.34, 2.725, 3.908, 5.5],//datos
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