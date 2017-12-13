import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/classes/movie.class';

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

}
