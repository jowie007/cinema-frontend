// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { RoomWithBasicScreenings } from "../requests/models/RoomWithBasicScreenings";
import { RoomsWithFilmsAndScreenings } from "../requests/models/RoomsWithFilmsAndScreenings";
import { Room } from "../requests/models/Room";
import { Film } from "../requests/models/Film";
import { BasicScreening } from "../requests/models/BasicScreening";
import { RoomControllerService } from "../requests/services/RoomControllerService";
import { PosterControllerService } from "../requests/services/PosterControllerService";
import { FilmControllerService } from "../requests/services/FilmControllerService";
export type RoomControllerServiceFindAllDefaultResponse = Awaited<ReturnType<typeof RoomControllerService.findAll>>;
export type RoomControllerServiceFindAllQueryResult<TData = RoomControllerServiceFindAllDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoomControllerServiceFindAllKey = "RoomControllerServiceFindAll";
export const useRoomControllerServiceFindAll = <TData = RoomControllerServiceFindAllDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ date }: {
    date?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useRoomControllerServiceFindAllKey, ...(queryKey ?? [{ date }])], queryFn: () => RoomControllerService.findAll(date) as TData, ...options });
export type PosterControllerServiceFindPosterByIdDefaultResponse = Awaited<ReturnType<typeof PosterControllerService.findPosterById>>;
export type PosterControllerServiceFindPosterByIdQueryResult<TData = PosterControllerServiceFindPosterByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePosterControllerServiceFindPosterByIdKey = "PosterControllerServiceFindPosterById";
export const usePosterControllerServiceFindPosterById = <TData = PosterControllerServiceFindPosterByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePosterControllerServiceFindPosterByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => PosterControllerService.findPosterById(id) as TData, ...options });
export type FilmControllerServiceFindAll1DefaultResponse = Awaited<ReturnType<typeof FilmControllerService.findAll1>>;
export type FilmControllerServiceFindAll1QueryResult<TData = FilmControllerServiceFindAll1DefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFilmControllerServiceFindAll1Key = "FilmControllerServiceFindAll1";
export const useFilmControllerServiceFindAll1 = <TData = FilmControllerServiceFindAll1DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ isOnlyFutureFilms }: {
    isOnlyFutureFilms?: boolean;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useFilmControllerServiceFindAll1Key, ...(queryKey ?? [{ isOnlyFutureFilms }])], queryFn: () => FilmControllerService.findAll1(isOnlyFutureFilms) as TData, ...options });
