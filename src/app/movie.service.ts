import { Injectable } from '@angular/core';

import { Movie } from './classes/movie.class';
import { MOVIES } from './mock-movies';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
