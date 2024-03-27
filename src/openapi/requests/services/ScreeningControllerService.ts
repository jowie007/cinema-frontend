/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilmWithScreenings } from '../models/FilmWithScreenings';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScreeningControllerService {

    /**
     * @param date 
     * @returns FilmWithScreenings OK
     * @throws ApiError
     */
    public static findAll(
date?: string,
): CancelablePromise<Array<FilmWithScreenings>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/screenings',
            query: {
                'date': date,
            },
        });
    }

    /**
     * @param screeningId 
     * @returns number OK
     * @throws ApiError
     */
    public static deleteScreeningById(
screeningId: number,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/screenings/{screeningId}',
            path: {
                'screeningId': screeningId,
            },
        });
    }

}
