/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Film } from './Film';

export type Screening = {
    id?: number;
    film?: Film;
    room?: number;
    projectionType?: string;
    resolution?: string;
    date?: string;
};
