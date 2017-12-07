import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/classes/movie.class';

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    var production: Movie = {
      id: "0000",
      title:"Heelloo",
      genre:["action", "horror"],
      overview: "Oh my goodness this movie is terrible, don't watch it.",
      rating: 3.1,
      year: 1998
    }

    for(var i = 0; i< 10; i++){
      this.movies.push(production);
    }
  }

  // Setting a mock movie to get layout of site going is all
  



}
