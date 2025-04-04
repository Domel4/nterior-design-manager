import React from 'react';
import { Box, Typography } from '@mui/material';

const FurnitureSchedule = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Furniture Schedule
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage and track your furniture selections here.
      </Typography>
    </Box>
  );
};

export default FurnitureSchedule; 