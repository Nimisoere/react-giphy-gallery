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

  it("calls search handler when form is submitted", () => {
    // Trigger submit
    // Check that function is called
    // Check that state is updated if value
    // Check that state is not updated without value
    // Check that clear search button is visible
  });

  it("when clear search is clicked", () => {
    // Trigger click
    // Check that function is called
    // Check that state is updated if value
    // Check that clear search button is not visible
  });

  it("Check if modal is shown if modalGif is not null", () => {
    // Trigger state change (Click on image)
    // Check that modal is present
  });
});
