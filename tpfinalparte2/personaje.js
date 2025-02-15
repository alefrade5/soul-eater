class Personaje {
  constructor(x, y, tam) {
    this.x = x
    this.y = y
    this.tam = tam
    this.colorA = color(120)
    this.colision = false
    this.imagen = loadImage("data/0.png")
    this.moverIzquierda = false
    this.moverDerecha = false
    this.moverArriba = false
    this.moverAbajo = false
  }
  actualizar() {
    if (this.moverIzquierda) {
      this.mover(-10, 0)
    }
    if (this.moverDerecha) {
      this.mover(10, 0)
    }
    if (this.moverArriba) {
      this.mover(0, -10)
    }
    if (this.moverAbajo) {
      this.mover(0, 10)
    }
  }

  dibujar() {
    image(this.imagen, this.x - this.tam/2, this.y - this.tam/2, this.tam, this.tam)
  }

  mover(param1, param2) {
    this.x = this.x + param1
    this.y = this.y + param2
  }

  keyPressed() {
    if (key === 'a' || key === 'A') {
      this.moverIzquierda = true
    } else if (key === 'd' || key === 'D') {
      this.moverDerecha = true
    }
    if (key === 'w' || key === 'W') {
      this.moverArriba = true
    } else if (key === 's' || key === 'S') {
      this.moverAbajo = true
    }
    if (key === 'r' || key === 'R') {  
    window.location.reload()
    }
  }

  keyReleased() {
    if (key === 'a' || key === 'A') {
      this.moverIzquierda = false
    } else if (key === 'd' || key === 'D') {
      this.moverDerecha = false
    }
    if (key === 'w' || key === 'W') {
      this.moverArriba = false
    } else if (key === 's' || key === 'S') {
      this.moverAbajo = false
    }
  }
}
