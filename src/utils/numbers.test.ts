import { formatNumber, formatZero } from "./numbers";

describe("formatNumber", () => {
  test("positive number should be plus", () => {
    expect(formatNumber(1)).toBe("+1");
  });

  test("negative number should be minus", () => {
    expect(formatNumber(-1)).toBe("-1");
  });

  test("zero should be dash", () => {
    expect(formatNumber(0)).toBe("0");
  });
});

describe("formatZero", () => {
  test("zero should be formated", () => {
    expect(formatZero("0")).toBe("-");
  });

  test("positive number should be the original number", () => {
    expect(formatZero("1")).toBe("1");
  });

  test("negative number should be the original number", () => {
    expect(formatZero("-1")).toBe("-1");
  });
});
