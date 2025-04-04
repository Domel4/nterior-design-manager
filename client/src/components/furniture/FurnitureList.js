import React from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)({
  borderBottom: '1px solid #eaeaea',
  padding: '16px 8px',
  fontSize: '13px',
  color: '#666',
});

const HeaderCell = styled(StyledTableCell)({
  color: '#999',
  fontWeight: 500,
});

const ImageCell = styled(Box)({
  width: 80,
  height: 80,
  backgroundColor: '#f5f5f5',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const furnitureData = [
  {
    id: 'CH01',
    name: 'Armchair',
    image: '/path-to-image',
    productName: 'Frida Lounge Chair',
    brand: 'Vincent Sheppard',
    color: 'Black',
    finish: 'As Shown',
    width: '910',
    length: '800',
    height: '800',
    depth: '-',
    qty: 2,
    leadTime: '6-8 wks',
    material: 'Rope & Teak',
    status: 'Draft'
  },
  {
    id: 'CH02',
    name: 'Accent Chair',
    productName: 'O Stool',
    brand: 'Estudio Persona',
    color: 'Black',
    finish: 'As Shown',
    width: '610',
    length: '-',
    height: '595',
    depth: '559',
    qty: 1,
    leadTime: '10-12 wks',
    material: 'Blackened Steel',
    status: 'Draft'
  },
  {
    id: 'CH03',
    name: 'Armchair',
    productName: 'Throne Chair',
    brand: 'New Tendency',
    color: 'Black',
    finish: 'Powder Coated',
    width: '620',
    length: '-',
    height: '750',
    depth: '470',
    qty: 2,
    leadTime: '18-20 wks',
    material: 'Aluminium',
    status: 'Draft'
  }
];

const tableData = [
  {
    id: 'TB01',
    name: 'Coffee Table',
    productName: 'Offset Coffee Table',
    brand: 'Resident',
    color: 'Black',
    finish: 'Stained',
    width: '900',
    length: '900',
    height: '350',
    depth: '900',
    qty: 1,
    leadTime: 'In Stock',
    material: 'Solid Oak',
    status: 'Draft'
  },
  {
    id: 'TB02',
    name: 'Side Table',
    productName: 'Offset Stool',
    brand: 'Resident',
    color: 'Black',
    finish: 'As Shown',
    width: '340',
    length: '340',
    height: '430',
    depth: '340',
    qty: 1,
    leadTime: 'In Stock',
    material: 'Solid Oak',
    status: 'Draft'
  }
];

const FurnitureList = () => {
  return (
    <Box>
      {/* Seating Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          Seating 
          <span style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '2px 8px', 
            borderRadius: '12px', 
            fontSize: '14px',
            color: '#666' 
          }}>
            5
          </span>
        </Typography>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell>ITEM</HeaderCell>
                <HeaderCell>PRODUCT NAME</HeaderCell>
                <HeaderCell>WIDTH (MM)</HeaderCell>
                <HeaderCell>LENGTH (MM)</HeaderCell>
                <HeaderCell>HEIGHT (MM)</HeaderCell>
                <HeaderCell>DEPTH (MM)</HeaderCell>
                <HeaderCell>QTY</HeaderCell>
                <HeaderCell>LEAD TIME</HeaderCell>
                <HeaderCell>MATERIAL</HeaderCell>
                <HeaderCell align="right">ACTIONS</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {furnitureData.map((item) => (
                <TableRow key={item.id}>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <ImageCell>
                        {/* Add image here */}
                      </ImageCell>
                      <Box>
                        <Typography variant="subtitle2">{item.name}</Typography>
                        <Typography variant="caption" color="textSecondary">
                          {item.id}
                        </Typography>
                      </Box>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>{item.productName}</StyledTableCell>
                  <StyledTableCell>{item.width}</StyledTableCell>
                  <StyledTableCell>{item.length}</StyledTableCell>
                  <StyledTableCell>{item.height}</StyledTableCell>
                  <StyledTableCell>{item.depth}</StyledTableCell>
                  <StyledTableCell>{item.qty}</StyledTableCell>
                  <StyledTableCell>{item.leadTime}</StyledTableCell>
                  <StyledTableCell>{item.material}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                      Details
                    </Button>
                    <Button variant="outlined" size="small">
                      Quote
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Tables Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          Tables 
          <span style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '2px 8px', 
            borderRadius: '12px', 
            fontSize: '14px',
            color: '#666' 
          }}>
            4
          </span>
        </Typography>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell>ITEM</HeaderCell>
                <HeaderCell>PRODUCT NAME</HeaderCell>
                <HeaderCell>WIDTH (MM)</HeaderCell>
                <HeaderCell>LENGTH (MM)</HeaderCell>
                <HeaderCell>HEIGHT (MM)</HeaderCell>
                <HeaderCell>DEPTH (MM)</HeaderCell>
                <HeaderCell>QTY</HeaderCell>
                <HeaderCell>LEAD TIME</HeaderCell>
                <HeaderCell>MATERIAL</HeaderCell>
                <HeaderCell align="right">ACTIONS</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((item) => (
                <TableRow key={item.id}>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <ImageCell>
                        {/* Add image here */}
                      </ImageCell>
                      <Box>
                        <Typography variant="subtitle2">{item.name}</Typography>
                        <Typography variant="caption" color="textSecondary">
                          {item.id}
                        </Typography>
                      </Box>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>{item.productName}</StyledTableCell>
                  <StyledTableCell>{item.width}</StyledTableCell>
                  <StyledTableCell>{item.length}</StyledTableCell>
                  <StyledTableCell>{item.height}</StyledTableCell>
                  <StyledTableCell>{item.depth}</StyledTableCell>
                  <StyledTableCell>{item.qty}</StyledTableCell>
                  <StyledTableCell>{item.leadTime}</StyledTableCell>
                  <StyledTableCell>{item.material}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                      Details
                    </Button>
                    <Button variant="outlined" size="small">
                      Quote
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default FurnitureList;
