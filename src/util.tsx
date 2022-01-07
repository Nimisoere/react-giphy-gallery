import { GiphyFetch } from "@giphy/js-fetch-api";

const api_key = "tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ"; //this would ideally be set in a .env file but decided to leave here to keep things minimal
export const giphyFetch = new GiphyFetch(api_key);
