
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import BasicRating from './Rating';
import LetterAvatars from './imageaccont';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'profile',
    headerName: 'Profile',
    width: 90,
    renderCell: (params) => (
      <Link href={`/profile/${params.row.id}`} target="_blank" rel="noopener" >
        <LetterAvatars />
      </Link>
    ),
  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Rating',
    headerName: 'Rating',
    width: 150,
    renderCell: (params) => <BasicRating/>
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <>
    <Box>
      <Typography variant="h6" sx={{paddingTop: '16px'}}>Inventory</Typography>
    </Box>
    <Paper sx={{ height: 500, width: '100%',  marginTop:'40px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </>
  );
}