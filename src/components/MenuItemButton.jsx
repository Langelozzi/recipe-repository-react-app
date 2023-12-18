/* eslint-disable react/prop-types */
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const MenuItemButtonComponent = (props, ref) => {
  const { onClick, icon: Icon, label, ...additionalProps } = props;

  return (
    <ListItemButton
      ref={ref}
      onClick={onClick}
      {...additionalProps}
      style={{
        width: "100%",
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

const MenuItemButton = forwardRef(MenuItemButtonComponent);
MenuItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItemButton;
