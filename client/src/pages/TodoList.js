import React from 'react';
import { Box, Typography } from '@mui/material';

const TodoList = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        To-Do List
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage your tasks and to-do items here.
      </Typography>
    </Box>
  );
};

export default TodoList; 