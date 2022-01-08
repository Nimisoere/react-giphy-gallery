import { giphyFetch } from "./util";
import { IGif } from "@giphy/js-types";
import Gallery from "./components/gallery/Gallery";
import Modal from "./components/modal/Modal";
import { useState, useRef, FormEvent } from "react";
import "./App.css";

const App = () => {
  const [modalGif, setModalGif] = useState<IGif | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [width, setWidth] = useState<number>(window.innerWidth);

  console.log(modalGif);

  const inputElement = useRef<HTMLInputElement>(null);

  const fetchGifs = (offset: number) =>
    giphyFetch.trending({ offset, limit: 20 });

  const fetchSearchedGifs = (offset: number) =>
    giphyFetch.search(searchValue, {
      sort: "recent",
      offset,
      limit: 20,
    });

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElement && inputElement.current) {
      setSearchValue(inputElement.current.value);
    }
  };

  const clearSearchWord = () => {
    setSearchValue("");
    if (inputElement && inputElement.current) {
      inputElement.current.value = "";
    }
  };

  const handleGifClick = (
    gif: IGif,
    e: React.SyntheticEvent<HTMLElement, Event>
  ) => {
    e.preventDefault();
    setModalGif(gif);
  };

  return (
    <main>
      <h1 id="headerText">React Giphy Gallery</h1>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          className="search_input"
          id="search_input"
          name="search"
          ref={inputElement}
          placeholder="Search with any keyword e.g laugh"
        />
        <button type="submit" className="search_button" id="search_button">
          Search
        </button>
      </form>

      {!!searchValue.length && (
        <p>
          Showing results for: {searchValue}{" "}
          <button onClick={clearSearchWord} className="clear">
            Clear
          </button>
        </p>
      )}

      <Gallery
        width={width}
        fetchGifs={searchValue.length ? fetchSearchedGifs : fetchGifs}
        setWidth={setWidth}
        keyValue={searchValue}
        onGifClick={handleGifClick}
      />

      {!!modalGif && <Modal modalGif={modalGif} setModalGif={setModalGif} />}
    </main>
  );
};
export default App;
