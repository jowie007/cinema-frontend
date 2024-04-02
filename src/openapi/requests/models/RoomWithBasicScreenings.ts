/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicScreening } from './BasicScreening';
import type { Room } from './Room';

export type RoomWithBasicScreenings = {
    room?: Room;
    basicScreenings?: Array<BasicScreening>;
};
