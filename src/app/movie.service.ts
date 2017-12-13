import { Injectable } from '@angular/core';
import { Movie } from './classes/movie.class';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }
}
