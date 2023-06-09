import React, {useState, useEffect} from 'react';
import "./BasicTable.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Switch from '@mui/material/Switch';
import moment from 'moment';

function createData(assetId,itemType, item, subItem, model, serialNo, brand, purchaseOno,wDate,activeSt, documents) {
  return {assetId,itemType, item, subItem, model, serialNo,brand,purchaseOno,wDate,activeSt, documents };
}

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7198/api/Employees/AddData')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
      console.log(data)
  }, []);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSwitchChange = (event, rowIndex) => {
    const updatedData = [...data];
    updatedData[rowIndex].isActive = event.target.checked;
    setData(updatedData);
  };
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredData = data.filter(row => {
    if (activeFilter === 'all') {
      return true;
    } else if (activeFilter === 'active') {
      return row.isActive;
    } else {
      return !row.isActive;
    }
  });
  
  const handleViewClick = (index) => {
    setSelectedRow(index);
  }

  
  return (
   
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer component={Paper}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold',fontFamily:'"Inter",sans-serif',textAlign:"Center" }}> ASSET MASTER TABLE</h1>
    <hr/>
      <Table sx={{ minWidth: 600 }} >
      
        <TableHead className='headOftable'>
          <TableRow>
         
          
          <TableCell style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }}>AssetId</TableCell>
          <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }}>Item Type</TableCell>
            <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Item</TableCell>
            <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Sub-Item</TableCell>
            <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Model</TableCell>
            <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Serial No.</TableCell>
            <TableCell  style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Brand</TableCell>
          <TableCell style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Purchase Order No</TableCell>
          <TableCell style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Warranty End Date</TableCell>
          <TableCell style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Active Status</TableCell>
          <TableCell style= {{ fontSize: '16px',fontFamily:'"Inter",sans-serif' }} align="centre">Documents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
            const isItemSelected = selectedRow === index;
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                sx={index % 2 ? { bgcolor: '#F8F9FD' } : null}
                selected={isItemSelected}
              >
                <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} component="th" scope="row">
                {row.assetid}
              </TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} component="th" scope="row">
                {row.itemType}
              </TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.itemName}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.subItemName}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.model}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.serialno}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.brand}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.pono}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{moment(row.warrantydate).format("DD-MM-YYYY")}</TableCell>
              <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="center">
              
                  <Switch
                    checked={row.isActive===true ? true : false}
                    onChange={(event) => handleSwitchChange(event, index)}
                    color="primary"
                    sx={{'& .MuiSwitch-thumb': { backgroundColor: row.isActive ? '#4caf50' : '#f44336', },
                     }}
                       
                  />
                  
                </TableCell>
                <TableCell><button className='viewButton' onClick={() => handleViewClick(index)}>View</button></TableCell>
                <TableCell style= {{ fontSize: '14px',fontFamily:'"Inter",sans-serif' }} align="centre">{row.documents}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  </Paper>
  );
}

