import { GiphyFetch } from "@giphy/js-fetch-api";

const api_key =
  process.env.REACT_APP_GOOGLE_API_KEY || "tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ"; // safe test key for testing purpose
export const giphyFetch = new GiphyFetch(api_key);
