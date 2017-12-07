import { Movie } from './movie.class';

export class User{
    id: String;
    username: String;
    email: String;
    password: String;
    watched: Movie[];
    wantToWatch: Movie[];
}