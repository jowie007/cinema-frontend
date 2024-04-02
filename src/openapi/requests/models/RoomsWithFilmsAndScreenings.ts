/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Film } from './Film';
import type { RoomWithBasicScreenings } from './RoomWithBasicScreenings';

export type RoomsWithFilmsAndScreenings = {
    roomsWithScreenings?: Array<RoomWithBasicScreenings>;
    films?: Array<Film>;
};
