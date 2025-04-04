import React from 'react';
import { Box, Typography } from '@mui/material';

const ScheduleGuides = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Schedule Guides
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Access and manage your scheduling guidelines here.
      </Typography>
    </Box>
  );
};

export default ScheduleGuides; 