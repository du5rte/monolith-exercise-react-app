import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { computeUsersBalances } from '../utils/transactions';

import TableUsersBalances from './TableUsersBalances';

const data = computeUsersBalances([
  {
    "user_id": "b4521412-2eeb-43f3-a50d-be976b23189d",
    "timestamp": "2020-05-29T16:59:39Z",
    "currency": "GBP",
    "amount": "-886.69"
  },
  {
    "user_id": "9e92a331-81be-44b2-bf45-1fec891ebe42",
    "timestamp": "2019-12-05T18:28:13Z",
    "currency": "EUR",
    "amount": "853.62"
  },
  {
    "user_id": "4c39b8d6-4c89-458d-ba6b-f1ea4a88abf8",
    "timestamp": "2020-06-10T17:14:25Z",
    "currency": "GBP",
    "amount": "-81.71"
  },
])

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TableUsersBalances',
  component: TableUsersBalances,
} as ComponentMeta<typeof TableUsersBalances>;

export const Default: ComponentStory<typeof TableUsersBalances> = () => (
  <TableUsersBalances />
);

export const Loading: ComponentStory<typeof TableUsersBalances> = () => (
  <TableUsersBalances loading={true}  />
);

export const WithData: ComponentStory<typeof TableUsersBalances> = () => (
  <TableUsersBalances data={data} loading={false} />
);

const error = new Error('some error')

export const WithError: ComponentStory<typeof TableUsersBalances> = () => (
  <TableUsersBalances error={error} />
);