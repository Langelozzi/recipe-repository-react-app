import Form from "./Form";
import FormField from "./FormField";
import PropTypes from "prop-types";

const AuthForm = (props) => {
  const { isRegister, onSubmit } = props;

  const validate = (values) => {
    const errors = {};

    // First name validation
    if (isRegister && !values.firstName) {
      errors.firstName = "Required";
    }

    // Last name validation
    if (isRegister && !values.lastName) {
      errors.lastName = "Required";
    }

    // Email validation
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.password) {
      errors.password = "Required";
    } else if (!re.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters, contain at least one letter and one number";
    }

    // Verify password validation
    if (isRegister && !values.verifyPassword) {
      errors.verifyPassword = "Required";
    } else if (isRegister && values.password !== values.verifyPassword) {
      errors.verifyPassword = "Passwords must match";
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      buttonLabel={isRegister ? "Register" : "Login"}
    >
      {isRegister && (
        <>
          <FormField
            gridWidth={6}
            name="firstName"
            label="First Name"
            variant="outlined"
          />
          <FormField
            gridWidth={6}
            name="lastName"
            label="Last Name"
            variant="outlined"
          />
        </>
      )}
      <FormField name="email" label="Email" variant="outlined" />
      <FormField name="password" label="Password" variant="outlined" />
      {isRegister && (
        <FormField
          name="verifyPassword"
          label="Verify Password"
          variant="outlined"
        />
      )}
    </Form>
  );
};
AuthForm.propTypes = {
  isRegister: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
