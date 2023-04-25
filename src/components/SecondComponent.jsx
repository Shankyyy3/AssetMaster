import React,{useState} from "react";
import "./FirstComponent.css";

import dayjs from "dayjs";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Axios from 'axios';
import { AiOutlineClose, AiOutlineFileJpg } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";



import {
  BsFileEarmarkRichtext,
  BsFillPlusCircleFill,
  BsFillCalendar2EventFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
//import tablee from "./tablee";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Menu,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton,

} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import { array } from "prop-types";

const itemTypes=["Consumable","Non-Consumable"];
const departmentItems = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "HeadPhones",
  "Mobile Phone",
  "Monitor",
  "Printer",
];
const subItems = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "HeadPhones",
  "Mobile Phone",
  "Monitor",
  "Printer",
];
const documentItems = ["In-Voice", "Office Order", "Email", "Others"];

const SecondComponent = ({
  toggleDrawer,
  handleClear,
  active,setActive,
  isOpen,
  xmlfile,
  setxmlFile,
  onClose,
  handleFinalSubmit,
  firstName,
  lastName,
  employeeID,
  itemType,
  item,
  subItem,
  model,
  serialNo,
  brand,
  poNum,
  assignedDate,
  file,
  documents,
  setitemType,
  setItem,
  setSubItem,
  setModel,
  setSerialNo,
  setBrand,
  setPoNum,
  setAssignedDate,
  setFile,
  setDocuments,
}) => {
 

  const openFile = () => {
    document.getElementById("document").click();
  };
  const openSecondFile = () => {
    document.getElementById("xmlfile").click();
  };
  const changeMultipleFiles = (e) => {
      setxmlFile(e.target.files);
    };
  const handleFileRemove = (index) => {
      setxmlFile(Array.from(xmlfile).filter((file, i) => i !== index));
    };
 
  
  
   
  function beforeUpload(file) {
    const filesFormats = [".xls,.xlsx,.csv,.jpg,.png,.svg,.docx,.txt,.zip,.pdf"];
    console.log(file);
    const isRightFormat = filesFormats.includes(file.type);
    console.log(isRightFormat);
    if (!isRightFormat) {
      console.log("You can only upload pdf and doc files");
      return;
    }
   
    return isRightFormat ;
  }

  

  return (

    <div className="drawer-container">
      <div className="content">
        <form onSubmit={handleFinalSubmit}>
          <div style={{ flexGrow: 1 }}>
          <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} >
                <FormLabel className="firstFo" htmlFor="itemType">
                  Item Type
                </FormLabel>
                <ItemTypeBoxComponent
                  itemTypes={itemTypes}
                  itemType={itemType}
                  setitemType={setitemType}
                />
              </Grid>
              </Grid>
            <Grid container spacing={4} marginTop="20px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="item">
                  Item
                </FormLabel>
                <ItemBoxComponent
                  departmentItems={departmentItems}
                  item={item}
                  setItem={setItem}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="subitem">
                  Sub-Item
                </FormLabel>
                <SubItemBoxComponent
                  subItems={subItems}
                  subItem={subItem}
                  setSubItem={setSubItem}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="model">
                  Model
                </FormLabel>
                <input
                  className="form-input"
                  id="model"
                  type="text"
                  placeholder="Enter Model Name"
                  _placeholder={{ color: "#80848C" }}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="serialNo">
                  Serial No.
                </FormLabel>
                <input
                  className="form-input"
                  id="serialNo"
                  type="text"
                  placeholder="Enter the Serail No"
                  _placeholder={{ color: "#80848C" }}
                  value={serialNo}
                  onChange={(e) => setSerialNo(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="20px !important">
              <Grid  item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="brand">
                  Brand
                </FormLabel>
                <input
                  className="form-input"
                  id="brand"
                  type="text"
                  placeholder="Enter Brand Name"
                  _placeholder={{ color: "#80848C" }}
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
           
              <Grid  item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="poNum">
                  Purchase Order No.
                </FormLabel>
                <input
                  className="form-input"
                  id="poNum"
                  type="text"
                  placeholder="Enter Purchase Order No."
                  _placeholder={{ color: "#80848C" }}
                  value={poNum}
                  onChange={(e) => setPoNum(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="serialNo">
                  Warranty Date
                </FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="form-input-calendar"
                    components={{
                      OpenPickerIcon: BsFillCalendar2EventFill,
                    }}
                    renderInput={(params) => (
                      <TextField {...params} error={false} />
                    )}
                    format="DD-MM-YYYY"
                    value={assignedDate || null}
                    onChange={(newValue) => setAssignedDate(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
                            <Grid item xs={12}>
                                <FormLabel className="firstFo" htmlFor="isactive">Is Active</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={active}
                                    onChange={(e)=>setActive(e.target.value)}
                                    style={{ width: 'auto' }}
                                    row={true}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Yes"
                                  />
                                    <FormControlLabel value={false} control={<Radio />} label="No" 
                                    />
                                </RadioGroup>
                            </Grid>
                        </Grid>
            {/* </Grid> */}
            <Grid container spacing={4} marginTop="0px !important">
             
              <Grid item xs={12} sm={6} style={{marginTop:"22px"}}>
                <FormLabel className="firstFo" htmlFor="xmlfile">
                Upload Documents
                </FormLabel>
               
                <input
                  className="form-input"
                  type="file"
                  accept=".xls,.xlsx,.csv,.jpg,.png,.svg,.docx,.txt,.zip,.pdf" 
                  id="xmlfile" 
                 // value={''}
                  multiple
                  style={{ display: "none" }}
                 onChange={changeMultipleFiles}
                />
                <Button
                  variant="outlined"
                  className="form-document-upload"
                  onClick={openSecondFile}
                  beforeUpload={beforeUpload}
       
                >
                  <BsFileEarmarkRichtext
                    style={{ fontSize: "30px", color: "#6B5DD3" }}
                  />
                  <BsFillPlusCircleFill
                    style={{
                      marginTop: "20px",
                      marginLeft: "-1.7%",
                      fontSize: "12px",
                      color: "#6B5DD3",
                    }}
                  />
                  <div style={{ diplay: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Upload Excel,PDF and Image only File
                    </p>
                    {/* <p
                      style={{
                        fontSize: "10px",
                        color: "gray",
                        textTransform: "none",
                      }}
                    >
                      Or drag and drop it
                    </p> */}
                  </div>
                </Button>
               
              </Grid>
             
            </Grid>
            <Grid item xs={12}>
          {/* Display selected and uploaded files */}
          
            <Grid container spacing={2} mt={2}>
              {Array.from(xmlfile).map((file,index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <div className="file-item">
                  <div className="file-box">
                    <Typography variant="body1">{file.name}</Typography>
                    
            <IconButton
              className="delete-btn"
              onClick={() => handleFileRemove(index)}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
                 
                </Grid>
              ))}
              </Grid>
          
        </Grid>
            {/* <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
              { Array.from(xmlfile).map(file => {
                return <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"15px"}}>
            <img src="" alt="Image"/>
            <div>
                <p>{file.name}</p>
                <p>Size : {file.size} |</p>
            </div>
            <div>
                <img src="" alt="pause"/>
                <img src="" alt="cross"/>
            </div>
        </div> 
              }
                 
                )}
              </Grid>
            </Grid> */}
            <Box className="form-button">            {/* <Button 
                 variant="solid"
                 style={{
                   backgroundColor: "#6B5DD3",
                   color: "#FFFFFF",
                   width: "100px",
                   border: "1px solid #BABEC6",
                   marginBottom: "15px",
                   marginRight:"10px"
                 }}
              >
               Display
              </Button> */}
            <Button
                variant="outline"
                style={{
                  backgroundColor: "#F5F3FB",
                  color: "#80848C",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginRight: "10px",
                  marginBottom: "15px",
                }}
                onClick={handleClear}
              >
               Add
              </Button>
              <Button
                variant="outline"
                style={{
                  backgroundColor: "#F5F3FB",
                  color: "#80848C",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginRight: "10px",
                  marginBottom: "15px",
                }}
                onClick={handleClear}
              >
               Cancel
              </Button>
              <Button
                type="submit"
                variant="solid"
                
                style={{
                  backgroundColor: "#6B5DD3",
                  color: "#FFFFFF",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginBottom: "15px",
                }}

                
              
              > 
                Save
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondComponent;

const ItemTypeBoxComponent = ({ itemTypes, itemType, setitemType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        className="form-input"
        variant="outllined"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<BsFillCaretDownFill style={{ color: "#6B5DD3" }} />}
      >
        {itemType ? itemType : "Select Item Type"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textAlign: "left", borderRadius: "20px" }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ padding: "10px", fontWeight: "600", color: "black" }}
        >
          Select Item Type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={itemType}
          onChange={(e) => setitemType(e.target.value)}
          style={{ padding: "10px" }}
        >
          {itemTypes.map((itemType) => {
            return (
              <FormControlLabel
                key={itemType}
                value={itemType}
                control={<Radio />}
                label={itemType}
                onClick={handleClose}
              >
                {itemType}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};

const ItemBoxComponent = ({ departmentItems, item, setItem }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        className="form-input"
        variant="outllined"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<BsFillCaretDownFill style={{ color: "#6B5DD3" }} />}
      >
        {item ? item : "Select Item"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textAlign: "left", borderRadius: "20px" }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ padding: "10px", fontWeight: "600", color: "black" }}
        >
          Select Item
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ padding: "10px" }}
        >
          {departmentItems.map((items) => {
            return (
              <FormControlLabel
                key={items}
                value={items}
                control={<Radio />}
                label={items}
                onClick={handleClose}
              >
                {items}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};

const SubItemBoxComponent = ({ subItems, subItem, setSubItem }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        className="form-input"
        variant="outllined"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<BsFillCaretDownFill style={{ color: "#6B5DD3" }} />}
      >
        {subItem ? subItem : "Select Sub Item"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textAlign: "left", borderRadius: "20px" }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ padding: "10px", fontWeight: "600", color: "black" }}
        >
          Select Sub Item
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={subItem}
          onChange={(e) => setSubItem(e.target.value)}
          style={{ padding: "10px" }}
        >
          {subItems.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio />}
                label={item}
                onClick={handleClose}
              >
                {item}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};

const DocumentItemBoxComponent = ({
  documentItems,
  documents,
  setDocuments,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        className="form-input"
        variant="outllined"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<BsFillCaretDownFill style={{ color: "#6B5DD3" }} />}
      >
        {documents ? documents : "Select Document"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textAlign: "left", borderRadius: "20px" }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ padding: "10px", fontWeight: "600", color: "black" }}
        >
          Select Document
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={documents}
          onChange={(e) => setDocuments(e.target.value)}
          style={{ padding: "10px" }}
        >
          {documentItems.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio />}
                label={item}
                onClick={handleClose}
              >
                {item}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};
