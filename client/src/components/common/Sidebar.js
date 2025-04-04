import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Button,
  Divider 
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ViewListIcon from '@mui/icons-material/ViewList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChecklistIcon from '@mui/icons-material/Checklist';
import StoreIcon from '@mui/icons-material/Store';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactsIcon from '@mui/icons-material/Contacts';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: 'Getting Started', icon: <HomeIcon />, path: '/getting-started' },
    { 
      title: 'Projects', 
      icon: <FolderIcon />, 
      path: '/projects',
      subItems: [
        { title: 'Furniture Schedule', icon: <ViewListIcon />, path: '/furniture-schedule' },
        { title: 'Design Pinboard', icon: <DashboardIcon />, path: '/design-pinboard' },
        { title: 'Project Management', icon: <ViewListIcon />, path: '/project-management' }
      ]
    },
    // Tools section
    { title: 'Time Tracking', icon: <AccessTimeIcon />, path: '/time-tracking' },
    { title: 'To-Do List', icon: <ChecklistIcon />, path: '/todo-list' },
    { title: 'Studio', icon: <DashboardIcon />, path: '/studio' },
    { title: 'Procurement Hub', icon: <StoreIcon />, path: '/procurement-hub' },
    { title: 'Purchase Orders', icon: <ReceiptIcon />, path: '/purchase-orders' },
    { title: 'Invoices', icon: <ReceiptIcon />, path: '/invoices' },
    // Libraries section
    { title: 'Address Book', icon: <ContactsIcon />, path: '/address-book' },
    { title: 'Schedule Guides', icon: <ViewListIcon />, path: '/schedule-guides' }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Ropas Design</Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.path}>
            <ListItem
              button
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            {item.subItems?.map((subItem) => (
              <ListItem
                button
                key={subItem.path}
                selected={location.pathname === subItem.path}
                onClick={() => navigate(subItem.path)}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText primary={subItem.title} />
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{
            backgroundColor: '#000',
            '&:hover': { backgroundColor: '#333' }
          }}
        >
          New
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
