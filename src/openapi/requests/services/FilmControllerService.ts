/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Film } from '../models/Film';
import type { Screening } from '../models/Screening';
import type { ScreeningWithoutFilm } from '../models/ScreeningWithoutFilm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilmControllerService {

    /**
     * @param name 
     * @returns Film OK
     * @throws ApiError
     */
    public static findAll1(
name?: string,
): CancelablePromise<Array<Film>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/films',
            query: {
                'name': name,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Film OK
     * @throws ApiError
     */
    public static addFilm(
requestBody: Film,
): CancelablePromise<Film> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/films',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filmId 
     * @returns Screening OK
     * @throws ApiError
     */
    public static findAllScreeningsByFilmId(
filmId: number,
): CancelablePromise<Array<Screening>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/films/{filmId}/screenings',
            path: {
                'filmId': filmId,
            },
        });
    }

    /**
     * @param filmId 
     * @param requestBody 
     * @returns Screening OK
     * @throws ApiError
     */
    public static addScreening(
filmId: number,
requestBody: ScreeningWithoutFilm,
): CancelablePromise<Screening> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/films/{filmId}/screenings',
            path: {
                'filmId': filmId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filmId 
     * @returns Film OK
     * @throws ApiError
     */
    public static findAllById(
filmId: number,
): CancelablePromise<Array<Film>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/films/{filmId}',
            path: {
                'filmId': filmId,
            },
        });
    }

    /**
     * @param filmId 
     * @returns number OK
     * @throws ApiError
     */
    public static deleteFilmById(
filmId: number,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/films/{filmId}',
            path: {
                'filmId': filmId,
            },
        });
    }

}
