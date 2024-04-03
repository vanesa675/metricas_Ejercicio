function mostrarInfoCalidad() {
    let info = document.getElementById("info-calidad");
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
  
  document.getElementById("btn-calidad").addEventListener("click", mostrarInfoCalidad);