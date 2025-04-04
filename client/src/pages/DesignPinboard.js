import React from 'react';
import { Box, Typography } from '@mui/material';

const DesignPinboard = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Design Pinboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Collect and organize your design inspirations here.
      </Typography>
    </Box>
  );
};

export default DesignPinboard; 