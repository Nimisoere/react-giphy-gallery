import { render } from "@testing-library/react";
import Gallery from "./Gallery";

describe("App", () => {
  beforeAll(() => {
    // Render another one that has key values
    render(
      <Gallery
        fetchGifs={jest.fn()}
        keyValue=""
        onGifClick={jest.fn()}
        setWidth={jest.fn()}
        width={100}
      />
    );
  });

  it("renders successfully", () => {});

  it("received the right 'fetchGifs' fn", () => {
    // Test signature of fns (CalledWith) if search value present vs if not
  });

  it("Check if GIF click works", () => {
    // Simulate GIF click
  });
});
