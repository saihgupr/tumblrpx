import { Dims, Img, FormattedItem, Orientation, Vid, Query, Album } from "./_types";

export function queryp(query: Query) {
  return Object.entries(query).map(([key, val]) => `${key}=${val}`).join("&");
}
