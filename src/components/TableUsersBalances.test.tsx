import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./TableUsersBalances.stories";

const { Default, Loading, WithData, WithError} = composeStories(stories);

test("default", () => {
  render(<Default />);

  // const AvatarElement = screen.getByRole('Avatar');
  // // Testing against values coming from the story itself! No need for duplication
  // expect(AvatarElement.textContent).toEqual(Primary.args.children);
});

test("loading", () => {
  render(<Loading />);
});

test("with data", () => {
  render(<WithData />);
});

test("with error", () => {
  render(<WithError />);
});