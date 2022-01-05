import { giphyFetch } from "./util";
import { IGif } from "@giphy/js-types";
import Gallery from "./components/gallery/Gallery";
import Modal from "./components/modal/Modal";
import { useState, useRef, FormEvent } from "react";
import "./App.css";

const App = () => {
  const [modalGif, setModalGif] = useState({} as IGif);
  const [searchValue, setSearchValue] = useState("");
  const inputElement = useRef<HTMLInputElement>(null);
  const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 20 });
  const fetchSearchedGifs = (offset: number) => giphyFetch.search(searchValue, {
    sort: "recent",
    offset,
    limit: 20,
  });
  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(inputElement && inputElement.current) {
      setSearchValue(inputElement.current.value)
    }
  };
  const clearSearchWord = () => {
    setSearchValue("")
    if(inputElement && inputElement.current) {
      inputElement.current.value = ""
    }
  }

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <main>
      <h1>React Giphy Gallery</h1>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          className="search_input"
          name="search"
          ref={inputElement}
          placeholder="Search with any keyword e.g laugh"
        />
        <button
          className="search_button"
        >
          Search
        </button>
      </form>
        
      {searchValue.length ? <p>Showing results for: {searchValue} <span onClick={clearSearchWord} className="clear">Clear</span></p>: ''}
      <Gallery
        width={width}
        fetchGifs={searchValue.length ? fetchSearchedGifs : fetchGifs}
        setWidth={setWidth}
        keyValue={searchValue}
        onGifClick={(gif, e) => {
          e.preventDefault();
          setModalGif(gif);
        }}
      />
      {Object.keys(modalGif).length ? (
        <Modal modalGif={modalGif} setModalGif={setModalGif} />
      ) : (
        ""
      )}
    </main>
  );
};
export default App;