import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';

const ProjectCard = ({ project }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="div">
            {project.title}
          </Typography>
          <IconButton size="small" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.client}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip 
            label={project.status} 
            size="small"
            color={
              project.status === 'In Progress' ? 'primary' :
              project.status === 'Completed' ? 'success' :
              'default'
            }
          />
          <Chip label={project.type} size="small" variant="outlined" />
        </Box>
        <Typography variant="body2" color="text.secondary">
          Last updated: {project.lastUpdated}
        </Typography>
      </CardContent>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit Project</MenuItem>
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Archive Project</MenuItem>
      </Menu>
    </Card>
  );
};

const Projects = () => {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Modern Loft Renovation',
      client: 'John & Sarah Smith',
      status: 'In Progress',
      type: 'Residential',
      lastUpdated: '2 days ago',
      image: 'https://source.unsplash.com/random/800x600/?modern,loft'
    },
    {
      id: 2,
      title: 'Coastal Beach House',
      client: 'Michael Johnson',
      status: 'Completed',
      type: 'Residential',
      lastUpdated: '1 week ago',
      image: 'https://source.unsplash.com/random/800x600/?beach,house'
    },
    {
      id: 3,
      title: 'Downtown Office Space',
      client: 'Tech Innovations Inc.',
      status: 'In Progress',
      type: 'Commercial',
      lastUpdated: '3 days ago',
      image: 'https://source.unsplash.com/random/800x600/?office,modern'
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      client: 'Luxury Stays Ltd.',
      status: 'Planning',
      type: 'Hospitality',
      lastUpdated: '1 day ago',
      image: 'https://source.unsplash.com/random/800x600/?hotel,lobby'
    }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Projects</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#000',
            '&:hover': { backgroundColor: '#333' }
          }}
        >
          New Project
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          placeholder="Search projects..."
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={handleFilterClick}
        >
          Filter
        </Button>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={handleFilterClose}>All Projects</MenuItem>
          <MenuItem onClick={handleFilterClose}>In Progress</MenuItem>
          <MenuItem onClick={handleFilterClose}>Completed</MenuItem>
          <MenuItem onClick={handleFilterClose}>Planning</MenuItem>
          <Divider />
          <MenuItem onClick={handleFilterClose}>Residential</MenuItem>
          <MenuItem onClick={handleFilterClose}>Commercial</MenuItem>
          <MenuItem onClick={handleFilterClose}>Hospitality</MenuItem>
        </Menu>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 