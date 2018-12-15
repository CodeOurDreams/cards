var Card = (function() {

  // Variables
	var card;


  // Constructor (Set Variables)
	function Card() {
		// this.title = title;
	}

  // Prototypes
	// Card.prototype.draw = function() {
	// };

  // Initialize Class
	Card.init = function(container) {
    this.card = new Card();
	};

	return Card;

}());

window.onload = function() {
  setTimeout(function() {
  	Card.init();
  }, 500);
}
