/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { OpenAPI } from "../../../openapi/requests";

export class PosterControllerServiceCustom {
  /**
   * @param id
   * @returns image data
   * @throws ApiError
   */
  public static async findPosterById(id: number): Promise<ArrayBuffer> {
    const response = await fetch(OpenAPI.BASE + `/poster/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "image/jpeg",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image, status: ${response.status}`);
    }

    return await response.arrayBuffer();
  }
}
