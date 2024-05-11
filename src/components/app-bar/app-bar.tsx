import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const my_settings = ["Profile", "Account", "Logout"];

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenSettingsMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <AppBar position="static" component="nav">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 200,
              fontFamily: "roboto",
              color: "white",
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            Educative
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open my_settings">
              <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseSettingsMenu}
            >
              {my_settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseSettingsMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
