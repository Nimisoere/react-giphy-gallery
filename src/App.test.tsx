import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeAll(() => {
    render(<App />);
  });

  it("renders successfully", () => {
    expect(document.querySelector("#headerText")).toBeInTheDocument();
    expect(document.querySelector("#search_input")).toBeInTheDocument();
    expect(document.querySelector("#search_button")).toBeInTheDocument();
    expect(document.querySelector(".gallery")).toBeInTheDocument();
  });

  // it("fetches gifs on render", () => {
  //   const fetchGifs = jest.spyOn("fetchGifs", "");
  //   expect(fetchGifs).toHaveBeenCalledTimes(1);
  // });

  // it("", () => {});
});
