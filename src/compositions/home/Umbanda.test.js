import "../../setupTests";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Theme from "../../styles/theme";
import Umbanda from "./Umbanda";

describe("Umbanda_function", () => {
  afterEach = () => {
    cleanup();
  }
  // Tests that the component renders without crashing
  it("test_renders_component", () => {
    render(
      <Theme>
        <Umbanda />
      </Theme>
    );
  });

  // Tests that the correct text and image are displayed
  it("test_displays_correct_text_and_image", () => {
    const { getByText, getByAltText } = render(
      <Theme>
        <Umbanda />
      </Theme>
    );
    expect(getByText("Umbanda")).toBeTruthy();
    expect(getByText(/Tornar a minha comunidade/)).toBeTruthy();
    expect(getByText("Mãe Fiama D'Oya")).toBeTruthy();
    expect(
      getByAltText(
        "Pombagira Dama da Noite, ancestral da Mãe Fiama D'Oya, fumando um cigarro."
      )
    ).toBeTruthy();
  });

  // Tests that the Section and CiteOverImageConteiner components receive the correct props
  it("test_receives_correct_props", () => {
    const { container } = render(
      <Theme>
        <Umbanda />
      </Theme>
    );
    expect(container.firstChild).toHaveAttribute('id', 'umbanda');
    expect(container.firstChild).toHaveStyle({ backgroundColor: '#333333' });
  });

  // Tests that the text and image are displayed correctly on different screen sizes
  it("test_displays_correctly_on_different_screen_sizes", () => {
    const { getByText, getByAltText } = render(
      <Theme>
        <Umbanda />
      </Theme>
    );
    expect(getByText("Umbanda")).toBeInTheDocument();
    expect(getByText(/Tornar a minha comunidade/)).toBeInTheDocument();
    expect(getByText("Mãe Fiama D'Oya")).toBeInTheDocument();
    expect(
      getByAltText(
        "Pombagira Dama da Noite, ancestral da Mãe Fiama D'Oya, fumando um cigarro."
      )
    ).toBeInTheDocument();
    window.innerWidth = 1000;
    window.innerHeight = 1000;
    fireEvent(window, new Event("resize"));
    expect(getByText("Umbanda")).toBeInTheDocument();
    expect(getByText(/Tornar a minha comunidade/)).toBeInTheDocument();
    expect(getByText("Mãe Fiama D'Oya")).toBeInTheDocument();
    expect(
      getByAltText(
        "Pombagira Dama da Noite, ancestral da Mãe Fiama D'Oya, fumando um cigarro."
      )
    ).toBeInTheDocument();
  });
});
