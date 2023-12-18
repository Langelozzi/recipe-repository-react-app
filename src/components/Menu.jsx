/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import PropTypes from "prop-types";
import SideSheet from "./SideSheet";
import MenuItemButton from "./MenuItemButton";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  List,
  Typography,
} from "@mui/material";
import {
  Article as ArticleIcon,
  Home as HomeIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../utils/contexts/AuthContext";

const useStyles = makeStyles(() => ({
  bottomMenuButtons: {
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
}));

const MenuComponent = (props, ref) => {
  const { isOpen, onOpen, onClose, ...additionalProps } = props;

  const classes = useStyles();
  const { logout } = useAuth();

  return (
    <SideSheet
      ref={ref}
      position="left"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      {...additionalProps}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={onClose}
              sx={{ mr: -2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <List>
        <MenuItemButton
          label="Home"
          icon={HomeIcon}
          onClick={() => alert("home clicked")}
        />
        <MenuItemButton
          label="My Recipes"
          icon={ArticleIcon}
          onClick={() => alert("my recipes clicked")}
        />
      </List>
      <div className={classes.bottomMenuButtons}>
        <List>
          <MenuItemButton
            label="Settings"
            icon={SettingsIcon}
            onClick={() => alert("settings clicked")}
          />
          <MenuItemButton label="Logout" icon={LogoutIcon} onClick={logout} />
        </List>
      </div>
    </SideSheet>
  );
};

const Menu = forwardRef(MenuComponent);
Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default Menu;
