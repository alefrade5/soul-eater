class Enemigo {
  constructor(x, y, tam) {
    this.x = x
    this.y = y
    this.tam = tam
    this.colorA = color(120)
    this.imagen2 = loadImage("data/2.png")
  }

  mover() {
    this.x = this.x + 8
    if (this.x > width) {
      this.x = 0
    }
  }

  dibujar() {
    image(this.imagen2, this.x - this.tam/2, this.y - this.tam/2, this.tam, this.tam)
  }
}
