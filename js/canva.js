$(document).ready(function() {
	
	var painting = false;
	var started = false;
	var width_brush = 1.2;
	var canvas = $("#canvas");
	var context = canvas[0].getContext('2d');
	
	
	// Dessin lors du click enfoncé de la souris :
	canvas.mousedown(function(e) {
		painting = true;
	});
	
	// Arrêt du dessin lors du relâchement de la souris
	$(this).mouseup(function() {
		painting = false;
		started = false;
	});
	
	// Mouvement de la souris sur le canvas :
	canvas.mousemove(function(e) {
		// Si dessin en cours (click souris enfoncé) :
		if (painting) {
			// Set Coordonnées de la souris :
			cursorX = (e.pageX - this.offsetLeft) ; // décalage du curseur
			cursorY = (e.pageY - this.offsetTop) ;
			// Dessin :
			drawLine();
		}
	});
	
	// Fonction dessin :
	function drawLine() {
		// Si c'est le début
		if (!started) {
			// Je place mon curseur pour la première fois :
			context.beginPath();
			context.moveTo(cursorX, cursorY);
			started = true;
		} 
		// Sinon je dessine
		else {
			context.lineTo(cursorX, cursorY);
			context.stroke();
		}
	}
	
	// Bouton Reset :
	$("#reset").click(function() {
		// Clear canvas :
		context.clearRect(0,0, canvas.width(), canvas.height());
	});	
});
