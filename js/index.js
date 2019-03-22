// use this to copy code snippets or use your browser's console
class User {
	constructor(name, favoriteFilm) {
		this.name = name;
		this.favoriteFilm = favoriteFilm;
	}
	favoriteFilmMatches(films) {
		console.log('in User scope: ', this.favoriteFilm);
		return films.filter(
			function(film) {
				console.log('in the anonymous function scope: ', this.favoriteFilm);
				return film == this.favoriteFilm;
			}.bind(this)
		)[0];
	}
}

let jaden = new User('jaden', 'ready player one');
jaden.favoriteFilmMatches(['ready player one', 'steven spielberg']);
