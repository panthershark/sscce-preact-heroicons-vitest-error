import { h } from "preact";
import {  expect, test } from "vitest";
import { render, screen } from "@testing-library/preact";
import {  ChevronRightSolid } from "preact-heroicons";

test("icon sscce", () => {
  render( <ChevronRightSolid />    );
  expect(screen.getByTestId("tid")).toBeDefined();
});
