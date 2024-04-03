// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { PosterControllerServiceCustom } from "../requests";
export type PosterControllerServiceCustomFindPosterByIdDefaultResponse = Awaited<ReturnType<typeof PosterControllerServiceCustom.findPosterById>>;
export type PosterControllerServiceCustomFindPosterByIdQueryResult<TData = PosterControllerServiceCustomFindPosterByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePosterControllerServiceCustomFindPosterByIdKey = "PosterControllerServiceCustomFindPosterById";
export const usePosterControllerServiceCustomFindPosterById = <TData = PosterControllerServiceCustomFindPosterByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePosterControllerServiceCustomFindPosterByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => PosterControllerServiceCustom.findPosterById(id) as TData, ...options });