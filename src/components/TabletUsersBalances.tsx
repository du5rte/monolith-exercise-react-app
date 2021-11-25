import { useMemo } from "react";

import Box from "@mui/material/Box";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";

import { UserBalance } from "../types/schema";

import Avatar from "./Avatar";

const skeletonData: UserBalance[] = [
  { user_id: '1', gbp: '0', usd: '0', eur: '0', lastActivity: '' },
  { user_id: '2', gbp: '0', usd: '0', eur: '0', lastActivity: '' },
  { user_id: '3', gbp: '0', usd: '0', eur: '0', lastActivity: '' },
  { user_id: '4', gbp: '0', usd: '0', eur: '0', lastActivity: '' },
  { user_id: '5', gbp: '0', usd: '0', eur: '0', lastActivity: '' },
];

function textColor(value: string) {
  if (parseFloat(value) < 0) {
    return { color: "#ec535a" };
  }

  if (parseFloat(value) > 0) {
    return { color: "#27a197" };
  }

  return {}
}

interface Props {
  data: UserBalance[]
  loading?: boolean
  error?: Error
}

export default function TabletUsersBalances(props: Props) {
  const { data, loading, error } = props;

  const rows = useMemo(() => {
    if (loading) {
      return skeletonData;
    }

    return data;
  }, [data, loading]);

  if (error) {
    return (
      <Box sx={{ p: 1 }}>
        <Alert severity="error">
          {error.message}
        </Alert>
      </Box>
    )
  }

  if (rows.length === 0) {
    return (
      <Box sx={{ p: 1 }}>
        <Alert severity="info">
          No Transactions
        </Alert>
      </Box>
    )
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox"></TableCell>
            <TableCell align="left">User ID</TableCell>
            <TableCell align="right">GBP</TableCell>
            <TableCell align="right">USD</TableCell>
            <TableCell align="right">EUR</TableCell>
            <TableCell align="right">Last Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {loading 
                  ? <Skeleton variant="circular" width={30} height={30} /> 
                  : <Avatar uid={row.user_id} size={30} />
                }
              </TableCell>
              <TableCell component="th" scope="row">
                {loading ? <Skeleton variant="text" width={300} /> : row.user_id}
              </TableCell>
              <TableCell align="right" sx={textColor(row.gbp)}>
                {loading ? <Skeleton variant="text" /> : row.gbp}
              </TableCell>
              <TableCell align="right" sx={textColor(row.usd)}>
                {loading ? <Skeleton variant="text" /> : row.usd}
              </TableCell>
              <TableCell align="right" sx={textColor(row.eur)}>
                {loading ? <Skeleton variant="text" /> : row.eur}
              </TableCell>
              <TableCell align="right">
                {loading ? <Skeleton variant="text" /> : row.lastActivity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
