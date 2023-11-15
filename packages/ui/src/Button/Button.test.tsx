import React from "react";
import { cleanup, render } from "@testing-library/react";
import Button from "./index";

afterEach(cleanup);

it("button에 value가 제대로 들어갔는지 테스트하는 코드.", () => {
  const container = render(<Button value="tastetionary" />);

  const button = container.getByRole("button");

  expect(button.textContent).toEqual("tastetionary");
});
