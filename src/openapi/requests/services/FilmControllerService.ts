/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Film } from "../models/Film";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FilmControllerService {
  /**
   * @param isOnlyFutureFilms
   * @returns Film OK
   * @throws ApiError
   */
  public static findAll1(
    isOnlyFutureFilms?: boolean
  ): CancelablePromise<Array<Film>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/films",
      query: {
        isOnlyFutureFilms: isOnlyFutureFilms,
      },
    });
  }
}
