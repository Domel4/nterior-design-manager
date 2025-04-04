import React from 'react';
import { Box, Typography } from '@mui/material';

const AddressBook = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Address Book
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage your contacts and vendor information here.
      </Typography>
    </Box>
  );
};

export default AddressBook; 