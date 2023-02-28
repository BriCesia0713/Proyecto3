document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  fetch('../data/terror.json')
    .then(response => response.json())
    .then(data => mostrarData(data));
}
function mostrarData(data) {
  data.forEach(series => {
    const { tittle, img_url } = series;
    const cardSeries = document.createElement("section");
    cardSeries.classList.add("series");
    const imagenSeries = document.createElement("img");
    imagenSeries.classList.add("img-serie");
    imagenSeries.src = img_url;
    imagenSeries.onclick = function() {
      mostrarVentana(series);
    }
    const divNombre = document.createElement("div");
    const nombreSeries = document.createElement("h4");
    nombreSeries.textContent = tittle;

    divNombre.appendChild(nombreSeries);
    cardSeries.appendChild(imagenSeries);
    cardSeries.appendChild(divNombre);

    document.querySelector(".contenedor").appendChild(cardSeries)

  });
}
function mostrarVentana(series) {
  window.scrollTo(0, 0);
  //Desestructuración del objeto
  const { tittle, img_url, sipnosis, genero, episodios, periodo_de_emision, year, type, cadena, donde_ver, banda_sonora, director, guionista, reparto } = series;
  let contenido = `
  <div class='ventana-container'>
    <a href="#" id="cerrar"><img src="assets/img/error1.jpg" alt="error" width="30px" height="30px"></a>
        <div clas='img-ventana'>
            <img class='img-vent' src='${img_url}' alt='${tittle}'>
        </div>
        <div class='ventana-info'>
            <h4 class="info-vent"class name {
              constructor(params) {
                
              }
            }>Serie: ${tittle}</h4>
            <h4 class="info-vent">Sipnosis: ${sipnosis}</h4>
            <h4 class="info-vent">Genero: ${genero}</h4>
            <h4 class="info-vent">Episodios: ${episodios}</h4>
            <h4 class="info-vent">Periodo de emision: ${periodo_de_emision}</h4>
            <h4 class="info-vent">Año: ${year}</h4>
            <h4 class="info-vent">Director: ${director}</h4>
            <h4 class="info-vent">Guionista: ${guionista}</h4>
            <h4 class="info-vent">Donde ver ${donde_ver}</h4>
        </div>
    </div>
  `
  document.querySelector("#ventana").innerHTML = contenido;
  document.querySelector("#ventana").style.display = "block";
  document.querySelector("#cerrar").onclick = function() {

    document.querySelector("#ventana").style.display = "none";

  }
}