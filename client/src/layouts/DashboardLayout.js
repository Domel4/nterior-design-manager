import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 0 16px;
  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#fff' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 8,
          pl: '240px',
          backgroundColor: '#fff',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;