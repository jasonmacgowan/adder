"use strict";

const adder = require("..");

describe("add", () => {
  it("sums arguments", () => {
    expect(adder(1, 2, 3)).toBe(6);
  });
});
