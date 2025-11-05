import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
const AdminLayout = () => {
  const navigate = useNavigate();


  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#fff' : '#f5f5f5',
    fontWeight: isActive ? 'bold' : 'normal',
    width: '100%',
    display: 'block',
    padding: '8px 0',
  });

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          backgroundColor: 'rgb(254,186,193)',
          color: 'white',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
           flexShrink: 0,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
            Admin Panel
          </Typography>

          <List>
            <ListItem disablePadding>
              <NavLink to="/" style={navLinkStyle}>
                <ListItemText primary="🏠 Home" />
              </NavLink>
            </ListItem>

            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />

            <ListItem disablePadding>
              <NavLink to="users" style={navLinkStyle}>
                <ListItemText primary="👥 Users" />
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to="books" style={navLinkStyle}>
                <ListItemText primary="📚 Books" />
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink to="orders" style={navLinkStyle}>
                <ListItemText primary="🛍 Orders" />
              </NavLink>
            </ListItem>

            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />

            <ListItem disablePadding>
              <NavLink to="addbook" style={navLinkStyle}>
                <ListItemText primary="➕ Add Book" />
              </NavLink>
            </ListItem>
          </List>
        </Box>

      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 ,backgroundColor: '#f9f9f9',overflowX: 'hidden'}}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'rgb(254,186,193)', mb: 3 }}>
          Admin Dashboard
        </Typography>

        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
