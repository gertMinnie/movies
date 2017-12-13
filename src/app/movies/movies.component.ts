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
    

    for(var i = 0; i< 10; i++){
      this.movies.push(production);
    }
  }

  // Setting a mock movie to get layout of site going is all
  



}
