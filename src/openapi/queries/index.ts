// generated with @7nohe/openapi-react-query-codegen@0.5.3
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { ScreeningWithoutFilm } from "../requests/models/ScreeningWithoutFilm";
import { Screening } from "../requests/models/Screening";
import { FilmWithScreenings } from "../requests/models/FilmWithScreenings";
import { Film } from "../requests/models/Film";
import { ScreeningControllerService } from "../requests/services/ScreeningControllerService";
import { FilmControllerService } from "../requests/services/FilmControllerService";
export type ScreeningControllerServiceFindAllDefaultResponse = Awaited<
  ReturnType<typeof ScreeningControllerService.findAll>
>;
export type ScreeningControllerServiceFindAllQueryResult<
  TData = ScreeningControllerServiceFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useScreeningControllerServiceFindAllKey =
  "ScreeningControllerServiceFindAll";
export const useScreeningControllerServiceFindAll = <
  TData = ScreeningControllerServiceFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    date,
  }: {
    date?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useScreeningControllerServiceFindAllKey,
      ...(queryKey ?? [{ date }]),
    ],
    queryFn: () => ScreeningControllerService.findAll(date) as TData,
    ...options,
  });
export type ScreeningControllerServiceDeleteScreeningByIdMutationResult =
  Awaited<ReturnType<typeof ScreeningControllerService.deleteScreeningById>>;
export const useScreeningControllerServiceDeleteScreeningById = <
  TData = ScreeningControllerServiceDeleteScreeningByIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        screeningId: number;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      screeningId: number;
    },
    TContext
  >({
    mutationFn: ({ screeningId }) =>
      ScreeningControllerService.deleteScreeningById(
        screeningId
      ) as unknown as Promise<TData>,
    ...options,
  });
export type FilmControllerServiceFindAll1DefaultResponse = Awaited<
  ReturnType<typeof FilmControllerService.findAll1>
>;
export type FilmControllerServiceFindAll1QueryResult<
  TData = FilmControllerServiceFindAll1DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useFilmControllerServiceFindAll1Key =
  "FilmControllerServiceFindAll1";
export const useFilmControllerServiceFindAll1 = <
  TData = FilmControllerServiceFindAll1DefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useFilmControllerServiceFindAll1Key,
      ...(queryKey ?? [{ name }]),
    ],
    queryFn: () => FilmControllerService.findAll1(name) as TData,
    ...options,
  });
export type FilmControllerServiceAddFilmMutationResult = Awaited<
  ReturnType<typeof FilmControllerService.addFilm>
>;
export const useFilmControllerServiceAddFilm = <
  TData = FilmControllerServiceAddFilmMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: Film;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: Film;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      FilmControllerService.addFilm(requestBody) as unknown as Promise<TData>,
    ...options,
  });
export type FilmControllerServiceFindAllScreeningsByFilmIdDefaultResponse =
  Awaited<ReturnType<typeof FilmControllerService.findAllScreeningsByFilmId>>;
export type FilmControllerServiceFindAllScreeningsByFilmIdQueryResult<
  TData = FilmControllerServiceFindAllScreeningsByFilmIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useFilmControllerServiceFindAllScreeningsByFilmIdKey =
  "FilmControllerServiceFindAllScreeningsByFilmId";
export const useFilmControllerServiceFindAllScreeningsByFilmId = <
  TData = FilmControllerServiceFindAllScreeningsByFilmIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    filmId,
  }: {
    filmId: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useFilmControllerServiceFindAllScreeningsByFilmIdKey,
      ...(queryKey ?? [{ filmId }]),
    ],
    queryFn: () =>
      FilmControllerService.findAllScreeningsByFilmId(filmId) as TData,
    ...options,
  });
export type FilmControllerServiceAddScreeningMutationResult = Awaited<
  ReturnType<typeof FilmControllerService.addScreening>
>;
export const useFilmControllerServiceAddScreening = <
  TData = FilmControllerServiceAddScreeningMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        filmId: number;
        requestBody: ScreeningWithoutFilm;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      filmId: number;
      requestBody: ScreeningWithoutFilm;
    },
    TContext
  >({
    mutationFn: ({ filmId, requestBody }) =>
      FilmControllerService.addScreening(
        filmId,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type FilmControllerServiceFindAllByIdDefaultResponse = Awaited<
  ReturnType<typeof FilmControllerService.findAllById>
>;
export type FilmControllerServiceFindAllByIdQueryResult<
  TData = FilmControllerServiceFindAllByIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useFilmControllerServiceFindAllByIdKey =
  "FilmControllerServiceFindAllById";
export const useFilmControllerServiceFindAllById = <
  TData = FilmControllerServiceFindAllByIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    filmId,
  }: {
    filmId: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useFilmControllerServiceFindAllByIdKey,
      ...(queryKey ?? [{ filmId }]),
    ],
    queryFn: () => FilmControllerService.findAllById(filmId) as TData,
    ...options,
  });
export type FilmControllerServiceDeleteFilmByIdMutationResult = Awaited<
  ReturnType<typeof FilmControllerService.deleteFilmById>
>;
export const useFilmControllerServiceDeleteFilmById = <
  TData = FilmControllerServiceDeleteFilmByIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        filmId: number;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      filmId: number;
    },
    TContext
  >({
    mutationFn: ({ filmId }) =>
      FilmControllerService.deleteFilmById(filmId) as unknown as Promise<TData>,
    ...options,
  });
