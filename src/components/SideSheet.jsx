/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { SwipeableDrawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  sidesheet: {
    minWidth: "200px",
  },
}));

const SideSheetComponent = (props, ref) => {
  const {
    children,
    isOpen,
    onOpen,
    onClose,
    position,
    type,
    style,
    ...additionalProps
  } = props;

  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor={position}
      open={isOpen}
      onClose={onClose}
      ref={ref}
      onOpen={onOpen}
      variant={type}
      {...additionalProps}
    >
      <div className={classes.sidesheet} style={style}>
        {children}
      </div>
    </SwipeableDrawer>
  );
};

const SideSheet = forwardRef(SideSheetComponent);
SideSheet.propTypes = {
  position: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  style: PropTypes.object,
};

export default SideSheet;
