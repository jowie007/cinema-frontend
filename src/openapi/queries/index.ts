// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { RoomWithBasicScreenings } from "../requests/models/RoomWithBasicScreenings";
import { RoomsWithFilmsAndScreenings } from "../requests/models/RoomsWithFilmsAndScreenings";
import { Room } from "../requests/models/Room";
import { Film } from "../requests/models/Film";
import { BasicScreening } from "../requests/models/BasicScreening";
import { RoomControllerService } from "../requests/services/RoomControllerService";
export type RoomControllerServiceFindAllDefaultResponse = Awaited<ReturnType<typeof RoomControllerService.findAll>>;
export type RoomControllerServiceFindAllQueryResult<TData = RoomControllerServiceFindAllDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoomControllerServiceFindAllKey = "RoomControllerServiceFindAll";
export const useRoomControllerServiceFindAll = <TData = RoomControllerServiceFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ date }: {
    date?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useRoomControllerServiceFindAllKey, ...(queryKey ?? [{ date }])], queryFn: () => RoomControllerService.findAll(date) as TData, ...options });
