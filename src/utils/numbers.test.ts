import { formatNumber } from "./numbers";

describe("formatNumber", () => {
  test("positive number should be plus", () => {
    expect(formatNumber(1)).toBe("+1");
  });

  test("negative number should be minus", () => {
    expect(formatNumber(-1)).toBe("-1");
  });

  test("zero should be dash", () => {
    expect(formatNumber(0)).toBe("-");
  });
});
