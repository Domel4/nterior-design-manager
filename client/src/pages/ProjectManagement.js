import React from 'react';
import { Box, Typography } from '@mui/material';

const ProjectManagement = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Project Management
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage your project timelines, tasks, and resources here.
      </Typography>
    </Box>
  );
};

export default ProjectManagement; 