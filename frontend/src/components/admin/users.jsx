import React, { useContext } from 'react';
import { usersContext } from '../../context/usersContextProvider';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const paginationModel = { page: 0, pageSize: 5 };

const Users = () => {
  const columns = [
    { field: 'id', headerName: 'id', width: 250 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role_id', headerName: 'Role', width: 100 },
    {
      field: 'Admin',
      headerName: 'Admin',
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => handleEditRole(params.row)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },

  ];
  const rows = []
  const{users,deleteUser,updateUser } =useContext(usersContext)

  const handleDelete=(id)=>{
    if(window.confirm("Are you sure you want to delete this user?"))
      deleteUser(id)
  }

  const handleEditRole = (row) => {
    const newRole = row.role_id === 'admin' ? 'owner' : 'admin';
    updateUser(row.id, newRole); 
  };

    console.log(users);
    
    users?.map((u)=>rows.push({id:u._id,name:u.name,email:u.email,role_id:u.role_id}))
    return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default Users;
