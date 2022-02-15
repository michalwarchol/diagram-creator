import { render, fireEvent } from "@testing-library/react";
import SquareButton from "@/components/Button/Button";

describe("Button", () => {
  it("fires function passed as onClick argument", () => {
    let i = 0;
    const { getByTestId } = render(
      <SquareButton
        onClick={() => {
          i++;
        }}
      ></SquareButton>
    );

    fireEvent.click(getByTestId("testButton"));

    expect(i).toEqual(1);
  });

  it("fires function twice passed as onClick argument", () => {
    let i = 0;
    const { getByTestId } = render(
      <SquareButton
        onClick={() => {
          i++;
        }}
      ></SquareButton>
    );

    fireEvent.click(getByTestId("testButton"));
    fireEvent.click(getByTestId("testButton"));

    expect(i).toEqual(2);
  });
});
