import { app } from "../app";

describe("app", () => {
  it("runs without crashing", () => {
    expect(app()).toBeUndefined();
  });
});
