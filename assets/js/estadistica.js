//------------------------GRAFICO DE LINEA----------------------------
//Definimos datos
const graficoL = document.querySelector("#graficoLinea");
const etiquetasL = ["Romance", "Terror y Suspenso", "Fantasia"];
const datosderomance = {
  label: "Rating de romance",//leyenda
  data: [0, 86.231, 0],//datos
  backgroundColor: 'rgba(154,162,235,0.2)',
  borderColor: 'rgba(154,162,235,1)',
  borderWidth: 1,//ancho de linea
};
const datosdeterror = {
  label: "Rating de terror y suspenso",//leyenda
  data: [20, 70.06, 0],//datos
  backgroundColor: 'rgba(230,181,102,0.2)',
  borderColor: 'rgba(230,181,102,1)',
  borderWidth: 1,//ancho de linea
};
const datosdefantasia = {
  label: "Rating de fantasia",//leyenda
  data: [0, 70.006, 0],//datos
  backgroundColor: 'rgba(232,233,161,0.2)',
  borderColor: 'rgba(232,233,161,1)',
  borderWidth: 1,//ancho de linea
};
//Creamos el grafico
new Chart(graficoL, {
  type: 'line',
  data: {
    labels: etiquetasL,
    datasets: [
      datosderomance,
      datosdeterror,
      datosdefantasia
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
const etiquetasB = ["Propuesta laboral", "Woo una abogada estraordinaria", "Love in contracte", "Esta bien no estar bien", "El efecto del rey", "25 21", "Las inclemencias del amor", "Our beloved Summer", "Yummy Cells", "La vida Fabulosa", "Nuestro Orizonte Azul", "Su vida privada"];
const datosderatingromance = {
  label: "Ranking de Romance ",//leyenda
  data: [9.36, 17.534, 10.23, 5.425, 7.98, 9.636, 6.712, 3.9, 2.230, 5.0, 5.56, 2.664],//datos
  backgroundColor: 'rgba(356, 49, 23,0.2)',
  borderColor: 'rgba(60, 48, 7,1)',
  borderWidth: 1,//ancho de linea
};
//Creamos el grafico
new Chart(graficoB, {
  type: 'bar',
  data: {
    labels: etiquetasB,
    datasets: [
      datosderatingromance
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
const etiquetas = ["Estamos muertos", "Sweet Home", "El juego del calamar", "Kingdom", "El telefono", "Goedam:Cortos de terror ", "La Octaba noche", "Zombi detective", "Rumbo al infierno", "Mar de la tranquilidad", "La gloria", "Mi nombre"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosratingterror = {
  data: [4.8, 4.87, 9.36, 8.33, 7.1, 5.4, 5.3, 4.8, 4.0, 4.5, 4.8, 6.8], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
  backgroundColor: [
    'rgba(163,221,203,0.2)',
    'rgba(232,233,161,0.2)',
    'rgba(230,181,102,0.2)',
    'rgba(229,112,126,0.2)',
    'rgba(268,162,208,0.2)',
    'rgba(163,221,203,0.2)',
    'rgba(232,233,161,0.2)',
    'rgba(230,181,102,0.2)',
    'rgba(229,112,126,0.2)',
    'rgba(268,162,208,0.2)',
    'rgba(154,162,235,0.2)',
    'rgba(269,162,208,0.2)',

  ],// Color de fondo
  borderColor: [
    'rgba(163,221,203,1)',
    'rgba(232,233,161,1)',
    'rgba(230,181,102,1)',
    'rgba(229,112,126,1)',
    'rgba(268,162,208,1)',
    'rgba(163,221,203,1)',
    'rgba(232,233,161,1)',
    'rgba(230,181,102,1)',
    'rgba(229,112,126,1)',
    'rgba(268,162,208,1)',
    'rgba(154,162,235,1)',
    'rgba(269,162,208,1)',

  ],// Color del borde
  borderWidth: 1,// Ancho del borde
  hoverOffset: 4
};
new Chart(graficoP, {
  type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
  data: {
    labels: etiquetas,
    datasets: [
      datosratingterror,
      // Aquí más datos...
    ]
  },
});
//------------------------GRAFICO DE Dona----------------------------
// Obtener una referencia al elemento canvas del DOM
const graficoD = document.querySelector("#graficoDona");
// Las etiquetas son las porciones de la gráfica
const etiquetasD = ["Tomorrow", "Ghost doctor", "Island", "M.R Queen", "El rey: Eterno monarca", "Tale of the nine Tailed", "Abyss 2019", "Recuerdos de la Alhambra 2018", "Kiss sixth sense", "18 Again", "My roommate is a gumiho", "Bulgasal"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosratingfantasia = {
  data: [3.4, 5.482, 5.65, 12.581, 4.9, 5.286, 4.8, 8.434, 7.34, 2.725, 3.908, 5.5], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
  backgroundColor: [
    'rgba(163,221,203,0.2)',
    'rgba(232,233,161,0.2)',
    'rgba(230,181,102,0.2)',
    'rgba(229,112,126,0.2)',
    'rgba(38, 24, 3,0.2)',
    'rgba(163,221,203,0.2)',
    'rgba(232,233,161,0.2)',
    'rgba(230,181,102,0.2)',
    'rgba(229,112,126,0.2)',
    'rgba(354, 2, 34,0.2)',
    'rgba(154,162,235,0.2)',
    'rgba(269,162,208,0.2)',
  ],// Color de fondo
  borderColor: [
    'rgba(163,221,203,1)',
    'rgba(232,233,161,1)',
    'rgba(230,181,102,1)',
    'rgba(229,112,126,1)',
    'rgba(38, 24, 3,1)',
    'rgba(163,221,203,1)',
    'rgba(232,233,161,1)',
    'rgba(230,181,102,1)',
    'rgba(229,112,126,1)',
    'rgba(355, 56, 65,1)',
    'rgba(154,162,235,1)',
    'rgba(269,162,208,1)',
  ],// Color del borde
  borderWidth: 1,// Ancho del borde
  hoverOffset: 4
};
new Chart(graficoD, {
  type: 'doughnut',// Tipo de gráfica. Puede ser dougnhut o pie
  data: {
    labels: etiquetasD,
    datasets: [
      datosratingfantasia,
      // Aquí más datos...
    ]
  },
});