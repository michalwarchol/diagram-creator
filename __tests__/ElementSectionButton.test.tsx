import { render, fireEvent, cleanup } from "@testing-library/react";
import ElementSectionButton from "../components/ElementSectionButton/ElementSectionButton";
import { Actions, Selector, State } from "../redux/types";
import { FaShapes } from "react-icons/Fa";
import { Provider } from "react-redux";
import React from "react";
import reducer from "../redux/reducer";
import { createStore, Store } from "redux";

describe("ElementSectionButton", () => {
  let store: Store<State, Actions>;
  beforeEach(() => {
    store = createStore(reducer, { selector: 0 });
  });

  afterEach(cleanup);

  it("should set selector property to 1 in a store", () => {
    store.dispatch = jest.fn(store.dispatch);

    const { getByTestId } = render(
      <Provider store={store}>
        <ElementSectionButton
          Icon={FaShapes}
          selectorValue={Selector.TEXT}
          text="Text"
        />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(0);
    expect(store.getState().selector).toEqual(0);

    fireEvent.click(getByTestId("testButton"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.getState().selector).toEqual(1);
  });

  it("should set selector property to 2 in a store", () => {
    store.dispatch = jest.fn(store.dispatch);

    const { getByTestId } = render(
      <Provider store={store}>
        <ElementSectionButton
          Icon={FaShapes}
          selectorValue={Selector.ELEMENTS}
          text="Text"
        />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(0);
    expect(store.getState().selector).toEqual(0);

    fireEvent.click(getByTestId("testButton"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.getState().selector).toEqual(2);
  });

  it("should add .selected class to the component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ElementSectionButton
          Icon={FaShapes}
          selectorValue={Selector.ELEMENTS}
          text="Text"
        />
      </Provider>
    );

    expect(getByTestId("testButton").className).not.toContain("selected");

    fireEvent.click(getByTestId("testButton"));

    expect(getByTestId("testButton").className).toContain("selected");
  });
});
