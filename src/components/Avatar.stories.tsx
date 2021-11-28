import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = () => (
  <Avatar />
);

export const WithValue: ComponentStory<typeof Avatar> = () => (
  <Avatar uid="f42b0e03-fb2d-43d5-8537-345fb9ca80f6"  />
);

export const CustomSize: ComponentStory<typeof Avatar> = () => (
  <Avatar size={60} />
);