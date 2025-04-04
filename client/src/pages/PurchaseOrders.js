import React from 'react';
import { Box, Typography } from '@mui/material';

const PurchaseOrders = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Purchase Orders
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage and track your purchase orders here.
      </Typography>
    </Box>
  );
};

export default PurchaseOrders; 