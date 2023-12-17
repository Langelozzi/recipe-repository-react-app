/* eslint-disable react/prop-types */
import { Form as FinalForm } from "react-final-form";
import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const useStyles = makeStyles({
  form: {
    padding: 4,
  },
  button: {
    padding: 8,
  },
});

const FormComponent = (props, ref) => {
  const { onSubmit, validate, children } = props;
  const classes = useStyles();

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      ref={ref}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.form}>
            {children}
            <Grid item xs={12} className={classes.button}>
              <Button
                variant="contained"
                type="submit"
                disabled={submitting || pristine || invalid}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

const Form = forwardRef(FormComponent);
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Form;
