import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          color="primary"
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label="Checkbox 測試"
    />
  );
}

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>我是自帶樣式的按鈕</Button>;
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBar color="primary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6">News</Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component="h2">
            歡迎來到 MaterialUI
          </Typography>
          <Typography variant="h3" component="h2">
            Material
          </Typography>
          <ButtonStyled />
          <ButtonGroup>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </ButtonGroup>
          {/* App.CSS調字顏色 */}
          <TextField
            label="Name"
            variant="filled"
            color="secondary"
            placeholder="Enter your name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <CheckboxExample />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#333,#999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 10,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default App;
