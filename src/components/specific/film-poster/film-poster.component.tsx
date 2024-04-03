import { useMemo } from "react";
import { FilmPosterProps } from ".";
import { usePosterControllerServiceCustomFindPosterById } from "../../../openapi-custom/queries";
import "./film-poster.styles.scss";
import { BasicSpinner } from "../../basic/basic-spinner";

export function FilmPoster({ film }: FilmPosterProps) {
  const { data: poster, isFetching } =
    usePosterControllerServiceCustomFindPosterById({
      id: film.id ?? 0,
    });

  const url = useMemo(() => {
    return poster
      ? URL.createObjectURL(
          new Blob([new Uint8Array(poster)], { type: "image/jpeg" })
        )
      : "";
  }, [poster]);

  // TODO Localize alt text
  return (
    <div className="filmPoster">
      {isFetching && <BasicSpinner />}
      {poster && !isFetching && (
        <img
          src={url}
          className="filmPosterImage"
          alt={`Cover of ${film.name}`}
        />
      )}
    </div>
  );
}
