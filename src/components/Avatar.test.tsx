import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Avatar.stories";

const { Default, WithValue, CustomSize } = composeStories(stories);

test("default", () => {
  render(<Default />);

  // const AvatarElement = screen.getByRole('Avatar');
  // // Testing against values coming from the story itself! No need for duplication
  // expect(AvatarElement.textContent).toEqual(Primary.args.children);
});

test("with uid", () => {
  render(<WithValue />);
});

test("custom size", () => {
  render(<CustomSize />);
});