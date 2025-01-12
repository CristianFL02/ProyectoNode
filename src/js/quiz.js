function verificarRespuestas() {
    let preguntasCorrectas = 0;
  
    let pregunta1 = document.querySelector("#resp11").checked;
    let pregunta2 = document.querySelector("#resp21").checked;
    let pregunta3 = document.querySelector("#resp32").checked;
    let pregunta4 = document.querySelector("#resp43").checked;
  
    let animation = document.querySelector("#animation");
    animation.className = ("animate__animated animate__rubberBand");
  
    if (pregunta1) {
      preguntasCorrectas++;
      let pregunta1Style = document.querySelector("#pregunta1");
      pregunta1Style.style.backgroundColor = "green";
      pregunta1Style.style.margin = "4px";
      pregunta1Style.style.borderRadius = "10px"; 
    } else {
      document.querySelector("#pregunta1").style.backgroundColor = "red";
      document.querySelector("#pregunta1").style.margin = "4px";
      document.querySelector("#pregunta1").style.borderRadius = "10px"; 
    }
    if (pregunta2) {
      preguntasCorrectas++;
      let pregunta2Style = document.querySelector("#pregunta2");
      pregunta2Style.style.backgroundColor = "green";
      pregunta2Style.style.margin = "4px";
      pregunta2Style.style.borderRadius = "10px"; 
    } else {
      document.querySelector("#pregunta2").style.backgroundColor = "red";
      document.querySelector("#pregunta2").style.margin = "4px";
      document.querySelector("#pregunta2").style.borderRadius = "10px"; 
    }
    if (pregunta3) {
      preguntasCorrectas++;
      let pregunta3Style = document.querySelector("#pregunta3");
      pregunta3Style.style.backgroundColor = "green";
      pregunta3Style.style.margin = "4px";
      pregunta3Style.style.borderRadius = "10px"; 
    } else {
      document.querySelector("#pregunta3").style.backgroundColor = "red";
      document.querySelector("#pregunta3").style.margin = "4px";
      document.querySelector("#pregunta3").style.borderRadius = "10px"; 
    }
    if (pregunta4) {
      preguntasCorrectas++;
      let pregunta4Style = document.querySelector("#pregunta4");
      pregunta4Style.style.backgroundColor = "green";
      pregunta4Style.style.margin = "4px";
      pregunta4Style.style.borderRadius = "10px"; 
    } else {
      document.querySelector("#pregunta4").style.backgroundColor = "red";
      document.querySelector("#pregunta4").style.margin = "4px";
      document.querySelector("#pregunta4").style.borderRadius = "10px"; 
    }
  
    let div = document.querySelector("#respuesta");
  
    div.innerHTML = "Respuestas correctas: " + preguntasCorrectas + "/4";
  }
  
  document.querySelector("#verificar").addEventListener("click", function () {
    verificarRespuestas();
  });