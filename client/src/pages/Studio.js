import React from 'react';
import { Box, Typography } from '@mui/material';

const Studio = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Studio
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Access your design studio workspace here.
      </Typography>
    </Box>
  );
};

export default Studio; 