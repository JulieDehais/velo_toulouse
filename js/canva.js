class Canvas {
  constructor() {
    this.init();
    this.eventsHandlers();
  }

  // Initialisation des variables :
  init() {
    this.painting = false;
    this.started = false;
    this.width_brush = 1.2;
    this.canvas = $("#canvas");
    this.context = this.canvas[0].getContext("2d");
  }

  eventsHandlers() {
    // Dessin lors du click enfoncé de la souris :
    this.canvas.mousedown(() => {
      this.painting = true;
    });

    // Arrêt du dessin lors du relâchement de la souris
    this.canvas.mouseup(() => {
      this.painting = false;
      this.started = false;
    });

    // Mouvement de la souris sur le canvas :
    this.canvas.mousemove(e => {
      // Si dessin en cours (click souris enfoncé) :
      if (this.painting) {
        // Set Coordonnées de la souris :
        this.cursorX = e.pageX - this.canvas[0].offsetLeft; // décalage du curseur
        this.cursorY = e.pageY - this.canvas[0].offsetTop;
        this.drawLine();
      }
    });

    // Bouton Reset :
    $("#reset").click(() => {
      this.resetCanvas(); // Clear canvas
    });
  }

  // Remettre le canvas à zéro :
  resetCanvas() {
    this.context.clearRect(0, 0, this.canvas.width(), this.canvas.height());
  }

  // Fonction dessin :
  drawLine() {
    // Si c'est le début
    if (!this.started) {
      // Je place mon curseur pour la première fois :
      this.context.beginPath();
      this.context.moveTo(this.cursorX, this.cursorY);
      this.started = true;
    }
    // Sinon je dessine
    else {
      this.context.lineTo(this.cursorX, this.cursorY);
      this.context.stroke();
    }
  }
}
