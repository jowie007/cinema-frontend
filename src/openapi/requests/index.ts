/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { BasicScreening } from './models/BasicScreening';
export type { Film } from './models/Film';
export type { Room } from './models/Room';
export type { RoomsWithFilmsAndScreenings } from './models/RoomsWithFilmsAndScreenings';
export type { RoomWithBasicScreenings } from './models/RoomWithBasicScreenings';

export { RoomControllerService } from './services/RoomControllerService';
