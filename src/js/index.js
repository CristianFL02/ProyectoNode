function fraseAleatoria() {
  let frase = "<br>Frase aleatoria: ";
  let frases = [
    "La vida nos deja ciegos, el amor nos mantiene amables.",

    "Recoger los pedazos, ¿por dónde empezar? La parte más difícil de terminar es empezar de nuevo.",

    "No puedes tener miedo de las personas dispuestas a hacerte daño, porque si temes a la vida, nunca vivirás.",

    "En un cielo de un millón de estrellas. Parpadea, parpadea. ¿A quién le importa cuando se acaba el tiempo de alguien? Si un momento es todo lo que somos. Somos más rápidos, más rápidos. ¿A quién le importa si se apaga una luz más? Bueno, a mí sí.",

    "Es verdad, lo que siento me lo prometía tu rostro, el sonido de tu voz pintada en mis recuerdos, aunque no estés conmigo, yo estoy contigo.",

    "Algo ha sido tomado de lo más profundo de mí, un secreto que se mantuvo bajo llave, nadie puede verlo nunca. Heridas tan profundas que nunca se ven, nunca desaparecen, como imágenes en movimiento en mi cabeza, durante años y años han jugado.",

    "Y el sol se pondrá para ti.",

    "Nunca me conoceré a mí mismo hasta que haga esto por mi cuenta, y nunca sentiré nada más hasta que mis heridas estén curadas. Nunca seré nada hasta que me separe de mí, y me separaré y me encontraré hoy.",
  ];
  let animacion = "animate__animated ";
  let animaciones = [
    "animate__bounce",
    "animate__flash",
    "animate__rubberBand",
    "animate__backInDown",
    "animate__bounceInUp"
  ];

  let div = document.querySelector("#fraseAl");

  let animacionAl = animaciones[Math.floor(Math.random() * animaciones.length)];
  animacion = animacion + animacionAl;

  let p = document.createElement("p");
  div.className = animacion;


  let fraseAl = frases[Math.floor(Math.random() * frases.length)];
  frase = frase + fraseAl;
  p.textContent = frase;
  p.setAttribute("class",animacion);
  document.getElementById("fraseAl").innerHTML = frase;
}

fraseAleatoria();
