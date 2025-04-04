import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import ViewListIcon from '@mui/icons-material/ViewList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const QuickActionCard = ({ title, description, icon, path }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea 
        onClick={() => navigate(path)}
        sx={{ height: '100%', p: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h6" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

const GettingStarted = () => {
  const quickActions = [
    {
      title: 'Create New Project',
      description: 'Start a new interior design project and set up your workflow',
      icon: <FolderIcon fontSize="large" />,
      path: '/projects'
    },
    {
      title: 'Furniture Schedule',
      description: 'Manage and track furniture selections for your projects',
      icon: <ViewListIcon fontSize="large" />,
      path: '/furniture-schedule'
    },
    {
      title: 'Design Pinboard',
      description: 'Collect and organize inspiration for your designs',
      icon: <DashboardIcon fontSize="large" />,
      path: '/design-pinboard'
    },
    {
      title: 'Time Tracking',
      description: 'Track time spent on projects and tasks',
      icon: <AccessTimeIcon fontSize="large" />,
      path: '/time-tracking'
    }
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome to Ropas Design Manager
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Get started with your interior design projects by exploring the features below.
          Our tools help you manage projects, track furniture selections, and streamline your workflow.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {quickActions.map((action, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <QuickActionCard {...action} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Need Help?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Check out our documentation and tutorials to learn more about using Ropas Design Manager.
        </Typography>
        <Button variant="outlined" color="primary">
          View Documentation
        </Button>
      </Box>
    </Box>
  );
};

export default GettingStarted; 