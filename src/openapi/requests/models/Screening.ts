/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Film } from './Film';

export type Screening = {
    id?: number;
    film?: Film;
    projectionType?: string;
    resolution?: string;
    date?: string;
};
