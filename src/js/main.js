
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Revisa el tema actual en localStorage
if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
} else {
  htmlElement.classList.remove('dark');
}

// Cambia el tema al hacer clic
themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

function enviar() {
  // Recogemos la información del HTML
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;

  // Comprobamos si la información está bien
  if (nombre !== "" && apellidos !== "" && email !== "" && texto !== "") {
    // Si la información está bien, mostramos una alerta
    alert("La información ha sido enviada correctamente!");
  } else {
    // Si la información no está bien, mostramos un mensaje de error
    alert("Por favor, rellena todos los campos.");
  }
}
document.querySelector("#boton").addEventListener("click",function() {
  enviar();
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("texto").value = "";
});