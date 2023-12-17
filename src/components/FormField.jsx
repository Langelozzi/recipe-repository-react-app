/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import { Field } from "react-final-form";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const useStyles = makeStyles({
  field: {
    padding: 8,
  },
});

const FormFieldComponent = (props, ref) => {
  const {
    gridWidth = 12,
    name,
    label,
    variant = "outlined",
    helperText,
    hasError,
  } = props;

  const classes = useStyles();

  return (
    <Grid item xs={gridWidth} className={classes.field}>
      <Field name={name}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={name}
            label={label}
            variant={variant}
            error={hasError || (meta.touched && !!meta.error)}
            helperText={helperText || (meta.touched && meta.error)}
            fullWidth
            ref={ref}
          />
        )}
      </Field>
    </Grid>
  );
};

const FormField = forwardRef(FormFieldComponent);
FormField.propTypes = {
  gridWidth: PropTypes.oneOf([12, 8, 6, 4, 3, 2, 1]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]).isRequired,
  helperText: PropTypes.string,
  hasError: PropTypes.bool,
};

export default FormField;
