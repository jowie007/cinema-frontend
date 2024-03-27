/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Film } from './Film';
import type { ScreeningWithoutFilm } from './ScreeningWithoutFilm';

export type FilmWithScreenings = {
    film?: Film;
    screenings?: Array<ScreeningWithoutFilm>;
};
