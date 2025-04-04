import React from 'react';
import { Box, Typography } from '@mui/material';

const ProcurementHub = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Procurement Hub
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage your product sourcing and procurement activities here.
      </Typography>
    </Box>
  );
};

export default ProcurementHub; 