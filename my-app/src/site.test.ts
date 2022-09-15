import { sum } from "./site";

describe("site", () => {
  it("should test sum function", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
