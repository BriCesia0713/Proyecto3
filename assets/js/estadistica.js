//------------------------GRAFICO DE LINEA----------------------------
//Definimos datos
const graficoL = document.querySelector("#graficoLinea");
const etiquetasL = ["Enero", "Febrero", "Marzo", "Abril"];
const datosVentas2020 = {
  label: "Ventas por mes",//leyenda
  data: [5000, 6000, 3000, 2000],//datos
  backgroundColor: 'rgba(54,162,235,0.2)',
  borderColor: 'rgba(54,162,235,1)',
  borderWidth: 1,//ancho de linea
};
const datosVentas2021 = {
  label: "Ventas por mes",//leyenda
  data: [3000, 5000, 8000, 4000],//datos
  backgroundColor: 'rgba(154,162,235,0.2)',
  borderColor: 'rgba(154,162,235,1)',
  borderWidth: 1,//ancho de linea
};
//Creamos el grafico
new Chart(graficoL, {
  type: 'line',
  data: {
    labels: etiquetasL,
    datasets: [
      datosVentas2020,
      datosVentas2021
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
//------------------------GRAFICO DE BARRAS----------------------------
//Definimos datos
const graficoB = document.querySelector("#graficoBarras");
const etiquetasB = ["Mayo", "Junio", "Julio", "Agosto"];

//Creamos el grafico
new Chart(graficoB, {
  type: 'bar',
  data: {
    labels: etiquetasB,
    datasets: [
      datosVentas2020,
      datosVentas2021
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
    'rgba(163,221,203,0.2)',
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
  hoverOffset: 4
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
//------------------------GRAFICO DE Dona----------------------------
// Obtener una referencia al elemento canvas del DOM
const graficoD = document.querySelector("#graficoDona");
// Las etiquetas son las porciones de la gráfica
const etiquetasD = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresosD = {
  data: [1500, 400, 2000, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
  backgroundColor: [
    'rgba(163,221,203,0.2)',
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
  hoverOffset: 4
};
new Chart(graficoD, {
  type: 'doughnut',// Tipo de gráfica. Puede ser dougnhut o pie
  data: {
    labels: etiquetasD,
    datasets: [
      datosIngresosD,
      // Aquí más datos...
    ]
  },
});