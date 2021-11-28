import { Transaction } from "../types/schema";
import { computeUsersBalances } from "./transactions";


const twoColumnsOfUsers: Transaction[] = [
  // user 1 should have 0
  {
    "user_id": "1",
    "timestamp": "2019-11-19T08:42:09Z",
    "currency": "GBP",
    "amount": "-100.50"
  },
  {
    "user_id": "1",
    "timestamp": "2020-03-14T18:40:29Z",
    "currency": "GBP",
    "amount": "100.50"
  },
  // user 2 should have 200 EUR
  {
    "user_id": "2",
    "timestamp": "2019-11-19T16:49:22Z",
    "currency": "EUR",
    "amount": "+300"
  },
  {
    "user_id": "2",
    "timestamp": "2019-09-14T23:13:41Z",
    "currency": "EUR",
    "amount": "-100"
  },
  // user 3 should be have GBP 10 USD 20 EUR 30
  {
    "user_id": "3",
    "timestamp": "2020-06-10T17:14:25Z",
    "currency": "GBP",
    "amount": "10"
  },
  {
    "user_id": "3",
    "timestamp": "2020-04-05T13:27:41Z",
    "currency": "USD",
    "amount": "10"
  },
  {
    "user_id": "3",
    "timestamp": "2019-10-03T03:42:25Z",
    "currency": "USD",
    "amount": "10"
  },
  {
    "user_id": "3",
    "timestamp": "2021-06-28T19:01:45Z",
    "currency": "EUR",
    "amount": "10"
  },
  {
    "user_id": "3",
    "timestamp": "2019-08-27T08:34:56Z",
    "currency": "EUR",
    "amount": "10"
  },
  {
    "user_id": "3",
    "timestamp": "2019-09-20T17:16:48Z",
    "currency": "EUR",
    "amount": "10"
  },
  // user 4 should have -100 EUR 100 GBP
  {
    "user_id": "4",
    "timestamp": "2020-06-21T16:37:05Z",
    "currency": "EUR",
    "amount": "-50"
  },
  {
    "user_id": "4",
    "timestamp": "2019-11-19T16:49:22Z",
    "currency": "EUR",
    "amount": "-50"
  },
  {
    "user_id": "4",
    "timestamp": "2019-09-14T23:13:41Z",
    "currency": "GBP",
    "amount": "100"
  },
]

describe("computeUsersBalances", () => {
  test("empty to be empty", () => {
    expect(computeUsersBalances([])).toStrictEqual([]);
  });

  test("user ids to be grouped", () => {
    expect(computeUsersBalances(twoColumnsOfUsers)).toHaveLength(4);
  });

  test("amounts to be summed up", () => {
    expect(computeUsersBalances(twoColumnsOfUsers)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({user_id: '1', GBP: '0', USD: '0', EUR: '0'}),
        expect.objectContaining({user_id: '2', GBP: '0', USD: '0', EUR: '+200'}),
        expect.objectContaining({user_id: '3', GBP: '+10', USD: '+20', EUR: '+30'}),
        expect.objectContaining({user_id: '4', GBP: '+100', USD: '0', EUR: '-100'}),
      ])
    );
  });

  test("lastActivity to be the latest", () => {
    expect(computeUsersBalances(twoColumnsOfUsers)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({user_id: '3', lastActivity: '2021-06-28T19:01:45Z'}),
      ])
    );
  });
});
