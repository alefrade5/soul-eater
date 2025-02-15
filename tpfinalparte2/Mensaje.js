class Mensaje {
  constructor(texto, x, y, tamano, color) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.tamano = tamano;
    this.color = color;
  }

  dibujar() {
    textAlign(CENTER, CENTER);
    textSize(this.tamano);
    fill(this.color);
    text(this.texto, this.x, this.y);
  }
}
