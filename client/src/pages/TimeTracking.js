import React from 'react';
import { Box, Typography } from '@mui/material';

const TimeTracking = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Time Tracking
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Track and manage time spent on your projects and tasks.
      </Typography>
    </Box>
  );
};

export default TimeTracking; 