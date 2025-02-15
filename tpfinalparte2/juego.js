class Juego {
  constructor() {
      this.estado = "Iniciar"
      this.personaje = new Personaje(width / 2, height, 100)
      this.enemigos = []
      this.cantidadDeEnemigos = 10
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
          this.enemigos[i] = new Enemigo(random(-width / 2, width, 100), random(height / 2), random(100, 50))
      }
      this.fondo = loadImage("data/1.png") // Se asegura que la imagen se cargue desde la carpeta data
      this.fondo2 = loadImage("data/3.png")
      this.fondo3 = loadImage("data/5.png")
      this.fondo4 = loadImage("data/4.png")
      this.fondo6 = loadImage("data/6.png")
      this.fondo7 = loadImage("data/7.jpg")
      this.fondo8 = loadImage("data/8.jpg")
      this.boton = loadImage("data/9.png")
      
      this.mensajes = {
          iniciar: new Mensaje("PRESIONA CUALQUIER TECLA", 315, 230, 30, color(255, 5, 0)),
          instrucciones: new Mensaje("Usa A, W, S, D para moverte", 315, 420, 20, color(255, 195, 0)),
          ganaste: new Mensaje("¡HAS GANADO!", 315, 173, 40, color(0)),
          perdiste: new Mensaje("¡PERDISTE!", 315, 173, 30, color(255)),
          creditos: new Mensaje("Hecho por Alessandro Frade", 315, 230, 40, color(255))
      };
  }

  actualizar() {
    stroke(255, 255, 0)
      strokeWeight(3)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
    }
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        if (dist(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y) < this.personaje.tam/2 + this.enemigos[i].tam/2) {
        this.personaje.colision = true
        this.personaje.tam--
      }
    }

    if (this.personaje.tam <= 60) {
      this.estado = "Perdiste"
    }

    if (this.personaje.y <= 0) {
      this.estado = "Ganaste"
    }
  }

dibujar() {
  if (this.estado == "Iniciar") {
    image(this.fondo8, 0, 0, width, height);
    this.mensajes.iniciar.dibujar();
    this.mensajes.instrucciones.dibujar();
    image(this.boton, 510, 390, 100, 100);

    if (mouseX > 510 && mouseX < 610 && mouseY > 440 && mouseY < 490) {
      if (mouseIsPressed) {
        this.estado = "Creditos";
      }
    }
  } else if (this.estado == "Juego") {
    image(this.fondo, 0, 0, width, height);
    this.actualizar();
    this.personaje.actualizar();
    this.personaje.dibujar();

    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
    }
  } else if (this.estado == "Ganaste") {
    image(this.fondo7, 0, 0, width, height);
    this.mensajes.ganaste.dibujar();
    let mensajeReiniciar = new Mensaje("Presiona R para volver", 315, 230, 30, color(0));
    mensajeReiniciar.dibujar();
  } else if (this.estado == "Perdiste") {
    image(this.fondo6, 0, 0, width, height);
    this.mensajes.perdiste.dibujar();
    let mensajeReiniciar = new Mensaje("Presiona R para reiniciar", 315, 220, 20, color(255));
    mensajeReiniciar.dibujar();
  } else if (this.estado == "Creditos") {
    background(0);
    this.mensajes.creditos.dibujar();
    let mensajeVolver = new Mensaje("Presiona R para volver", 320, 430, 20, color(255));
    mensajeVolver.dibujar();
      
      if (key === 'r' || key === 'R') {  
      window.location.reload()
    }
  }
  }
 mousePressed() {
      if (pantalla == "menu" && mouseX > width/3+45 && mouseX < width/3+45 + comenzar.width && mouseY > 350 && mouseY < 350 + boton.height) {
    pantalla = "Creditos";  
}
  }
  keyPressed() {
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
    this.personaje.keyPressed()
  }
  keyReleased(){
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
  this.personaje.keyReleased()
}
}
