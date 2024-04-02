/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoomsWithFilmsAndScreenings } from '../models/RoomsWithFilmsAndScreenings';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoomControllerService {

    /**
     * @param date 
     * @returns RoomsWithFilmsAndScreenings OK
     * @throws ApiError
     */
    public static findAll(
date?: string,
): CancelablePromise<RoomsWithFilmsAndScreenings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rooms',
            query: {
                'date': date,
            },
        });
    }

}
