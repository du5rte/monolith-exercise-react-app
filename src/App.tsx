import { useState, useMemo, useCallback } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Transaction } from "./types/schema";
import { useFetch } from "./hooks/fetch";
import { computeUsersBalances } from "./utils/transactions";
import TabletUsersBalances from "./components/TabletUsersBalances";
import SelectOptions from "./components/SelectOptions";

const root = process.env.PUBLIC_URL

const options = [
  {
    value: "small",
    display: "Small",
    url: `${root}/transactions-small.json`,
  },
  {
    value: "medium",
    display: "Medium",
    url: `${root}/transactions-medium.json`,
  },
  {
    value: "large",
    display: "Large",
    url: `${root}/transactions-large.json`,
  },
  {
    value: "xlarge",
    display: "X-Large (404)",
    url: `${root}/transactions-x-large.json`,
  },
  {
    value: "empty",
    display: "Empty",
    url: `${root}/transactions-empty.json`,
  },
];

function App() {
  const [option, setOption] = useState(options[0]);

  const { data, error, loading } = useFetch<Transaction[]>(option.url);

  const usersBalancesData = useMemo(
    () => computeUsersBalances(data || []),
    [data]
  );

  const handleChange = useCallback((selectedOption) => {
    setOption(selectedOption);
  }, []);

  return (
    <Box sx={{ m: 6 }}>
      <Paper>
        <Toolbar>
          <Typography sx={{ flex: "1 1 100%" }} variant="h6">
            Transactions
          </Typography>

          <SelectOptions
            value={option.value}
            options={options}
            onChange={handleChange}
          />
        </Toolbar>

        <TabletUsersBalances
          data={usersBalancesData}
          loading={loading}
          error={error}
        />
      </Paper>
    </Box>
  );
}

export default App;
